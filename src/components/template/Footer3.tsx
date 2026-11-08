import { SiteLink } from "@/components/DemoContext";

export default function Footer3() {
  return (
    <footer id="uc-footer" className="uc-footer panel uc-dark">
  <div className="footer-outer py-4 lg:py-6 bg-gray-300 bg-opacity-10">
    <div className="container max-w-xl">
      <div className="footer-inner vstack gap-4 lg:gap-6">
        <div className="uc-footer-top">
          <div className="row child-col-12 md:child-cols-4 g-4" data-uc-grid="">
            <div className="col-3 md:col-4">
              <div className="footer-logo">
                <SiteLink href="/">
                  <img className="uc-logo w-32px text-gray-900 dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 transition-all" src="/assets/images/demo-five/common/logo.svg" alt="News5" data-uc-svg="" />
                </SiteLink>
              </div>
            </div>
            <div className="col-9 md:col-4">
              <nav className="footer-nav row child-cols-6 g-4 fw-bold dark:text-white">
                <ul className="nav-y gap-2">
                  <li>
                    <SiteLink href="/blog-category">
                      {"PC Games"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"Sony"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"Xbox"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"Exclusive"}
                    </SiteLink>
                  </li>
                </ul>
                <ul className="nav-y gap-2">
                  <li>
                    <SiteLink href="/blog-category">
                      {"Deals"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"Support"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"FAQ"}
                    </SiteLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <form className="hstack gap-1 p-narrow bg-gray-300 bg-opacity-10 rounded-pill">
                <input type="email" className="form-control-plaintext form-control-sm fs-6 dark:text-white" placeholder="Your email address.." />
                <button type="submit" className="btn btn-sm btn-primary">
                  {"Subscribe"}
                </button>
              </form>
              <p className="fs-7 text-center mt-2">
                {"Do not worry, we don't spam!"}
              </p>
              <ul className="nav-x justify-center gap-2 mt-4">
                <li>
                  <a href="#fb">
                    <i className="icon icon-2 unicon-logo-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#x">
                    <i className="icon icon-2 unicon-logo-x-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="#in">
                    <i className="icon icon-2 unicon-logo-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#yt">
                    <i className="icon icon-2 unicon-logo-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="m-0" />
        <div className="uc-footer-bottom panel hstack gap-2 items-start justify-between fs-7">
          <div className="footer-copyright vstack sm:hstack gap-1 lg:gap-2">
            <p>
              {"News5 © 2024, All rights reserved."}
            </p>
            <div className="vr d-none lg:d-block"></div>
            <ul className="nav-x gap-2 fw-medium">
              <li>
                <SiteLink href="/page-privacy">
                  {"Privacy policy"}
                </SiteLink>
              </li>
              <li>
                <SiteLink href="/page-terms">
                  {"Terms of use"}
                </SiteLink>
              </li>
            </ul>
          </div>
          <div className="footer-lang d-inline-block">
            <a href="#lang_switcher" className="hstack gap-1 text-none fw-medium">
              <i className="icon icon-1 unicon-earth-filled"></i>
              <span>
                {"English"}
              </span>
              <span data-uc-drop-parent-icon=""></span>
            </a>
            <div className="p-2 bg-white dark:bg-gray-800 shadow-xs rounded w-150px" data-uc-drop="mode: click; boundary: !.uc-footer-bottom; animation: uc-animation-slide-top-small; duration: 150;">
              <ul className="nav-y gap-1 fw-medium items-end">
                <li>
                  <a href="#en">
                    {"English"}
                  </a>
                </li>
                <li>
                  <a href="#ar">
                    {"العربية"}
                  </a>
                </li>
                <li>
                  <a href="#ch">
                    {"中文"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}
