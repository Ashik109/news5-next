import type { Metadata } from "next";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu5 from "@/components/template/MobileMenu5";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal5 from "@/components/template/NewsletterModal5";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header5 from "@/components/template/Header5";
import Footer5 from "@/components/template/Footer5";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-nine" theme="/assets/css/theme/demo-nine.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-white text-opacity-50 overflow-x-hidden">
<SearchModal1 />
<MobileMenu5 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal5 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header5 />
<div id="wrapper" className="wrap overflow-hidden-x">
  <div className="section panel overflow-hidden swiper-parent my-2 lg:my-4">
    <div className="section-outer panel dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2">
          <div className="block-layout destinations-layout vstack gap-2 lg:gap-4 panel">
            <div className="block-content panel">
              <div className="swiper" data-uc-swiper="items: 3; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: d-none;" data-uc-swiper-s="items: 3; gap: 16;" data-uc-swiper-l="items: 8; gap: 24;">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-01.jpg" alt="Santorini" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="Santorini"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"Santorini"}
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-08.jpg" alt="Paris" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="Paris"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"Paris"}
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-03.jpg" alt="Marrakesh" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="Marrakesh"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"Marrakesh"}
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-04.jpg" alt="Giza" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="Giza"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"Giza"}
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-05.jpg" alt="Lagos" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="Lagos"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"Lagos"}
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-10.jpg" alt="Casablanca" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="Casablanca"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"Casablanca"}
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-06.jpg" alt="Pekin" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="Pekin"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"Pekin"}
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-07.jpg" alt="Marsille" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="Marsille"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"Marsille"}
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-02.jpg" alt="London" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="London"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"London"}
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded-circle uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/destinations/img-09.jpg" alt="Istanbul" data-uc-img="loading: lazy" />
                        <a href="#" className="position-cover" data-caption="Istanbul"></a>
                      </figure>
                      <h6 className="h6 m-0">
                        {"Istanbul"}
                      </h6>
                    </div>
                  </div>
                </div>
              </div>
              <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle mt-n2 btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
                <i className="icon-1 unicon-chevron-left"></i>
              </div>
              <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle mt-n2 btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
                <i className="icon-1 unicon-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4">
          <div className="section-content">
            <div className="block-layout slider-layout swiper-parent uc-dark">
              <div className="block-content panel uc-visible-toggle">
                <div className="swiper" data-uc-swiper="items: 1; active: 1; gap: 4; prev: .nav-prev; next: .nav-next; autoplay: 6000; parallax: true; fade: true; effect: fade; disable-class: d-none;">
                  <div className="swiper-wrapper">
                    <div className="swiper-slide">
                      <article className="post type-post panel vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark rounded-2">
                        <div className="post-media panel overflow-hidden h-100">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                            <canvas className="h-100 w-100"></canvas>
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                          </div>
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 d-block md:d-none">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                        <div className="post-header panel vstack justify-center items-center gap-2 p-2 sm:p-4 position-cover text-center text-white" data-swiper-parallax-y="-24">
                          <div className="post-category hstack gap-narrow justify-center items-center">
                            <SiteLink className="btn btn-xs btn-primary fs-7 mb-1 d-none md:d-inline-flex" href="/blog-category">
                              {"Travel"}
                            </SiteLink>
                          </div>
                          <h3 className="post-title h4 xl:h1 m-0 max-w-700px text-white text-truncate-2">
                            <SiteLink className="text-none text-white" href="/blog-details">
                              {"AI and Marketing: Unlocking Customer Insights"}
                            </SiteLink>
                          </h3>
                          <div>
                            <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
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
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article className="post type-post panel vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark rounded-2">
                        <div className="post-media panel overflow-hidden h-100">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                            <canvas className="h-100 w-100"></canvas>
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                          </div>
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 d-block md:d-none">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                        <div className="post-header panel vstack justify-center items-center gap-2 p-2 sm:p-4 position-cover text-center text-white" data-swiper-parallax-y="-24">
                          <div className="post-category hstack gap-narrow justify-center items-center">
                            <SiteLink className="btn btn-xs btn-primary fs-7 mb-1 d-none md:d-inline-flex" href="/blog-category">
                              {"World"}
                            </SiteLink>
                          </div>
                          <h3 className="post-title h4 xl:h1 m-0 max-w-700px text-white text-truncate-2">
                            <SiteLink className="text-none text-white" href="/blog-details">
                              {"Hidden Gems: Underrated Travel Destinations Around the World"}
                            </SiteLink>
                          </h3>
                          <div>
                            <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
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
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article className="post type-post panel vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark rounded-2">
                        <div className="post-media panel overflow-hidden h-100">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                            <canvas className="h-100 w-100"></canvas>
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                          </div>
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 d-block md:d-none">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                        <div className="post-header panel vstack justify-center items-center gap-2 p-2 sm:p-4 position-cover text-center text-white" data-swiper-parallax-y="-24">
                          <div className="post-category hstack gap-narrow justify-center items-center">
                            <SiteLink className="btn btn-xs btn-primary fs-7 mb-1 d-none md:d-inline-flex" href="/blog-category">
                              {"Destinations"}
                            </SiteLink>
                          </div>
                          <h3 className="post-title h4 xl:h1 m-0 max-w-700px text-white text-truncate-2">
                            <SiteLink className="text-none text-white" href="/blog-details">
                              {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                            </SiteLink>
                          </h3>
                          <div>
                            <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
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
                      </article>
                    </div>
                    <div className="swiper-slide">
                      <article className="post type-post panel vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark rounded-2">
                        <div className="post-media panel overflow-hidden h-100">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                            <canvas className="h-100 w-100"></canvas>
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                          </div>
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 d-block md:d-none">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                        <div className="post-header panel vstack justify-center items-center gap-2 p-2 sm:p-4 position-cover text-center text-white" data-swiper-parallax-y="-24">
                          <div className="post-category hstack gap-narrow justify-center items-center">
                            <SiteLink className="btn btn-xs btn-primary fs-7 mb-1 d-none md:d-inline-flex" href="/blog-category">
                              {"Travel"}
                            </SiteLink>
                          </div>
                          <h3 className="post-title h4 xl:h1 m-0 max-w-700px text-white text-truncate-2">
                            <SiteLink className="text-none text-white" href="/blog-details">
                              {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                            </SiteLink>
                          </h3>
                          <div>
                            <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
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
                </div>
                <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle-y btn btn-alt-primary text-black rounded-circle p-0 mx-2 border-0 shadow-xs w-32px h-32px z-1 uc-hidden-hover">
                  <i className="icon-1 unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next position-absolute top-50 end-0 translate-middle-y btn btn-alt-primary text-black rounded-circle p-0 mx-2 border-0 shadow-xs w-32px h-32px z-1 uc-hidden-hover">
                  <i className="icon-1 unicon-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel py-4 lg:py-6 dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols g-4 lg:g-6 col-match">
            <div className="lg:col-4">
              <div className="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 md:h5 m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"Istanbul"}
                      </span>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 lg:g-4 sep-x">
                    <div>
                      <article className="post type-post panel vstack gap-2 lg:gap-3 overflow-hidden uc-dark">
                        <div className="post-media panel overflow-hidden rounded-2">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90 rounded-2"></div>
                        <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                          <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
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
                          <h3 className="post-title h6 lg:h5 m-0 m-0 max-w-600px text-white text-truncate-2">
                            <SiteLink className="text-none text-white" href="/blog-details">
                              {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                            </SiteLink>
                          </h3>
                          <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                            <span>
                              {"1min"}
                            </span>
                          </div>
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"55min"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden rounded-1 max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"1h"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden rounded-1 max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"2h"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden rounded-1 max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
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
            <div className="lg:col-4">
              <div className="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 md:h5 m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"Casablanca"}
                      </span>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 lg:g-4 sep-x">
                    <div>
                      <article className="post type-post panel vstack gap-2 lg:gap-3 overflow-hidden uc-dark">
                        <div className="post-media panel overflow-hidden rounded-2">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90 rounded-2"></div>
                        <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                          <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
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
                          <h3 className="post-title h6 lg:h5 m-0 m-0 max-w-600px text-white text-truncate-2">
                            <SiteLink className="text-none text-white" href="/blog-details">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                          <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                            <span>
                              {"12h"}
                            </span>
                          </div>
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"7d"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden rounded-1 max-w-72px min-w-72px">
                              <div className="featured-video bg-gray-700 ratio ratio-1x1">
                                <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                  <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/videos/vid-04.webm" type="video/webm" />
                                  {" Your browser does not support the video tag. "}
                                </video>
                              </div>
                              <div className="has-video-overlay position-absolute top-0 end-0 w-72px h-72px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                              <span className="cstack has-video-icon position-absolute top-50 start-50 translate-middle fs-6 w-40px h-40px text-white">
                                <i className="icon-narrow unicon-play-filled-alt"></i>
                              </span>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"9d"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden rounded-1 max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"AI and Marketing: Unlocking Customer Insights"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"15d"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden rounded-1 max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
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
            <div className="lg:col-4">
              <div className="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 md:h5 m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"Santorini"}
                      </span>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 lg:g-4 sep-x">
                    <div>
                      <article className="post type-post panel vstack gap-2 lg:gap-3 overflow-hidden uc-dark">
                        <div className="post-media panel overflow-hidden rounded-2">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90 rounded-2"></div>
                        <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                          <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
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
                              {"Hidden Gems: Underrated Travel Destinations Around the World"}
                            </SiteLink>
                          </h3>
                          <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                            <span>
                              {"23d"}
                            </span>
                          </div>
                        </div>
                        <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"29d"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden rounded-1 max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden rounded-1 max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                  {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden rounded-1 max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
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
  <div className="section panel overflow-hidden my-2 lg:my-4">
    <div className="section-outer panel dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2 p-4 lg:p-8 rounded-2 bg-gray-25 dark:bg-gray-800">
          <img className="position-absolute bottom-0 start-0 m-4 w-100px text-dark dark:text-white opacity-30 d-none lg:d-block" src="/assets/images/demo-nine/common/ballon.svg" alt="ballon" data-uc-svg="" />
          <img className="position-absolute top-0 end-0 m-4 w-100px text-dark dark:text-white opacity-30 d-none lg:d-block" src="/assets/images/demo-nine/common/camera.svg" alt="ballon" data-uc-svg="" />
          <div className="block-layout panel">
            <div className="row child-cols-12 justify-center text-center g-4">
              <div>
                <div className="block-header panel">
                  <h3 className="h4 lg:h3 mb-1">
                    {"Subscribe to the Newsletter"}
                  </h3>
                  <p className="fs-6 lg:fs-5 xl:fs-4">
                    {"Join 10k+ people to get notified about new posts, news and tips."}
                  </p>
                </div>
              </div>
              <div className="col-12 lg:col-7">
                <div className="block-content panel">
                  <form className="vstack gap-2 max-w-500px mx-auto">
                    <input type="email" className="form-control form-control-md w-full fs-6 bg-white dark:bg-gray-800 dark:border-gray-700 dark:border-gray-700" placeholder="Email address" />
                    <button type="submit" className="btn btn-md btn-primary min-w-150px">
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
    </div>
  </div>
  <div id="latest_news" className="latest-news section panel">
    <div className="section-outer panel py-4 lg:py-6">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="content-wrap row child-cols-12 g-4 lg:g-6">
            <div className="md:col-8">
              <div className="main-wrap panel vstack gap-3 lg:gap-6">
                <div className="block-layout grid-layout vstack gap-2 lg:gap-6 xl:gap-8 panel">
                  <div className="block-header panel text-center">
                    <div className="hr w-100 position-absolute top-0 start-0 end-0"></div>
                    <div className="vstack gap-0 py-1 px-2 position-absolute top-50 start-50 translate-middle bg-white dark:bg-gray-900">
                      <h2 className="h4 lg:h3 m-0 text-black dark:text-white">
                        {"Latest Stories"}
                      </h2>
                      <p className="m-0">
                        {"New posts, news and tips."}
                      </p>
                    </div>
                  </div>
                  <div className="block-content">
                    <div className="row child-cols-12 g-2 lg:g-8">
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"World"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Law enforcement officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"World"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"Guide"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"Destinations"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"Destinations"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-video bg-gray-700 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/videos/vid-04.webm" type="video/webm" />
                                {" Your browser does not support the video tag. "}
                              </video>
                            </div>
                            <div className="has-video-overlay position-absolute top-0 end-0 w-150px h-150px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                            <span className="cstack has-video-icon position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                              <i className="icon-narrow unicon-play-filled-alt"></i>
                            </span>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"Guide"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Business Agility the Digital Age: Leveraging AI and Automation"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"World"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"Travel"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"AI and Marketing: Unlocking Customer Insights"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"World"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Hidden Gems: Underrated Travel Destinations Around the World"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"Destinations"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"Travel"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack gap-1 lg:gap-2">
                          <div className="post-media panel">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 rounded-2 overflow-hidden">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-nine/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog-details" className="position-cover"></SiteLink>
                            <div className="post-category hstack gap-narrow position-absolute top-100 start-50 translate-middle z-1">
                              <SiteLink className="btn btn-xs btn-primary" href="/blog-category">
                                {"World"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="post-header panel vstack items-center gap-1 text-center max-w-2/3 mx-auto pt-2">
                            <h3 className="post-title h5 md:h4 lg:h3 m-0 text-truncate-2">
                              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                              </SiteLink>
                            </h3>
                            <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                              {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                            </p>
                            <div className="post-link">
                              <SiteLink href="/blog-details" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                <span>
                                  {"Continue Reading"}
                                </span>
                              </SiteLink>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="block-footer cstack lg:mt-2 xl:mt-4">
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
            <div className="md:col-4">
              <div className="sidebar-wrap panel vstack gap-2 pb-2" data-uc-sticky="end: .content-wrap; offset: 150; media: @m;">
                <div className="widget popular-widget vstack gap-2 p-2 border">
                  <div className="widget-title text-center">
                    <h5 className="fs-7 m-0">
                      {"Popular now"}
                    </h5>
                  </div>
                  <div className="widget-content">
                    <div className="row child-cols-12 gx-4 gy-3 sep-x">
                      <div>
                        <article className="post type-post panel">
                          <div className="row child-cols g-2 lg:g-3">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"1"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        <article className="post type-post panel">
                          <div className="row child-cols g-2 lg:g-3">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"2"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        <article className="post type-post panel">
                          <div className="row child-cols g-2 lg:g-3">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"3"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                        <article className="post type-post panel">
                          <div className="row child-cols g-2 lg:g-3">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"4"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-details">
                                      {"How Businesses Are Adapting to E-Commerce and AI Integration"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-meta panel hstack justify-between fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                <div className="widget social-widget vstack gap-2 text-center p-2 border">
                  <div className="widgt-title">
                    <h4 className="fs-7 m-0">
                      {"Follow @News5"}
                    </h4>
                  </div>
                  <div className="widgt-content">
                    <form className="vstack gap-1">
                      <input className="form-control form-control-sm fs-6 fw-medium h-40px w-full bg-white dark:bg-gray-800 dark:bg-gray-800 dark:border-white dark:border-opacity-15 dark:border-opacity-15" type="email" placeholder="Your email" required />
                      <button className="btn btn-sm btn-primary" type="submit">
                        {"Sign up"}
                      </button>
                    </form>
                    <ul className="nav-x justify-center gap-1 mt-3">
                      <li>
                        <a href="#fb" className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150">
                          <i className="icon icon-1 unicon-logo-facebook"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#x" className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150">
                          <i className="icon icon-1 unicon-logo-x-filled"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#in" className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150">
                          <i className="icon icon-1 unicon-logo-instagram"></i>
                        </a>
                      </li>
                      <li>
                        <a href="#yt" className="cstack w-32px h-32px border rounded-circle hover:text-black dark:hover:text-white hover:scale-110 transition-all duration-150">
                          <i className="icon icon-1 unicon-logo-youtube"></i>
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
<Footer5 />
    </TemplateShell>
  );
}
