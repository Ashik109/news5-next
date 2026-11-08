import type { Metadata } from "next";
import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header10 from "@/components/template/Header10";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-two" theme="/assets/css/theme/demo-two.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<div id="uc-menu-panel" data-uc-offcanvas="overlay: true;">
  <div className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
    <header className="uc-offcanvas-header hstack justify-between items-center pb-4 bg-white dark:bg-gray-900">
      <div className="uc-logo">
        <SiteLink href="/" className="h5 text-none text-gray-900 dark:text-white">
          <img className=" uc-transition-scale-up uc-transition-opaque w-32px" src="/assets/images/common/logo-icon.svg" alt="News5" data-uc-svg="" />
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
              <SiteLink href="/">
                {"Classic News"}
              </SiteLink>
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
                  <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-07.jpg" alt="Laptop Cover" data-uc-img="loading: lazy" />
                  <SiteLink href="/shop/laptop-cover" className="position-cover" data-caption="Laptop Cover"></SiteLink>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <SiteLink className="text-none text-dark dark:text-white" href="/shop/laptop-cover">
                      {"Laptop Cover"}
                    </SiteLink>
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
                  <a href="#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-08.jpg" alt="Disney Toys" data-uc-img="loading: lazy" />
                  <SiteLink href="/shop/disney-toys" className="position-cover" data-caption="Disney Toys"></SiteLink>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <SiteLink className="text-none text-dark dark:text-white" href="/shop/disney-toys">
                      {"Disney Toys"}
                    </SiteLink>
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
                  <a href="#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-09.jpg" alt="Screen Axe" data-uc-img="loading: lazy" />
                  <SiteLink href="/shop/screen-axe" className="position-cover" data-caption="Screen Axe"></SiteLink>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <SiteLink className="text-none text-dark dark:text-white" href="/shop/screen-axe">
                      {"Screen Axe"}
                    </SiteLink>
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
                  <a href="#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-10.jpg" alt="Airpods Pro" data-uc-img="loading: lazy" />
                  <SiteLink href="/shop/airpods-pro" className="position-cover" data-caption="Airpods Pro"></SiteLink>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <SiteLink className="text-none text-dark dark:text-white" href="/shop/airpods-pro">
                      {"Airpods Pro"}
                    </SiteLink>
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
                  <a href="#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
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
            <SiteLink href="/shop-cart" className="btn btn-md btn-outline-gray-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
              {"View cart"}
            </SiteLink>
            <SiteLink href="/shop-checkout" className="btn btn-md btn-primary text-white">
              {"Checkout"}
            </SiteLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<UcFavoritesModal1 />
<div id="uc-newsletter-modal" data-uc-modal="overlay: true">
  <div className="uc-modal-dialog w-800px bg-white text-dark dark:bg-gray-900 dark:text-white rounded overflow-hidden">
    <button className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" type="button">
      <i className="unicon-close"></i>
    </button>
    <div className="row md:child-cols-6 col-match g-0">
      <div className="d-none md:d-flex">
        <div className="position-relative w-100 ratio-1x1">
          <img className=" uc-transition-scale-up uc-transition-opaque media-cover" src="/assets/images/demo-two/common/newsletter.jpg" alt="Newsletter image" />
        </div>
      </div>
      <div>
        <div className="panel vstack self-center p-4 md:py-8 text-center">
          <h3 className="h3 md:h2">
            {"Subscribe to the Newsletter"}
          </h3>
          <p className="ft-tertiary">
            {"Join 10k+ people to get notified about new posts, news and tips."}
          </p>
          <div className="panel mt-2 lg:mt-4">
            <form className="vstack gap-1">
              <input type="email" className="form-control form-control-sm w-full fs-6 bg-white dark:border-white dark:border-gray-700 dark:text-dark" placeholder="Your email address.." />
              <button type="submit" className="btn btn-sm btn-primary">
                {"Sign up"}
              </button>
            </form>
            <p className="fs-7 mt-2">
              {"Do not worry we don't spam!"}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header10 />
<div id="wrapper" className="wrap overflow-hidden-x">
  <div className="section panel overflow-hidden">
    <div className="section-outer panel pb-4 pt-3 sm:py-4 sm:py-5">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4">
          <div className="section-content">
            <div className="row child-cols-12 g-3 xl:g-4">
              <div className="lg:col-6 lg:order-2">
                <div className="panel swiper-parent">
                  <div className="swiper w-100 uc-visible-toggle" data-uc-swiper="items: 1; active: 1; gap: 32;  speed: 500; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: d-none;">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Gadgets"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Mar 8, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                  {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className="uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Startups"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Mar 8, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                  {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className="uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Gadgets"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Mar 8, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                  {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Mar 8, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                  {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Mar 7, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Tech"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Mar 1, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                  {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Network"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Feb 28, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                  {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Virtual Reality"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Feb 22, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                  {"AI and Marketing: Unlocking Customer Insights"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Feb 14, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                  {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                      <div className="swiper-slide">
                        <div>
                          <article className="post type-post panel vstack gap-3">
                            <div className="post-header panel vstack justify-center text-center gap-1">
                              <div className="post-meta panel hstack justify-center gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Trips"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Feb 8, 2024"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h5 xl:h4 m-0 m-0 max-w-500px mx-auto">
                                <SiteLink className="text-none" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                                  {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                            </div>
                          </article>
                        </div>
                      </div>
                    </div>
                    <div className="swiper-nav nav-next btn btn-gray-900 p-0 border-0 w-40px h-40px rounded-circle shadow-sm position-absolute top-50 end-0 me-2 z-1 uc-hidden-hover">
                      <i className="icon-1 unicon-chevron-right"></i>
                    </div>
                    <div className="swiper-nav nav-prev btn btn-gray-900 p-0 border-0 w-40px h-40px rounded-circle shadow-sm position-absolute top-50 start-0 ms-2 z-1 uc-hidden-hover">
                      <i className="icon-1 unicon-chevron-left"></i>
                    </div>
                    <div className="swiper-pagination dot-nav gap-2 mt-3 position-relative text-primary"></div>
                  </div>
                </div>
              </div>
              <div className="lg:col-3 lg:order-1">
                <div className="block-layout panel">
                  <div className="block-header panel vstack items-center justify-center text-center gap-1 mb-3">
                    <h2 className="block-title h5 m-0 hstack gap-1 border-bottom pb-1 dark:text-white">
                      <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                      <span>
                        {"Hot now"}
                      </span>
                    </h2>
                  </div>
                  <div className="block-content panel row sep-x gx-4 gy-3 lg:gy-2">
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"10:23"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                            {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"09:30"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                            {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"09:10"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                            {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"08:00"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                            {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"22:00"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                            {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"14:15"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                            {"Business Agility the Digital Age: Leveraging AI and Automation"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"16:30"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                            {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"20:00"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                            {"AI and Marketing: Unlocking Customer Insights"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"12:00"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                            {"Hidden Gems: Underrated Travel Destinations Around the World"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel d-flex gap-2">
                        <div>
                          <div className="fs-7 fw-bold text-center translate-y-narrow bg-gray-50 dark:bg-white dark:text-black min-w-48px">
                            {"12:15"}
                          </div>
                        </div>
                        <h6 className="fs-6 lg:fs-7 xl:fs-6 fw-medium text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                            {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                          </SiteLink>
                        </h6>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 order-3 d-none lg:d-block">
                <div className="block-layout panel">
                  <div className="block-header panel vstack items-center justify-center mb-2 px-2 py-1 bg-gray-800 text-white uc-dark">
                    <h2 className="block-title h6 lg:h5 m-0 cstack gap-1">
                      <i className="icon icon-narrow unicon-dot-mark text-red" data-uc-animate="flash"></i>
                      <span>
                        {"Live now"}
                      </span>
                    </h2>
                  </div>
                  <div className="block-content panel vstack gap-3">
                    <div>
                      <article className="post type-post panel vstack gap-1 lg:gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-video bg-gray-700 ratio ratio-16x9">
                            <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                              <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/videos/vid-01.webm" type="video/webm" />
                              {" Your browser does not support the video tag. "}
                            </video>
                          </div>
                          <div className="has-video-overlay position-absolute top-0 end-0 w-150px h-150px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                          <span className="cstack has-video-icon position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                            <i className="icon-narrow unicon-play-filled-alt"></i>
                          </span>
                          <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                  {"Tech"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Mar 1, 2024"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                          <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                              {"Business Agility the Digital Age: Leveraging AI and Automation"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                  {"Tech Tools for your Time Management: Enhancing Productivity"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Dec 8, 2023"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                                  {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Sep 8, 2023"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
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
  <div id="tv-posts" className="tv-posts section panel overflow-hidden bg-gray-800 text-white uc-dark">
    <div className="section-outer panel py-4 sm:py-5">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-3 xl:gap-4">
          <div className="section-header panel vstack items-center justify-center text-center gap-1">
            <h2 className="h6 lg:h5 m-0 text-white hstack gap-1">
              <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
              <span>
                {"Hand-picked news"}
              </span>
            </h2>
          </div>
          <div className="section-content">
            <div className="block-layout grid-overlay-layout">
              <div className="block-content">
                <div className="row child-cols-12 md:child-cols-6 g-1 col-match">
                  <div>
                    <div>
                      <article className="post type-post panel vstack gap-2 lg:gap-3 h-100">
                        <div className="post-media panel uc-transition-toggle overflow-hidden h-100">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                            <canvas className="h-100 w-100"></canvas>
                            <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                          </div>
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                            <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                        <div className="post-header panel vstack justify-end items-start gap-1 sm:gap-2 p-2 sm:p-4 position-cover text-white">
                          <h3 className="post-title h5 sm:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                            <SiteLink className="text-none text-white" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                              {"Gaming in the Age of AI: Strategies for Startups"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                  {"Virtual Reality"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Jun 8, 2023"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                        <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                      </article>
                    </div>
                  </div>
                  <div>
                    <div className="panel">
                      <div className="row child-cols-6 g-1">
                        <div>
                          <article className="post type-post panel vstack gap-2 lg:gap-3">
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-end items-start gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                  {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Travel"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Jan 8, 2024"}
                                    </span>
                                  </div>
                                </div>
                                <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                  <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                    <i className="icon-narrow unicon-bookmark-add"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel vstack gap-2 lg:gap-3">
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-end items-start gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                  {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Tech"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Jan 8, 2024"}
                                    </span>
                                  </div>
                                </div>
                                <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                  <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                    <i className="icon-narrow unicon-bookmark-add"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel vstack gap-2 lg:gap-3">
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-end items-start gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                  {"Tech Tools for your Time Management: Enhancing Productivity"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"Startups"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Dec 8, 2023"}
                                    </span>
                                  </div>
                                </div>
                                <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                  <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                    <i className="icon-narrow unicon-bookmark-add"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel vstack gap-2 lg:gap-3">
                            <div className="post-media panel uc-transition-toggle overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-4x3">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-end items-start gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                                  {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"❘"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"Sep 8, 2023"}
                                    </span>
                                  </div>
                                </div>
                                <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                  <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                    <i className="icon-narrow unicon-bookmark-add"></i>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                          </article>
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
  </div>
  <div id="trending-posts" className="trending-posts section panel overflow-hidden">
    <div className="section-outer panel py-4 sm:py-5">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols col-match g-3 xl:g-4" data-uc-grid="">
            <div className="lg:col-4">
              <div className="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden p-3 bg-gray-25 dark:bg-gray-800">
                <div className="block-header panel">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                      {"Most watched"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-3">
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                  {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Jan 8, 2024"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                  {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Jan 8, 2024"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                  {"Tech Tools for your Time Management: Enhancing Productivity"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Dec 8, 2023"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-2 xl:gap-3 panel overflow-hidden">
                <div className="block-header panel hstack justify-between px-2 py-1 bg-gray-800 text-white uc-dark">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                      {"Politics"}
                    </SiteLink>
                  </h2>
                  <ul className="nav-x gap-narrow">
                    <li>
                      <a href="#tw" className="w-24px h-24px cstack rounded-circle hover:bg-primary hover:text-dark transition-colors duration-200">
                        <i className="icon icon-1 unicon-logo-x-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#in" className="w-24px h-24px cstack rounded-circle hover:bg-primary hover:text-dark transition-colors duration-200">
                        <i className="icon icon-1 unicon-logo-instagram"></i>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="block-content">
                  <div className="row child-cols-6 g-2 gy-3 md:gx-3 md:gy-4">
                    <div>
                      <article className="post type-post panel vstack gap-1 lg:gap-2">
                        <div className="post-media panel uc-transition-toggle overflow-hidden">
                          <div className="featured-image uc-transition-scale-up uc-transition-opaque bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                  {"Gadgets"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Mar 8, 2024"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                          <h3 className="post-title h6 lg:h5 fw-semibold m-0 text-truncate-2 mb-1">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                              {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1 lg:gap-2">
                        <div className="post-media panel uc-transition-toggle overflow-hidden">
                          <div className="featured-image uc-transition-scale-up uc-transition-opaque bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                  {"Startups"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Mar 8, 2024"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                          <h3 className="post-title h6 lg:h5 fw-semibold m-0 text-truncate-2 mb-1">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                              {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
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
  <div id="category-posts" className="category-posts section panel overflow-hidden">
    <div className="section-outer panel pb-4 sm:pb-5">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols-4 gx-3 xl:gx-4 gy-6" data-uc-grid="">
            <div>
              <div className="block-layout grid-layout vstack gap-2 xl:gap-3 panel overflow-hidden">
                <div className="block-header panel border-bottom pb-1 min-h-40px">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="post-title text-none hover:text-primary duration-150" href="/blog-category">
                      {"Social"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content panel vstack gap-3">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel uc-transition-toggle overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                {"Tech"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"Jan 8, 2024"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                            {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                {"Tech Tools for your Time Management: Enhancing Productivity"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Dec 8, 2023"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                                {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Sep 8, 2023"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                                {"Gaming in the Age of AI: Strategies for Startups"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Jun 8, 2023"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-2 xl:gap-3 panel overflow-hidden">
                <div className="block-header panel border-bottom pb-1 min-h-40px">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="post-title text-none hover:text-primary duration-150" href="/blog-category">
                      {"Sports"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content panel vstack gap-3">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel uc-transition-toggle overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"Mar 8, 2024"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                            {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Mar 7, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                {"Hidden Gems: Underrated Travel Destinations Around the World"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Feb 14, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                                {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Sep 8, 2023"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-2 xl:gap-3 panel overflow-hidden">
                <div className="block-header panel border-bottom pb-1 min-h-40px">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="post-title text-none hover:text-primary duration-150" href="/blog-category">
                      {"Arts"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content panel vstack gap-3">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel uc-transition-toggle overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                {"Virtual Reality"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"Feb 22, 2024"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                            {"AI and Marketing: Unlocking Customer Insights"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                {"Hidden Gems: Underrated Travel Destinations Around the World"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Feb 14, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                                {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Feb 8, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Jan 8, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-2 xl:gap-3 panel overflow-hidden">
                <div className="block-header panel border-bottom pb-1 min-h-40px">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="post-title text-none hover:text-primary duration-150" href="/blog-category">
                      {"Economy"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content panel vstack gap-3">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel uc-transition-toggle overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                {"Gadgets"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"Mar 8, 2024"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                            {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Mar 8, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Mar 8, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Mar 8, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-2 xl:gap-3 panel overflow-hidden">
                <div className="block-header panel border-bottom pb-1 min-h-40px">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="post-title text-none hover:text-primary duration-150" href="/blog-category">
                      {"International"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content panel vstack gap-3">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel uc-transition-toggle overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"Feb 14, 2024"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                            {"Hidden Gems: Underrated Travel Destinations Around the World"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                                {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Feb 8, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Jan 8, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Jan 8, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover uc-transition-scale-up uc-transition-opaque image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-2 xl:gap-3 panel overflow-hidden">
                <div className="block-header panel min-h-40px px-2 py-1 bg-gray-800 text-white uc-dark">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="post-title text-none hover:text-primary duration-150" href="/blog-category">
                      {"Dialogues"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content panel vstack gap-3">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"Mar 7, 2024"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                            {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel uc-transition-toggle overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                {"Tech"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"Mar 1, 2024"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                            {"Business Agility the Digital Age: Leveraging AI and Automation"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="national-posts" className="national-posts section panel overflow-hidden">
    <div className="section-outer panel pb-4 sm:pb-5">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols g-4" data-uc-grid="">
            <div>
              <div className="block-layout grid-layout vstack gap-2 xl:gap-3 panel overflow-hidden">
                <div className="block-header panel border-bottom pb-1 min-h-40px">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="post-title text-none hover:text-primary duration-150" href="/blog-category">
                      {"Global"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content panel vstack lg:hstack items-start gap-3">
                  <div className="block-left w-100 lg:w-3/4">
                    <div>
                      <article className="post type-post panel vstack gap-1 lg:gap-2">
                        <div className="post-media panel uc-transition-toggle overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                  {"Tech"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Mar 1, 2024"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                          <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                              {"Business Agility the Digital Age: Leveraging AI and Automation"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="block-right panel vstack gap-3">
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Mar 7, 2024"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                  {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Mar 1, 2024"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                  {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Feb 28, 2024"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                  {"AI and Marketing: Unlocking Customer Insights"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Feb 22, 2024"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:col-4">
              <div className="block-layout grid-layout vstack gap-2 xl:gap-3 panel overflow-hidden">
                <div className="block-header panel border-bottom pb-1 min-h-40px">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="post-title text-none hover:text-primary duration-150" href="/blog-category">
                      {"National"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content panel vstack gap-3">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel uc-transition-toggle overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none hover:text-primary dark:text-primary duration-150" href="/blog-category">
                                {"Startups"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"Dec 8, 2023"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 xl:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                            {"Tech Tools for your Time Management: Enhancing Productivity"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                  <div>
                    <article className="post type-post panel">
                      <div className="row child-cols g-2" data-uc-grid="">
                        <div>
                          <div className="post-header panel vstack justify-between gap-1">
                            <h3 className="post-title h6 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                                {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                              </SiteLink>
                            </h3>
                            <div className="post-meta fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Sep 8, 2023"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="col-auto">
                          <div className="post-media panel uc-transition-toggle overflow-hidden max-w-72px min-w-64px lg:min-w-72px">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                              <img className=" uc-transition-scale-up uc-transition-opaque media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="opinions-posts" className="opinions-posts section panel overflow-hidden">
    <div className="section-outer panel pb-5 sm:pb-6">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols col-match g-3" data-uc-grid="">
            <div className="lg:col-4">
              <div className="block-layout grid-layout vstack panel overflow-hidden">
                <div className="block-header panel min-h-40px px-2 py-1 bg-gray-800 text-white uc-dark">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <span className="post-title">
                      {"Channel survey"}
                    </span>
                  </h2>
                </div>
                <div className="block-content panel vstack gap-3 px-2 py-3 xl:p-3 bg-gray-25 dark:bg-gray-800">
                  <p className="fs-5 fw-semibold">
                    {"What measures do you think will solve the problem of water shortage in USA?"}
                  </p>
                  <div className="poll-content vstack gap-1">
                    <label className="hstack items-start gap-1">
                      <input className="form-check-input rounded-narrow dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="checkbox" />
                      <span>
                        {"Rationalization of water consumption"}
                      </span>
                    </label>
                    <label className="hstack items-start gap-1">
                      <input className="form-check-input rounded-narrow dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="checkbox" />
                      <span>
                        {"Building new dams"}
                      </span>
                    </label>
                    <label className="hstack items-start gap-1">
                      <input className="form-check-input rounded-narrow dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="checkbox" />
                      <span>
                        {"Seawater desalination"}
                      </span>
                    </label>
                    <label className="hstack items-start gap-1">
                      <input className="form-check-input rounded-narrow dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="checkbox" />
                      <span>
                        {"Sewage water treatment"}
                      </span>
                    </label>
                  </div>
                  <div className="poll-actions hstack gap-1">
                    <a href="#" className="poll-vote btn btn-sm btn-primary text-dark">
                      <span>
                        {"Vote"}
                      </span>
                    </a>
                    <a href="#" className="poll-archive btn btn-sm btn-gray-800 dark:bg-white dark:hover:bg-gray-100 dark:text-dark">
                      <span>
                        {"Poll archive"}
                      </span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-4 panel overflow-hidden p-3 bg-gray-25 dark:bg-gray-800">
                <div className="block-header panel">
                  <h2 className="h6 lg:h5 m-0 text-inherit dark:text-white hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <span className="post-title">
                      {"Opinions and positions"}
                    </span>
                  </h2>
                </div>
                <div className="block-content panel hstack items-start gap-3 overflow-hidden">
                  <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-4 gx-3 gy-4 xl:gy-6" data-uc-grid="">
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden w-72px">
                              <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/avatars/01.png" alt="image" data-uc-img="loading: lazy" />
                              </figure>
                              <SiteLink href="/blog/the-family-code-is-not-a-circus-for-spectacle" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack gap-narrow">
                              <span className="fs-7 fw-medium opacity-50">
                                {"David Peterson says:"}
                              </span>
                              <h3 className="post-title h6 m-0 text-truncate-3 hover:text-primary">
                                <SiteLink className="fs-6 xl:fs-5 text-none hover:text-primary duration-150" href="/blog/the-family-code-is-not-a-circus-for-spectacle">
                                  {"The family code is not a circus for spectacle..!"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden w-72px">
                              <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/avatars/02.png" alt="image" data-uc-img="loading: lazy" />
                              </figure>
                              <SiteLink href="/blog/benkiranes-statements-incite-sedition-and-an-explicit-threat-against-reforming-the-family-code" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack gap-narrow">
                              <span className="fs-7 fw-medium opacity-50">
                                {"Peter Sawyer says:"}
                              </span>
                              <h3 className="post-title h6 m-0 text-truncate-3 hover:text-primary">
                                <SiteLink className="fs-6 xl:fs-5 text-none hover:text-primary duration-150" href="/blog/benkiranes-statements-incite-sedition-and-an-explicit-threat-against-reforming-the-family-code">
                                  {"Benkirane’s statements incite “sedition” and an explicit threat against reforming the Family Code"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden w-72px">
                              <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/avatars/03.png" alt="image" data-uc-img="loading: lazy" />
                              </figure>
                              <SiteLink href="/blog/the-matter-of-breaking-the-fast-in-ramadan-is-the-responsibility-of-the-doctor-not-the-jurist" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack gap-narrow">
                              <span className="fs-7 fw-medium opacity-50">
                                {"Sarah Eddrissi says:"}
                              </span>
                              <h3 className="post-title h6 m-0 text-truncate-3 hover:text-primary">
                                <SiteLink className="fs-6 xl:fs-5 text-none hover:text-primary duration-150" href="/blog/the-matter-of-breaking-the-fast-in-ramadan-is-the-responsibility-of-the-doctor-not-the-jurist">
                                  {"The matter of breaking the fast in Ramadan is the responsibility of the doctor, not the “jurist”"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden w-72px">
                              <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/avatars/04.png" alt="image" data-uc-img="loading: lazy" />
                              </figure>
                              <SiteLink href="/blog/france-turkish-a-step-towards-the-future" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack gap-narrow">
                              <span className="fs-7 fw-medium opacity-50">
                                {"Anna Luis says:"}
                              </span>
                              <h3 className="post-title h6 m-0 text-truncate-3 hover:text-primary">
                                <SiteLink className="fs-6 xl:fs-5 text-none hover:text-primary duration-150" href="/blog/france-turkish-a-step-towards-the-future">
                                  {"France - turkish...a step towards the future!"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden w-72px">
                              <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/avatars/05.png" alt="image" data-uc-img="loading: lazy" />
                              </figure>
                              <SiteLink href="/blog/in-response-to-francisco-carreon-given-the-fallacies-and-allegations" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack gap-narrow">
                              <span className="fs-7 fw-medium opacity-50">
                                {"Jason Blake says:"}
                              </span>
                              <h3 className="post-title h6 m-0 text-truncate-3 hover:text-primary">
                                <SiteLink className="fs-6 xl:fs-5 text-none hover:text-primary duration-150" href="/blog/in-response-to-francisco-carreon-given-the-fallacies-and-allegations">
                                  {"In response to Francisco Carreon given the fallacies and allegations"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden w-72px">
                              <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/avatars/06.png" alt="image" data-uc-img="loading: lazy" />
                              </figure>
                              <SiteLink href="/blog/ramadan-is-the-responsibility-of-the-doctor-not-the-jurist" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack gap-narrow">
                              <span className="fs-7 fw-medium opacity-50">
                                {"Henry Djokoviç says:"}
                              </span>
                              <h3 className="post-title h6 m-0 text-truncate-3 hover:text-primary">
                                <SiteLink className="fs-6 xl:fs-5 text-none hover:text-primary duration-150" href="/blog/ramadan-is-the-responsibility-of-the-doctor-not-the-jurist">
                                  {"Ramadan is the responsibility of the doctor, not the “jurist”"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden w-72px">
                              <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/avatars/07.png" alt="image" data-uc-img="loading: lazy" />
                              </figure>
                              <SiteLink href="/blog/france-england-are-we-heading-towards-a-new-page" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack gap-narrow">
                              <span className="fs-7 fw-medium opacity-50">
                                {"Rico Santos says:"}
                              </span>
                              <h3 className="post-title h6 m-0 text-truncate-3 hover:text-primary">
                                <SiteLink className="fs-6 xl:fs-5 text-none hover:text-primary duration-150" href="/blog/france-england-are-we-heading-towards-a-new-page">
                                  {"France - england: Are we heading towards a new page?"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden w-72px">
                              <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/avatars/08.png" alt="image" data-uc-img="loading: lazy" />
                              </figure>
                              <SiteLink href="/blog/media-website-in-the-moroccan-constitution" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack gap-narrow">
                              <span className="fs-7 fw-medium opacity-50">
                                {"Nisi Nyung says:"}
                              </span>
                              <h3 className="post-title h6 m-0 text-truncate-3 hover:text-primary">
                                <SiteLink className="fs-6 xl:fs-5 text-none hover:text-primary duration-150" href="/blog/media-website-in-the-moroccan-constitution">
                                  {"Media website in the Moroccan constitution"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden w-72px">
                              <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className=" uc-transition-scale-up uc-transition-opaque media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/avatars/09.png" alt="image" data-uc-img="loading: lazy" />
                              </figure>
                              <SiteLink href="/blog/usa-and-the-fight-against-terrorism-a-realistic-strategy-based-on-proactiveness-and-cooperation" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack gap-narrow">
                              <span className="fs-7 fw-medium opacity-50">
                                {"Roman Harry says:"}
                              </span>
                              <h3 className="post-title h6 m-0 text-truncate-3 hover:text-primary">
                                <SiteLink className="fs-6 xl:fs-5 text-none hover:text-primary duration-150" href="/blog/usa-and-the-fight-against-terrorism-a-realistic-strategy-based-on-proactiveness-and-cooperation">
                                  {"USA and the fight against terrorism: a realistic strategy based on proactiveness and cooperation"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
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
<footer id="uc-footer" className="uc-footer panel uc-dark">
  <div className="footer-outer py-4 lg:py-6 bg-gray-300 bg-opacity-10 dark:bg-gray-800 dark:bg-opacity-100">
    <div className="container max-w-xl">
      <div className="footer-inner vstack gap-4 lg:gap-6">
        <div className="uc-footer-top">
          <div className="row child-cols lg:child-cols-2 justify-between g-4" data-uc-grid="">
            <div className="col-12 lg:col-5">
              <div className="vstack gap-3 dark:text-white">
                <SiteLink href="/">
                  <img className=" uc-transition-scale-up uc-transition-opaque uc-logo w-80px text-gray-900 dark:text-white" src="/assets/images/demo-two/common/logo.svg" alt="News5" data-uc-svg="" />
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
    </TemplateShell>
  );
}
