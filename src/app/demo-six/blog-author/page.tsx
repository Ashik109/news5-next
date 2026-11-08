import type { Metadata } from "next";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu7 from "@/components/template/MobileMenu7";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal7 from "@/components/template/NewsletterModal7";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header7 from "@/components/template/Header7";
import Footer7 from "@/components/template/Footer7";

export const metadata: Metadata = { title: "Amir Nisi - News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-six" theme="/assets/css/theme/demo-six.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu7 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal7 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header7 />
<div id="wrapper" className="wrap overflow-hidden-x">
  <div className="breadcrumbs panel z-1 py-2 bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white">
    <div className="container max-w-xl">
      <ul className="breadcrumb nav-x justify-center gap-1 fs-7 sm:fs-6 m-0">
        <li>
          <SiteLink href="/">
            {"Home"}
          </SiteLink>
        </li>
        <li>
          <i className="unicon-chevron-right opacity-50"></i>
        </li>
        <li>
          <SiteLink href="/blog">
            {"Blog"}
          </SiteLink>
        </li>
        <li>
          <i className="unicon-chevron-right opacity-50"></i>
        </li>
        <li>
          <span className="opacity-50">
            {"Amir Nisi"}
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div className="section py-3 sm:py-6 lg:py-9">
    <div className="container max-w-xl">
      <div className="panel vstack gap-3 sm:gap-6 lg:gap-9">
        <header className="page-header panel vstack text-center">
          <h1 className="h3 lg:h1">
            {"Author: Amir Nisi"}
          </h1>
          <span className="m-0 opacity-60">
            {"Showed 15 posts out of 20 total written by "}
            <br className="d-block lg:d-none" />
            {" \"Amir Nisi\"."}
          </span>
        </header>
        <div className="row g-4 xl:g-8">
          <div className="col">
            <div className="panel text-center">
              <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 col-match gy-4 xl:gy-6 gx-2 sm:gx-4">
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Tech Innovations Reshaping the Retail Landscape: AI Payments"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Tennis"}
                        </SiteLink>
                      </div>
                      <div className="position-absolute top-0 end-0 w-150px h-150px rounded-top-end bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                      <span className="cstack position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                        <i className="icon-narrow unicon-play-filled-alt"></i>
                      </span>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                    {"Mar 8, 2024"}
                                  </span>
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
                  </article>
                </div>
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Balancing Work and Wellness: Tech Solutions for Healthy"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Basketball"}
                        </SiteLink>
                      </div>
                      <div className="position-absolute top-0 end-0 w-150px h-150px rounded-top-end bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                      <span className="cstack position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                        <i className="icon-narrow unicon-play-filled-alt"></i>
                      </span>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                    {"Mar 8, 2024"}
                                  </span>
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
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="The Importance of Sleep: Tips for Better Rest and Recovery"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Football"}
                        </SiteLink>
                      </div>
                      <div className="position-absolute top-0 end-0 w-150px h-150px rounded-top-end bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                      <span className="cstack position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                        <i className="icon-narrow unicon-play-filled-alt"></i>
                      </span>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                    {"Mar 8, 2024"}
                                  </span>
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
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Football"}
                        </SiteLink>
                      </div>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                    {"Mar 7, 2024"}
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
                  </article>
                </div>
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Business Agility the Digital Age: Leveraging AI and Automation"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Basketball"}
                        </SiteLink>
                      </div>
                      <div className="position-absolute top-0 end-0 w-150px h-150px rounded-top-end bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                      <span className="cstack position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                        <i className="icon-narrow unicon-play-filled-alt"></i>
                      </span>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Business Agility the Digital Age: Leveraging AI and Automation"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Mar 1, 2024"}
                                  </span>
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
                  </article>
                </div>
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="The Art of Baking: From Classic Bread to Artisan Pastries"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Tennis"}
                        </SiteLink>
                      </div>
                      <div className="position-absolute top-0 end-0 w-150px h-150px rounded-top-end bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                      <span className="cstack position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                        <i className="icon-narrow unicon-play-filled-alt"></i>
                      </span>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Feb 28, 2024"}
                                  </span>
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
                  </article>
                </div>
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="AI and Marketing: Unlocking Customer Insights"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Esports"}
                        </SiteLink>
                      </div>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"AI and Marketing: Unlocking Customer Insights"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Feb 22, 2024"}
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
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Hidden Gems: Underrated Travel Destinations Around the World"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Tennis"}
                        </SiteLink>
                      </div>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Hidden Gems: Underrated Travel Destinations Around the World"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Feb 14, 2024"}
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
                  </article>
                </div>
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Eco-Tourism: Traveling Responsibly and Sustainably"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Football"}
                        </SiteLink>
                      </div>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Feb 8, 2024"}
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
                  </article>
                </div>
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Solo Travel: Some Tips and Destinations for the Adventurous Explorer"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Esports"}
                        </SiteLink>
                      </div>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                    {"Jan 8, 2024"}
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
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="AI-Powered Financial Planning: How Algorithms Revolutionizing"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Tennis"}
                        </SiteLink>
                      </div>
                      <div className="position-absolute top-0 end-0 w-150px h-150px rounded-top-end bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                      <span className="cstack position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                        <i className="icon-narrow unicon-play-filled-alt"></i>
                      </span>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                    {"Jan 8, 2024"}
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
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Tech Tools for your Time Management: Enhancing Productivity"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Football"}
                        </SiteLink>
                      </div>
                      <div className="position-absolute top-0 end-0 w-150px h-150px rounded-top-end bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                      <span className="cstack position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                        <i className="icon-narrow unicon-play-filled-alt"></i>
                      </span>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Tech Tools for your Time Management: Enhancing Productivity"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                    {"Dec 8, 2023"}
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
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Basketball"}
                        </SiteLink>
                      </div>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                    {"Sep 8, 2023"}
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
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Gaming in the Age of AI: Strategies for Startups"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Esports"}
                        </SiteLink>
                      </div>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Gaming in the Age of AI: Strategies for Startups"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                    {"Jun 8, 2023"}
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
                <div>
                  <article className="post type-post panel vstack gap-2">
                    <div className="post-image panel overflow-hidden">
                      <figure className="featured-image m-0 ratio ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Top Independent Contractors to Invest in Best of Startups"></SiteLink>
                      </figure>
                      <div className="post-category hstack gap-narrow position-absolute top-0 start-0 m-1 fs-7 fw-bold h-24px px-1 rounded-1 shadow-xs bg-white text-primary">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Basketball"}
                        </SiteLink>
                      </div>
                    </div>
                    <div className="post-header panel vstack gap-1 lg:gap-2">
                      <h3 className="post-title h6 sm:h5 xl:h4 m-0 text-truncate-2 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Top Independent Contractors to Invest in Best of Startups"}
                        </SiteLink>
                      </h3>
                      <div>
                        <div className="post-meta panel hstack justify-center fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                                <div className="post-date hstack gap-narrow">
                                  <span>
                                    {"Mar 8, 2023"}
                                  </span>
                                </div>
                              </div>
                              <div>
                                <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                                  <i className="icon-narrow unicon-chat"></i>
                                  <span>
                                    {"12"}
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
              <div className="nav-pagination pt-3 mt-6 lg:mt-9 border-top border-gray-100 dark:border-gray-800">
                <ul className="nav-x uc-pagination hstack gap-1 justify-center ft-secondary" data-uc-margin="">
                  <li>
                    <a href="#">
                      <span className="icon icon-1 unicon-chevron-left"></span>
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {"1"}
                    </a>
                  </li>
                  <li>
                    <a href="#" className="uc-active">
                      {"2"}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {"3"}
                    </a>
                  </li>
                  <li className="uc-disabled">
                    <span>
                      {"…"}
                    </span>
                  </li>
                  <li>
                    <a href="#">
                      {"8"}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      {"9"}
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <span className="icon icon-1 unicon-chevron-right"></span>
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
<Footer7 />
    </TemplateShell>
  );
}
