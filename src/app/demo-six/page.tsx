import type { Metadata } from "next";
import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu7 from "@/components/template/MobileMenu7";
import UcCartPanel2 from "@/components/template/UcCartPanel2";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal7 from "@/components/template/NewsletterModal7";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Footer7 from "@/components/template/Footer7";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-six" theme="/assets/css/theme/demo-six.min.css" bodyClass="uni-body panel bg-gray-50 text-gray-900 dark:bg-black dark:text-white text-opacity-50 overflow-x-hidden">
<SearchModal1 />
<MobileMenu7 />
<UcCartPanel2 />
<UcFavoritesModal1 />
<NewsletterModal7 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<header className="uc-header header-six uc-navbar-sticky-wrap z-999 border-top border-3 border-primary" data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
  <nav className="uc-navbar-container bg-white dark:bg-gray-900 fs-6 z-1">
    <div className="uc-top-navbar panel z-3 min-h-32px overflow-hidden border-bottom d-none" style={{"--uc-nav-height":"32px"} as React.CSSProperties} data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container max-w-xl">
        <div className="hstack panel z-1">
          <div className="uc-navbar-left gap-2 lg:gap-3">
            <div className="uc-navbar-item">
              <span className="datetime fs-7 text-gray-900 dark:text-white text-opacity-50">
                {"23 April, 2024"}
              </span>
            </div>
            <div className="opacity-30">
              {"|"}
            </div>
            <div className="uc-navbar-item">
              <ul className="uc-social-header nav-x gap-narrow d-none lg:d-flex text-gray-900 dark:text-white">
                <li>
                  <a href="#fb" className="cstack w-24px h-24px">
                    <i className="icon icon-1 unicon-logo-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#x" className="cstack w-24px h-24px">
                    <i className="icon icon-1 unicon-logo-x-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="#in" className="cstack w-24px h-24px">
                    <i className="icon icon-1 unicon-logo-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#yt" className="cstack w-24px h-24px">
                    <i className="icon icon-1 unicon-logo-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="uc-navbar-right gap-2">
            <div className="uc-navbar-item">
              <a className="uc-account-trigger btn btn-sm border-0 p-0 duration-0 dark:text-white" href="#uc-newsletter-modal" data-uc-toggle="">
                <i className="icon icon-1 unicon-email-filled"></i>
                <span>
                  {"Newsletter"}
                </span>
              </a>
            </div>
            <div className="opacity-30">
              {"|"}
            </div>
            <div className="uc-navbar-item">
              <div className="uc-modes-trigger w-32px h-32px border rounded-circle text-dark dark:text-white" data-darkmode-toggle="">
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
    <div className="uc-center-navbar panel z-2">
      <div className="container max-w-xl">
        <div className="uc-navbar min-h-72px lg:min-h-80px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div className="uc-navbar-left">
            <div className="d-block lg:d-none">
              <a className="uc-menu-trigger" href="#uc-menu-panel" data-uc-toggle=""></a>
            </div>
            <div className="uc-logo d-block md:d-none">
              <SiteLink href="/">
                <img className="w-80px d-none dark:d-block" src="/assets/images/demo-six/common/logo-dark.svg" alt="News5" />
                <img className="w-80px d-block dark:d-none" src="/assets/images/demo-six/common/logo-light.svg" alt="News5" />
              </SiteLink>
            </div>
            <div className="uc-logo d-none md:d-block">
              <SiteLink href="/">
                <img className="w-100px d-none dark:d-block" src="/assets/images/demo-six/common/logo-dark.svg" alt="News5" />
                <img className="w-100px d-block dark:d-none" src="/assets/images/demo-six/common/logo-light.svg" alt="News5" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-right gap-2 lg:gap-3">
            <ul className="uc-navbar-nav gap-4 fs-4 text-uppercase fw-bold me-2 d-none lg:d-flex" style={{"--uc-nav-height":"80px"} as React.CSSProperties}>
              <li>
                <a href="#">
                  {"Latest "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row col-match g-2">
                    <div className="w-1/5">
                      <div className="uc-navbar-switcher-nav p-1 rounded bg-gray-25 dark:bg-gray-800">
                        <ul className="uc-tab-left fs-5 text-uppercase text-end" data-uc-tab="connect: #uc-navbar-switcher-tending; animation: uc-animation-slide-right-small, uc-animation-slide-left-small">
                          <li>
                            <a href="#">
                              {"All"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Football"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Basketball"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Tennis"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Esports"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-4/5">
                      <div id="uc-navbar-switcher-tending" className="uc-navbar-switcher uc-switcher">
                        <div className="row child-cols col-match g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"23d ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-21.jpg" alt="How Businesses Are Adapting to E-Commerce and AI Integration" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Racing"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"29d ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"How Businesses Are Adapting to E-Commerce and AI Integration"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-22.jpg" alt="Technology: Wearables, AR, and AI in the Apparel Industry" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Sprint"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Technology: Wearables, AR, and AI in the Apparel Industry"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Football"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2h ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Football"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"12h ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Football"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"29d ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Football"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"3mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Tech Tools for your Time Management: Enhancing Productivity"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"1h ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"7d ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"6mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"1yr ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Top Independent Contractors to Invest in Best of Startups"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Tennis"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"1min ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Tennis"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"55min ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Tennis"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"9d ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Tennis"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"23d ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"15d ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"AI and Marketing: Unlocking Customer Insights"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"9mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Gaming in the Age of AI: Strategies for Startups"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"·"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                    {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
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
              </li>
              <li>
                <a href="#">
                  {"Football "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2h ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"12h ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"29d ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"3mo ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Tech Tools for your Time Management: Enhancing Productivity"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1yr ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Potential of Immersive Technologies help your Business Grow"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  {"Basketball "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1h ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"7d ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Business Agility the Digital Age: Leveraging AI and Automation"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"6mo ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1yr ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Top Independent Contractors to Invest in Best of Startups"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  {"Tennis "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1min ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"55min ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"9d ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"23d ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Hidden Gems: Underrated Travel Destinations Around the World"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  {"Esports "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"15d ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"AI and Marketing: Unlocking Customer Insights"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"9mo ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Gaming in the Age of AI: Strategies for Startups"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"·"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"23d ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                              {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  <i className="icon-2 fw-medium unicon-overflow-menu-horizontal"></i>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols g-4">
                    <div>
                      <div className="row child-cols g-4">
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header text-uppercase mb-1">
                              {"Main Pages"}
                            </li>
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
                              <SiteLink href="/">
                                {"Sports"}
                              </SiteLink>
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
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header text-uppercase mb-1">
                              {"CMS Pages"}
                            </li>
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
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header text-uppercase mb-1">
                              {"Shop Pages"}
                            </li>
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
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header text-uppercase mb-1">
                              {"Other pages"}
                            </li>
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
                      </div>
                    </div>
                    <div className="col-3">
                      <div className="panel w-100 overflow-hidden">
                        <div className="ratio ratio-3x4 overflow-hidden rounded">
                          <img src="/assets/images/common/menu-banner.jpg" alt="Let's build anything with News5!" />
                          <a className="position-cover" href="https://themeforest.net/user/reacthemes/portfolio" target="_blank"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <div className="uc-navbar-item">
              <a className="uc-cart-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-cart-panel" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-shopping-cart"></i>
                <span className="cstack w-20px h-20px rounded-circle bg-primary text-white" style={{"fontSize":"12px"} as React.CSSProperties}>
                  {"0"}
                </span>
              </a>
            </div>
            <div className="uc-navbar-item d-none lg:d-inline-flex">
              <a className="uc-account-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-account-modal" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-user-avatar"></i>
              </a>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-search-trigger icon-2 cstack text-none text-dark dark:text-white" href="#uc-search-modal" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
<div id="wrapper" className="wrap overflow-hidden-x">
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2 lg:gap-4">
          <div className="section-content panel">
            <div className="swiper py-2" data-uc-swiper="items: 2; gap: 8; next: .nav-next; prev: .nav-prev; disable-class: d-none;" data-uc-swiper-s="items: 3; gap: 16;" data-uc-swiper-l="items: 5;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-07.svg" alt="Team E" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team E"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold">
                          {"2 - 6"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"FT"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-10.svg" alt="Team J" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team J"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"View details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-08.svg" alt="Team H" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team H"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold">
                          {"1 - 0"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"FT"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-05.svg" alt="Team E" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team E"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"View details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-01.svg" alt="Team A" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team A"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold text-red">
                          {"3 - 2"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"72"}
                          <b className="fs-6" data-uc-animate="flash">
                            {"’"}
                          </b>
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-02.svg" alt="Team B" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team B"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-red text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Live"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-03.svg" alt="Team C" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team C"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold text-red">
                          {"0 - 0"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"24"}
                          <b className="fs-6" data-uc-animate="flash">
                            {"’"}
                          </b>
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-04.svg" alt="Team D" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team D"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-red text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Live"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-05.svg" alt="Team E" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team E"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold">
                          {"16:30"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"12/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-06.svg" alt="Team F" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team F"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"View details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-07.svg" alt="Team G" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team G"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold">
                          {"20:00"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"12/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-08.svg" alt="Team H" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team H"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"View details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-09.svg" alt="Team I" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team I"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold">
                          {"21:00"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"12/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-10.svg" alt="Team J" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team J"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"View details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-06.svg" alt="Team F" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team F"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold">
                          {"22:00"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"24/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-03.svg" alt="Team C" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team C"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"View details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-01.svg" alt="Team A" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team A"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold">
                          {"15:15"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"30/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-07.svg" alt="Team G" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team G"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"View details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-04.svg" alt="Team D" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team D"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold">
                          {"18:30"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"01/05"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-09.svg" alt="Team I" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team I"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"View details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lh-sm text-center rounded bg-white dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-1">
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-05.svg" alt="Team E" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team E"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow">
                        <span className="fs-5 md:fs-4 fw-bold">
                          {"15:15"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"02/05"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow">
                        <img src="/assets/images/demo-six/emblems/logo-01.svg" alt="Team A" className="h-32px" />
                        <span className="fs-5 fw-bold text-uppercase mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Team A"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"View details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-24px md:w-32px h-24px md:h-32px z-1">
              <i className="icon-narrow fw-bold unicon-chevron-left"></i>
            </div>
            <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-24px md:w-32px h-24px md:h-32px z-1">
              <i className="icon-narrow fw-bold unicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel bg-gray-50 dark:bg-black">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4">
          <div className="section-content">
            <div className="block-layout grid-overlay-layout uc-dark">
              <div className="block-content">
                <div className="row child-cols-12 md:child-cols g-1 lg:g-2 col-match">
                  <div className="md:col-3 order-2 md:order-1 d-none lg:d-block">
                    <div className="panel">
                      <div className="row child-cols-6 md:child-cols-12 g-1 lg:g-2">
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog-details">
                                  {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"2h ago"}
                                </span>
                              </div>
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog-details">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"12h ago"}
                                </span>
                              </div>
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div className="d-none lg:d-block">
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog-details">
                                  {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"7d ago"}
                                </span>
                              </div>
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="md:col-6 order-1 md:order-2">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden rounded uc-dark">
                        <div className="post-media panel overflow-hidden h-100">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                            <canvas className="h-100 w-100"></canvas>
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-22.jpg" alt="Technology: Wearables, AR, and AI in the Apparel Industry" data-uc-img="loading: lazy" />
                          </div>
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-22.jpg" alt="Technology: Wearables, AR, and AI in the Apparel Industry" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                        <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white">
                          <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                            <span>
                              {"2mo ago"}
                            </span>
                          </div>
                          <h3 className="post-title h5 sm:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                            <SiteLink className="text-none text-white" href="/blog-details">
                              {"Technology: Wearables, AR, and AI in the Apparel Industry"}
                            </SiteLink>
                          </h3>
                          <div>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60 mt-1">
                              <div className="meta">
                                <div className="hstack gap-2">
                                  <div>
                                    <div className="post-author hstack gap-1">
                                      <SiteLink href="/blog-author" data-uc-tooltip="Peter Sawyer">
                                        <img src="/assets/images/avatars/02.png" alt="Peter Sawyer" className="w-24px h-24px rounded-circle" />
                                      </SiteLink>
                                      <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                        {"Peter Sawyer"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div>
                                    <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                      <i className="icon-narrow unicon-chat"></i>
                                      <span>
                                        {"5"}
                                      </span>
                                    </a>
                                  </div>
                                </div>
                              </div>
                              <div className="actions">
                                <div className="hstack gap-1"></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="md:col-6 lg:col-3 order-3">
                    <div className="panel">
                      <div className="row child-cols-6 md:child-cols-12 g-1 lg:g-2">
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog-details">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"2mo ago"}
                                </span>
                              </div>
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog-details">
                                  {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"23d ago"}
                                </span>
                              </div>
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div className="d-none lg:d-block">
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-21.jpg" alt="How Businesses Are Adapting to E-Commerce and AI Integration" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog-details">
                                  {"How Businesses Are Adapting to E-Commerce and AI Integration"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"29d ago"}
                                </span>
                              </div>
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
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
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel pt-2">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2 lg:gap-4">
          <div className="section-content panel">
            <div className="panel p-2 rounded bg-white dark:bg-gray-900">
              <div className="swiper py-1" data-uc-swiper="items: 4; gap: 16; next: .nav-next; prev: .nav-prev; disable-class: d-none;" data-uc-swiper-s="items: 6;" data-uc-swiper-l="items: 10;">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-01.svg" alt="Team A" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team A"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-02.svg" alt="Team B" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team B"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-03.svg" alt="Team C" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team C"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-04.svg" alt="Team D" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team D"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-05.svg" alt="Team E" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team E"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-06.svg" alt="Team F" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team F"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-07.svg" alt="Team G" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team G"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-08.svg" alt="Team H" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team H"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-09.svg" alt="Team I" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team I"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="panel vstack items-center gap-1 text-center">
                      <img src="/assets/images/demo-six/emblems/logo-10.svg" alt="Team J" className="h-48px" />
                      <span className="fs-5 fw-bold text-uppercase">
                        {"Team J"}
                      </span>
                      <a href="#team" className="position-cover"></a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-24px md:w-32px h-24px md:h-32px z-1">
                <i className="icon-narrow fw-bold unicon-chevron-left"></i>
              </div>
              <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-24px md:w-32px h-24px md:h-32px z-1">
                <i className="icon-narrow fw-bold unicon-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel py-4 lg:py-8 dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2">
          <div className="section-header panel">
            <h2 className="h5 xl:h4 m-0 text-black dark:text-white">
              <span>
                {"Trending this week"}
              </span>
            </h2>
          </div>
          <div className="section-content panel">
            <div className="swiper" data-uc-swiper="items: 2; gap: 8; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: d-none;" data-uc-swiper-s="items: 3;" data-uc-swiper-l="items: 4;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 bg-white dark:bg-gray-900 p-2 rounded">
                      <div className="post-media panel overflow-hidden rounded-1">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Tennis"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"·"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"23d ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Hidden Gems: Underrated Travel Destinations Around the World"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 bg-white dark:bg-gray-900 p-2 rounded">
                      <div className="post-media panel overflow-hidden rounded-1">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Football"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"·"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"29d ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 bg-white dark:bg-gray-900 p-2 rounded">
                      <div className="post-media panel overflow-hidden rounded-1">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Esports"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"·"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"2mo ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 bg-white dark:bg-gray-900 p-2 rounded">
                      <div className="post-media panel overflow-hidden rounded-1">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Tennis"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"·"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"2mo ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 bg-white dark:bg-gray-900 p-2 rounded">
                      <div className="post-media panel overflow-hidden rounded-1">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Football"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"·"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"3mo ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Tech Tools for your Time Management: Enhancing Productivity"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 bg-white dark:bg-gray-900 p-2 rounded">
                      <div className="post-media panel overflow-hidden rounded-1">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Basketball"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"·"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"6mo ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 bg-white dark:bg-gray-900 p-2 rounded">
                      <div className="post-media panel overflow-hidden rounded-1">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Esports"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"·"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"9mo ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Gaming in the Age of AI: Strategies for Startups"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 bg-white dark:bg-gray-900 p-2 rounded">
                      <div className="post-media panel overflow-hidden rounded-1">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Basketball"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"·"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"1yr ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Top Independent Contractors to Invest in Best of Startups"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px lg:w-40px h-32px lg:h-40px z-1">
              <i className="icon-1 unicon-chevron-left"></i>
            </div>
            <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px lg:w-40px h-32px lg:h-40px z-1">
              <i className="icon-1 unicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-2 panel overflow-hidden">
            <div className="block-header panel">
              <h2 className="h5 xl:h4 m-0 text-black dark:text-white">
                <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                  <span>
                    {"Football"}
                  </span>
                  <i className="icon-1 fw-bold unicon-chevron-right -translate-y-px"></i>
                </SiteLink>
              </h2>
            </div>
            <div className="block-content">
              <div className="panel row child-cols-12 md:child-cols g-1 col-match" data-uc-grid="">
                <div className="col-12 md:col-6 order-0 md:order-1">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden rounded uc-dark">
                      <div className="post-media panel overflow-hidden h-100">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                          <canvas className="h-100 w-100"></canvas>
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                        </div>
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white">
                        <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                          <span>
                            {"2h ago"}
                          </span>
                        </div>
                        <h3 className="post-title h5 lg:h4 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog-details">
                            {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                          </SiteLink>
                        </h3>
                        <div>
                          <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60 mt-1">
                            <div className="meta">
                              <div className="hstack gap-2">
                                <div>
                                  <div className="post-author hstack gap-1">
                                    <SiteLink href="/blog-author" data-uc-tooltip="Sarah Eddrissi">
                                      <img src="/assets/images/avatars/03.png" alt="Sarah Eddrissi" className="w-24px h-24px rounded-circle" />
                                    </SiteLink>
                                    <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                      {"Sarah Eddrissi"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div>
                                  <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                    <i className="icon-narrow unicon-chat"></i>
                                    <span>
                                      {"0"}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="actions">
                              <div className="hstack gap-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="order-1 md:order-0">
                  <div className="row child-cols-12 g-1">
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Football"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"12h ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Football"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"29d ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Tech Tools for your Time Management: Enhancing Productivity"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Football"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"3mo ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Potential of Immersive Technologies help your Business Grow"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Football"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"1yr ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
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
  <div className="section panel overflow-hidden">
    <div className="section-outer panel py-4 lg:py-8">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-2 panel overflow-hidden">
            <div className="block-header panel">
              <h2 className="h5 xl:h4 m-0 text-black dark:text-white">
                <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                  <span>
                    {"Basketball"}
                  </span>
                  <i className="icon-1 fw-bold unicon-chevron-right -translate-y-px"></i>
                </SiteLink>
              </h2>
            </div>
            <div className="block-content">
              <div className="panel row child-cols-12 md:child-cols g-1 col-match" data-uc-grid="">
                <div className="col-12 md:col-6 order-0 md:order-1">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden rounded uc-dark">
                      <div className="post-media panel overflow-hidden h-100">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                          <canvas className="h-100 w-100"></canvas>
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                        </div>
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white">
                        <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                          <span>
                            {"1h ago"}
                          </span>
                        </div>
                        <h3 className="post-title h5 lg:h4 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog-details">
                            {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                          </SiteLink>
                        </h3>
                        <div>
                          <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60 mt-1">
                            <div className="meta">
                              <div className="hstack gap-2">
                                <div>
                                  <div className="post-author hstack gap-1">
                                    <SiteLink href="/blog-author" data-uc-tooltip="Sarah Eddrissi">
                                      <img src="/assets/images/avatars/03.png" alt="Sarah Eddrissi" className="w-24px h-24px rounded-circle" />
                                    </SiteLink>
                                    <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                      {"Sarah Eddrissi"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div>
                                  <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                    <i className="icon-narrow unicon-chat"></i>
                                    <span>
                                      {"0"}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="actions">
                              <div className="hstack gap-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="order-1 md:order-0">
                  <div className="row child-cols-12 g-1">
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Basketball"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"7d ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Basketball"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"6mo ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Top Independent Contractors to Invest in Best of Startups"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Basketball"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"1yr ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Basketball"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"2mo ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
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
  <div className="section panel overflow-hidden">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-2 panel overflow-hidden">
            <div className="block-header panel">
              <h2 className="h5 xl:h4 m-0 text-black dark:text-white">
                <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                  <span>
                    {"Tennis"}
                  </span>
                  <i className="icon-1 fw-bold unicon-chevron-right -translate-y-px"></i>
                </SiteLink>
              </h2>
            </div>
            <div className="block-content">
              <div className="panel row child-cols-12 md:child-cols g-1 col-match" data-uc-grid="">
                <div className="col-12 md:col-6 order-0 md:order-1">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden rounded uc-dark">
                      <div className="post-media panel overflow-hidden h-100">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                          <canvas className="h-100 w-100"></canvas>
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                        </div>
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white">
                        <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                          <span>
                            {"1min ago"}
                          </span>
                        </div>
                        <h3 className="post-title h5 lg:h4 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog-details">
                            {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                          </SiteLink>
                        </h3>
                        <div>
                          <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60 mt-1">
                            <div className="meta">
                              <div className="hstack gap-2">
                                <div>
                                  <div className="post-author hstack gap-1">
                                    <SiteLink href="/blog-author" data-uc-tooltip="David Peterson">
                                      <img src="/assets/images/avatars/01.png" alt="David Peterson" className="w-24px h-24px rounded-circle" />
                                    </SiteLink>
                                    <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                      {"David Peterson"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div>
                                  <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                    <i className="icon-narrow unicon-chat"></i>
                                    <span>
                                      {"2"}
                                    </span>
                                  </a>
                                </div>
                              </div>
                            </div>
                            <div className="actions">
                              <div className="hstack gap-1"></div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="order-1 md:order-0">
                  <div className="row child-cols-12 g-1">
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Tennis"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"55min ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Tennis"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"9d ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Tennis"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"23d ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Tennis"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"·"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"2mo ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-128px min-w-72px lg:min-w-128px rounded-1">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
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
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel py-4 lg:py-8 dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2">
          <div className="section-header panel">
            <h2 className="h5 xl:h4 m-0 text-black dark:text-white">
              <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                <span>
                  {"Esports"}
                </span>
                <i className="icon-1 fw-bold unicon-chevron-right -translate-y-px"></i>
              </SiteLink>
            </h2>
          </div>
          <div className="section-content panel">
            <div className="swiper overflow-unset lg:overflow-hidden" data-uc-swiper="items: 1.1; gap: 8; next: .nav-next; prev: .nav-prev; center: true; center-bounds: true; disable-class: d-none;" data-uc-swiper-s="items: 3;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                        <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60 mt-1">
                          <div className="meta">
                            <div className="hstack gap-2">
                              <div>
                                <div className="post-author hstack gap-1">
                                  <SiteLink href="/blog-author" data-uc-tooltip="Rico Santos">
                                    <img src="/assets/images/avatars/07.png" alt="Rico Santos" className="w-24px h-24px rounded-circle" />
                                  </SiteLink>
                                  <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                    {"Rico Santos"}
                                  </SiteLink>
                                </div>
                              </div>
                              <div>
                                <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                  <i className="icon-narrow unicon-chat"></i>
                                  <span>
                                    {"2"}
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="actions">
                            <div className="hstack gap-1"></div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog-details">
                            {"AI and Marketing: Unlocking Customer Insights"}
                          </SiteLink>
                        </h3>
                        <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                          <span>
                            {"15d ago"}
                          </span>
                        </div>
                      </div>
                      <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                        <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60 mt-1">
                          <div className="meta">
                            <div className="hstack gap-2">
                              <div>
                                <div className="post-author hstack gap-1">
                                  <SiteLink href="/blog-author" data-uc-tooltip="Peter Sawyer">
                                    <img src="/assets/images/avatars/02.png" alt="Peter Sawyer" className="w-24px h-24px rounded-circle" />
                                  </SiteLink>
                                  <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                    {"Peter Sawyer"}
                                  </SiteLink>
                                </div>
                              </div>
                              <div>
                                <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                  <i className="icon-narrow unicon-chat"></i>
                                  <span>
                                    {"5"}
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="actions">
                            <div className="hstack gap-1"></div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog-details">
                            {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                          </SiteLink>
                        </h3>
                        <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                          <span>
                            {"2mo ago"}
                          </span>
                        </div>
                      </div>
                      <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                        <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60 mt-1">
                          <div className="meta">
                            <div className="hstack gap-2">
                              <div>
                                <div className="post-author hstack gap-1">
                                  <SiteLink href="/blog-author" data-uc-tooltip="Peter Sawyer">
                                    <img src="/assets/images/avatars/02.png" alt="Peter Sawyer" className="w-24px h-24px rounded-circle" />
                                  </SiteLink>
                                  <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                    {"Peter Sawyer"}
                                  </SiteLink>
                                </div>
                              </div>
                              <div>
                                <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                  <i className="icon-narrow unicon-chat"></i>
                                  <span>
                                    {"19"}
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="actions">
                            <div className="hstack gap-1"></div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog-details">
                            {"Gaming in the Age of AI: Strategies for Startups"}
                          </SiteLink>
                        </h3>
                        <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                          <span>
                            {"9mo ago"}
                          </span>
                        </div>
                      </div>
                      <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                        <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60 mt-1">
                          <div className="meta">
                            <div className="hstack gap-2">
                              <div>
                                <div className="post-author hstack gap-1">
                                  <SiteLink href="/blog-author" data-uc-tooltip="Nisi Nyung">
                                    <img src="/assets/images/avatars/08.png" alt="Nisi Nyung" className="w-24px h-24px rounded-circle" />
                                  </SiteLink>
                                  <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                    {"Nisi Nyung"}
                                  </SiteLink>
                                </div>
                              </div>
                              <div>
                                <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                  <i className="icon-narrow unicon-chat"></i>
                                  <span>
                                    {"290"}
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="actions">
                            <div className="hstack gap-1"></div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog-details">
                            {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                          </SiteLink>
                        </h3>
                        <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                          <span>
                            {"2mo ago"}
                          </span>
                        </div>
                      </div>
                      <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded uc-dark">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                        <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60 mt-1">
                          <div className="meta">
                            <div className="hstack gap-2">
                              <div>
                                <div className="post-author hstack gap-1">
                                  <SiteLink href="/blog-author" data-uc-tooltip="David Peterson">
                                    <img src="/assets/images/avatars/01.png" alt="David Peterson" className="w-24px h-24px rounded-circle" />
                                  </SiteLink>
                                  <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                    {"David Peterson"}
                                  </SiteLink>
                                </div>
                              </div>
                              <div>
                                <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                  <i className="icon-narrow unicon-chat"></i>
                                  <span>
                                    {"15"}
                                  </span>
                                </a>
                              </div>
                            </div>
                          </div>
                          <div className="actions">
                            <div className="hstack gap-1"></div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog-details">
                            {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                          </SiteLink>
                        </h3>
                        <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                          <span>
                            {"23d ago"}
                          </span>
                        </div>
                      </div>
                      <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                    </article>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px lg:w-40px h-32px lg:h-40px ms-2 lg:m-0 z-1">
              <i className="icon-1 unicon-chevron-left"></i>
            </div>
            <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px lg:w-40px h-32px lg:h-40px ms-n2 lg:m-0 z-1">
              <i className="icon-1 unicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden uc-dark">
    <div className="section-outer panel py-6 lg:py-8 xl:py-10 bg-black text-white">
      <div className="position-cover z-0" data-src="/assets/images/demo-six/esports-banner.jpg" data-uc-img=""></div>
      <div className="position-cover bg-gradient-to-r from-black to-transparent opacity-90"></div>
      <div className="container max-w-xl">
        <div className="section-inner panel max-w-1/2 z-1">
          <span className="fs-7 fw-bold text-uppercase opacity-70">
            {"Registration April 25, 2024"}
          </span>
          <h3 className="h4 lg:h3 my-1">
            {"It's time for Japan eSports!"}
          </h3>
          <p className="fs-5 lg:fs-4 d-none md:d-inline-flex">
            {"Introduce your local team to the world! Big PRIZE $2M USD."}
          </p>
          <div className="vstack gap-2 mt-2 lg:mt-4">
            <span className="fs-6 opacity-70">
              {"Big Prize $2.000.000"}
            </span>
            <div className="hstack gap-1">
              <a href="#" className="btn btn-sm btn-primary text-white fs-7 text-uppercase">
                <i className="icon-narrow unicon-request-quote-filled"></i>
                <span>
                  {"Sign up now"}
                </span>
              </a>
              <a href="#" className="btn btn-sm gap-narrow text-white fs-7 text-uppercase d-none md:d-inline-flex">
                <span>
                  {"More details"}
                </span>
                <i className="icon-1 unicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="latest_news" className="latest-news section panel">
    <div className="section-outer panel py-4 lg:py-8">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="content-wrap row child-cols-12 g-4" data-uc-grid="">
            <div className="md:col-9">
              <div className="main-wrap panel vstack gap-3 lg:gap-6">
                <div className="block-layout grid-layout vstack gap-2 panel overflow-hidden">
                  <div className="block-header panel">
                    <h2 className="h5 xl:h4 m-0 text-black dark:text-white">
                      {"Latest"}
                    </h2>
                  </div>
                  <div className="block-content">
                    <div className="row child-cols-12 g-1">
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"1min ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"Law enforcement officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="David Peterson">
                                            <img src="/assets/images/avatars/01.png" alt="David Peterson" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"David Peterson"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"2"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"55min ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"Officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="Jason Blake">
                                            <img src="/assets/images/avatars/05.png" alt="Jason Blake" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"Jason Blake"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"100"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"1h ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"Children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="Sarah Eddrissi">
                                            <img src="/assets/images/avatars/03.png" alt="Sarah Eddrissi" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"Sarah Eddrissi"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"0"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"2h ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="Sarah Eddrissi">
                                            <img src="/assets/images/avatars/03.png" alt="Sarah Eddrissi" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"Sarah Eddrissi"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"0"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"12h ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="Anna Luis">
                                            <img src="/assets/images/avatars/04.png" alt="Anna Luis" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"Anna Luis"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"1"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"7d ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="Nisi Nyung">
                                            <img src="/assets/images/avatars/08.png" alt="Nisi Nyung" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"Nisi Nyung"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"23"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"9d ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="Nisi Nyung">
                                            <img src="/assets/images/avatars/08.png" alt="Nisi Nyung" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"Nisi Nyung"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"112"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"15d ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"AI and Marketing: Unlocking Customer Insights"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="Rico Santos">
                                            <img src="/assets/images/avatars/07.png" alt="Rico Santos" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"Rico Santos"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"2"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"23d ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="David Peterson">
                                            <img src="/assets/images/avatars/01.png" alt="David Peterson" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"David Peterson"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"15"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"29d ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="David Peterson">
                                            <img src="/assets/images/avatars/01.png" alt="David Peterson" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"David Peterson"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"20"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"2mo ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="Peter Sawyer">
                                            <img src="/assets/images/avatars/02.png" alt="Peter Sawyer" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"Peter Sawyer"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"5"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle bg-white dark:bg-gray-900 p-2 rounded">
                          <div className="row child-cols col-match g-2" data-uc-grid="">
                            <div className="col-12 lg:col-auto">
                              <div className="post-media panel overflow-hidden max-w-350px min-w-100 lg:min-w-350px rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="vstack justify-between gap-2">
                                <div className="post-header panel vstack gap-1">
                                  <div className="post-date hstack gap-narrow fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"2mo ago"}
                                    </span>
                                  </div>
                                  <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                    </SiteLink>
                                  </h3>
                                  <p className="post-excrept ft-tertiary fs-6 text-truncate-2 pe-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-meta panel hstack justify-between fs-7 fw-medium">
                                  <div className="meta">
                                    <div className="hstack gap-2">
                                      <div>
                                        <div className="post-author hstack gap-1">
                                          <SiteLink href="/blog-author" data-uc-tooltip="Sarah Eddrissi">
                                            <img src="/assets/images/avatars/03.png" alt="Sarah Eddrissi" className="w-24px h-24px rounded-circle" />
                                          </SiteLink>
                                          <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                            {"Sarah Eddrissi"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <div>
                                        <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                          <i className="icon-narrow unicon-chat"></i>
                                          <span>
                                            {"2"}
                                          </span>
                                        </a>
                                      </div>
                                    </div>
                                  </div>
                                  <div className="actions">
                                    <div className="hstack gap-1"></div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="block-footer cstack lg:mt-2">
                    <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent text-black dark:text-white border w-100">
                      <span>
                        {"Load more posts"}
                      </span>
                      <i className="icon icon-1 unicon-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-3">
              <div className="sidebar-wrap panel vstack gap-2 pb-2" data-uc-sticky="end: .content-wrap; offset: 100; media: @m;">
                <div className="widget ad-widget vstack gap-2 text-center p-2 bg-white dark:bg-gray-900 rounded">
                  <div className="widgt-content">
                    <a className="cstack max-w-300px mx-auto text-none" href="https://themeforest.net/user/reacthemes/portfolio" target="_blank" rel="nofollow">
                      <img className="d-block dark:d-none rounded" src="/assets/images/common/ad-slot-aside.jpg" alt="Ad slot" />
                      <img className="d-none dark:d-block rounded" src="/assets/images/common/ad-slot-aside-2.jpg" alt="Ad slot" />
                    </a>
                  </div>
                </div>
                <div className="widget popular-widget vstack gap-2 p-2 bg-white dark:bg-gray-900 rounded">
                  <div className="widget-title text-center">
                    <h5 className="fs-7 text-uppercase m-0">
                      {"Popular now"}
                    </h5>
                  </div>
                  <div className="widget-content">
                    <div className="row child-cols-12 gx-4 gy-3 sep-x" data-uc-grid="">
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 lh-1 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"1"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-meta panel hstack justify-between fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <div className="meta">
                                      <div className="hstack gap-2">
                                        <div>
                                          <div className="post-date hstack gap-narrow">
                                            <span>
                                              {"2mo ago"}
                                            </span>
                                          </div>
                                        </div>
                                        <div>
                                          <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                            <i className="icon-narrow unicon-chat"></i>
                                            <span>
                                              {"290"}
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="actions">
                                      <div className="hstack gap-1"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 lh-1 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"2"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-meta panel hstack justify-between fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <div className="meta">
                                      <div className="hstack gap-2">
                                        <div>
                                          <div className="post-date hstack gap-narrow">
                                            <span>
                                              {"2mo ago"}
                                            </span>
                                          </div>
                                        </div>
                                        <div>
                                          <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                            <i className="icon-narrow unicon-chat"></i>
                                            <span>
                                              {"1"}
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="actions">
                                      <div className="hstack gap-1"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 lh-1 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"3"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-meta panel hstack justify-between fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <div className="meta">
                                      <div className="hstack gap-2">
                                        <div>
                                          <div className="post-date hstack gap-narrow">
                                            <span>
                                              {"23d ago"}
                                            </span>
                                          </div>
                                        </div>
                                        <div>
                                          <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                            <i className="icon-narrow unicon-chat"></i>
                                            <span>
                                              {"15"}
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="actions">
                                      <div className="hstack gap-1"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 lh-1 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"4"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"How Businesses Are Adapting to E-Commerce and AI Integration"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-meta panel hstack justify-between fs-7 fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <div className="meta">
                                      <div className="hstack gap-2">
                                        <div>
                                          <div className="post-date hstack gap-narrow">
                                            <span>
                                              {"29d ago"}
                                            </span>
                                          </div>
                                        </div>
                                        <div>
                                          <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                            <i className="icon-narrow unicon-chat"></i>
                                            <span>
                                              {"20"}
                                            </span>
                                          </a>
                                        </div>
                                      </div>
                                    </div>
                                    <div className="actions">
                                      <div className="hstack gap-1"></div>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="widget social-widget vstack gap-2 text-center p-2 bg-white dark:bg-gray-900 rounded">
                  <div className="widgt-title">
                    <h4 className="fs-7 text-uppercase m-0">
                      {"Follow @News5"}
                    </h4>
                  </div>
                  <div className="widgt-content">
                    <form className="vstack gap-1">
                      <input className="form-control fs-6 fw-medium h-48px w-full bg-white dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="email" placeholder="Your email" required />
                      <button className="btn btn-md btn-gray-900 dark:bg-white dark:text-gray-900 text-white" type="submit">
                        {"Sign up"}
                      </button>
                    </form>
                    <ul className="nav-x justify-center gap-1 mt-3">
                      <li>
                        <a href="#fb" className="cstack w-40px h-40px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150">
                          <i className="icon icon-2 unicon-logo-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#x" className="cstack w-40px h-40px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150">
                          <i className="icon icon-2 unicon-logo-x-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#in" className="cstack w-40px h-40px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150">
                          <i className="icon icon-2 unicon-logo-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#yt" className="cstack w-40px h-40px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150">
                          <i className="icon icon-2 unicon-logo-youtube"></i>
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
    </div>
  </div>
</div>
<Footer7 />
    </TemplateShell>
  );
}
