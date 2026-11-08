import { SiteLink } from "@/components/DemoContext";

export default function CookieNotice1() {
  return (
    <div id="uc-gdpr-notification" className="uc-gdpr-notification uc-notification uc-notification-bottom-left lg:m-2">
  <div className="uc-notification-message">
    <a id="uc-close-gdpr-notification" className="uc-notification-close" data-uc-close=""></a>
    <h2 className="h5 ft-primary fw-bold -ls-1 m-0">
      {"GDPR Compliance"}
    </h2>
    <p className="fs-7 mt-1 mb-2">
      {"We use cookies to ensure you get the best experience on our website. By continuing to use our site, you accept our use of cookies, "}
      <SiteLink href="/page-privacy" className="uc-link text-underline">
        {"Privacy Policy"}
      </SiteLink>
      {", and "}
      <SiteLink href="/page-terms" className="uc-link text-underline">
        {"Terms of Service"}
      </SiteLink>
      {"."}
    </p>
    <button className="btn btn-sm btn-primary" id="uc-accept-gdpr">
      {"Accept"}
    </button>
  </div>
</div>
  );
}
