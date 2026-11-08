import type { Metadata } from "next";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu9 from "@/components/template/MobileMenu9";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal9 from "@/components/template/NewsletterModal9";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header9 from "@/components/template/Header9";
import Footer9 from "@/components/template/Footer9";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-three" theme="/assets/css/theme/demo-three.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu9 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal9 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header9 />
<div id="wrapper" className="wrap overflow-hidden-x">
  <div className="section panel overflow-hidden py-2 bg-gray-25 dark:bg-gray-900 uc-dark">
    <div className="section-outer panel">
      <div className="container container-expand">
        <div className="section-inner panel vstack gap-4">
          <div className="section-content">
            <div className="block-layout grid-overlay-layout">
              <div className="block-content">
                <div className="row child-cols-12 md:child-cols-6 g-1 col-match">
                  <div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle  vstack gap-2 lg:gap-3 h-100 rounded overflow-hidden">
                        <div className="post-media panel overflow-hidden h-100">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                            <canvas className="h-100 w-100"></canvas>
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                          </div>
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                        <div className="post-header panel vstack justify-end items-start gap-1 sm:gap-2 p-2 sm:p-4 position-cover text-white">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tech"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"|"}
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
                            <SiteLink className="text-none text-white" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                              {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                            </SiteLink>
                          </h3>
                          <div>
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
                        </div>
                      </article>
                    </div>
                  </div>
                  <div>
                    <div className="panel">
                      <div className="row child-cols-6 g-1">
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 rounded overflow-hidden">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-4x3">
                                <img className="media-cover image image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                  {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Gadgets"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"1min ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 rounded overflow-hidden">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-4x3">
                                <img className="media-cover image image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                  {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Startups"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
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
                            <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div className="d-none lg:d-block">
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 rounded overflow-hidden">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-4x3">
                                <img className="media-cover image image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                  {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Gadgets"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"1h ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                          </article>
                        </div>
                        <div className="d-none lg:d-block">
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 rounded overflow-hidden">
                            <div className="post-media panel overflow-hidden">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-4x3">
                                <img className="media-cover image image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-start items-start flex-column-reverse gap-1 p-2 position-cover text-white">
                              <h3 className="post-title h6 sm:h5 lg:h6 xl:h5 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                  {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                </SiteLink>
                              </h3>
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"2h ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                            <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
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
  <div className="image-links-panel panel overflow-hidden pt-2 swiper-parent">
    <div className="container max-w-xl">
      <div className="panel">
        <div className="swiper overflow-unset" data-uc-swiper="items: 3.25; gap: 8; center: true; freeMode: true; center-bounds: true; disable-class: d-none;" data-uc-swiper-s="items: 6;" data-uc-swiper-l="items: 8; gap: 16;">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="panel uc-transition-toggle vstack text-center overflow-hidden rounded border border-white border-opacity-10">
                <figure className="featured-image m-0 ratio ratio-3x4 rounded-0 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-01.jpg" alt="Tech" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog-category" className="position-cover" data-caption="Tech"></SiteLink>
                </figure>
                <div className="overlay position-cover z-0 bg-black bg-opacity-50"></div>
                <div className="position-absolute bottom-0 vstack justify-end gap-1 lg:gap-2 h-3/4 w-100 p-2 bg-gradient-to-t from-orange-600 to-transparent">
                  <span className="fs-5 lg:fs-4 fw-bold text-white m-0">
                    {"Tech"}
                  </span>
                  <a href="#" className="btn btn-2xs border-white border-opacity-25 fs-7 text-white rounded-1">
                    {"Visit"}
                  </a>
                </div>
                <SiteLink className="position-cover text-none z-1" href="/blog-category"></SiteLink>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="panel uc-transition-toggle vstack text-center overflow-hidden rounded border border-white border-opacity-10">
                <figure className="featured-image m-0 ratio ratio-3x4 rounded-0 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-02.jpg" alt="Gadgets" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog-category" className="position-cover" data-caption="Gadgets"></SiteLink>
                </figure>
                <div className="overlay position-cover z-0 bg-black bg-opacity-50"></div>
                <div className="position-absolute bottom-0 vstack justify-end gap-1 lg:gap-2 h-3/4 w-100 p-2 bg-gradient-to-t from-lime-600 to-transparent">
                  <span className="fs-5 lg:fs-4 fw-bold text-white m-0">
                    {"Gadgets"}
                  </span>
                  <a href="#" className="btn btn-2xs border-white border-opacity-25 fs-7 text-white rounded-1">
                    {"Visit"}
                  </a>
                </div>
                <SiteLink className="position-cover text-none z-1" href="/blog-category"></SiteLink>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="panel uc-transition-toggle vstack text-center overflow-hidden rounded border border-white border-opacity-10">
                <figure className="featured-image m-0 ratio ratio-3x4 rounded-0 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-03.jpg" alt="Security" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog-category" className="position-cover" data-caption="Security"></SiteLink>
                </figure>
                <div className="overlay position-cover z-0 bg-black bg-opacity-50"></div>
                <div className="position-absolute bottom-0 vstack justify-end gap-1 lg:gap-2 h-3/4 w-100 p-2 bg-gradient-to-t from-red-600 to-transparent">
                  <span className="fs-5 lg:fs-4 fw-bold text-white m-0">
                    {"Security"}
                  </span>
                  <a href="#" className="btn btn-2xs border-white border-opacity-25 fs-7 text-white rounded-1">
                    {"Visit"}
                  </a>
                </div>
                <SiteLink className="position-cover text-none z-1" href="/blog-category"></SiteLink>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="panel uc-transition-toggle vstack text-center overflow-hidden rounded border border-white border-opacity-10">
                <figure className="featured-image m-0 ratio ratio-3x4 rounded-0 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-04.jpg" alt="Network" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog-category" className="position-cover" data-caption="Network"></SiteLink>
                </figure>
                <div className="overlay position-cover z-0 bg-black bg-opacity-50"></div>
                <div className="position-absolute bottom-0 vstack justify-end gap-1 lg:gap-2 h-3/4 w-100 p-2 bg-gradient-to-t from-green-600 to-transparent">
                  <span className="fs-5 lg:fs-4 fw-bold text-white m-0">
                    {"Network"}
                  </span>
                  <a href="#" className="btn btn-2xs border-white border-opacity-25 fs-7 text-white rounded-1">
                    {"Visit"}
                  </a>
                </div>
                <SiteLink className="position-cover text-none z-1" href="/blog-category"></SiteLink>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="panel uc-transition-toggle vstack text-center overflow-hidden rounded border border-white border-opacity-10">
                <figure className="featured-image m-0 ratio ratio-3x4 rounded-0 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-05.jpg" alt="Startups" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog-category" className="position-cover" data-caption="Startups"></SiteLink>
                </figure>
                <div className="overlay position-cover z-0 bg-black bg-opacity-50"></div>
                <div className="position-absolute bottom-0 vstack justify-end gap-1 lg:gap-2 h-3/4 w-100 p-2 bg-gradient-to-t from-blue-600 to-transparent">
                  <span className="fs-5 lg:fs-4 fw-bold text-white m-0">
                    {"Startups"}
                  </span>
                  <a href="#" className="btn btn-2xs border-white border-opacity-25 fs-7 text-white rounded-1">
                    {"Visit"}
                  </a>
                </div>
                <SiteLink className="position-cover text-none z-1" href="/blog-category"></SiteLink>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="panel uc-transition-toggle vstack text-center overflow-hidden rounded border border-white border-opacity-10">
                <figure className="featured-image m-0 ratio ratio-3x4 rounded-0 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-06.jpg" alt="Space" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog-category" className="position-cover" data-caption="Space"></SiteLink>
                </figure>
                <div className="overlay position-cover z-0 bg-black bg-opacity-50"></div>
                <div className="position-absolute bottom-0 vstack justify-end gap-1 lg:gap-2 h-3/4 w-100 p-2 bg-gradient-to-t from-teal-600 to-transparent">
                  <span className="fs-5 lg:fs-4 fw-bold text-white m-0">
                    {"Space"}
                  </span>
                  <a href="#" className="btn btn-2xs border-white border-opacity-25 fs-7 text-white rounded-1">
                    {"Visit"}
                  </a>
                </div>
                <SiteLink className="position-cover text-none z-1" href="/blog-category"></SiteLink>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="panel uc-transition-toggle vstack text-center overflow-hidden rounded border border-white border-opacity-10">
                <figure className="featured-image m-0 ratio ratio-3x4 rounded-0 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-07.jpg" alt="VR" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog-category" className="position-cover" data-caption="VR"></SiteLink>
                </figure>
                <div className="overlay position-cover z-0 bg-black bg-opacity-50"></div>
                <div className="position-absolute bottom-0 vstack justify-end gap-1 lg:gap-2 h-3/4 w-100 p-2 bg-gradient-to-t from-purple-600 to-transparent">
                  <span className="fs-5 lg:fs-4 fw-bold text-white m-0">
                    {"VR"}
                  </span>
                  <a href="#" className="btn btn-2xs border-white border-opacity-25 fs-7 text-white rounded-1">
                    {"Visit"}
                  </a>
                </div>
                <SiteLink className="position-cover text-none z-1" href="/blog-category"></SiteLink>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="panel uc-transition-toggle vstack text-center overflow-hidden rounded border border-white border-opacity-10">
                <figure className="featured-image m-0 ratio ratio-3x4 rounded-0 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-20.jpg" alt="Repair" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog-category" className="position-cover" data-caption="Repair"></SiteLink>
                </figure>
                <div className="overlay position-cover z-0 bg-black bg-opacity-50"></div>
                <div className="position-absolute bottom-0 vstack justify-end gap-1 lg:gap-2 h-3/4 w-100 p-2 bg-gradient-to-t from-pink-600 to-transparent">
                  <span className="fs-5 lg:fs-4 fw-bold text-white m-0">
                    {"Repair"}
                  </span>
                  <a href="#" className="btn btn-2xs border-white border-opacity-25 fs-7 text-white rounded-1">
                    {"Visit"}
                  </a>
                </div>
                <SiteLink className="position-cover text-none z-1" href="/blog-category"></SiteLink>
              </div>
            </div>
            <div className="swiper-slide">
              <div className="panel uc-transition-toggle vstack text-center overflow-hidden rounded border border-white border-opacity-10">
                <figure className="featured-image m-0 ratio ratio-3x4 rounded-0 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-09.jpg" alt="AI" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog-category" className="position-cover" data-caption="AI"></SiteLink>
                </figure>
                <div className="overlay position-cover z-0 bg-black bg-opacity-50"></div>
                <div className="position-absolute bottom-0 vstack justify-end gap-1 lg:gap-2 h-3/4 w-100 p-2 bg-gradient-to-t from-indigo-600 to-transparent">
                  <span className="fs-5 lg:fs-4 fw-bold text-white m-0">
                    {"AI"}
                  </span>
                  <a href="#" className="btn btn-2xs border-white border-opacity-25 fs-7 text-white rounded-1">
                    {"Visit"}
                  </a>
                </div>
                <SiteLink className="position-cover text-none z-1" href="/blog-category"></SiteLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel py-5 lg:py-8">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
            <div className="block-header panel">
              <h2 className="h5 lg:h4 fw-medium m-0 text-inherit hstack">
                <SiteLink className="text-none dark:text-white hover:text-primary duration-150" href="/blog-category">
                  {"Startups and technology"}
                </SiteLink>
                <i className="icon-2 lg:icon-3 unicon-chevron-right opacity-40"></i>
              </h2>
            </div>
            <div className="block-content">
              <div className="panel row child-cols-12 md:child-cols gy-4 md:gx-3 xl:gx-4">
                <div className="col-12 md:col-6 lg:col-7">
                  <div className="h-100">
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                      <div className="post-media panel overflow-hidden h-100">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                          <canvas className="h-100 w-100"></canvas>
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                        </div>
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 d-block md:d-none">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-end items-start gap-1 sm:gap-2 p-2 sm:p-4 position-cover text-white">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"|"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"2mo ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h5 lg:h4 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                            {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                          </SiteLink>
                        </h3>
                        <div>
                          <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60">
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
                <div>
                  <div className="row child-cols-12 g-4 sep-x">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"12h ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
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
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Tech"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"7d ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
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
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Network"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"9d ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
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
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Virtual Reality"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"15d ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                  {"AI and Marketing: Unlocking Customer Insights"}
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
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"23d ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                  {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <SiteLink href="/blog" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent dark:text-white border w-100 mt-4">
                    <span>
                      {"See all Tech"}
                    </span>
                    <i className="icon icon-1 unicon-chevron-right"></i>
                  </SiteLink>
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
          <a className="text-none" href="https://themeforest.net/user/reacthemes/portfolio" target="_blank" rel="nofollow">
            <img className="d-none md:d-block" src="/assets/images/common/ad-slot.jpg" alt="Ad slot" />
            <img className="d-block md:d-none" src="/assets/images/common/ad-slot-mobile.jpg" alt="Ad slot" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel py-5 lg:py-8">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols-6 g-4 lg:gx-6 xl:gy-8" data-uc-grid="">
            <div>
              <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
                <div className="block-header panel">
                  <h2 className="h5 lg:h4 fw-medium m-0 text-inherit hstack">
                    <SiteLink className="text-none dark:text-white hover:text-primary duration-150" href="/blog-category">
                      {"Corporates and innovation"}
                    </SiteLink>
                    <i className="icon-2 lg:icon-3 unicon-chevron-right opacity-40"></i>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-6 g-2 gy-3 md:gx-3 md:gy-4">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"AI Powered"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"|"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"12h ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tech"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"|"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"7d ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                              {"Business Agility the Digital Age: Leveraging AI and Automation"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Network"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"|"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"9d ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                              {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Virtual Reality"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"|"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"15d ago"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                              {"AI and Marketing: Unlocking Customer Insights"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="block-footer cstack lg:mt-2">
                  <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent dark:text-white border w-100 md:w-auto">
                    <span>
                      {"See all Gadgets"}
                    </span>
                    <i className="icon icon-1 unicon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
                <div className="block-header panel">
                  <h2 className="h5 lg:h4 fw-medium m-0 text-inherit hstack">
                    <SiteLink className="text-none dark:text-white hover:text-primary duration-150" href="/blog-category">
                      {"Investors and funding"}
                    </SiteLink>
                    <i className="icon-2 lg:icon-3 unicon-chevron-right opacity-40"></i>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-6 g-2 gy-3 md:gx-3 md:gy-4">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Travel"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"|"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                              {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tech"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"|"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                              {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Startups"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"|"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                              {"Tech Tools for your Time Management: Enhancing Productivity"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"AI Powered"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"|"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                              {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="block-footer cstack lg:mt-2">
                  <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent dark:text-white border w-100 md:w-auto">
                    <span>
                      {"See all Science"}
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
  <div className="section panel overflow-hidden swiper-parent uc-dark">
    <div className="section-outer panel py-5 lg:py-8 bg-gray-25 dark:bg-gray-800 dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4">
          <div className="section-header panel">
            <h2 className="h5 lg:h4 fw-medium m-0 text-inherit hstack">
              <SiteLink className="text-none dark:text-white hover:text-primary duration-150" href="/blog-category">
                {"Fintech and ecommerce"}
              </SiteLink>
              <i className="icon-2 lg:icon-3 unicon-chevron-right opacity-40"></i>
            </h2>
          </div>
          <div className="section-content">
            <div className="swiper" data-uc-swiper="items: 2; gap: 16; autoplay: 2500; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: opacity-40;" data-uc-swiper-s="items: 3;" data-uc-swiper-m="gap: 24;" data-uc-swiper-l="items: 3; gap: 32;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-video bg-gray-700 ratio ratio-16x9">
                          <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                            <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/videos/vid-01.webm" type="video/webm" />
                            {" Your browser does not support the video tag. "}
                          </video>
                        </div>
                        <div className="has-video-overlay position-absolute top-0 end-0 w-150px h-150px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                        <span className="cstack has-video-icon position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                          <i className="icon-narrow unicon-play-filled-alt"></i>
                        </span>
                        <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Gadgets"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"|"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"1h ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                            {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-video bg-gray-700 ratio ratio-16x9">
                          <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                            <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/videos/vid-04.webm" type="video/webm" />
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
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Tech"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"|"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"7d ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                            {"Business Agility the Digital Age: Leveraging AI and Automation"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-video bg-gray-700 ratio ratio-16x9">
                          <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                            <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/videos/vid-03.webm" type="video/webm" />
                            {" Your browser does not support the video tag. "}
                          </video>
                        </div>
                        <div className="has-video-overlay position-absolute top-0 end-0 w-150px h-150px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                        <span className="cstack has-video-icon position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                          <i className="icon-narrow unicon-play-filled-alt"></i>
                        </span>
                        <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Network"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"|"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"9d ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                            {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-video bg-gray-700 ratio ratio-16x9">
                          <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                            <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/videos/vid-05.webm" type="video/webm" />
                            {" Your browser does not support the video tag. "}
                          </video>
                        </div>
                        <div className="has-video-overlay position-absolute top-0 end-0 w-150px h-150px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                        <span className="cstack has-video-icon position-absolute top-0 end-0 fs-6 w-40px h-40px text-white">
                          <i className="icon-narrow unicon-play-filled-alt"></i>
                        </span>
                        <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Tech"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"|"}
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
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                            {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="hstack gap-1 mt-4">
                <div className="swiper-nav nav-prev btn btn-alt-primary bg-transparent dark:text-white rounded-0 p-0 border w-32px lg:w-40px h-32px lg:h-40px shadow-sm">
                  <i className="icon-1 unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next btn btn-alt-primary bg-transparent dark:text-white rounded-0 p-0 border w-32px lg:w-40px h-32px lg:h-40px shadow-sm">
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
    <div className="section-outer panel py-5 lg:py-8">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
            <div className="block-header panel">
              <h2 className="h5 lg:h4 fw-medium m-0 text-inherit hstack">
                <SiteLink className="text-none dark:text-white hover:text-primary duration-150" href="/blog-category">
                  {"Data and security"}
                </SiteLink>
                <i className="icon-2 lg:icon-3 unicon-chevron-right opacity-40"></i>
              </h2>
            </div>
            <div className="block-content">
              <div className="panel row child-cols-12 md:child-cols gy-4 md:gx-3 xl:gx-4">
                <div className="col-12 md:col-6 lg:col-7">
                  <div className="h-100">
                    <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                      <div className="post-media panel overflow-hidden h-100">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                          <canvas className="h-100 w-100"></canvas>
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                        </div>
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 d-block md:d-none">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                        </div>
                      </div>
                      <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                      <div className="post-header panel vstack justify-end items-start gap-1 sm:gap-2 p-2 sm:p-4 position-cover text-white">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                {"Trips"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"|"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"29d ago"}
                              </span>
                            </div>
                          </div>
                        </div>
                        <h3 className="post-title h5 lg:h4 m-0 max-w-600px text-white text-truncate-2">
                          <SiteLink className="text-none text-white" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                            {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                          </SiteLink>
                        </h3>
                        <div>
                          <div className="post-meta panel hstack justify-between fs-7 fw-medium text-white text-opacity-60">
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
                <div>
                  <div className="row child-cols-12 g-4 sep-x">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Gadgets"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"1min ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
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
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Startups"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"55min ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
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
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"Gadgets"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"1h ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
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
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"2h ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                  {"The Importance of Sleep: Tips for Better Rest and Recovery"}
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
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <div className="sep d-none md:d-block">
                                  {"|"}
                                </div>
                                <div className="d-none md:d-block">
                                  <div className="post-date hstack gap-narrow">
                                    <span>
                                      {"12h ago"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent dark:text-white border w-100 mt-4">
                    <span>
                      {"See all Startups"}
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
  <div className="section panel overflow-hidden">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner">
          <a className="text-none" href="https://themeforest.net/user/reacthemes/portfolio" target="_blank" rel="nofollow">
            <img className="d-none md:d-block" src="/assets/images/common/ad-slot-2.jpg" alt="Ad slot" />
            <img className="d-block md:d-none" src="/assets/images/common/ad-slot-mobile-2.jpg" alt="Ad slot" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div id="latest-news" className="latest-news section panel overflow-hidden">
    <div className="section-outer panel py-5 lg:py-8">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4">
          <div className="section-header panel vstack items-center justify-center text-center gap-1">
            <h2 className="h5 lg:h4 fw-medium m-0 text-inherit hstack">
              <span>
                {"Latest news"}
              </span>
            </h2>
          </div>
          <div className="section-content">
            <div className="row child-cols-12 sm:child-cols-6 md:child-cols-4 lg:child-cols-3 g-2 gy-4 md:g-3 md:gy-5 xl:g-4 xl:gy-6">
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Gadgets"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
                      </div>
                      <div className="d-none md:d-block">
                        <div className="post-date hstack gap-narrow">
                          <span>
                            {"1min ago"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                        {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Startups"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
                      </div>
                      <div className="d-none md:d-block">
                        <div className="post-date hstack gap-narrow">
                          <span>
                            {"55min ago"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                        {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Gadgets"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
                      </div>
                      <div className="d-none md:d-block">
                        <div className="post-date hstack gap-narrow">
                          <span>
                            {"1h ago"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                        {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"AI Powered"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
                      </div>
                      <div className="d-none md:d-block">
                        <div className="post-date hstack gap-narrow">
                          <span>
                            {"2h ago"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                        {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"AI Powered"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
                      </div>
                      <div className="d-none md:d-block">
                        <div className="post-date hstack gap-narrow">
                          <span>
                            {"12h ago"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                        {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Tech"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
                      </div>
                      <div className="d-none md:d-block">
                        <div className="post-date hstack gap-narrow">
                          <span>
                            {"7d ago"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                        {"Business Agility the Digital Age: Leveraging AI and Automation"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Network"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
                      </div>
                      <div className="d-none md:d-block">
                        <div className="post-date hstack gap-narrow">
                          <span>
                            {"9d ago"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                        {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Virtual Reality"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
                      </div>
                      <div className="d-none md:d-block">
                        <div className="post-date hstack gap-narrow">
                          <span>
                            {"15d ago"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                        {"AI and Marketing: Unlocking Customer Insights"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"AI Powered"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                        {"Hidden Gems: Underrated Travel Destinations Around the World"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Trips"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                        {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Travel"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                        {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Tech"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                        {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Startups"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                        {"Tech Tools for your Time Management: Enhancing Productivity"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"AI Powered"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                        {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Virtual Reality"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                        {"Gaming in the Age of AI: Strategies for Startups"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Media"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                        {"Top Independent Contractors to Invest in Best of Startups"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Network"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/potential-of-immersive-technologies-help-your-business-grow">
                        {"Potential of Immersive Technologies help your Business Grow"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"Network"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                        {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"AI Powered"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                        {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                  <div className="post-media panel overflow-hidden">
                    <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                    </div>
                    <SiteLink href="/blog/smart-homes-smarter-living-exploring-iot-and-ai" className="position-cover"></SiteLink>
                  </div>
                  <div className="post-header panel vstack gap-1">
                    <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                      <div>
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="fw-medium text-none text-primary dark:text-primary-400" href="/blog-category">
                            {"AI Powered"}
                          </SiteLink>
                        </div>
                      </div>
                      <div className="sep d-none md:d-block">
                        {"|"}
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
                      <SiteLink className="text-none hover:text-primary duration-150" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
                        {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                      </SiteLink>
                    </h3>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="section-footer cstack lg:mt-4">
            <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent dark:text-white border w-100 md:w-auto">
              <span>
                {"See all latest news"}
              </span>
              <i className="icon icon-1 unicon-chevron-right"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<Footer9 />
    </TemplateShell>
  );
}
