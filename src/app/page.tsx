import type { Metadata } from "next";
import Link from "next/link";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import UcContactForm1 from "@/components/template/UcContactForm1";
import BackToTop1 from "@/components/template/BackToTop1";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="main" theme="/assets/css/theme/demo-three.min.css" bodyClass="uni-body panel bg-slate-25 text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<div id="uc-menu-panel" data-uc-offcanvas="overlay: true;">
  <div className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
    <header className="uc-offcanvas-header hstack justify-between items-center pb-4 bg-white dark:bg-gray-900">
      <div className="uc-logo">
        <Link prefetch={false} href="/main" className="h5 text-none text-gray-900 dark:text-white">
          <img className="w-32px" src="/assets/images/common/logo-icon.svg" alt="News5" data-uc-svg="" />
        </Link>
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
          <a href="/main#">
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
          <a href="/main#">
            {"Latest"}
          </a>
        </li>
        <li>
          <a href="/main#">
            {"Trending"}
          </a>
        </li>
        <li className="uc-parent">
          <a href="/main#">
            {"Inner Pages"}
          </a>
          <ul className="uc-nav-sub" data-uc-nav="">
            <li className="uc-parent">
              <Link prefetch={false} href="/main/blog">
                {"Blog"}
              </Link>
              <ul className="uc-nav-sub">
                <li>
                  <Link prefetch={false} href="/main/blog">
                    {"Full Width"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/blog-2cols">
                    {"Grid 2 Cols"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/blog-3cols">
                    {"Grid 3 Cols"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/blog-4cols">
                    {"Grid 4 Cols"}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="uc-parent">
              <Link prefetch={false} href="/main/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                {"Blog - detail"}
              </Link>
              <ul className="uc-nav-sub">
                <li>
                  <Link prefetch={false} href="/main/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                    {"Blog detail"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/blog-details-2/the-rise-of-gourmet-street-food-trends-and-top-picks">
                    {"Blog detail - v2"}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="uc-parent">
              <a href="/main#">
                {"Useful pages"}
              </a>
              <ul className="uc-nav-sub">
                <li>
                  <Link prefetch={false} href="/main/sign-up">
                    {"Sign up"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/sign-in">
                    {"Sign in"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/reset-password">
                    {"Reset password"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/404">
                    {"404 page"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/coming-soon">
                    {"Coming soon"}
                  </Link>
                </li>
              </ul>
            </li>
            <li className="uc-parent">
              <a href="/main#">
                {"Other pages"}
              </a>
              <ul className="uc-nav-sub">
                <li>
                  <Link prefetch={false} href="/main/page-faq">
                    {"FAQ"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/page-terms">
                    {"Terms of use"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/page-privacy">
                    {"Privacy policy"}
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </li>
        <li className="uc-parent">
          <Link prefetch={false} href="/main/shop">
            {"Shop"}
          </Link>
          <ul className="uc-nav-sub" data-uc-nav="">
            <li className="uc-parent">
              <Link prefetch={false} href="/main/shop">
                {"Shop layouts"}
              </Link>
              <ul className="uc-nav-sub">
                <li>
                  <Link prefetch={false} href="/main/shop">
                    {"Shop 4 cols"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/shop-3">
                    {"Shop 3 cols"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/shop-2">
                    {"Shop 2 cols"}
                  </Link>
                </li>
                <li>
                  <Link prefetch={false} href="/main/shop-sidebar">
                    {"Shop with sidebar"}
                  </Link>
                </li>
              </ul>
            </li>
            <li>
              <Link prefetch={false} href="/main/shop-category">
                {"Archive category"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/main/shop/disney-toys">
                {"Product detail"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/main/shop-product-detail-2/disney-toys">
                {"Product detail - v2"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/main/shop-cart">
                {"Cart"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/main/shop-cart-2">
                {"Cart - v2"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/main/shop-checkout">
                {"Checkout"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/main/shop-checkout-2">
                {"Checkout - v2"}
              </Link>
            </li>
            <li>
              <Link prefetch={false} href="/main/shop-order">
                {"Order confirmation"}
              </Link>
            </li>
          </ul>
        </li>
        <li className="hr opacity-10 my-1"></li>
        <li>
          <Link prefetch={false} href="/main/sign-in">
            {"Sign in"}
          </Link>
        </li>
        <li>
          <Link prefetch={false} href="/main/sign-up">
            {"Create an account"}
          </Link>
        </li>
      </ul>
      <ul className="social-icons nav-x mt-4">
        <li>
          <a href="/main#">
            <i className="unicon-logo-medium icon-2"></i>
          </a>
          <a href="/main#">
            <i className="unicon-logo-x-filled icon-2"></i>
          </a>
          <a href="/main#">
            <i className="unicon-logo-instagram icon-2"></i>
          </a>
          <a href="/main#">
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
<div id="uc-cart-panel" data-uc-offcanvas="overlay: true; flip: true;">
  <div className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
    <button className="uc-offcanvas-close top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90" type="button">
      <i className="unicon-close"></i>
    </button>
    <div className="mini-cart-content vstack justify-between panel h-100">
      <div className="mini-cart-header">
        <h3 className="title h5 m-0 text-dark dark:text-white">
          {"Shopping cart"}
        </h3>
      </div>
      <div className="mini-cart-listing panel flex-1 my-4 overflow-scroll">
        <p className="alert alert-warning" hidden>
          {"Your cart empty!"}
        </p>
        <div className="panel vstack gap-3">
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-07.jpg" alt="Laptop Cover" data-uc-img="loading: lazy" />
                  <Link prefetch={false} href="/main/shop/laptop-cover" className="position-cover" data-caption="Laptop Cover"></Link>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <Link prefetch={false} className="text-none text-dark dark:text-white" href="/main/shop/laptop-cover">
                      {"Laptop Cover"}
                    </Link>
                  </h5>
                  <div className="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white">
                    <span className="qty">
                      {"1"}
                    </span>
                    {" x "}
                    <span className="price">
                      {"$24.00"}
                    </span>
                  </div>
                  <a href="/main#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="/main#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-08.jpg" alt="Disney Toys" data-uc-img="loading: lazy" />
                  <Link prefetch={false} href="/main/shop/disney-toys" className="position-cover" data-caption="Disney Toys"></Link>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <Link prefetch={false} className="text-none text-dark dark:text-white" href="/main/shop/disney-toys">
                      {"Disney Toys"}
                    </Link>
                  </h5>
                  <div className="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white">
                    <span className="qty">
                      {"1"}
                    </span>
                    {" x "}
                    <span className="price">
                      {"$5.00"}
                    </span>
                  </div>
                  <a href="/main#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="/main#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-09.jpg" alt="Screen Axe" data-uc-img="loading: lazy" />
                  <Link prefetch={false} href="/main/shop/screen-axe" className="position-cover" data-caption="Screen Axe"></Link>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <Link prefetch={false} className="text-none text-dark dark:text-white" href="/main/shop/screen-axe">
                      {"Screen Axe"}
                    </Link>
                  </h5>
                  <div className="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white">
                    <span className="qty">
                      {"1"}
                    </span>
                    {" x "}
                    <span className="price">
                      {"$19.00"}
                    </span>
                  </div>
                  <a href="/main#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="/main#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-10.jpg" alt="Airpods Pro" data-uc-img="loading: lazy" />
                  <Link prefetch={false} href="/main/shop/airpods-pro" className="position-cover" data-caption="Airpods Pro"></Link>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <Link prefetch={false} className="text-none text-dark dark:text-white" href="/main/shop/airpods-pro">
                      {"Airpods Pro"}
                    </Link>
                  </h5>
                  <div className="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white">
                    <span className="qty">
                      {"1"}
                    </span>
                    {" x "}
                    <span className="price">
                      {"$49.00"}
                    </span>
                  </div>
                  <a href="/main#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="/main#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="mini-cart-footer panel pt-3 border-top">
        <div className="panel vstack gap-3 justify-between">
          <div className="mini-cart-total hstack justify-between">
            <h5 className="h5 m-0 text-dark dark:text-white">
              {"Subtotal"}
            </h5>
            <b className="fs-5">
              {"$97.00"}
            </b>
          </div>
          <div className="mini-cart-actions vstack gap-1">
            <Link prefetch={false} href="/main/shop-cart" className="btn btn-md btn-outline-gray-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
              {"View cart"}
            </Link>
            <Link prefetch={false} href="/main/shop-checkout" className="btn btn-md btn-primary text-white">
              {"Checkout"}
            </Link>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<UcContactForm1 />
<BackToTop1 />
<div id="wrapper" className="wrap overflow-x-hidden">
  <div className="position-relative w-full z-0 overflow-hidden dark:bg-gray-900">
    <div className="media-cover max-h-screen blend-color" data-src="/assets/images/landing/hero-bg.jpg" data-uc-img=""></div>
    <div className="media-cover max-h-screen bg-gradient-to-b from-transparent to-slate-25 dark:to-gray-900"></div>
    <header className="uc-preview-header panel" data-uc-sticky="start: 100; animation: uc-animation-slide-small-top; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
      <nav className="uc-navbar-container">
        <div className="container container-expand xl:px-3">
          <div className="uc-navbar min-h-80px">
            <div className="uc-navbar-left gap-6">
              <div className="uc-navbar-item">
                <Link prefetch={false} href="/main">
                  <img className="w-32px text-gray-900 dark:text-white" src="/assets/images/landing/logo.svg" alt="News5" data-uc-svg="" />
                </Link>
              </div>
              <ul className="uc-navbar-nav gap-3 fw-bold d-none lg:d-flex" style={{"--uc-nav-height":"80px"} as React.CSSProperties} data-uc-scrollspy-nav="closest: li; scroll: true">
                <li>
                  <a href="#_demos">
                    {"Demos"}
                  </a>
                </li>
                <li>
                  <a href="#_features">
                    {"Features"}
                  </a>
                </li>
                <li>
                  <a href="#_inner_pages">
                    {"Inner pages"}
                  </a>
                </li>
                <li>
                  <a href="https://reactheme.com/support/" target="_blank">
                    <span>
                      {"Support"}
                    </span>
                    <i className="icon-narrow fw-bold unicon-arrow-up-right"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="uc-navbar-right">
              <a href="#" className="animate-btn btn btn-sm lg:btn-md btn-dark dark:bg-white dark:border-white dark:text-dark text-none gap-0 rounded-pill">
                <span>
                  {"Try it now"}
                </span>
                <i className="icon icon-narrow unicon-arrow-up-right fw-bold"></i>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
    <section id="_demos" className="section panel z-1 py-6 lg:py-8 xl:pb-10">
      <div className="container max-w-xl">
        <div className="panel max-w-700px mx-auto text-center" data-anime="onview: -200; targets: > *; translateY: [48, 0]; opacity: [0, 1]; delay: anime.stagger(200); duration: 750; easing: 'spring(1, 80, 10, 0)'">
          <span className="cstack d-inline-flex h-32px px-3 fs-7 fw-bold border rounded-pill mb-4 shadow-xs">
            {"Main Demos"}
          </span>
          <h3 className="h2 md:h1 lg:display-6 -ls-3">
            {"Ready-to-Use Demos for Publishers"}
          </h3>
          <p className="fs-6 md:fs-5 lg:fs-3 -ls-xs fw-medium text-gray-500 dark:text-gray-300">
            {"Full-featured, professional-looking news, editorial and magazine design that concentrates all the attention on the content you share, highlighting your expertise in the media field."}
          </p>
          <a href="#" className="animate-btn btn btn-md lg:btn-lg btn-primary dark:bg-lime dark:text-black dark:border-lime text-none gap-0 rounded-pill mt-4">
            <span>
              {"Buy News 5"}
            </span>
            <i className="icon icon-narrow unicon-shopping-cart fw-bold"></i>
          </a>
        </div>
        <div className="panel mt-4 lg:mt-6 xl:mt-9">
          <div className="row child-cols-12 lg:child-cols-4 g-8" data-anime="onview: -200; targets: > * > *; translateY: [48, 0]; opacity: [0, 1]; delay: anime.stagger(100, { start: 200 }); duration: 1000; easing: 'spring(1, 80, 10, 0)'">
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/demo-seven.webp" alt="Main Demo" />
                  <Link prefetch={false} href="/main" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Newspaper"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"News, Editorial"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/demo-two.webp" alt="News" />
                  <Link prefetch={false} href="/demo-two" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"News"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Classic News, Magazine"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/demo-three.webp" alt="Tech" />
                  <Link prefetch={false} href="/demo-three" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Tech"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Technology, AI, Gadgets"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/demo-four.webp" alt="Classic Blog" />
                  <Link prefetch={false} href="/demo-four" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Classic Blog"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Fashion, Life Style, Blogging"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/demo-five.webp" alt="Gaming" />
                  <Link prefetch={false} href="/demo-five?dark=1" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Gaming"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Gaming, Magazine"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/demo-six.webp" alt="Sports" />
                  <Link prefetch={false} href="/demo-six" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Sports"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Football, Crickets"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/main.webp" alt="Newspaper" />
                  <Link prefetch={false} href="/demo-seven" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Modern Newspaper"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Modern News, Editorial"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/demo-eight.webp" alt="Magazine" />
                  <Link prefetch={false} href="/demo-eight" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Magazine"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"News, Magazine"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/demo-nine.webp" alt="Travel" />
                  <Link prefetch={false} href="/demo-nine" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Travel"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Travel, Trips, Blogging"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px shadow-xs hover:shadow-md hover:-translate-y-1 transition-all duration-250 overflow-hidden">
                  <img className="w-100 m-0 border rounded-1" src="/assets/images/landing/demos/demo-ten.webp" alt="Food" />
                  <Link prefetch={false} href="/demo-ten" className="position-cover" target="_blank"></Link>
                </div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Food"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Food, Blogging, Stories"}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px border border-dashed bg-gray-25 dark:bg-gray-900 transition-all duration-250 overflow-hidden"></div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Soon"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Next Update.."}
                  </p>
                </div>
              </div>
            </div>
            <div>
              <div className="item-preview panel">
                <div className="panel p-2 bg-white dark:bg-gray-800 rounded-1-5 min-h-450px border border-dashed bg-gray-25 dark:bg-gray-900 transition-all duration-250 overflow-hidden"></div>
                <div className="panel vstack gap-narrow items-center text-center mt-2">
                  <h5 className="h5 lg:h4 m-0">
                    {"Soon"}
                  </h5>
                  <p className="fs-6 fw-medium opacity-70">
                    {"Next Update.."}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="_features" className="section panel z-1 uc-dark">
      <div className="section-outer py-6 lg:py-8 xl:py-10 bg-white dark:bg-gray-900 dark:text-white">
        <div className="container max-w-xl">
          <div className="panel" data-anime="onview: -200; targets: > *; translateY: [48, 0]; opacity: [0, 1]; delay: anime.stagger(200); duration: 750; easing: 'spring(1, 80, 10, 0)'">
            <div className="panel max-w-700px mx-auto text-center">
              <span className="cstack d-inline-flex h-32px px-3 fs-7 fw-bold border rounded-pill mb-4 shadow-xs">
                {"Features"}
              </span>
              <h3 className="h4 md:h3 lg:h1 -ls-3">
                {"Full Pack of Features and Possibilities for Publishing Sites"}
              </h3>
            </div>
            <div className="panel mt-4 lg:mt-6 xl:mt-9">
              <div className="row child-cols-6 sm:child-cols-4 g-3 md:g-4 col-match" data-anime="onview: -200; targets: > * > *; translateY: [48, 0]; opacity: [0, 1]; delay: anime.stagger(100, { start: 200 }); duration: 1000; easing: 'spring(1, 80, 10, 0)'">
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-settings-adjust text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Easy Customization"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"Easy to customize and coordinate between layouts, elements, widgets and blocks, as you will find great flexibility while working with News5."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-devices text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Fully Responsive"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"The best thing about News5 is responsiveness, as we relied on the mobile-first system for a great user experience across various devices."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-cube text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Unicore Framework"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"Full featured, most advanced, powerfull, flexible and easy-to-customize framework with a solid design system, extensive utility classes and custom made in-house components. "}
                      <a href="https://unistudio.co/unicore" title="UniCore Framework">
                        {"Learn more"}
                      </a>
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-package text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Sticky Headers & Sidebars"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"Make elements remain at the top of the viewport with many built-in options that will help you create a sticky navigation, sidebar or any element."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-code text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Extended Utility Classes"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"A collection of useful utility classes based on Tailwind Syntax to style your content without without the need to use CSS except rarely and in special cases."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-rocket text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"SEO Optimized"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"The latest SEO practices, integrated in our theme, like the Google Structured Data, will make your website rank higher."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-sub-volume text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Bootstrap v5.2"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"Based on the components of Bootstrap we have created our exclusive components are made to empower your next project with our new UI/UX vision."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-gui-management text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Built with NPM & Gulp"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"In order to use News5 you need to install tools such as Node.js and NPM on your system, or you can use the production version directly."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-lightning text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Quick Installation"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"Install the dependencies using Yarn or NPM and use our custom made Gulp or Webapck build tools to get your project up and running literally in a minutes."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-model-alt text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"3rd-Party Plugins"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"All popular and needed 3rd-party plugins are deeply customized in order to perfectly meet our design system requirements and blend with your unique in-house components."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-view-next text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Regular Updates"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"When selecting a theme for your website, make sure that your theme will stay up-to-date and won't be abandoned."}
                    </p>
                  </div>
                </div>
                <div>
                  <div className="panel vstack gap-2 p-2 lg:p-4 bg-white dark:bg-gray-800 rounded-1-5 overflow-hidden">
                    <i className="icon icon-3 lg:icon-4 unicon-chat-bot text-primary dark:text-lime mb-2"></i>
                    <h5 className="h5 lg:h4 -ls-1 m-0">
                      {"Top-Notch Support"}
                    </h5>
                    <p className="fs-6 lg:fs-5 fw-medium -ls-xs text-gray-500 dark:text-gray-200">
                      {"We generally don't provide discounts on our products to keep our user base small, so that we could provide the best support ever."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section id="_inner_pages" className="section panel z-1 py-6 lg:py-8 xl:py-10 bg-white dark:bg-black dark:text-white swiper-parent">
      <div className="section-outer">
        <div className="container max-w-xl">
          <div className="section-inner">
            <div className="panel max-w-700px mx-auto text-center" data-anime="onview: -200; targets: > *; translateY: [48, 0]; opacity: [0, 1]; delay: anime.stagger(200); duration: 750; easing: 'spring(1, 80, 10, 0)'">
              <span className="cstack d-inline-flex h-32px px-3 fs-7 fw-bold border rounded-pill mb-4 shadow-xs">
                {"Inner pages"}
              </span>
              <h3 className="h2 md:h1 -ls-3">
                {"Other inner pages"}
              </h3>
            </div>
            <div className="panel mt-4 lg:mt-6 xl:mt-9">
              <div className="row child-cols-12 g-2" data-anime="onview: -200; targets: > * > *; translateY: [48, 0]; opacity: [0, 1]; delay: anime.stagger(100, { start: 200 }); duration: 1000; easing: 'spring(1, 80, 10, 0)'">
                <div>
                  <div className="panel p-3 lg:p-6 lg:pb-3 rounded-1-5 lg:rounded-2 bg-gray-25 dark:bg-gray-800 overflow-hidden">
                    <h5 className="h4 md:h3 -ls-2 mb-1">
                      {"Blog pages"}
                    </h5>
                    <p className="fs-6 md:fs-5 lg:fs-4 -ls-xs fw-medium text-gray-500 dark:text-gray-300 max-w-600px">
                      {"Blogging pages and different layouts to showcase your articles."}
                    </p>
                    <div className="swiper mt-4 mx-n1 overflow-unset mask-x" data-uc-swiper="items: 4; gap: 0; center: true; center-bounds: true; autoplay: 15000; loop: true; speed: 15000; autoplay-delay: -1; allowTouchMove: false; disableOnInteraction: true; pauseOnMouseEnter: true;">
                      <div className="swiper-wrapper ease-linear">
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/blog.jpg" alt="Blog Classic" />
                                <Link prefetch={false} href="/main/blog" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Blog Classic"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/blog-2cols.jpg" alt="Grid 2 Cols" />
                                <Link prefetch={false} href="/main/blog-2cols" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Grid 2 Cols"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/blog-3cols.jpg" alt="Grid 3 Cols" />
                                <Link prefetch={false} href="/main/blog-3cols" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Grid 3 Cols"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/blog-4cols.jpg" alt="Grid 4 Cols" />
                                <Link prefetch={false} href="/main/blog-4cols" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Grid 4 Cols"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/blog-category.jpg" alt="Archive" />
                                <Link prefetch={false} href="/main/blog-category" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Archive"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/blog-details.jpg" alt="Blog details 1" />
                                <Link prefetch={false} href="/main/blog/the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Blog details 1"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/blog-details-2.jpg" alt="Blog details 2" />
                                <Link prefetch={false} href="/main/blog-details-2/the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Blog details 2"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/blog-details-3.jpg" alt="Blog details 3" />
                                <Link prefetch={false} href="/main/blog-details-3/the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Blog details 3"}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-6">
                  <div className="panel p-3 lg:p-6 lg:pb-3 rounded-1-5 lg:rounded-2 bg-gray-25 dark:bg-gray-800 overflow-hidden">
                    <h5 className="h4 md:h3 -ls-2 mb-1">
                      {"Shop pages"}
                    </h5>
                    <p className="fs-6 md:fs-5 lg:fs-4 -ls-xs fw-medium text-gray-500 dark:text-gray-300">
                      {"An e-commerce ready pages to create your own store."}
                    </p>
                    <div className="swiper mt-4 mx-n1 overflow-unset mask-x" data-uc-swiper="items: 2; gap: 0; center: true; center-bounds: true; autoplay: 15000; loop: true; speed: 15000; autoplay-delay: -1; allowTouchMove: false; disableOnInteraction: true;">
                      <div className="swiper-wrapper ease-linear">
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop.jpg" alt="Grid 4 Cols" />
                                <Link prefetch={false} href="/main/shop" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Grid 4 Cols"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-3.jpg" alt="Grid 3 Cols" />
                                <Link prefetch={false} href="/main/shop-3" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Grid 3 Cols"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-2.jpg" alt="Grid 2 Cols" />
                                <Link prefetch={false} href="/main/shop-2" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Grid 2 Cols"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-sidebar.jpg" alt="With sidebar" />
                                <Link prefetch={false} href="/main/shop-sidebar" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"With sidebar"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-cart.jpg" alt="Cart" />
                                <Link prefetch={false} href="/main/shop-cart" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Cart"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-cart-2.jpg" alt="Cart v2" />
                                <Link prefetch={false} href="/main/shop-cart-2" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Cart v2"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-checkout.jpg" alt="Checkout" />
                                <Link prefetch={false} href="/main/shop-checkout" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Checkout"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-checkout-2.jpg" alt="Checkout v2" />
                                <Link prefetch={false} href="/main/shop-checkout-2" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Checkout v2"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-product-detail.jpg" alt="Product Detail" />
                                <Link prefetch={false} href="/main/shop/disney-toys" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Product Detail"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-product-detail-2.jpg" alt="Product Detail v2" />
                                <Link prefetch={false} href="/main/shop-product-detail-2/disney-toys" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Product Detail v2"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                              <div className="panel overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/shop-order.jpg" alt="Order Confirm" />
                                <Link prefetch={false} href="/main/shop-order" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Order Confirm"}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="lg:col-6">
                  <div className="panel p-3 lg:p-6 lg:pb-3 rounded-1-5 lg:rounded-2 bg-gray-25 dark:bg-gray-800 overflow-hidden">
                    <h5 className="h4 md:h3 -ls-2 mb-1">
                      {"Other pages"}
                    </h5>
                    <p className="fs-6 md:fs-5 lg:fs-4 -ls-xs fw-medium text-gray-500 dark:text-gray-300">
                      {"Other important pages for any publishing website."}
                    </p>
                    <div className="swiper mt-4 mx-n1 overflow-unset mask-x" data-uc-swiper="items: 2; gap: 0; center: true; center-bounds: true; autoplay: 15000; loop: true; speed: 15000; autoplay-delay: -1; allowTouchMove: false; disableOnInteraction: true;">
                      <div className="swiper-wrapper ease-linear items-center">
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel">
                              <div className="panel d-inline-flex justify-center items-center bg-white rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/sign-up.jpg" alt="Sign up" />
                                <Link prefetch={false} href="/main/sign-up" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Sign up"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel">
                              <div className="panel d-inline-flex justify-center items-center bg-white rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/page-privacy.jpg" alt="Privacy policy" />
                                <Link prefetch={false} href="/main/page-privacy" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Privacy policy"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel">
                              <div className="panel d-inline-flex justify-center items-center bg-white rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/sign-in.jpg" alt="Sign in" />
                                <Link prefetch={false} href="/main/sign-in" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Sign in"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel">
                              <div className="panel d-inline-flex justify-center items-center bg-white rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/page-terms.jpg" alt="Terms of use" />
                                <Link prefetch={false} href="/main/page-terms" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Terms of use"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel">
                              <div className="panel d-inline-flex justify-center items-center bg-white rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/reset-password.jpg" alt="Reset password" />
                                <Link prefetch={false} href="/main/reset-password" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Reset password"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel">
                              <div className="panel d-inline-flex justify-center items-center bg-white rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/404.jpg" alt="404 page" />
                                <Link prefetch={false} href="/main/404" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"404 page"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel">
                              <div className="panel d-inline-flex justify-center items-center bg-white rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/coming-soon.jpg" alt="Coming soon" />
                                <Link prefetch={false} href="/main/coming-soon" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"Coming soon"}
                            </h5>
                          </div>
                        </div>
                        <div className="swiper-slide">
                          <div className="item-preview panel p-1">
                            <div className="panel">
                              <div className="panel d-inline-flex justify-center items-center bg-white rounded-1 shadow-xs hover:shadow-md transition-all duration-250 hover:-translate-y-1 overflow-hidden">
                                <img className="w-100" src="/assets/images/demos/screenshots/main/page-faq.jpg" alt="FAQ" />
                                <Link prefetch={false} href="/main/page-faq" className="position-cover" target="_blank"></Link>
                              </div>
                            </div>
                            <h5 className="h6 mt-2 text-center">
                              {"FAQ"}
                            </h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <footer id="footer_cta" className="section panel bg-white dark:bg-black uc-dark">
      <div className="container max-w-xl">
        <div className="panel py-4 lg:py-6 xl:py-8 rounded-top-1-5 lg:rounded-top-2 bg-gray-50 dark:bg-black dark:text-white">
          <div className="media-cover opacity-15 blend-plus-lighter" data-src="/assets/images/landing/demos-pages.png" data-uc-img=""></div>
          <div className="panel max-w-700px mx-auto text-center" data-anime="onview: -200; targets: > *; translateY: [48, 0]; opacity: [0, 1]; delay: anime.stagger(200); duration: 750; easing: 'spring(1, 80, 10, 0)'">
            <div className="elite-author d-inline-flex items-center gap-1 text-start pe-3 mx-auto mb-4 border rounded-pill shadow-xs">
              <span className="cstack w-40px h-40px p-1 rounded-circle border" style={{"marginLeft":"-1px"} as React.CSSProperties}>
                <img className="w-32px h-32px" src="/assets/images/landing/elite.svg" alt="Elite" />
              </span>
              <span className="fw-bold -ls-xs lh-lg">
                {"Made by Elite Author"}
              </span>
            </div>
            <h3 className="h1 md:display-6 -ls-4">
              {"Create a Modern Blog or Magazine with News5"}
            </h3>
            <p className="fs-6 md:fs-5 lg:fs-4 -ls-xs fw-medium text-gray-500 dark:text-gray-300">
              {"The premium news site template you've been looking for."}
            </p>
            <a href="#" className="btn btn-md xl:btn-lg btn-primary dark:bg-lime dark:border-lime dark:text-dark rounded-pill gap-2 mt-4 xl:mt-6">
              <span>
                {"Try it Now"}
              </span>
              <i className="icon icon-narrow fw-bold unicon-arrow-up-right"></i>
            </a>
            <p className="fs-5 fw-bold -ls-xs mt-2">
              {"Single Purchase, Unlimited Lifetime Access"}
            </p>
          </div>
        </div>
      </div>
    </footer>
  </div>
</div>
    </TemplateShell>
  );
}
