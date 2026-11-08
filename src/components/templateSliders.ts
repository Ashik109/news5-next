type TemplateSlider = {
  destroyed?: boolean;
  update: () => void;
  destroy: (deleteInstance?: boolean, cleanStyles?: boolean) => void;
};
type SliderElement = HTMLElement & { swiper?: TemplateSlider };

declare global {
  interface Window {
    initSwiper?: (element: HTMLElement) => void;
  }
}

/** Use the original template's Swiper options with a React-owned lifecycle. */
export function initializeTemplateSliders(root: HTMLElement) {
  const elements = Array.from(root.querySelectorAll<SliderElement>("[data-uc-swiper]"));
  let disposed = false;
  let frame = 0;

  // Connected hero/product galleries need their thumbnail instance first.
  for (const element of [...elements.filter(el => el.matches(".swiper-thumbs")), ...elements.filter(el => !el.matches(".swiper-thumbs"))]) {
    if (!element.swiper || element.swiper.destroyed) window.initSwiper?.(element);
  }

  const refresh = () => {
    frame = 0;
    if (disposed) return;
    for (const element of elements) {
      if (element.isConnected && element.clientWidth && element.clientHeight && !element.swiper?.destroyed) element.swiper?.update();
    }
  };
  const scheduleRefresh = () => {
    if (!disposed && !frame) frame = requestAnimationFrame(refresh);
  };
  // autoHeight and vertical thumbnails change height during update(). Watching
  // height would feed those changes back into Swiper indefinitely.
  const widths = new WeakMap<Element, number>();
  const observer = new ResizeObserver(entries => {
    let changed = false;
    for (const entry of entries) {
      const width = entry.contentRect.width;
      if (Math.abs(width - (widths.get(entry.target) ?? -1)) > 0.5) changed = true;
      widths.set(entry.target, width);
    }
    if (changed) scheduleRefresh();
  });
  elements.forEach(element => observer.observe(element));
  root.addEventListener("load", scheduleRefresh, true);
  root.addEventListener("shown", scheduleRefresh);
  root.addEventListener("itemshown", scheduleRefresh);
  root.addEventListener("shown.bs.tab", scheduleRefresh);
  window.addEventListener("resize", scheduleRefresh);
  void document.fonts.ready.then(scheduleRefresh);
  scheduleRefresh();

  return () => {
    disposed = true;
    cancelAnimationFrame(frame);
    observer.disconnect();
    root.removeEventListener("load", scheduleRefresh, true);
    root.removeEventListener("shown", scheduleRefresh);
    root.removeEventListener("itemshown", scheduleRefresh);
    root.removeEventListener("shown.bs.tab", scheduleRefresh);
    window.removeEventListener("resize", scheduleRefresh);
    elements.forEach(element => {
      if (element.swiper && !element.swiper.destroyed) element.swiper.destroy(true, true);
    });
  };
}
