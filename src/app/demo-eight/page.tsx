import type { Metadata } from "next";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu1 from "@/components/template/MobileMenu1";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal1 from "@/components/template/NewsletterModal1";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header1 from "@/components/template/Header1";
import Footer1 from "@/components/template/Footer1";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-eight" theme="/assets/css/theme/demo-eight.min.css" bodyClass="uni-body panel bg-slate-50 text-gray-900 dark:bg-black dark:text-white text-opacity-50 overflow-x-hidden">
<SearchModal1 />
<MobileMenu1 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal1 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header1 />
<div id="wrapper" className="wrap overflow-hidden-x">
  <div className="slider-panel panel swiper-parent">
    <div className="container-full">
      <div className="panel">
        <div className="row g-0">
          <div className="col-12">
            <div className="panel w-100 text-center text-white">
              <div className="swiper swiper-main h-350px md:h-500px" data-uc-swiper="connect: .swiper-thumbs; active: 1; items: 1; gap: 0; dots: .swiper-pagination; disable-class: d-none;">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                        <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                      </div>
                      <div className="post-content py-2 sm:py-4 md:py-6 xl:py-8 md:px-4 xl:px-6 position-absolute top-0 start-0 end-0 bottom-0 z-1 vstack justify-center items-center gap-2 text-center w-100 h-100 bg-gray-900 bg-opacity-50">
                        <h2 className="h4 md:h3 xl:h1 max-w-2/3 md:max-w-sm my-0 mx-auto">
                          <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="text-none text-white">
                            {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                          </SiteLink>
                        </h2>
                        <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"></div>
                        <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="btn btn-sm xl:btn-md btn-primary md:mt-1 xl:mt-2 text-white">
                          {"Continue reading"}
                        </SiteLink>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                        <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                      </div>
                      <div className="post-content py-2 sm:py-4 md:py-6 xl:py-8 md:px-4 xl:px-6 position-absolute top-0 start-0 end-0 bottom-0 z-1 vstack justify-center items-center gap-2 text-center w-100 h-100 bg-gray-900 bg-opacity-50">
                        <h2 className="h4 md:h3 xl:h1 max-w-2/3 md:max-w-sm my-0 mx-auto">
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="text-none text-white">
                            {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                          </SiteLink>
                        </h2>
                        <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"></div>
                        <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="btn btn-sm xl:btn-md btn-primary md:mt-1 xl:mt-2 text-white">
                          {"Continue reading"}
                        </SiteLink>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                        <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                      </div>
                      <div className="post-content py-2 sm:py-4 md:py-6 xl:py-8 md:px-4 xl:px-6 position-absolute top-0 start-0 end-0 bottom-0 z-1 vstack justify-center items-center gap-2 text-center w-100 h-100 bg-gray-900 bg-opacity-50">
                        <h2 className="h4 md:h3 xl:h1 max-w-2/3 md:max-w-sm my-0 mx-auto">
                          <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="text-none text-white">
                            {"Business Agility the Digital Age: Leveraging AI and Automation"}
                          </SiteLink>
                        </h2>
                        <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"></div>
                        <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="btn btn-sm xl:btn-md btn-primary md:mt-1 xl:mt-2 text-white">
                          {"Continue reading"}
                        </SiteLink>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1 sm:ratio-16x9">
                        <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                      </div>
                      <div className="post-content py-2 sm:py-4 md:py-6 xl:py-8 md:px-4 xl:px-6 position-absolute top-0 start-0 end-0 bottom-0 z-1 vstack justify-center items-center gap-2 text-center w-100 h-100 bg-gray-900 bg-opacity-50">
                        <h2 className="h4 md:h3 xl:h1 max-w-2/3 md:max-w-sm my-0 mx-auto">
                          <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="text-none text-white">
                            {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                          </SiteLink>
                        </h2>
                        <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex"></div>
                        <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="btn btn-sm xl:btn-md btn-primary md:mt-1 xl:mt-2 text-white">
                          {"Continue reading"}
                        </SiteLink>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-pagination mb-2 md:mb-3 xl:mb-4 text-white d-none md:d-inline-flex"></div>
                <div className="swiper-nav swiper-next btn btn-xs md:btn-md p-0 w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white text-dark rounded-circle shadow-xs position-absolute top-50 end-0 translate-middle-y me-narrow md:me-4 z-1">
                  <i className="unicon-chevron-right icon-1 md:icon-2"></i>
                </div>
                <div className="swiper-nav swiper-prev btn btn-xs md:btn-md p-0 w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white text-dark rounded-circle shadow-xs position-absolute top-50 start-0 translate-middle-y ms-narrow md:ms-4 z-1">
                  <i className="unicon-chevron-left icon-1 md:icon-2"></i>
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div className="panel bg-gray-25 dark:bg-gray-100 dark:bg-opacity-15">
              <div className="swiper swiper-thumbs" data-uc-swiper="items: 1.5; gap: 0; mousewheel: true; freeMode: true; center: true; center-bounds: true;" data-uc-swiper-s="items: 3;" data-uc-swiper-m="items: 4; center: false; center-bounds: false;">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <article className="post type-post p-1 md:p-2 xl:p-3">
                      <div className="row g-0">
                        <div className="w-56px xl:w-64px">
                          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                          </figure>
                        </div>
                        <div className="col ms-1 md:ms-2">
                          <h4 className="h6 m-0 text-truncate-3">
                            {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                          </h4>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post p-1 md:p-2 xl:p-3">
                      <div className="row g-0">
                        <div className="w-56px xl:w-64px">
                          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </figure>
                        </div>
                        <div className="col ms-1 md:ms-2">
                          <h4 className="h6 m-0 text-truncate-3">
                            {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                          </h4>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post p-1 md:p-2 xl:p-3">
                      <div className="row g-0">
                        <div className="w-56px xl:w-64px">
                          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                          </figure>
                        </div>
                        <div className="col ms-1 md:ms-2">
                          <h4 className="h6 m-0 text-truncate-3">
                            {"Business Agility the Digital Age: Leveraging AI and Automation"}
                          </h4>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post p-1 md:p-2 xl:p-3">
                      <div className="row g-0">
                        <div className="w-56px xl:w-64px">
                          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                          </figure>
                        </div>
                        <div className="col ms-1 md:ms-2">
                          <h4 className="h6 m-0 text-truncate-3">
                            {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                          </h4>
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
  <div className="section panel overflow-hidden-x">
    <div className="section-outer panel pt-4 md:pt-6 lg:pt-8 xl:pt-9">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner panel vstack gap-0 sm:gap-2 xl:gap-3">
          <div className="sticky-col-1 panel">
            <div className="row child-cols-12 lg:child-cols g-3 col-match" data-uc-grid="">
              <div>
                <div className="row child-cols-12 lg:child-cols g-0 sm:g-2 xl:g-3 col-macth">
                  <div>
                    <article className="post type-post panel vstack overflow-hidden h-100 text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden">
                        <figure className="featured-image m-0 ratio ratio-16x9 bg-gray-50 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-03.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-3 p-2 sm:p-3">
                        <div className="post-top panel vstack items-start gap-1 xl:gap-2 mb-1 sm:mb-0">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Gadgets"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h4 xl:h3 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                              {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                            </SiteLink>
                          </h3>
                          <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-3">
                            {"Children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                          </p>
                        </div>
                        <div className="post-bottom panel hstack justify-between gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60 d-none sm:d-flex">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                              <span>
                                {"1h ago"}
                              </span>
                            </div>
                          </div>
                          <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="link fs-6 fw-bolder text-none duration-250">
                            <span>
                              {"More"}
                            </span>
                            <i className="icon-1 unicon-chevron-right"></i>
                          </SiteLink>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="lg:col-4">
                    <div className="panel">
                      <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-12 g-0 sm:g-2 xl:g-3">
                        <div>
                          <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                            <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                              <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-11.jpg" alt="image" data-uc-img="loading: lazy" />
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover" data-caption="image"></SiteLink>
                              </figure>
                            </div>
                            <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                              <div className="post-top panel vstack items-start gap-2">
                                <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                      {"Travel"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                    {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                                <div>
                                  <div className="post-date hstack gap-narrow">
                                    <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 8, 2024"></i>
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
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                            <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                              <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-12.jpg" alt="image" data-uc-img="loading: lazy" />
                                <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover" data-caption="image"></SiteLink>
                              </figure>
                            </div>
                            <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                              <div className="post-top panel vstack items-start gap-2">
                                <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                      {"Tech"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                    {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                                <div>
                                  <div className="post-date hstack gap-narrow">
                                    <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 8, 2024"></i>
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
                          </article>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-3 d-none xl:d-block">
                <div className="sidebar-wrap panel" data-uc-sticky="end: .sticky-col-1; offset: 85; media: @m;">
                  <a className="mx-auto text-none" href="#" rel="nofollow">
                    <img className="d-block dark:d-none" src="/assets/images/common/ad-desktop.jpg" alt="Ad slot" />
                    <img className="d-none dark:d-block" src="/assets/images/common/ad-slot-aside.jpg" alt="Ad slot" />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div className="panel">
            <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 g-0 sm:g-2 xl:g-3 col-match" data-uc-grid="">
              <div className="order-2 sm:order-1">
                <div className="list-layout panel p-2 pb-3 sm:p-2 mt-2 sm:mt-0 bg-white dark:bg-gray-900">
                  <div className="list-header panel mb-2 hstack justify-between ga-2">
                    <h2 className="list-title h5 m-0 hstack gap-1">
                      <i className="icon icon-narrow unicon-flash-filled text-primary"></i>
                      <span>
                        {"Trending "}
                        <span className="text-primary">
                          {"now"}
                        </span>
                      </span>
                    </h2>
                    <SiteLink href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks" className="link fs-6 fw-bold text-uppercase text-none gap-1 mt-narrow sm:mt-1 hover:text-gray-900 dark:hover:text-white duration-200 sm:d-none">
                      <span>
                        {"See All"}
                      </span>
                    </SiteLink>
                  </div>
                  <div className="list-content panel overflow-auto h-400px sm:h-700px lg:h-600px xl:h-550px">
                    <div className="row sep-x gy-2 gx-4 me-1" data-uc-grid="">
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"10:23"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                              {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"09:30"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                              {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"09:10"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                              {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"08:00"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                              {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"22:00"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"14:15"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                              {"Business Agility the Digital Age: Leveraging AI and Automation"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"16:30"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                              {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"20:00"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                              {"AI and Marketing: Unlocking Customer Insights"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"12:00"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                              {"Hidden Gems: Underrated Travel Destinations Around the World"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"12:15"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                              {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"12:30"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                              {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel vstack pb-narrow text-gray-900 dark:text-white">
                          <div>
                            <span className="time fs-7 opacity-60">
                              {"23:00"}
                            </span>
                          </div>
                          <h6 className="fs-5 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                              {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                            </SiteLink>
                          </h6>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="list-footer panel mt-3 text-center d-none sm:d-block">
                    <SiteLink href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks" className="link fs-6 fw-bold text-uppercase text-none gap-1 mt-1 hover:text-gray-900 dark:hover:text-white duration-200">
                      <span>
                        {"See all posts"}
                      </span>
                      <i className="icon-1 unicon-arrow-right"></i>
                    </SiteLink>
                  </div>
                </div>
              </div>
              <div className="order-1 sm:order-1">
                <div className="panel">
                  <div className="row child-cols-12 g-0 sm:g-2 xl:g-3">
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-01.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"Gadgets"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                                <span>
                                  {"1min ago"}
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
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-02.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"Startups"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                                <span>
                                  {"55min ago"}
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
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div className="d-none lg:d-block xl:d-none sm:order-1">
                <div className="sidebar-wrap panel" data-uc-sticky="end: .block-bottom; offset: 100; media: @m;">
                  <a className="mx-auto text-none" href="#" rel="nofollow">
                    <img className="d-block dark:d-none" src="/assets/images/common/ad-desktop.jpg" alt="Ad slot" />
                    <img className="d-none dark:d-block" src="/assets/images/common/ad-slot-aside.jpg" alt="Ad slot" />
                  </a>
                </div>
              </div>
              <div className="order-1 sm:order-1">
                <div className="panel">
                  <div className="row child-cols-12 g-0 sm:g-2 xl:g-3">
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-03.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"Gadgets"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                                <span>
                                  {"1h ago"}
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
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-04.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"AI Powered"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                                <span>
                                  {"2h ago"}
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
                      </article>
                    </div>
                  </div>
                </div>
              </div>
              <div className="order-1 sm:order-1">
                <div className="panel overflow-hidden">
                  <div className="row child-cols-12 g-0 sm:g-2 xl:g-3">
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-05.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"AI Powered"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 7, 2024"></i>
                                <span>
                                  {"12h ago"}
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
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-06.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"Tech"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                {"Business Agility the Digital Age: Leveraging AI and Automation"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 1, 2024"></i>
                                <span>
                                  {"7d ago"}
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
    <div className="section-outer panel py-4 md:py-6 lg:py-8 xl:py-9">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <a className="text-none" href="#" rel="nofollow">
            <img className="d-none md:d-block" src="/assets/images/common/ad-slot-2.jpg" alt="Ad slot" />
            <img className="d-block md:d-none" src="/assets/images/common/ad-slot-mobile-2.jpg" alt="Ad slot" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden uc-dark">
    <div className="section-outer panel py-4 md:py-6 lg:py-8 xl:py-9 bg-gray-25 dark:bg-gray-900">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel overflow-hidden">
            <div className="block-header px-2 lg:px-0">
              <h2 className="h4 md:h3 m-0">
                <i className="icon unicon-play text-primary"></i>
                <span>
                  {"Watch Now"}
                </span>
              </h2>
            </div>
            <div className="block-content overflow-hidden">
              <div className="row child-cols-12 g-0 sm:g-2 xl:g-3">
                <div>
                  <div>
                    <article className="post type-post panel overflow-hidden bg-white dark:bg-gray-900">
                      <div className="row child-cols-12 xl:child-cols-6 col-match g-0" data-uc-grid="">
                        <div>
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 h-100">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                          </div>
                        </div>
                        <div>
                          <div className="post-header panel vstack justify-between gap-4 xl:gap-8 p-2 sm:p-3 lg:py-3 lg:px-4 xl:p-4 text-gray-900 dark:text-white">
                            <div className="post-top panel vstack items-start gap-1 xl:gap-2 mb-1 sm:mb-0">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"Tech"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h4 sm:h3 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                  {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                </SiteLink>
                              </h3>
                              <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-3">
                                {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                            </div>
                            <div className="post-bottom panel hstack justify-between gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60 d-none sm:d-flex">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 8, 2024"></i>
                                  <span>
                                    {"2mo ago"}
                                  </span>
                                </div>
                              </div>
                              <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="link fs-6 fw-bolder text-none duration-250">
                                <span>
                                  {"More"}
                                </span>
                                <i className="icon-1 unicon-chevron-right"></i>
                              </SiteLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div>
                  <div className="panel">
                    <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-3 g-0 sm:g-2 xl:g-3 col-match">
                      <div>
                        <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                          <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2 sm:ratio-16x9">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                            <div className="post-top panel vstack items-start gap-2">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"AI Powered"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 7, 2024"></i>
                                  <span>
                                    {"12h ago"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                          <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2 sm:ratio-16x9">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                            <div className="post-top panel vstack items-start gap-2">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"Tech"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                  {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 1, 2024"></i>
                                  <span>
                                    {"7d ago"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                          <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2 sm:ratio-16x9">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                            <div className="post-top panel vstack items-start gap-2">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"Network"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                  {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 28, 2024"></i>
                                  <span>
                                    {"9d ago"}
                                  </span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                          <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2 sm:ratio-16x9">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                          </div>
                          <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                            <div className="post-top panel vstack items-start gap-2">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"Virtual Reality"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                  {"AI and Marketing: Unlocking Customer Insights"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 22, 2024"></i>
                                  <span>
                                    {"15d ago"}
                                  </span>
                                </div>
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
            <div className="block-footer cstack items-center lg:mt-2">
              <a href="#" className="animate-btn gap-0 btn btn-sm lg:btn-md btn-primary px-3 lg:px-6">
                <span>
                  {"More"}
                </span>
                <i className="icon icon-2 unicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel py-4 md:py-6 lg:py-8 xl:py-9">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel">
            <div className="block-header px-2 lg:px-0">
              <h2 className="h4 md:h3 m-0">
                <span>
                  {"World"}
                </span>
              </h2>
            </div>
            <div className="block-content panel">
              <div className="swiper swiper-match overflow-hidden" data-uc-swiper="items: 1.15; gap: 8; next: .nav-next; prev: .nav-prev; center: true; center-bounds: true; disable-class: d-none;" data-uc-swiper-s="items: 2; gap: 16; center: false; center-bounds: false;" data-uc-swiper-m="items: 3; gap: 16; center: false; center-bounds: false;" data-uc-swiper-l="items: 4; gap: 24; center: false; center-bounds: false;">
                <div className="swiper-wrapper swiper-match">
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-13.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Startups"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                              {"Tech Tools for your Time Management: Enhancing Productivity"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Dec 8, 2023"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-14.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                              {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Sep 8, 2023"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-15.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Virtual Reality"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                              {"Gaming in the Age of AI: Strategies for Startups"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jun 8, 2023"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-16.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Media"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                              {"Top Independent Contractors to Invest in Best of Startups"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2023"></i>
                              <span>
                                {"1yr ago"}
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-17.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Network"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/potential-of-immersive-technologies-help-your-business-grow">
                              {"Potential of Immersive Technologies help your Business Grow"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 28, 2023"></i>
                              <span>
                                {"1yr ago"}
                              </span>
                            </div>
                          </div>
                          <div>
                            <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                              <i className="icon-narrow unicon-chat"></i>
                              <span>
                                {"45"}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-18.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Network"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                              {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 12, 2024"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-19.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 12, 2024"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-20.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/smart-homes-smarter-living-exploring-iot-and-ai" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
                              {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 14, 2024"></i>
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
                    </article>
                  </div>
                </div>
              </div>
              <div className="d-none sm:d-block">
                <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-n2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="block-footer cstack items-center lg:mt-2">
              <a href="#" className="animate-btn gap-0 btn btn-sm lg:btn-md btn-primary px-3 lg:px-6">
                <span>
                  {"More"}
                </span>
                <i className="icon icon-2 unicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden-x">
    <div className="section-outer panel pb-4 md:pb-6 lg:pb-8 xl:pb-9">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel">
            <div className="block-header px-2 lg:px-0">
              <h2 className="h4 md:h3 m-0">
                <i className="icon unicon-quotes text-primary"></i>
                <span>
                  {"Must-Read Opinions"}
                </span>
              </h2>
            </div>
            <div className="block-content">
              <div className="post-layout panel vstack gap-0 sm:gap-2 xl:gap-3">
                <div className="panel sticky-col-2">
                  <div className="row child-cols-12 lg:child-cols g-3" data-uc-grid="">
                    <div>
                      <div className="row child-cols-12 lg:child-cols g-0 sm:g-2 xl:g-3 col-macth">
                        <div>
                          <article className="post type-post panel vstack overflow-hidden h-100 text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                            <div className="post-media panel overflow-hidden">
                              <figure className="featured-image m-0 ratio ratio-16x9 bg-gray-50 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-07.jpg" alt="image" data-uc-img="loading: lazy" />
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover" data-caption="image"></SiteLink>
                              </figure>
                            </div>
                            <div className="post-header panel vstack justify-between gap-3 p-2 sm:p-3">
                              <div className="post-top panel vstack items-start gap-1 xl:gap-2 mb-1 sm:mb-0">
                                <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                      {"Network"}
                                    </SiteLink>
                                  </div>
                                </div>
                                <h3 className="post-title h4 xl:h3 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                    {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                  </SiteLink>
                                </h3>
                                <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-3">
                                  {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                </p>
                              </div>
                              <div className="post-bottom panel hstack justify-between gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60 d-none sm:d-flex">
                                <div>
                                  <div className="post-date hstack gap-narrow">
                                    <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 28, 2024"></i>
                                    <span>
                                      {"9d ago"}
                                    </span>
                                  </div>
                                </div>
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="link fs-6 fw-bolder text-none duration-250">
                                  <span>
                                    {"More"}
                                  </span>
                                  <i className="icon-1 unicon-chevron-right"></i>
                                </SiteLink>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="lg:col-4">
                          <div className="panel">
                            <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-12 g-0 sm:g-2 xl:g-3">
                              <div>
                                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-08.jpg" alt="image" data-uc-img="loading: lazy" />
                                      <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover" data-caption="image"></SiteLink>
                                    </figure>
                                  </div>
                                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                                    <div className="post-top panel vstack items-start gap-2">
                                      <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                        <div className="post-category hstack gap-narrow fw-semibold">
                                          <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                            {"Virtual Reality"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                        <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                          {"AI and Marketing: Unlocking Customer Insights"}
                                        </SiteLink>
                                      </h3>
                                    </div>
                                    <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                                      <div>
                                        <div className="post-date hstack gap-narrow">
                                          <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 22, 2024"></i>
                                          <span>
                                            {"15d ago"}
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
                                </article>
                              </div>
                              <div>
                                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-09.jpg" alt="image" data-uc-img="loading: lazy" />
                                      <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover" data-caption="image"></SiteLink>
                                    </figure>
                                  </div>
                                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                                    <div className="post-top panel vstack items-start gap-2">
                                      <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                        <div className="post-category hstack gap-narrow fw-semibold">
                                          <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                            {"AI Powered"}
                                          </SiteLink>
                                        </div>
                                      </div>
                                      <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                        <SiteLink className="text-none" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                          {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                        </SiteLink>
                                      </h3>
                                    </div>
                                    <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                                      <div>
                                        <div className="post-date hstack gap-narrow">
                                          <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 14, 2024"></i>
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
                                </article>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-3 d-none xl:d-block">
                      <div className="sidebar-wrap panel text-center" data-uc-sticky="end: .sticky-col-2; offset: 85; media: @m;">
                        <a className="mx-auto text-none" href="#" rel="nofollow">
                          <img className="d-block dark:d-none" src="/assets/images/common/ad-desktop.jpg" alt="Ad slot" />
                          <img className="d-none dark:d-block" src="/assets/images/common/ad-slot-aside.jpg" alt="Ad slot" />
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 g-0 sm:g-2 xl:g-3 col-match" data-uc-grid="">
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-05.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"AI Powered"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 7, 2024"></i>
                                <span>
                                  {"12h ago"}
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
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-06.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"Tech"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                {"Business Agility the Digital Age: Leveraging AI and Automation"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 1, 2024"></i>
                                <span>
                                  {"7d ago"}
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
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-07.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"Network"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 28, 2024"></i>
                                <span>
                                  {"9d ago"}
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
                      </article>
                    </div>
                    <div className="d-none sm:d-block lg:d-none xl:d-block">
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-08.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                          <div className="post-top panel vstack items-start gap-2">
                            <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                  {"Virtual Reality"}
                                </SiteLink>
                              </div>
                            </div>
                            <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                              <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                {"AI and Marketing: Unlocking Customer Insights"}
                              </SiteLink>
                            </h3>
                          </div>
                          <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 22, 2024"></i>
                                <span>
                                  {"15d ago"}
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
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-footer cstack items-center lg:mt-2">
              <a href="#" className="animate-btn gap-0 btn btn-sm lg:btn-md btn-primary px-3 lg:px-6">
                <span>
                  {"More"}
                </span>
                <i className="icon icon-2 unicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel pb-4 md:pb-6 lg:pb-8 xl:pb-9">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel">
            <div className="block-header px-2 lg:px-0">
              <h2 className="h4 md:h3 m-0">
                <span>
                  {"Virtual Reality"}
                </span>
              </h2>
            </div>
            <div className="block-content panel">
              <div className="swiper swiper-match overflow-hidden" data-uc-swiper="items: 1.15; gap: 8; next: .nav-next; prev: .nav-prev; center: true; center-bounds: true; disable-class: d-none;" data-uc-swiper-s="items: 2; gap: 16; center: false;" data-uc-swiper-m="items: 3; gap: 16;" data-uc-swiper-l="items: 4; gap: 24;">
                <div className="swiper-wrapper swiper-match">
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-08.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Virtual Reality"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
                              {"AI and Marketing: Unlocking Customer Insights"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 22, 2024"></i>
                              <span>
                                {"15d ago"}
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-09.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                              {"Hidden Gems: Underrated Travel Destinations Around the World"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 14, 2024"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-10.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Trips"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                              {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 8, 2024"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-11.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Travel"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                              {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 8, 2024"></i>
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
                    </article>
                  </div>
                </div>
              </div>
              <div className="d-none sm:d-block">
                <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-n2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="block-footer cstack items-center lg:mt-2">
              <a href="#" className="animate-btn gap-0 btn btn-sm lg:btn-md btn-primary px-3 lg:px-6">
                <span>
                  {"More"}
                </span>
                <i className="icon icon-2 unicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel pb-4 md:pb-6 lg:pb-8 xl:pb-9">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel">
            <div className="block-header px-2 lg:px-0">
              <h2 className="h4 md:h3 m-0">
                <span>
                  {"Tech"}
                </span>
              </h2>
            </div>
            <div className="block-content panel">
              <div className="swiper swiper-match overflow-hidden" data-uc-swiper="items: 1.15; gap: 8; next: .nav-next; prev: .nav-prev; center: true; center-bounds: true; disable-class: d-none;" data-uc-swiper-s="items: 2; gap: 16; center: false;" data-uc-swiper-m="items: 3; gap: 16;" data-uc-swiper-l="items: 4; gap: 24;">
                <div className="swiper-wrapper swiper-match">
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-11.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Travel"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                              {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 8, 2024"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-12.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Tech"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                              {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 8, 2024"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-13.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Startups"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                              {"Tech Tools for your Time Management: Enhancing Productivity"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Dec 8, 2023"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-14.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                              {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Sep 8, 2023"></i>
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
                    </article>
                  </div>
                </div>
              </div>
              <div className="d-none sm:d-block">
                <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-n2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="block-footer cstack items-center lg:mt-2">
              <a href="#" className="animate-btn gap-0 btn btn-sm lg:btn-md btn-primary px-3 lg:px-6">
                <span>
                  {"More"}
                </span>
                <i className="icon icon-2 unicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <a className="text-none" href="#" rel="nofollow">
            <img className="d-none md:d-block" src="/assets/images/common/ad-slot-2.jpg" alt="Ad slot" />
            <img className="d-block md:d-none" src="/assets/images/common/ad-slot-mobile-2.jpg" alt="Ad slot" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel py-4 md:py-6 lg:py-8 xl:py-9">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel overflow-hidden">
            <div className="block-header px-2 lg:px-0">
              <h2 className="h4 md:h3 m-0">
                <span>
                  {"AI Powered"}
                </span>
              </h2>
            </div>
            <div className="block-content overflow-hidden">
              <div className="row child-cols-12 g-0 sm:g-2 xl:g-3">
                <div>
                  <div>
                    <article className="post type-post panel overflow-hidden bg-white dark:bg-gray-900">
                      <div className="row child-cols-12 xl:child-cols-6 col-match g-0" data-uc-grid="">
                        <div>
                          <div className="post-media panel overflow-hidden">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 h-100">
                              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                            </div>
                            <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                          </div>
                        </div>
                        <div>
                          <div className="post-header panel vstack justify-between gap-4 xl:gap-8 p-2 sm:p-3 lg:py-3 lg:px-4 xl:p-4 text-gray-900 dark:text-white">
                            <div className="post-top panel vstack items-start gap-1 xl:gap-2 mb-1 sm:mb-0">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"Startups"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h4 sm:h3 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                  {"Tech Tools for your Time Management: Enhancing Productivity"}
                                </SiteLink>
                              </h3>
                              <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-3">
                                {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                            </div>
                            <div className="post-bottom panel hstack justify-between gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60 d-none sm:d-flex">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Dec 8, 2023"></i>
                                  <span>
                                    {"3mo ago"}
                                  </span>
                                </div>
                              </div>
                              <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="link fs-6 fw-bolder text-none duration-250">
                                <span>
                                  {"More"}
                                </span>
                                <i className="icon-1 unicon-chevron-right"></i>
                              </SiteLink>
                            </div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div>
                  <div className="panel">
                    <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-4 xl:child-cols-3 g-0 sm:g-2 xl:g-3 col-match">
                      <div>
                        <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                          <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                            <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-01.jpg" alt="image" data-uc-img="loading: lazy" />
                              <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover" data-caption="image"></SiteLink>
                            </figure>
                          </div>
                          <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                            <div className="post-top panel vstack items-start gap-2">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"Gadgets"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                  {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                                  <span>
                                    {"1min ago"}
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                          <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                            <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-02.jpg" alt="image" data-uc-img="loading: lazy" />
                              <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover" data-caption="image"></SiteLink>
                            </figure>
                          </div>
                          <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                            <div className="post-top panel vstack items-start gap-2">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"Startups"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                  {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                                  <span>
                                    {"55min ago"}
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
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                          <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                            <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-03.jpg" alt="image" data-uc-img="loading: lazy" />
                              <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover" data-caption="image"></SiteLink>
                            </figure>
                          </div>
                          <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                            <div className="post-top panel vstack items-start gap-2">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"Gadgets"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                  {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                                  <span>
                                    {"1h ago"}
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
                        </article>
                      </div>
                      <div className="d-none sm:d-block lg:d-none xl:d-block">
                        <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                          <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                            <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-04.jpg" alt="image" data-uc-img="loading: lazy" />
                              <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover" data-caption="image"></SiteLink>
                            </figure>
                          </div>
                          <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                            <div className="post-top panel vstack items-start gap-2">
                              <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                                <div className="post-category hstack gap-narrow fw-semibold">
                                  <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                    {"AI Powered"}
                                  </SiteLink>
                                </div>
                              </div>
                              <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                  {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                </SiteLink>
                              </h3>
                            </div>
                            <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                              <div>
                                <div className="post-date hstack gap-narrow">
                                  <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                                  <span>
                                    {"2h ago"}
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
                        </article>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="block-footer cstack items-center lg:mt-2">
              <a href="#" className="animate-btn gap-0 btn btn-sm lg:btn-md btn-primary px-3 lg:px-6">
                <span>
                  {"More"}
                </span>
                <i className="icon icon-2 unicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel pb-4 md:pb-6 lg:pb-8 xl:pb-9">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel">
            <div className="block-header px-2 lg:px-0">
              <h2 className="h4 md:h3 m-0">
                <span>
                  {"Economy"}
                </span>
              </h2>
            </div>
            <div className="block-content panel">
              <div className="swiper swiper-match overflow-hidden" data-uc-swiper="items: 1.15; gap: 8; next: .nav-next; prev: .nav-prev; center: true; center-bounds: true; disable-class: d-none;" data-uc-swiper-s="items: 2; gap: 16; center: false; center-bounds: false;" data-uc-swiper-m="items: 3; gap: 16; center: false; center-bounds: false;" data-uc-swiper-l="items: 4; gap: 24; center: false; center-bounds: false;">
                <div className="swiper-wrapper swiper-match">
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-13.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Startups"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                              {"Tech Tools for your Time Management: Enhancing Productivity"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Dec 8, 2023"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-14.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                              {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Sep 8, 2023"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-15.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Virtual Reality"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                              {"Gaming in the Age of AI: Strategies for Startups"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jun 8, 2023"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-16.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Media"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                              {"Top Independent Contractors to Invest in Best of Startups"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2023"></i>
                              <span>
                                {"1yr ago"}
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-17.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Network"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/potential-of-immersive-technologies-help-your-business-grow">
                              {"Potential of Immersive Technologies help your Business Grow"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 28, 2023"></i>
                              <span>
                                {"1yr ago"}
                              </span>
                            </div>
                          </div>
                          <div>
                            <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                              <i className="icon-narrow unicon-chat"></i>
                              <span>
                                {"45"}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-18.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Network"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                              {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 12, 2024"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-19.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 12, 2024"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-20.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/smart-homes-smarter-living-exploring-iot-and-ai" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
                              {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 14, 2024"></i>
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
                    </article>
                  </div>
                </div>
              </div>
              <div className="d-none sm:d-block">
                <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-n2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="block-footer cstack items-center lg:mt-2">
              <a href="#" className="animate-btn gap-0 btn btn-sm lg:btn-md btn-primary px-3 lg:px-6">
                <span>
                  {"More"}
                </span>
                <i className="icon icon-2 unicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel pb-4 md:pb-6 lg:pb-8 xl:pb-9">
      <div className="container max-w-2xl p-0 sm:px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel">
            <div className="block-header px-2 lg:px-0">
              <h2 className="h4 md:h3 m-0">
                <span>
                  {"Social"}
                </span>
              </h2>
            </div>
            <div className="block-content panel">
              <div className="swiper swiper-match overflow-hidden" data-uc-swiper="items: 1.15; gap: 8; next: .nav-next; prev: .nav-prev; center: true; center-bounds: true; disable-class: d-none;" data-uc-swiper-s="items: 2; gap: 16; center: false;" data-uc-swiper-m="items: 3; gap: 16;" data-uc-swiper-l="items: 4; gap: 24;">
                <div className="swiper-wrapper swiper-match">
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-16.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Media"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                              {"Top Independent Contractors to Invest in Best of Startups"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2023"></i>
                              <span>
                                {"1yr ago"}
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-17.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Network"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/potential-of-immersive-technologies-help-your-business-grow">
                              {"Potential of Immersive Technologies help your Business Grow"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Feb 28, 2023"></i>
                              <span>
                                {"1yr ago"}
                              </span>
                            </div>
                          </div>
                          <div>
                            <a href="#post_comment" className="post-comments text-none hstack gap-narrow">
                              <i className="icon-narrow unicon-chat"></i>
                              <span>
                                {"45"}
                              </span>
                            </a>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-18.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"Network"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                              {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 12, 2024"></i>
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
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden text-gray-900 dark:text-white bg-white dark:bg-gray-900">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-19.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-7 px-narrow border border-gray-200 dark:border-gray-700 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none duration-150 transition-color hover:text-primary dark:text-primary" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h6 md:h5 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                        </div>
                        <div className="post-bottom panel hstack gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Jan 12, 2024"></i>
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
                    </article>
                  </div>
                </div>
              </div>
              <div className="d-none sm:d-block">
                <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-40px h-40px ms-n2 lg:m-0 z-1">
                  <i className="icon-1 unicon-chevron-right"></i>
                </div>
              </div>
            </div>
            <div className="block-footer cstack items-center lg:mt-2">
              <a href="#" className="animate-btn gap-0 btn btn-sm lg:btn-md btn-primary px-3 lg:px-6">
                <span>
                  {"More"}
                </span>
                <i className="icon icon-2 unicon-chevron-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel py-4 md:py-6 lg:py-8 xl:py-9 bg-white dark:bg-gray-900">
      <div className="container max-w-2xl px-2 lg:px-4 xl:px-0">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel">
            <div className="block-header">
              <h2 className="h4 md:h3 m-0">
                <span>
                  {"Most Read"}
                </span>
              </h2>
            </div>
            <div className="block-content panel overflow-hidden">
              <div className="row child-cols-12 sm:child-cols-6 xl:child-cols-3 g-4 xl:g-6 sep">
                <div>
                  <article className="post type-post panel hstack items-start gap-3 text-gray-900 dark:text-white">
                    <div className="min-w-40px text-center">
                      <h3 className="h3 lg:h2 m-0 text-primary">
                        {"1"}
                      </h3>
                    </div>
                    <h6 className="h5 text-truncate-2 hover:text-primary duration-200">
                      <SiteLink className="text-none" href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                        {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                      </SiteLink>
                    </h6>
                  </article>
                </div>
                <div>
                  <article className="post type-post panel hstack items-start gap-3 text-gray-900 dark:text-white">
                    <div className="min-w-40px text-center">
                      <h3 className="h3 lg:h2 m-0 text-primary">
                        {"2"}
                      </h3>
                    </div>
                    <h6 className="h5 text-truncate-2 hover:text-primary duration-200">
                      <SiteLink className="text-none" href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                        {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                      </SiteLink>
                    </h6>
                  </article>
                </div>
                <div>
                  <article className="post type-post panel hstack items-start gap-3 text-gray-900 dark:text-white">
                    <div className="min-w-40px text-center">
                      <h3 className="h3 lg:h2 m-0 text-primary">
                        {"3"}
                      </h3>
                    </div>
                    <h6 className="h5 text-truncate-2 hover:text-primary duration-200">
                      <SiteLink className="text-none" href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                        {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                      </SiteLink>
                    </h6>
                  </article>
                </div>
                <div>
                  <article className="post type-post panel hstack items-start gap-3 text-gray-900 dark:text-white">
                    <div className="min-w-40px text-center">
                      <h3 className="h3 lg:h2 m-0 text-primary">
                        {"4"}
                      </h3>
                    </div>
                    <h6 className="h5 text-truncate-2 hover:text-primary duration-200">
                      <SiteLink className="text-none" href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                        {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                      </SiteLink>
                    </h6>
                  </article>
                </div>
                <div>
                  <article className="post type-post panel hstack items-start gap-3 text-gray-900 dark:text-white">
                    <div className="min-w-40px text-center">
                      <h3 className="h3 lg:h2 m-0 text-primary">
                        {"5"}
                      </h3>
                    </div>
                    <h6 className="h5 text-truncate-2 hover:text-primary duration-200">
                      <SiteLink className="text-none" href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                        {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                      </SiteLink>
                    </h6>
                  </article>
                </div>
                <div>
                  <article className="post type-post panel hstack items-start gap-3 text-gray-900 dark:text-white">
                    <div className="min-w-40px text-center">
                      <h3 className="h3 lg:h2 m-0 text-primary">
                        {"6"}
                      </h3>
                    </div>
                    <h6 className="h5 text-truncate-2 hover:text-primary duration-200">
                      <SiteLink className="text-none" href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                        {"Business Agility the Digital Age: Leveraging AI and Automation"}
                      </SiteLink>
                    </h6>
                  </article>
                </div>
                <div>
                  <article className="post type-post panel hstack items-start gap-3 text-gray-900 dark:text-white">
                    <div className="min-w-40px text-center">
                      <h3 className="h3 lg:h2 m-0 text-primary">
                        {"7"}
                      </h3>
                    </div>
                    <h6 className="h5 text-truncate-2 hover:text-primary duration-200">
                      <SiteLink className="text-none" href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                        {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                      </SiteLink>
                    </h6>
                  </article>
                </div>
                <div>
                  <article className="post type-post panel hstack items-start gap-3 text-gray-900 dark:text-white">
                    <div className="min-w-40px text-center">
                      <h3 className="h3 lg:h2 m-0 text-primary">
                        {"8"}
                      </h3>
                    </div>
                    <h6 className="h5 text-truncate-2 hover:text-primary duration-200">
                      <SiteLink className="text-none" href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                        {"AI and Marketing: Unlocking Customer Insights"}
                      </SiteLink>
                    </h6>
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
<Footer1 />
    </TemplateShell>
  );
}
