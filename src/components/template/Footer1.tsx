import { SiteLink } from "@/components/DemoContext";

export default function Footer1() {
  return (
    <footer id="uc-footer" className="uc-footer panel uc-dark">
  <div className="footer-outer py-4 lg:py-6 xl:py-9 bg-white dark:bg-gray-900">
    <div className="container max-w-xl">
      <div className="footer-inner vstack gap-4 justify-center lg:fs-5 text-gray-900 dark:text-white">
        <div className="footer-logo text-center">
          <img className="uc-logo w-100px text-gray-900 dark:text-white" src="/assets/images/demo-eight/common/logo.svg" alt="News5" data-uc-svg="" />
        </div>
        <nav className="footer-nav">
          <ul className="nav-x gap-2 lg:gap-3 justify-center text-center fw-medium">
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"World"}
              </SiteLink>
            </li>
            <li className="vr dark:border-gray-200"></li>
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"Tech"}
              </SiteLink>
            </li>
            <li className="vr dark:border-gray-200"></li>
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"Economy"}
              </SiteLink>
            </li>
            <li className="vr dark:border-gray-200"></li>
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"Travel"}
              </SiteLink>
            </li>
            <li className="vr dark:border-gray-200"></li>
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"Media"}
              </SiteLink>
            </li>
          </ul>
        </nav>
        <div className="footer-social hstack justify-center gap-2 lg:gap-3">
          <ul className="nav-x gap-2">
            <li>
              <a className="hover:text-gray-900 dark:hover:text-white duration-150" href="#fb">
                <i className="icon icon-2 unicon-logo-facebook"></i>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 dark:hover:text-white duration-150" href="#x">
                <i className="icon icon-2 unicon-logo-x-filled"></i>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 dark:hover:text-white duration-150" href="#in">
                <i className="icon icon-2 unicon-logo-instagram"></i>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 dark:hover:text-white duration-150" href="#yt">
                <i className="icon icon-2 unicon-logo-youtube"></i>
              </a>
            </li>
          </ul>
          <div className="vr"></div>
          <div className="d-inline-block">
            <a href="#" className="hstack gap-1 text-none fw-medium">
              <i className="icon icon-1 unicon-earth-filled"></i>
              <span>
                {"English"}
              </span>
              <span data-uc-drop-parent-icon=""></span>
            </a>
            <div className="p-2 bg-white dark:bg-gray-800 shadow-xs w-150px" data-uc-drop="mode: click; boundary: !.uc-footer-bottom; animation: uc-animation-slide-top-small; duration: 150;">
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
        <div className="footer-copyright vstack sm:hstack justify-center items-center gap-1 lg:gap-2">
          <p>
            {"News5 © 2024, All rights reserved."}
          </p>
          <ul className="nav-x gap-2 fw-medium">
            <li>
              <SiteLink className="uc-link text-underline hover:text-gray-900 dark:hover:text-white duration-150" href="/page-privacy">
                {"Privacy notice"}
              </SiteLink>
            </li>
            <li>
              <SiteLink className="uc-link text-underline hover:text-gray-900 dark:hover:text-white duration-150" href="/page-terms">
                {"Terms of condition"}
              </SiteLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
  );
}
