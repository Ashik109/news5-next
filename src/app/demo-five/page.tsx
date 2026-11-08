import type { Metadata } from "next";
import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu3 from "@/components/template/MobileMenu3";
import UcCartPanel2 from "@/components/template/UcCartPanel2";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal3 from "@/components/template/NewsletterModal3";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-five" theme="/assets/css/theme/demo-five.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu3 />
<UcCartPanel2 />
<UcFavoritesModal1 />
<NewsletterModal3 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<header className="uc-header header-five uc-navbar-sticky-wrap z-999" data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
  <nav className="uc-navbar-container fs-6 z-1">
    <div className="uc-center-navbar panel z-2">
      <div className="container max-w-xl">
        <div className="uc-navbar min-h-72px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div className="uc-navbar-left">
            <div className="xl:me-2">
              <a className="uc-menu-trigger icon-2" href="#uc-menu-panel" data-uc-toggle=""></a>
            </div>
            <div className="uc-logo dark:text-primary d-block md:d-none">
              <SiteLink href="/">
                <img className="w-32px text-dark dark:text-white" src="/assets/images/demo-five/common/logo.svg" alt="News5" data-uc-svg="" />
              </SiteLink>
            </div>
            <ul className="uc-navbar-nav gap-3 fs-5 fw-bold d-none lg:d-flex" style={{"--uc-nav-height":"72px"} as React.CSSProperties}>
              <li>
                <a href="#">
                  {"Exlusive "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-top-0 rounded-bottom hide-scrollbar dark:bg-gray-900" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-3">
                    <div className="col-2">
                      <div className="uc-navbar-switcher-nav p-1 rounded bg-gray-25 dark:bg-gray-800">
                        <ul className="uc-tab-left fs-5 text-end" data-uc-tab="connect: #uc-navbar-switcher-tending; animation: uc-animation-slide-right-small, uc-animation-slide-left-small">
                          <li>
                            <a href="#">
                              {"All"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Actions"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Adventure"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Marvel"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Racing"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-10">
                      <div id="uc-navbar-switcher-tending" className="uc-navbar-switcher uc-switcher">
                        <div className="row child-cols col-match g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Open World"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Action"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Shooting"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Souls"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Action"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Marvel"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Xbox"}
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
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Adventure"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Souls"}
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
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Xbox"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
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
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Souls"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Xbox"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Adventure"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Souls"}
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
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Xbox"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Open World"}
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Open World"}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  {"Xbox "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-top-0 rounded-bottom hide-scrollbar dark:bg-gray-900" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Xbox"}
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Xbox"}
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Xbox"}
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Xbox"}
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
                <SiteLink href="/blog-category">
                  {"PC"}
                </SiteLink>
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"Sony"}
                </SiteLink>
              </li>
              <li>
                <a href="#">
                  {"More "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 rounded-top-0 rounded-bottom hide-scrollbar dark:bg-gray-900" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols g-4">
                    <div>
                      <div className="row child-cols g-4">
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header mb-1">
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
                              <SiteLink href="/">
                                {"Gaming"}
                              </SiteLink>
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
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header mb-1">
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
                            <li className="uc-nav-header mb-1">
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
                            <li className="uc-nav-header mb-1">
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
          </div>
          <div className="uc-navbar-center">
            <div className="uc-logo dark:text-primary d-none md:d-block">
              <SiteLink href="/">
                <img className="w-32px text-dark dark:text-white" src="/assets/images/demo-five/common/logo.svg" alt="News5" data-uc-svg="" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-right gap-2">
            <div className="uc-navbar-item">
              <a className="uc-search-trigger icon-2 cstack text-none text-dark dark:text-white" href="#uc-search-modal" data-uc-toggle="">
                <i className="icon icon-2 fw-bold unicon-search"></i>
              </a>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-cart-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-cart-panel" data-uc-toggle="">
                <i className="icon icon-2 unicon-cart"></i>
                <span className="cstack w-20px h-20px bg-gray-50 dark:bg-gray-700 text-black dark:text-white rounded-circle" style={{"fontSize":"10px"} as React.CSSProperties}>
                  {"4"}
                </span>
              </a>
            </div>
            <button type="button" className="btn btn-xs btn-primary min-w-80px d-none lg:d-inline-flex" data-uc-toggle="target: #uc-account-modal">
              <span>
                {"Log in"}
              </span>
            </button>
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
    <div className="uc-bottom-navbar panel z-1 min-h-32px lg:min-h-48px bg-primary" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container max-w-xl">
        <div className="hstack">
          <div className="uc-navbar-center gap-2 lg:gap-3">
            <div className="uc-navbar-item">
              <ul className="nav-x gap-4 fs-6 fw-bold flex-nowrap overflow-x-auto hide-scrollbar uc-horizontal-scroll w-screen md:w-auto md:mask-end-0 mx-n2 px-2 text-gray-900">
                <li>
                  <a href="#">
                    {"Action"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Adventure"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Racing"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Souls"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Marvel"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Open World"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Shooting"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Sports"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Battle Ground"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"RPG"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
<div id="wrapper" className="wrap overflow-hidden-x">
  <section className="section panel overflow-hidden swiper-parent">
    <div className="section-outer pt-2 lg:pt-4">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="block-layout slider-thumbs panel">
            <div className="row child-cols-12 g-2" data-uc-grid="">
              <div className="md:col-8 lg:col-9">
                <div className="panel overflow-hidden rounded lg:rounded-2">
                  <div className="swiper swiper-main" data-uc-swiper="connect: .swiper-thumbs; items: 1; gap: 8; autoplay: 7000; parallax: true; fade: true; effect: fade; dots: .swiper-pagination; disable-class: last-slide;">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <article className="post type-post h-250px md:h-350px lg:h-500px bg-black uc-dark">
                          <div className="image media-cover" data-src="/assets/images/demo-five/posts/img-11.jpg" data-uc-img="" data-swiper-parallax="8%"></div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent z-1 opacity-80"></div>
                          <div className="post-header panel position-absolute bottom-0 vstack justify-between gap-2 xl:gap-4 max-300px lg:max-w-600px p-2 md:p-4 xl:p-6 z-1">
                            <h3 className="post-title h4 lg:h3 xl:h2 m-0 text-truncate-2" data-swiper-parallax-x="-8">
                              <SiteLink className="text-none" href="/blog-details">
                                {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                              </SiteLink>
                            </h3>
                            <div data-swiper-parallax-x="8">
                              <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                      <div className="swiper-slide">
                        <article className="post type-post h-250px md:h-350px lg:h-500px bg-black uc-dark">
                          <div className="image media-cover" data-src="/assets/images/demo-five/posts/img-12.jpg" data-uc-img="" data-swiper-parallax="8%"></div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent z-1 opacity-80"></div>
                          <div className="post-header panel position-absolute bottom-0 vstack justify-between gap-2 xl:gap-4 max-300px lg:max-w-600px p-2 md:p-4 xl:p-6 z-1">
                            <h3 className="post-title h4 lg:h3 xl:h2 m-0 text-truncate-2" data-swiper-parallax-x="-8">
                              <SiteLink className="text-none" href="/blog-details">
                                {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                              </SiteLink>
                            </h3>
                            <div data-swiper-parallax-x="8">
                              <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                      <div className="swiper-slide">
                        <article className="post type-post h-250px md:h-350px lg:h-500px bg-black uc-dark">
                          <div className="image media-cover" data-src="/assets/images/demo-five/posts/img-13.jpg" data-uc-img="" data-swiper-parallax="8%"></div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent z-1 opacity-80"></div>
                          <div className="post-header panel position-absolute bottom-0 vstack justify-between gap-2 xl:gap-4 max-300px lg:max-w-600px p-2 md:p-4 xl:p-6 z-1">
                            <h3 className="post-title h4 lg:h3 xl:h2 m-0 text-truncate-2" data-swiper-parallax-x="-8">
                              <SiteLink className="text-none" href="/blog-details">
                                {"Tech Tools for your Time Management: Enhancing Productivity"}
                              </SiteLink>
                            </h3>
                            <div data-swiper-parallax-x="8">
                              <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                      <div className="post-date hstack gap-narrow">
                                        <span>
                                          {"3mo ago"}
                                        </span>
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
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide">
                        <article className="post type-post h-250px md:h-350px lg:h-500px bg-black uc-dark">
                          <div className="image media-cover" data-src="/assets/images/demo-five/posts/img-14.jpg" data-uc-img="" data-swiper-parallax="8%"></div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent z-1 opacity-80"></div>
                          <div className="post-header panel position-absolute bottom-0 vstack justify-between gap-2 xl:gap-4 max-300px lg:max-w-600px p-2 md:p-4 xl:p-6 z-1">
                            <h3 className="post-title h4 lg:h3 xl:h2 m-0 text-truncate-2" data-swiper-parallax-x="-8">
                              <SiteLink className="text-none" href="/blog-details">
                                {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                              </SiteLink>
                            </h3>
                            <div data-swiper-parallax-x="8">
                              <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                      <div className="post-date hstack gap-narrow">
                                        <span>
                                          {"6mo ago"}
                                        </span>
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
                      <div className="swiper-slide">
                        <article className="post type-post h-250px md:h-350px lg:h-500px bg-black uc-dark">
                          <div className="image media-cover" data-src="/assets/images/demo-five/posts/img-15.jpg" data-uc-img="" data-swiper-parallax="8%"></div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent z-1 opacity-80"></div>
                          <div className="post-header panel position-absolute bottom-0 vstack justify-between gap-2 xl:gap-4 max-300px lg:max-w-600px p-2 md:p-4 xl:p-6 z-1">
                            <h3 className="post-title h4 lg:h3 xl:h2 m-0 text-truncate-2" data-swiper-parallax-x="-8">
                              <SiteLink className="text-none" href="/blog-details">
                                {"Gaming in the Age of AI: Strategies for Startups"}
                              </SiteLink>
                            </h3>
                            <div data-swiper-parallax-x="8">
                              <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                      <div className="post-date hstack gap-narrow">
                                        <span>
                                          {"9mo ago"}
                                        </span>
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
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                    <div className="swiper-pagination top-auto start-auto bottom-0 end-0 m-2 md:m-4 xl:m-6 text-white d-none md:d-inline-flex justify-end w-auto"></div>
                  </div>
                </div>
              </div>
              <div className="md:col-4 lg:col-3">
                <div className="panel md:vstack gap-1 h-100">
                  <div className="swiper swiper-thumbs swiper-thumbs-progress rounded lg:rounded-2 order-2" data-uc-swiper={"items: 2;\n                                        gap: 4; \n                                        disable-class: last-slide;"} data-uc-swiper-s={"items: auto;\n                                        direction: vertical;\n                                        autoHeight: true;\n                                        mousewheel: true;\n                                        freeMode: false;\n                                        watchSlidesVisibility: true;\n                                        watchSlidesProgress: true;\n                                        watchOverflow: true"}>
                    <div className="swiper-wrapper md:flex-1">
                      <div className="swiper-slide overflow-hidden rounded lg:rounded-2 min-h-64px lg:min-h-100px">
                        <div className="swiper-slide-progress position-cover z-0">
                          <span></span>
                        </div>
                        <article className="post type-post panel uc-transition-toggle p-1 z-1">
                          <div className="row gx-1">
                            <div className="col-auto">
                              <div className="w-40px lg:w-64px">
                                <figure className="featured-image m-0 ratio ratio-3x4 rounded overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                            </div>
                            <div className="col">
                              <p className="fs-6 m-0 text-truncate-2 text-gray-900 dark:text-white">
                                {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide overflow-hidden rounded lg:rounded-2 min-h-64px lg:min-h-100px">
                        <div className="swiper-slide-progress position-cover z-0">
                          <span></span>
                        </div>
                        <article className="post type-post panel uc-transition-toggle p-1 z-1">
                          <div className="row gx-1">
                            <div className="col-auto">
                              <div className="w-40px lg:w-64px">
                                <figure className="featured-image m-0 ratio ratio-3x4 rounded overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                            </div>
                            <div className="col">
                              <p className="fs-6 m-0 text-truncate-2 text-gray-900 dark:text-white">
                                {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide overflow-hidden rounded lg:rounded-2 min-h-64px lg:min-h-100px">
                        <div className="swiper-slide-progress position-cover z-0">
                          <span></span>
                        </div>
                        <article className="post type-post panel uc-transition-toggle p-1 z-1">
                          <div className="row gx-1">
                            <div className="col-auto">
                              <div className="w-40px lg:w-64px">
                                <figure className="featured-image m-0 ratio ratio-3x4 rounded overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                            </div>
                            <div className="col">
                              <p className="fs-6 m-0 text-truncate-2 text-gray-900 dark:text-white">
                                {"Tech Tools for your Time Management: Enhancing Productivity"}
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide overflow-hidden rounded lg:rounded-2 min-h-64px lg:min-h-100px">
                        <div className="swiper-slide-progress position-cover z-0">
                          <span></span>
                        </div>
                        <article className="post type-post panel uc-transition-toggle p-1 z-1">
                          <div className="row gx-1">
                            <div className="col-auto">
                              <div className="w-40px lg:w-64px">
                                <figure className="featured-image m-0 ratio ratio-3x4 rounded overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                            </div>
                            <div className="col">
                              <p className="fs-6 m-0 text-truncate-2 text-gray-900 dark:text-white">
                                {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide overflow-hidden rounded lg:rounded-2 min-h-64px lg:min-h-100px">
                        <div className="swiper-slide-progress position-cover z-0">
                          <span></span>
                        </div>
                        <article className="post type-post panel uc-transition-toggle p-1 z-1">
                          <div className="row gx-1">
                            <div className="col-auto">
                              <div className="w-40px lg:w-64px">
                                <figure className="featured-image m-0 ratio ratio-3x4 rounded overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                            </div>
                            <div className="col">
                              <p className="fs-6 m-0 text-truncate-2 text-gray-900 dark:text-white">
                                {"Gaming in the Age of AI: Strategies for Startups"}
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-prev btn btn-2xs lg:btn-xs btn-outline-primary w-100 d-none md:d-flex order-1">
                    {"Prev"}
                  </div>
                  <div className="swiper-next btn btn-2xs lg:btn-xs btn-outline-primary w-100 d-none md:d-flex order-3">
                    {"Next"}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel py-4 lg:py-6">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4">
          <div className="section-header panel hstack justify-between gap-2">
            <h2 className="h5 xl:h4 fw-medium m-0 text-inherit dark:text-white hstack gap-narrow">
              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                {"Sony"}
              </SiteLink>
              <i className="icon-1 unicon-chevron-right opacity-60 mb-nnarrow"></i>
            </h2>
            <div className="hstack justify-end gap-2 lg:gap-3">
              <ul className="nav-x gap-2 fs-7 text-gray-900 dark:text-white text-opacity-70">
                <li>
                  <SiteLink href="/blog-category">
                    {"Latest"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/blog-category">
                    {"Deals"}
                  </SiteLink>
                </li>
              </ul>
              <div className="swiper-navigation hstack gap-narrow">
                <div className="swiper-nav nav-prev btn btn-alt-primary text-black dark:bg-gray-700 dark:text-white rounded-circle p-0 border-0 shadow-sm w-24px md:w-32px h-24px md:h-32px z-1">
                  <i className="icon-narrow fw-bold unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next btn btn-alt-primary text-black dark:bg-gray-700 dark:text-white rounded-circle p-0 border-0 shadow-sm w-24px md:w-32px h-24px md:h-32px z-1">
                  <i className="icon-narrow fw-bold unicon-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="panel section-content">
            <div className="swiper" data-uc-swiper="items: 2; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: opacity-40;" data-uc-swiper-s="items: 3;" data-uc-swiper-l="items: 5; gap: 16;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Xbox"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Open World"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Open World"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Business Agility the Digital Age: Leveraging AI and Automation"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Action"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Shooting"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"AI and Marketing: Unlocking Customer Insights"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Souls"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
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
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Xbox"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
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
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Adventure"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
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
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4">
          <div className="section-header panel hstack justify-between gap-2">
            <h2 className="h5 xl:h4 fw-medium m-0 text-inherit dark:text-white hstack gap-narrow">
              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                {"PC"}
              </SiteLink>
              <i className="icon-1 unicon-chevron-right opacity-60 mb-nnarrow"></i>
            </h2>
            <div className="hstack justify-end gap-2 lg:gap-3">
              <ul className="nav-x gap-2 fs-7 text-gray-900 dark:text-white text-opacity-70">
                <li>
                  <SiteLink href="/blog-category">
                    {"Latest"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/blog-category">
                    {"Deals"}
                  </SiteLink>
                </li>
              </ul>
              <div className="swiper-navigation hstack gap-narrow">
                <div className="swiper-nav nav-prev btn btn-alt-primary text-black dark:bg-gray-700 dark:text-white rounded-circle p-0 border-0 shadow-sm w-24px md:w-32px h-24px md:h-32px z-1">
                  <i className="icon-narrow fw-bold unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next btn btn-alt-primary text-black dark:bg-gray-700 dark:text-white rounded-circle p-0 border-0 shadow-sm w-24px md:w-32px h-24px md:h-32px z-1">
                  <i className="icon-narrow fw-bold unicon-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="swiper" data-uc-swiper="items: 2; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: opacity-40;" data-uc-swiper-s="items: 3;" data-uc-swiper-l="items: 5; gap: 16;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Xbox"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
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
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
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
                                {"6mo ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
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
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Adventure"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
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
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Adventure"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Top Independent Contractors to Invest in Best of Startups"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Xbox"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Potential of Immersive Technologies help your Business Grow"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Exlusive"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
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
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel py-4 lg:py-6">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4">
          <div className="section-header panel hstack justify-between gap-2">
            <h2 className="h5 xl:h4 fw-medium m-0 text-inherit dark:text-white hstack gap-narrow">
              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                {"Xbox"}
              </SiteLink>
              <i className="icon-1 unicon-chevron-right opacity-60 mb-nnarrow"></i>
            </h2>
            <div className="hstack justify-end gap-2 lg:gap-3">
              <ul className="nav-x gap-2 fs-7 text-gray-900 dark:text-white text-opacity-70">
                <li>
                  <SiteLink href="/blog-category">
                    {"Latest"}
                  </SiteLink>
                </li>
                <li>
                  <SiteLink href="/blog-category">
                    {"Deals"}
                  </SiteLink>
                </li>
              </ul>
              <div className="swiper-navigation hstack gap-narrow">
                <div className="swiper-nav nav-prev btn btn-alt-primary text-black dark:bg-gray-700 dark:text-white rounded-circle p-0 border-0 shadow-sm w-24px md:w-32px h-24px md:h-32px z-1">
                  <i className="icon-narrow fw-bold unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next btn btn-alt-primary text-black dark:bg-gray-700 dark:text-white rounded-circle p-0 border-0 shadow-sm w-24px md:w-32px h-24px md:h-32px z-1">
                  <i className="icon-narrow fw-bold unicon-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="section-content">
            <div className="swiper" data-uc-swiper="items: 2; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: opacity-40;" data-uc-swiper-s="items: 3;" data-uc-swiper-l="items: 5; gap: 16;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Action"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Marvel"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
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
                                {"1h ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Xbox"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Open World"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                            {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Open World"}
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
                        <h3 className="post-title h6 fw-medium m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
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
  <div className="section panel overflow-hidden uc-dark">
    <div className="section-outer panel py-4 lg:py-6 bg-gray-25 dark:bg-gray-900">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4 z-1">
          <div className="section-header panel hstack justify-between gap-2">
            <h2 className="h5 xl:h4 fw-medium m-0 hstack gap-narrow">
              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                {"Action games"}
              </SiteLink>
              <i className="icon-1 unicon-chevron-right opacity-60 mb-nnarrow"></i>
            </h2>
          </div>
          <div className="section-content">
            <div className="block-layout grid-overlay-layout">
              <div className="block-content">
                <div className="row child-cols-12 md:child-cols g-2 col-match">
                  <div className="md:col-8">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden rounded">
                        <div className="post-media panel overflow-hidden h-100">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                            <canvas className="h-100 w-100"></canvas>
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                          </div>
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                        <div className="post-header panel vstack justify-end items-start gap-1 sm:gap-2 p-2 sm:p-4 position-cover text-white">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Souls"}
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
                          <h3 className="post-title h5 sm:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                            <SiteLink className="text-none text-white" href="/blog-details">
                              {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60">
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
                              </div>
                            </div>
                            <div className="actions">
                              <div className="hstack gap-1"></div>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div>
                    <div className="panel">
                      <div className="row child-cols-6 md:child-cols-12 g-2">
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog-details">
                                  {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
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
                                      {"6mo ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden rounded">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-3x2">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog-details">
                                  {"Gaming in the Age of AI: Strategies for Startups"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Adventure"}
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
  <div className="section panel overflow-hidden">
    <div className="section-outer panel py-4 lg:py-6">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols-4 g-4" data-uc-grid="">
            <div>
              <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
                <div className="block-header panel">
                  <h2 className="h5 xl:h4 fw-medium m-0 text-inherit dark:text-white hstack gap-narrow">
                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                      {"Open World"}
                    </SiteLink>
                    <i className="icon-1 unicon-chevron-right opacity-60 mb-nnarrow"></i>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 gy-3 md:gx-3 md:gy-4">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Open World"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Open World"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Action"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Shooting"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"AI and Marketing: Unlocking Customer Insights"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="block-footer cstack lg:mt-2">
                  <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent text-black dark:text-white hover:text-black border w-100">
                    <span>
                      {"See all Open World"}
                    </span>
                    <i className="icon icon-1 unicon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
                <div className="block-header panel">
                  <h2 className="h5 xl:h4 fw-medium m-0 text-inherit dark:text-white hstack gap-narrow">
                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                      {"Adventure"}
                    </SiteLink>
                    <i className="icon-1 unicon-chevron-right opacity-60 mb-nnarrow"></i>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 gy-3 md:gx-3 md:gy-4">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Action"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Marvel"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
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
                                      {"1h ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Xbox"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="block-footer cstack lg:mt-2">
                  <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent text-black dark:text-white hover:text-black border w-100">
                    <span>
                      {"See all Adventure"}
                    </span>
                    <i className="icon icon-1 unicon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
                <div className="block-header panel">
                  <h2 className="h5 xl:h4 fw-medium m-0 text-inherit dark:text-white hstack gap-narrow">
                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                      {"Battle Ground"}
                    </SiteLink>
                    <i className="icon-1 unicon-chevron-right opacity-60 mb-nnarrow"></i>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 gy-3 md:gx-3 md:gy-4">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Adventure"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Souls"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Xbox"}
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
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Tech Tools for your Time Management: Enhancing Productivity"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
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
                                      {"6mo ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="block-footer cstack lg:mt-2">
                  <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent text-black dark:text-white hover:text-black border w-100">
                    <span>
                      {"See all Battle Ground"}
                    </span>
                    <i className="icon icon-1 unicon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden uc-dark">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner panel p-4 lg:p-6 xl:py-10 bg-black text-white rounded-top md:rounded-top-2 overflow-hidden">
          <video className="video-cover media-cover z-0" src="/assets/images/demo-five/gameplay.mp4" title="The battle began!" loop muted playsInline data-uc-cover=""></video>
          <div className="position-cover bg-gradient-to-r from-black to-transparent z-1 opacity-80"></div>
          <div className="panel max-w-2/3 lg:max-w-1/3 z-1">
            <span className="fs-7 fw-bold text-uppercase opacity-70">
              {"The battle began"}
            </span>
            <p className="h4 mt-2">
              {"Spine Tournament has sprung!"}
            </p>
            <p className="fs-5 mt-1 d-none md:d-block">
              {"This season, save big on your favorite games and support your team."}
            </p>
            <a href="#" className="btn btn-xs md:btn-sm btn-primary mt-2 lg:mt-4">
              <span>
                {"Support your team"}
              </span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent" style={{"marginTop":"2px"} as React.CSSProperties}>
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2 lg:gap-4">
          <div className="section-content panel">
            <div className="swiper rounded-bottom md:rounded-bottom-2" data-uc-swiper="items: 2; gap: 2; next: .nav-next; prev: .nav-prev; disable-class: d-none;" data-uc-swiper-s="items: 3;" data-uc-swiper-l="items: 4;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-07.svg" alt="Batsrik" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Batsrik"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-6 fw-medium">
                          {"Ended"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"FT"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-10.svg" alt="Knightz" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Knightz"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-08.svg" alt="Bullhord" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Bullhord"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-6 fw-medium">
                          {"Ended"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"FT"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-05.svg" alt="Tigerhead" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Tigerhead"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-01.svg" alt="The Sharks" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"The Sharks"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-7 text-red fw-bold" data-uc-animate="flash">
                          {"Live"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-02.svg" alt="Crusader" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Crusader"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-red text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Watch"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-03.svg" alt="Archers" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Archers"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-7 text-red fw-bold" data-uc-animate="flash">
                          {"Live"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-04.svg" alt="Jeteagle" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Jeteagle"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-red text-white px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Watch"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-05.svg" alt="Tigerhead" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Tigerhead"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-6 fw-medium">
                          {"16:30"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"12/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-06.svg" alt="Comander" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Comander"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-07.svg" alt="Batsrik" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Batsrik"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-6 fw-medium">
                          {"20:00"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"12/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-08.svg" alt="Bullhord" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Bullhord"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-09.svg" alt="Wolfez" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Wolfez"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-6 fw-medium">
                          {"21:00"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"12/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-10.svg" alt="Knightz" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Knightz"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-06.svg" alt="Comander" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Comander"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-6 fw-medium">
                          {"22:00"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"24/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-03.svg" alt="Archers" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Archers"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-01.svg" alt="The Sharks" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"The Sharks"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-6 fw-medium">
                          {"15:15"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"30/04"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-07.svg" alt="Batsrik" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Batsrik"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-04.svg" alt="Jeteagle" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Jeteagle"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-6 fw-medium">
                          {"18:30"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"01/05"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-09.svg" alt="Wolfez" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Wolfez"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="panel p-2 lg:p-3 lh-sm text-center bg-gray-25 dark:bg-gray-800 dark:text-white uc-visible-toggle" tabIndex={0}>
                    <div className="hstack gap-0">
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-05.svg" alt="Tigerhead" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"Tigerhead"}
                        </span>
                      </div>
                      <div className="vstack justify-center gap-narrow w-1/3">
                        <span className="fs-6 fw-medium">
                          {"15:15"}
                        </span>
                        <span className="fs-7 text-gray-900 dark:text-white text-opacity-50">
                          {"02/05"}
                        </span>
                      </div>
                      <div className="vstack gap-narrow w-1/3">
                        <img src="/assets/images/demo-five/teams/logo-01.svg" alt="The Sharks" className="w-32px h-32px lg:w-40px lg:h-40px m-auto" />
                        <span className="fs-7 fw-medium mt-1 text-gray-900 dark:text-white d-none md:d-block">
                          {"The Sharks"}
                        </span>
                      </div>
                    </div>
                    <a href="#" className="position-absolute top-50 start-50 translate-middle btn btn-2xs btn-primary px-1 rounded-1 fs-7 z-1 uc-invisible-hover">
                      <span>
                        {"Details"}
                      </span>
                    </a>
                    <a href="#" className="position-cover"></a>
                  </div>
                </div>
              </div>
            </div>
            <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black dark:bg-gray-700 dark:text-white rounded-circle p-0 border-0 shadow-sm w-24px md:w-32px h-24px md:h-32px z-1">
              <i className="icon-narrow fw-bold unicon-chevron-left"></i>
            </div>
            <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black dark:bg-gray-700 dark:text-white rounded-circle p-0 border-0 shadow-sm w-24px md:w-32px h-24px md:h-32px z-1">
              <i className="icon-narrow fw-bold unicon-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel">
    <div className="section-outer panel py-4 lg:py-6">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="content-wrap row child-cols-12 g-4" data-uc-grid="">
            <div className="md:col-8">
              <div className="main-wrap panel">
                <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
                  <div className="block-header panel">
                    <h2 className="h5 xl:h4 fw-medium m-0 text-inherit dark:text-white">
                      {"Latest games, news and updates"}
                    </h2>
                  </div>
                  <div className="block-content">
                    <div className="row child-cols-6 lg:child-cols-4 g-2 gy-3 md:gx-3 md:gy-4">
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Law enforcement officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Business Agility the Digital Age: Leveraging AI and Automation"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"AI and Marketing: Unlocking Customer Insights"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Hidden Gems: Underrated Travel Destinations Around the World"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded overflow-hidden">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-five/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack gap-1">
                            <h3 className="post-title h6 fw-medium m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="block-footer cstack lg:mt-2">
                    <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent text-black dark:text-white hover:text-black border w-100">
                      <span>
                        {"Load more posts"}
                      </span>
                      <i className="icon icon-1 unicon-chevron-right"></i>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="md:col-4">
              <div className="sidebar-wrap panel" data-uc-sticky="end: .content-wrap; offset: 180; media: @m;">
                <div className="widget ad-widget vstack gap-2 text-center">
                  <div className="widgt-title">
                    <h4 className="fs-7 text-uppercase m-0">
                      {"Sponsore"}
                    </h4>
                  </div>
                  <div className="widgt-content">
                    <a className="cstack max-w-300px mx-auto text-none" href="https://themeforest.net/user/reacthemes/portfolio" target="_blank" rel="nofollow">
                      <img className="d-block dark:d-none rounded" src="/assets/images/common/ad-slot-aside.jpg" alt="Ad slot" />
                      <img className="d-none dark:d-block rounded" src="/assets/images/common/ad-slot-aside-2.jpg" alt="Ad slot" />
                    </a>
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
<footer id="uc-footer" className="uc-footer panel">
  <div className="footer-outer py-4 lg:py-6 bg-gray-300 bg-opacity-10">
    <div className="container max-w-xl">
      <div className="footer-inner vstack gap-4 lg:gap-6">
        <div className="uc-footer-top">
          <div className="row child-col-12 md:child-cols-4 g-4" data-uc-grid="">
            <div className="col-3 md:col-4">
              <div className="footer-logo">
                <SiteLink href="/">
                  <img className="uc-logo w-32px text-gray-900 dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 transition-all" src="/assets/images/demo-five/common/logo.svg" alt="News5" data-uc-svg="" />
                </SiteLink>
              </div>
            </div>
            <div className="col-9 md:col-4">
              <nav className="footer-nav row child-cols-6 g-4 fw-bold dark:text-white">
                <ul className="nav-y gap-2">
                  <li>
                    <SiteLink href="/blog-category">
                      {"PC Games"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"Sony"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"Xbox"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"Exclusive"}
                    </SiteLink>
                  </li>
                </ul>
                <ul className="nav-y gap-2">
                  <li>
                    <SiteLink href="/blog-category">
                      {"Deals"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"Support"}
                    </SiteLink>
                  </li>
                  <li>
                    <SiteLink href="/blog-category">
                      {"FAQ"}
                    </SiteLink>
                  </li>
                </ul>
              </nav>
            </div>
            <div>
              <form className="hstack gap-1 p-narrow bg-gray-300 bg-opacity-10 rounded-pill">
                <input type="email" className="form-control-plaintext form-control-sm fs-6 dark:text-white" placeholder="Your email address.." />
                <button type="submit" className="btn btn-sm btn-primary">
                  {"Subscribe"}
                </button>
              </form>
              <p className="fs-7 text-center mt-2">
                {"Do not worry, we don't spam!"}
              </p>
              <ul className="nav-x justify-center gap-2 mt-4">
                <li>
                  <a href="#fb">
                    <i className="icon icon-2 unicon-logo-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#x">
                    <i className="icon icon-2 unicon-logo-x-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="#in">
                    <i className="icon icon-2 unicon-logo-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#yt">
                    <i className="icon icon-2 unicon-logo-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="m-0" />
        <div className="uc-footer-bottom panel hstack gap-2 items-start justify-between fs-7">
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
