import { SiteLink } from "@/components/DemoContext";

export default function Header10() {
  return (
    <header className="uc-header header-two uc-navbar-sticky-wrap z-999" data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
  <nav className="uc-navbar-container shadow-xs bg-white dark:bg-gray-900 fs-6 z-1">
    <div className="uc-center-navbar panel z-2">
      <div className="container max-w-xl">
        <div className="uc-navbar min-h-72px lg:min-h-100px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div className="uc-navbar-left">
            <div>
              <a className="uc-menu-trigger" href="#uc-menu-panel" data-uc-toggle=""></a>
            </div>
          </div>
          <div className="uc-navbar-center">
            <div className="uc-logo text-black dark:text-white">
              <SiteLink href="/">
                <img className="w-80px text-dark dark:text-white" src="/assets/images/demo-two/common/logo.svg" alt="News5" data-uc-svg="" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-right">
            <div className="uc-navbar-item">
              <a className="uc-account-trigger btn btn-sm gap-narrow border-0 p-0 duration-0 dark:text-white" href="#uc-favorites-modal" data-uc-toggle="">
                <i className="icon icon-1 fw-medium unicon-bookmark"></i>
                <span className="cstack w-24px h-24px bg-primary text-black fs-7 rounded-circle">
                  {"0"}
                </span>
              </a>
            </div>
            <ul className="nav-x gap-1 d-none lg:d-flex">
              <li>
                <a href="#tw" className="w-32px h-32px cstack border rounded-circle hover:bg-gray-25 transition-colors duration-200">
                  <i className="icon icon-1 unicon-logo-facebook"></i>
                </a>
              </li>
              <li>
                <a href="#in" className="w-32px h-32px cstack border rounded-circle hover:bg-gray-25 transition-colors duration-200">
                  <i className="icon icon-1 unicon-logo-instagram"></i>
                </a>
              </li>
              <li>
                <a href="#yt" className="w-32px h-32px cstack border rounded-circle hover:bg-gray-25 transition-colors duration-200">
                  <i className="icon icon-1 unicon-logo-youtube"></i>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="uc-bottom-navbar panel hstack z-1 min-h-48px lg:min-h-56px bg-gray-800 border-top border-bottom" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container max-w-xl">
        <div className="hstack">
          <div className="uc-navbar-left gap-2 lg:gap-3 d-none lg:d-flex">
            <div className="uc-navbar-item">
              <a className="uc-search-trigger mb-narrow" href="#uc-search-modal" data-uc-toggle="">
                <img className="text-white" src="/assets/images/common/icons/search.svg" alt="Search" data-uc-svg="" style={{"width":"20px"} as React.CSSProperties} />
              </a>
            </div>
          </div>
          <div className="uc-navbar-center gap-2 lg:gap-3">
            <div className="uc-navbar-item" style={{"--uc-nav-height":"48px"} as React.CSSProperties}>
              <ul className="nav-x fw-semibold flex-nowrap overflow-x-auto hide-scrollbar uc-horizontal-scroll w-screen md:w-auto md:mask-end-0 mx-n2 px-2 text-white">
                <li className="uc-active">
                  <a href="#">
                    {"Home"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Social"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Politics"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Economy"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Sports"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Arts"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"International"}
                  </a>
                </li>
                <li className="nav-divider vr"></li>
                <li>
                  <a href="#">
                    <i className="icon icon-1 unicon-microphone"></i>
                    {" Podcasts"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    <i className="icon icon-1 unicon-play"></i>
                    {" News TV"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="uc-navbar-right gap-2 lg:gap-3 d-none lg:d-flex">
            <div className="uc-navbar-item">
              <div className="uc-modes-trigger icon-1 text-white" data-darkmode-toggle="">
                <label className="switch">
                  <span className="sr-only">
                    {"Dark toggle"}
                  </span>
                  <input type="checkbox" />
                  <span className="slider"></span>
                </label>
              </div>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-cart-trigger btn btn-sm border-0 p-0 duration-0 text-white" href="#uc-cart-panel" data-uc-toggle="">
                <i className="icon icon-1 unicon-shopping-cart"></i>
                <span className="cstack w-24px h-24px bg-primary text-black rounded-circle fs-7">
                  {"4"}
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
  );
}
