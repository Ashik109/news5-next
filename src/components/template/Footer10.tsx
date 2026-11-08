import { SiteLink } from "@/components/DemoContext";

export default function Footer10() {
  return (
    <footer id="uc-footer" className="uc-footer panel uc-dark">
  <div className="footer-outer py-4 lg:py-6 bg-gray-300 bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-100">
    <div className="container max-w-xl">
      <div className="footer-inner vstack gap-4 lg:gap-6">
        <div className="uc-footer-top">
          <div className="row child-cols lg:child-cols-2 justify-between g-4" data-uc-grid="">
            <div className="col-12 lg:col-5">
              <div className="vstack gap-3 dark:text-white">
                <SiteLink href="/">
                  <img className="uc-logo w-80px text-gray-900 dark:text-white" src="/assets/images/demo-two/common/logo.svg" alt="News5" data-uc-svg="" />
                </SiteLink>
                <p className="fs-6 me-8">
                  {"A comprehensive electronic newspaper that deals with all issues that concern national public opinion."}
                </p>
                <ul className="nav-x gap-2">
                  <li>
                    <a className="hover:text-gray dark:hover:text-gray-200 transition-colors duration-200" href="#fb">
                      <i className="icon icon-2 unicon-logo-facebook"></i>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray dark:hover:text-gray-200 transition-colors duration-200" href="#x">
                      <i className="icon icon-2 unicon-logo-x-filled"></i>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray dark:hover:text-gray-200 transition-colors duration-200" href="#in">
                      <i className="icon icon-2 unicon-logo-instagram"></i>
                    </a>
                  </li>
                  <li>
                    <a className="hover:text-gray dark:hover:text-gray-200 transition-colors duration-200" href="#yt">
                      <i className="icon icon-2 unicon-logo-youtube"></i>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div>
              <div className="widget links-widget vstack gap-3">
                <div className="widgt-title">
                  <h4 className="fs-7 fw-medium text-uppercase m-0 text-dark dark:text-white text-opacity-50">
                    {"Topics"}
                  </h4>
                </div>
                <div className="widgt-content">
                  <ul className="nav-y gap-2 fs-6 fw-medium text-dark dark:text-white">
                    <li>
                      <SiteLink href="/blog-category">
                        {"Social"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Politics"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Economy"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"World"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Sports"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Arts"}
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <div className="widget links-widget vstack gap-3">
                <div className="widgt-title">
                  <h4 className="fs-7 fw-medium text-uppercase m-0 text-dark dark:text-white text-opacity-50">
                    {"Trending now"}
                  </h4>
                </div>
                <div className="widgt-content">
                  <ul className="nav-y gap-2 fs-6 fw-medium text-dark dark:text-white">
                    <li>
                      <SiteLink href="/blog-category">
                        {"Podcats"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"News TV"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"National"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Global"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Dialogues"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Opinions"}
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="d-none lg:d-block">
              <div className="widget links-widget vstack gap-3">
                <div className="widgt-title">
                  <h4 className="fs-7 fw-medium text-uppercase m-0 text-dark dark:text-white text-opacity-50">
                    {"About"}
                  </h4>
                </div>
                <div className="widgt-content">
                  <ul className="nav-y gap-2 fs-6 fw-medium text-dark dark:text-white">
                    <li>
                      <a href="#">
                        {"About"}
                      </a>
                    </li>
                    <li>
                      <a href="#">
                        {"Career"}
                      </a>
                    </li>
                    <li>
                      <SiteLink href="/sign-in">
                        {"Log in"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/sign-up">
                        {"Create an account"}
                      </SiteLink>
                    </li>
                    <li>
                      <a href="#">
                        {"Sitemap"}
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-0 dark:border-gray-100" />
        <div className="uc-footer-bottom panel hstack gap-2 items-start justify-between fs-6 dark:text-white">
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
