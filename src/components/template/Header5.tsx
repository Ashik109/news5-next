import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";

export default function Header5() {
  return (
    <header className="uc-header header-nine uc-navbar-sticky-wrap z-999" data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
  <nav className="uc-navbar-container text-gray-900 dark:text-white fs-6 z-1">
    <div className="uc-top-navbar panel z-3 min-h-32px lg:min-h-48px border-bottom" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container max-w-xl">
        <div className="hstack">
          <div className="uc-navbar-left gap-2 lg:gap-3">
            <div className="uc-navbar-item d-none lg:d-inline-flex">
              <ul className="nav-x gap-2">
                <li>
                  <a className="text-gray-900 dark:text-white hover:text-primary" href="#fb">
                    <i className="icon icon-1 unicon-logo-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 dark:text-white hover:text-primary" href="#in">
                    <i className="icon icon-1 unicon-logo-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 dark:text-white hover:text-primary" href="#yt">
                    <i className="icon icon-1 unicon-logo-flickr"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="vr h-24px my-auto d-none sm:d-block"></div>
            <div className="uc-navbar-item dark:text-white dark:text-opacity-70">
              <ul className="nav-x gap-2 lg:gap-3 fs-7 lg:fs-6 fw-bold">
                <li>
                  <a href="/demo-nine/blog-category">
                    {"Trips"}
                  </a>
                </li>
                <li>
                  <a href="#uc-newsletter-modal" data-uc-toggle="">
                    {"Newsletter"}
                  </a>
                </li>
              </ul>
            </div>
            <div className="uc-navbar-item d-none lg:d-inline-flex">
              <a className="uc-search-trigger cstack text-none text-dark dark:text-white" href="#uc-search-modal" data-uc-toggle="">
                <i className="icon icon-1 fw-medium unicon-search"></i>
              </a>
            </div>
          </div>
          <div className="uc-navbar-right gap-2 lg:gap-3">
            <div className="uc-navbar-item">
              <a className="uc-account-trigger btn btn-sm border-0 p-0 duration-0 dark:text-white" href="#uc-favorites-modal" data-uc-toggle="">
                <i className="icon icon-1 fw-medium unicon-favorite"></i>
                <span className="d-none lg:d-block">
                  {"Favorites"}
                </span>
              </a>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-account-trigger btn btn-sm border-0 p-0 duration-0 dark:text-white" href="#uc-account-modal" data-uc-toggle="">
                <i className="icon icon-1 fw-medium unicon-user-avatar-filled"></i>
                <span className="d-none lg:d-block">
                  {"Log in"}
                </span>
              </a>
            </div>
            <div className="uc-navbar-item">
              <div className="uc-modes-trigger w-32px h-32px border fs-4 fw-medium rounded-circle text-dark dark:text-white" data-darkmode-toggle="">
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
    </div>
    <div className="uc-center-navbar panel z-1">
      <div className="container max-w-xl">
        <div className="uc-navbar min-h-72px lg:min-h-128px" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div className="uc-navbar-left">
            <div>
              <a className="uc-menu-trigger icon-3" href="#uc-menu-panel" data-uc-toggle=""></a>
            </div>
          </div>
          <div className="uc-navbar-center">
            <div className="uc-logo d-block md:d-none">
              <SiteLink href="/">
                <img className="w-80px d-none dark:d-block" src="/assets/images/demo-nine/common/logo-dark.svg" alt="News5" />
                <img className="w-80px d-block dark:d-none" src="/assets/images/demo-nine/common/logo-light.svg" alt="News5" />
              </SiteLink>
            </div>
            <div className="uc-logo d-none md:d-block">
              <SiteLink href="/">
                <img className="w-150px d-none dark:d-block" src="/assets/images/demo-nine/common/logo-dark.svg" alt="News5" />
                <img className="w-150px d-block dark:d-none" src="/assets/images/demo-nine/common/logo-light.svg" alt="News5" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-right gap-2 lg:gap-3">
            <div className="uc-navbar-item">
              <a className="uc-cart-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-cart-panel" data-uc-toggle="">
                <i className="icon icon-3 fw-medium unicon-shopping-basket"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="uc-bottom-navbar panel hstack z-2 min-h-56px d-none lg:d-flex" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container max-w-xl">
        <div className="navbar-container hstack rounded-pill bg-primary-100 dark:bg-primary">
          <div className="uc-navbar-center gap-2 lg:gap-3 flex-1">
            <ul className="uc-navbar-nav justify-center gap-3 xl:gap-4 flex-1 fs-5 fw-bold" style={{"--uc-nav-height":"56px"} as React.CSSProperties}>
              <li>
                <a href="#">
                  {"Home "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.navbar-container; animation: uc-animation-slide-top-small; duration: 150;">
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
                      <SiteLink href="/">
                        {"Travel"}
                      </SiteLink>
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
                  {"Explore"}
                </a>
              </li>
              <li>
                <a href="#">
                  {"Destinations"}
                </a>
              </li>
              <li>
                <a href="#">
                  {"Blog "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.navbar-container; animation: uc-animation-slide-top-small; duration: 150;">
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
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.navbar-container; animation: uc-animation-slide-top-small; duration: 150;">
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
                  {"Guide"}
                </a>
              </li>
              <li>
                <a href="#">
                  {"Books"}
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-2 fw-medium unicon-overflow-menu-horizontal"></i>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.navbar-container; animation: uc-animation-slide-top-small; duration: 150;">
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
        </div>
      </div>
    </div>
  </nav>
</header>
  );
}
