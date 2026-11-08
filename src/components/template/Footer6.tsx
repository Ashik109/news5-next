import { SiteLink } from "@/components/DemoContext";

export default function Footer6() {
  return (
    <footer id="uc-footer" className="uc-footer panel uc-dark">
  <div className="footer-outer py-4 lg:py-6 xl:py-9 bg-white dark:bg-gray-900 dark:text-white">
    <div className="container max-w-xl">
      <div className="footer-inner vstack gap-4 lg:gap-6 xl:gap-9">
        <div className="uc-footer-top">
          <div className="row child-cols col-match gx-4 gy-6">
            <div className="col d-none lg:d-block">
              <div className="widget links-widget vstack gap-3">
                <div className="widgt-title">
                  <h4 className="fs-7 fw-medium text-uppercase m-0 text-dark dark:text-white text-opacity-50">
                    {"Latest topics"}
                  </h4>
                </div>
                <div className="widgt-content">
                  <ul className="nav-y gap-2 fs-6 fw-medium text-dark dark:text-white">
                    <li>
                      <SiteLink href="/blog-category">
                        {"Startups and technology"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Data and security"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Fintech and ecommerce"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Investors and funding"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Corporates and innovation"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Government and policy"}
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 md:col">
              <div className="widget links-widget vstack gap-3">
                <div className="widgt-title">
                  <h4 className="fs-7 fw-medium text-uppercase m-0 text-dark dark:text-white text-opacity-50">
                    {"The News"}
                  </h4>
                </div>
                <div className="widgt-content">
                  <ul className="nav-y gap-2 fs-6 fw-medium text-dark dark:text-white">
                    <li>
                      <SiteLink href="/blog-category">
                        {"Media"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Events"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Partner with us"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Jobs"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Masthead"}
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-6 md:col">
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
            <div className="col-12 md:col-5">
              <div className="widget newsletter-widget vstack gap-3">
                <div className="widgt-title">
                  <h4 className="h4 lg:h3 lg:-ls-2 m-0">
                    {"Keep up to date with the latest updates & news"}
                  </h4>
                </div>
                <div className="widgt-content">
                  <form className="hstack">
                    <input className="form-control form-control-sm fs-6 fw-medium h-40px rounded-end-0 bg-white dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="email" placeholder="Your email" required />
                    <button className="btn btn-sm btn-primary rounded-start-0 min-w-100px" type="submit">
                      {"Sign up"}
                    </button>
                  </form>
                  <p className="fs-7 fw-medium text-dark dark:text-white text-opacity-50 mt-2">
                    {"By pressing the Subscribe button, you confirm that you have read and are agreeing to our "}
                    <SiteLink href="/page-privacy" className="uc-link dark:text-white">
                      {"Privacy Policy"}
                    </SiteLink>
                    {" and "}
                    <SiteLink href="/page-terms" className="uc-link dark:text-white">
                      {"Terms of Use"}
                    </SiteLink>
                  </p>
                  <ul className="footer-social nav-x gap-2 mt-2 lg:mt-4">
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
                </div>
              </div>
            </div>
          </div>
        </div>
        <hr className="m-0" />
        <div className="uc-footer-bottom panel vstack lg:hstack gap-4 justify-between fs-7 text-center lg:text-start">
          <div className="vstack lg:hstack gap-2">
            <div className="footer-logo text-center">
              <img className="uc-logo w-100px text-gray-900 dark:text-white" src="/assets/images/main/common/logo.svg" alt="News5" data-uc-svg="" />
            </div>
            <div className="vr mx-2 d-none lg:d-inline-flex"></div>
            <p className="footer-copyrights">
              {"News5 © 2024, All rights reserved."}
            </p>
            <ul className="footer-site-links nav-x gap-2 fw-medium justify-center lg:justify-start">
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
              <li>
                <SiteLink className="uc-link text-underline hover:text-gray-900 dark:hover:text-white duration-150" href="/page-faq">
                  {"FAQ"}
                </SiteLink>
              </li>
            </ul>
          </div>
          <div className="panel hstack justify-center gap-2 lg:gap-3">
            <div className="footer-lang d-inline-block">
              <a href="#" className="hstack gap-1 text-none fw-medium">
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
  </div>
</footer>
  );
}
