import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";

export default function Header4() {
  return (
    <header className="uc-header header-four uc-navbar-sticky-wrap z-999" data-uc-sticky="start: 200; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; animation: uc-animation-slide-top; end: !*;">
  <nav className="uc-navbar-container uc-navbar-transparent fs-6 z-1">
    <div className="uc-top-navbar panel z-3 bg-primary-50 dark:bg-gray-800 d-none lg:d-flex">
      <div className="container max-w-lg">
        <div className="uc-navbar items-center min-h-48px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div className="uc-navbar-left gap-2 md:gap-3">
            <ul className="uc-navbar-nav gap-4 fs-6 fw-medium" style={{"--uc-nav-height":"48px"} as React.CSSProperties}>
              <li>
                <a href="#">
                  {"Home "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;">
                  <ul className="uc-nav uc-navbar-dropdown-nav">
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
                      <SiteLink href="/">
                        {"Classic Blog"}
                      </SiteLink>
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
                </div>
              </li>
              <li>
                <a href="#">
                  {"Fashion"}
                </a>
              </li>
              <li>
                <a href="#">
                  {"Life Style"}
                </a>
              </li>
              <li>
                <a href="#">
                  {"Travel"}
                </a>
              </li>
              <li>
                <a href="#">
                  {"Blog "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;">
                  <ul className="uc-nav uc-navbar-dropdown-nav">
                    <li>
                      <SiteLink href="/blog">
                        {"Modern"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-classic">
                        {"Classic"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-2cols">
                        {"Grid 2 cols"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-3cols">
                        {"Grid 3 cols"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-4cols">
                        {"Grid 4 cols"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-category">
                        {"Category"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-author">
                        {"Author"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-details">
                        {"Blog single"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-details-2">
                        {"Blog single v2"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/blog-details-3">
                        {"Blog single v3"}
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  {"Shop "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;">
                  <ul className="uc-nav uc-navbar-dropdown-nav">
                    <li>
                      <SiteLink href="/shop">
                        {"Grid 4 cols"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/shop-3">
                        {"Grid 3 cols"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/shop-2">
                        {"Grid 2 cols"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/shop-product-detail">
                        {"Product detail"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/shop-product-detail-2">
                        {"Product detail v2"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/shop-cart">
                        {"Cart"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/shop-cart-2">
                        {"Cart v2"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/shop-checkout">
                        {"Checkout"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/shop-checkout-2">
                        {"Checkout v2"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/shop-order">
                        {"Order confirmation"}
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <i className="icon-2 fw-medium unicon-overflow-menu-horizontal"></i>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;">
                  <ul className="uc-nav uc-navbar-dropdown-nav">
                    <li>
                      <SiteLink href="/sign-in">
                        {"Sign in"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/sign-up">
                        {"Sign up"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/reset-password">
                        {"Reset password"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/404">
                        {"404"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/coming-soon">
                        {"Coming Soon"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/page-terms">
                        {"Terms of service"}
                      </SiteLink>
                    </li>
                    <li>
                      <SiteLink href="/page-privacy">
                        {"Privacy policy"}
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </li>
            </ul>
          </div>
          <div className="uc-navbar-right gap-2 md:gap-3">
            <button type="button" className="btn h-40px p-0 border-0 text-dark dark:text-white lg:d-inline-flex" data-uc-toggle="target: #uc-favorites-modal">
              <i className="icon icon-1 fw-bold unicon-favorite"></i>
              <span className="cstack w-16px h-16px fs-7 bg-primary text-white rounded-circle position-relative ms-nnarrow">
                {"0"}
              </span>
            </button>
            <div className="vr h-16px my-auto"></div>
            <div className="uc-navbar-item">
              <a className="uc-search-trigger cstack text-none text-dark dark:text-white" href="#uc-search-modal" data-uc-toggle="">
                <i className="icon icon-1 fw-bold unicon-search"></i>
              </a>
            </div>
            <div className="uc-modes-trigger w-32px h-32px border fs-4 fw-medium rounded-circle dark:border-white border-opacity-25 text-dark dark:text-white" data-darkmode-toggle="">
              <label className="switch">
                <span className="sr-only">
                  {"Dark mode toggle"}
                </span>
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="uc-center-navbar panel z-1">
      <div className="container max-w-lg">
        <div className="uc-navbar min-h-72px lg:min-h-128px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div className="uc-navbar-left">
            <div className="d-block lg:d-none">
              <a className="uc-menu-trigger icon-2" href="#uc-menu-panel" data-uc-toggle=""></a>
            </div>
            <div className="uc-navbar-item">
              <ul className="uc-social-header nav-x gap-1 d-none lg:d-flex text-black dark:text-white">
                <li>
                  <a href="#tw" className="w-32px h-32px cstack rounded-circle bg-gray-50 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors duration-200">
                    <i className="icon icon-1 unicon-logo-github"></i>
                  </a>
                </li>
                <li>
                  <a href="#in" className="w-32px h-32px cstack rounded-circle bg-gray-50 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors duration-200">
                    <i className="icon icon-1 unicon-logo-x"></i>
                  </a>
                </li>
                <li>
                  <a href="#yt" className="w-32px h-32px cstack rounded-circle bg-gray-50 dark:bg-gray-800 hover:bg-primary hover:text-white transition-colors duration-200">
                    <i className="icon icon-1 unicon-logo-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="uc-navbar-center">
            <div className="uc-logo text-gray-900 dark:text-white">
              <SiteLink href="/">
                <img className="w-80px lg:w-100px text-dark dark:text-white" src="/assets/images/demo-four/common/logo.svg" alt="News5" data-uc-svg="" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-right">
            <div className="uc-navbar-item">
              <a className="uc-cart-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-cart-panel" data-uc-toggle="">
                <i className="icon icon-3 unicon-shopping-basket"></i>
                <span className="position-absolute top-50 start-50 translate-middle cstack w-20px h-20px" style={{"fontSize":"12px","marginTop":"2px"} as React.CSSProperties}>
                  {"0"}
                </span>
              </a>
            </div>
            <button type="button" className="btn btn-sm px-3 border rounded-default d-none lg:d-inline-flex hover:border-primary hover:text-white dark:text-white" data-uc-toggle="target: #uc-newsletter-modal" data-uc-animate="btn slide-up reveal-end" style={{"--reveal-bg":"var(--color-primary)"} as React.CSSProperties}>
              <span>
                {"Subscribe"}
              </span>
              <span>
                <i className="icon icon-1 unicon-email"></i>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
  );
}
