"use client";

import { useEffect, type ReactNode, type RefObject } from "react";
import { usePathname } from "next/navigation";

type Slider = { destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void };
type AnimatedElement = HTMLElement & { swiper?: Slider; animeInstance?: { pause: () => void } };

declare global {
  interface Window {
    news5Ready: (callback: () => void) => void;
    isDarkMode: () => boolean;
    setDarkMode: (dark: boolean | number) => void;
    breakpoints: Record<string, number>;
    UniCore?: {
      update: (element?: Element) => void;
      modal: (selector: string) => { show: () => void };
    };
  }
}

let libraries: Promise<void> | undefined;
function loadScript(src: string) {
  return new Promise<void>((resolve, reject) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => resolve();
    script.onerror = () => reject(new Error(`Could not load ${src}`));
    document.body.appendChild(script);
  });
}

function loadLibraries() {
  if (!libraries) {
    libraries = (async () => {
      window.news5Ready = callback => callback();
      for (const script of [
        "libs/jquery.min.js", "uni-core/js/uni-core-bundle.min.js",
        "libs/bootstrap.min.js", "libs/anime.min.js", "libs/swiper-bundle.min.js",
        "libs/scrollmagic.min.js", "helpers/data-attr-helper.js", "helpers/swiper-helper.js",
        "helpers/anime-helper.js", "helpers/anime-helper-defined-timelines.js", "uikit-components-bs.js",
      ]) await loadScript(`/assets/js/${script}`);
    })();
  }
  return libraries;
}

function storageGet(key: string) {
  try { return localStorage.getItem(key); } catch { return null; }
}
function storageSet(key: string, value: string) {
  try { localStorage.setItem(key, value); } catch { /* Storage may be disabled. */ }
}

export default function useTemplateRuntime(page: ReactNode, rootRef: RefObject<HTMLDivElement | null>) {
  const pathname = usePathname();

  useEffect(() => {
    const html = document.documentElement;
    window.breakpoints = { xs: 0, sm: 576, md: 768, lg: 992, xl: 1200, xxl: 1400 };
    window.isDarkMode = () => html.classList.contains("uc-dark");
    window.setDarkMode = value => {
      html.classList.toggle("uc-dark", !!value);
      window.dispatchEvent(new CustomEvent("darkmodechange"));
    };
    const params = new URLSearchParams(location.search);
    const schema = params.get("schema");
    const dark = schema ? schema === "dark" : params.has("dark") ? params.get("dark") === "1" : storageGet("darkMode") === "1";
    window.setDarkMode(dark);
    html.classList.add("dom-ready");
    const update = () => {
      html.style.setProperty("--body-scroll-width", `${innerWidth - html.clientWidth}px`);
      for (const [name, value] of Object.entries(window.breakpoints)) {
        html.classList.toggle(`bp-${name}`, innerWidth >= value);
        html.classList.toggle(`bp-${name}-max`, innerWidth < value);
      }
    };
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  useEffect(() => {
    let cancelled = false;
    const params = new URLSearchParams(location.search);
    if (params.has("schema")) window.setDarkMode(params.get("schema") === "dark");
    else if (params.has("dark")) window.setDarkMode(params.get("dark") === "1");
    const root = rootRef.current;
    const timers: ReturnType<typeof setTimeout>[] = [];
    const elements = Array.from(root?.querySelectorAll<AnimatedElement>("*") || []);
    const syncDark = () => root?.querySelectorAll<HTMLInputElement>("[data-darkmode-toggle] input, [data-darkmode-switch] input").forEach(input => { input.checked = window.isDarkMode(); });
    syncDark();
    window.addEventListener("darkmodechange", syncDark);

    loadLibraries().then(() => {
      if (cancelled) return;
      window.UniCore?.update(root || undefined);
      const gdpr = root?.querySelector("#uc-gdpr-notification");
      if (gdpr && !storageGet("gdprAccepted")) timers.push(setTimeout(() => gdpr.classList.add("show"), 5000));
      const modal = root?.querySelector("#uc-newsletter-modal");
      const visits = Number(storageGet("visitCount") || 0);
      storageSet("visitCount", String(visits + 1));
      if (modal && (!storageGet("newsletterModalShown") || visits >= 4)) {
        timers.push(setTimeout(() => {
          window.UniCore?.modal("#uc-newsletter-modal").show();
          storageSet("newsletterModalShown", "true");
          storageSet("visitCount", "0");
        }, 10000));
      }
    }).catch(console.error);

    const change = (event: Event) => {
      if ((event.target as Element).matches("[data-darkmode-toggle] input, [data-darkmode-switch] input")) {
        window.setDarkMode(!window.isDarkMode());
        storageSet("darkMode", window.isDarkMode() ? "1" : "0");
      }
    };
    const click = (event: MouseEvent) => {
      const target = (event.target as Element).closest<HTMLElement>("a, button, [data-uc-backtotop]");
      if (!target) return;
      if (target.matches("[data-uc-backtotop]")) {
        event.preventDefault();
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
      if (target.id === "uc-accept-gdpr" || target.id === "uc-close-gdpr-notification") {
        event.preventDefault();
        root?.querySelector("#uc-gdpr-notification")?.classList.remove("show");
        if (target.id === "uc-accept-gdpr") storageSet("gdprAccepted", "true");
      }
    };
    const wheel = (event: WheelEvent) => {
      const container = (event.target as Element).closest<HTMLElement>(".uc-horizontal-scroll");
      if (container) { event.preventDefault(); container.scrollBy({ left: event.deltaY, behavior: "smooth" }); }
    };
    root?.addEventListener("change", change);
    root?.addEventListener("click", click);
    root?.addEventListener("wheel", wheel, { passive: false });

    const observer = new IntersectionObserver(entries => entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      const video = entry.target as HTMLVideoElement;
      video.querySelectorAll<HTMLSourceElement>("source[data-src]").forEach(source => { source.src = source.dataset.src || ""; });
      video.load();
      video.muted = true;
      void video.play().catch(() => {});
      observer.unobserve(video);
    }));
    root?.querySelectorAll("video.video-lazyload").forEach(video => observer.observe(video));

    return () => {
      cancelled = true;
      timers.forEach(clearTimeout);
      observer.disconnect();
      window.removeEventListener("darkmodechange", syncDark);
      root?.removeEventListener("change", change);
      root?.removeEventListener("click", click);
      root?.removeEventListener("wheel", wheel);
      for (const element of elements) {
        // UniCore observes DOM removal itself. Preserve widgets React reuses.
        if (!element.isConnected) {
          element.swiper?.destroy(true, true);
          element.animeInstance?.pause();
        }
      }
    };
  }, [pathname, page, rootRef]);
}
