import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";

export default function MobileMenu2() {
  return (
    <div id="uc-menu-panel" data-uc-offcanvas="overlay: true;">
  <div className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
    <header className="uc-offcanvas-header hstack justify-between items-center pb-4 bg-white dark:bg-gray-900">
      <div className="uc-logo">
        <SiteLink href="/" className="h5 text-none text-gray-900 dark:text-white">
          <img className="w-32px" src="/assets/images/common/logo-icon.svg" alt="News5" data-uc-svg="" />
        </SiteLink>
      </div>
      <button className="uc-offcanvas-close p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" type="button">
        <i className="unicon-close"></i>
      </button>
    </header>
    <div className="panel">
      <form id="search-panel" className="form-icon-group vstack gap-1 mb-3" data-uc-sticky="">
        <input type="email" className="form-control form-control-md fs-6" placeholder="Search.." />
        <span className="form-icon text-gray">
          <i className="unicon-search icon-1"></i>
        </span>
      </form>
      <ul className="nav-y gap-narrow fw-bold fs-5" data-uc-nav="">
        <li className="uc-parent">
          <a href="#">
            {"Homepages"}
          </a>
          <ul className="uc-nav-sub" data-uc-nav="">
            <li>
              <Link prefetch={false} href="/main">
                {"Main"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/demo-two">
                {"Classic News"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/demo-three">
                {"Tech"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/demo-four">
                {"Classic Blog"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/demo-five">
                {"Gaming"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/demo-six">
                {"Sports"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/demo-seven">
                {"Newspaper"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/demo-eight">
                {"Magazine"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/demo-nine">
                {"Travel"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/demo-ten">
                {"Food"}
              </Link>
            </li>
          </ul>
        </li>
        <li>
          <a href="#">
            {"Latest"}
          </a>
        </li>
        <li>
          <a href="#">
            {"Trending"}
          </a>
        </li>
        <li className="uc-parent">
          <a href="#">
            {"Inner Pages"}
          </a>
          <ul className="uc-nav-sub" data-uc-nav="">
            <li className="uc-parent">
              <SiteLink href="/blog">
                {"Blog"}
              </SiteLink>
              <ul className="uc-nav-sub">
                <li>
                  <SiteLink href="/blog">
                    {"Full Width"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/blog-2cols">
                    {"Grid 2 Cols"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/blog-3cols">
                    {"Grid 3 Cols"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/blog-4cols">
                    {"Grid 4 Cols"}
                  </SiteLink>
                </li>
              </ul>
            </li>
            <li className="uc-parent">
              <SiteLink href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                {"Blog - detail"}
              </SiteLink>
              <ul className="uc-nav-sub">
                <li>
                  <SiteLink href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                    {"Blog detail"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/blog-details-2/the-rise-of-gourmet-street-food-trends-and-top-picks">
                    {"Blog detail - v2"}
                  </SiteLink>
                </li>
              </ul>
            </li>
            <li className="uc-parent">
              <a href="#">
                {"Useful pages"}
              </a>
              <ul className="uc-nav-sub">
                <li>
                  <SiteLink href="/sign-up">
                    {"Sign up"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/sign-in">
                    {"Sign in"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/reset-password">
                    {"Reset password"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/404">
                    {"404 page"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/coming-soon">
                    {"Coming soon"}
                  </SiteLink>
                </li>
              </ul>
            </li>
            <li className="uc-parent">
              <a href="#">
                {"Other pages"}
              </a>
              <ul className="uc-nav-sub">
                <li>
                  <SiteLink href="/page-faq">
                    {"FAQ"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/page-terms">
                    {"Terms of use"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/page-privacy">
                    {"Privacy policy"}
                  </SiteLink>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="uc-parent">
          <SiteLink href="/shop">
            {"Shop"}
          </SiteLink>
          <ul className="uc-nav-sub" data-uc-nav="">
            <li className="uc-parent">
              <SiteLink href="/shop">
                {"Shop layouts"}
              </SiteLink>
              <ul className="uc-nav-sub">
                <li>
                  <SiteLink href="/shop">
                    {"Shop 4 cols"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/shop-3">
                    {"Shop 3 cols"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/shop-2">
                    {"Shop 2 cols"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/shop-sidebar">
                    {"Shop with sidebar"}
                  </SiteLink>
                </li>
              </ul>
            </li>
            <li>
              <SiteLink href="/shop-category">
                {"Archive category"}
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/shop/disney-toys">
                {"Product detail"}
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/shop-product-detail-2/disney-toys">
                {"Product detail - v2"}
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/shop-cart">
                {"Cart"}
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/shop-cart-2">
                {"Cart - v2"}
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/shop-checkout">
                {"Checkout"}
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/shop-checkout-2">
                {"Checkout - v2"}
              </SiteLink>
            </li>
            <li>
              <SiteLink href="/shop-order">
                {"Order confirmation"}
              </SiteLink>
            </li>
          </ul>
        </li>
        <li className="hr opacity-10 my-1"></li>
        <li>
          <SiteLink href="/sign-in">
            {"Sign in"}
          </SiteLink>
        </li>
        <li>
          <SiteLink href="/sign-up">
            {"Create an account"}
          </SiteLink>
        </li>
      </ul>
      <ul className="social-icons nav-x mt-4">
        <li>
          <a href="#">
            <i className="unicon-logo-medium icon-2"></i>
          </a>
          <a href="#">
            <i className="unicon-logo-x-filled icon-2"></i>
          </a>
          <a href="#">
            <i className="unicon-logo-instagram icon-2"></i>
          </a>
          <a href="#">
            <i className="unicon-logo-pinterest icon-2"></i>
          </a>
        </li>
      </ul>
      <div className="py-2 hstack gap-2 mt-4 bg-white dark:bg-gray-900" data-uc-sticky="position: bottom">
        <div className="vstack gap-1">
          <span className="fs-7 opacity-60">
            {"Select theme:"}
          </span>
          <div className="darkmode-trigger" data-darkmode-switch="">
            <label className="switch">
              <input type="checkbox" />
              <span className="slider fs-5"></span>
            </label>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
