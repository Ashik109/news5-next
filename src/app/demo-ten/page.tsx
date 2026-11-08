import type { Metadata } from "next";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu8 from "@/components/template/MobileMenu8";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal8 from "@/components/template/NewsletterModal8";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header8 from "@/components/template/Header8";
import Footer8 from "@/components/template/Footer8";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-ten" theme="/assets/css/theme/demo-ten.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-white text-opacity-50 overflow-x-hidden">
<SearchModal1 />
<MobileMenu8 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal8 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header8 />
<div id="wrapper" className="wrap overflow-hidden-x">
  <div className="slider-panel swiper-parent panel overflow-hidden">
    <div className="container max-w-xl">
      <div className="panel w-100">
        <div className="swiper overflow-unset xxl:overflow-hidden" data-uc-swiper="items: 1.5; active: 1; gap: 8; center: true; center-bounds: true; dots: .swiper-pagination; disable-class: d-none;" data-uc-swiper-s="items: 2; gap: 24;" data-uc-swiper-m="items: 3; gap: 32;">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <article className="post type-post panel vstack border panel overflow-hidden rounded-1-5">
                <figure className="featured-image m-0 ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover" data-caption="The Rise of AI-Powered Personal Assistants: How They Manage"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-2 sm:p-3 mt-narrow sm:mt-0 w-100">
                  <div className="post-top panel vstack items-start gap-2">
                    <div className="post-meta panel fs-6 d-none sm:d-block">
                      <div className="post-category hstack gap-narrow fw-semibold">
                        <SiteLink className="text-none text-primary" href="/blog-category">
                          {"Fast Food"}
                        </SiteLink>
                      </div>
                    </div>
                    <h3 className="post-title h5 lg:h4 text-truncate-2">
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
            <div className="swiper-slide">
              <article className="post type-post panel vstack border panel overflow-hidden rounded-1-5">
                <figure className="featured-image m-0 ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover" data-caption="Tech Innovations Reshaping the Retail Landscape: AI Payments"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-2 sm:p-3 mt-narrow sm:mt-0 w-100">
                  <div className="post-top panel vstack items-start gap-2">
                    <div className="post-meta panel fs-6 d-none sm:d-block">
                      <div className="post-category hstack gap-narrow fw-semibold">
                        <SiteLink className="text-none text-primary" href="/blog-category">
                          {"Fast Food"}
                        </SiteLink>
                      </div>
                    </div>
                    <h3 className="post-title h5 lg:h4 text-truncate-2">
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
            <div className="swiper-slide">
              <article className="post type-post panel vstack border panel overflow-hidden rounded-1-5">
                <figure className="featured-image m-0 ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover" data-caption="Balancing Work and Wellness: Tech Solutions for Healthy"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-2 sm:p-3 mt-narrow sm:mt-0 w-100">
                  <div className="post-top panel vstack items-start gap-2">
                    <div className="post-meta panel fs-6 d-none sm:d-block">
                      <div className="post-category hstack gap-narrow fw-semibold">
                        <SiteLink className="text-none text-primary" href="/blog-category">
                          {"Healthy Food"}
                        </SiteLink>
                      </div>
                    </div>
                    <h3 className="post-title h5 lg:h4 text-truncate-2">
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
            <div className="swiper-slide">
              <article className="post type-post panel vstack border panel overflow-hidden rounded-1-5">
                <figure className="featured-image m-0 ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover" data-caption="The Importance of Sleep: Tips for Better Rest and Recovery"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-2 sm:p-3 mt-narrow sm:mt-0 w-100">
                  <div className="post-top panel vstack items-start gap-2">
                    <div className="post-meta panel fs-6 d-none sm:d-block">
                      <div className="post-category hstack gap-narrow fw-semibold">
                        <SiteLink className="text-none text-primary" href="/blog-category">
                          {"Recipes"}
                        </SiteLink>
                      </div>
                    </div>
                    <h3 className="post-title h5 lg:h4 text-truncate-2">
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
            <div className="swiper-slide">
              <article className="post type-post panel vstack border panel overflow-hidden rounded-1-5">
                <figure className="featured-image m-0 ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-2 sm:p-3 mt-narrow sm:mt-0 w-100">
                  <div className="post-top panel vstack items-start gap-2">
                    <div className="post-meta panel fs-6 d-none sm:d-block">
                      <div className="post-category hstack gap-narrow fw-semibold">
                        <SiteLink className="text-none text-primary" href="/blog-category">
                          {"Recipes"}
                        </SiteLink>
                      </div>
                    </div>
                    <h3 className="post-title h5 lg:h4 text-truncate-2">
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
            <div className="swiper-slide">
              <article className="post type-post panel vstack border panel overflow-hidden rounded-1-5">
                <figure className="featured-image m-0 ratio ratio-3x2 rounded-1-5 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover" data-caption="Business Agility the Digital Age: Leveraging AI and Automation"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-2 sm:p-3 mt-narrow sm:mt-0 w-100">
                  <div className="post-top panel vstack items-start gap-2">
                    <div className="post-meta panel fs-6 d-none sm:d-block">
                      <div className="post-category hstack gap-narrow fw-semibold">
                        <SiteLink className="text-none text-primary" href="/blog-category">
                          {"Healthy Food"}
                        </SiteLink>
                      </div>
                    </div>
                    <h3 className="post-title h5 lg:h4 text-truncate-2">
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
          <div className="swiper-pagination position-relative mt-3 md:mt-5 text-primary"></div>
        </div>
        <div className="swiper-nav swiper-next btn btn-xs md:btn-md p-0 w-40px xl:w-56px h-40px xl:h-56px bg-white dark:bg-gray-900 text-dark dark:text-white border dark:border-gray-700 rounded-circle shadow-xs position-absolute top-50 start-100 translate-middle mt-n3 ms-n2 lg:ms-n0 z-1">
          <i className="unicon-chevron-right icon-1 md:icon-2"></i>
        </div>
        <div className="swiper-nav swiper-prev btn btn-xs md:btn-md p-0 w-40px xl:w-56px h-40px xl:h-56px bg-white dark:bg-gray-900 text-dark dark:text-white border dark:border-gray-700 rounded-circle shadow-xs position-absolute top-50 start-0 translate-middle mt-n3 ms-2 lg:ms-0 z-1">
          <i className="unicon-chevron-left icon-1 md:icon-2"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel swiper-parent overflow-hidden">
    <div className="section-outer panel py-6 lg:py-8 xl:py-9 dark:text-white">
      <div className="container max-w-lg">
        <div className="section-inner panel vstack gap-2">
          <div className="block-layout recipes-layout vstack gap-2 lg:gap-4n">
            <div className="block-content panel">
              <div className="swiper overflow-unset lg:overflow-hidden" data-uc-swiper="items: 3.5; gap: 8; center: true; center-bounds: true; freeMode: true;" data-uc-swiper-s="items: 5; gap: 16;" data-uc-swiper-l="items: 7; gap: 24;">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2 text-center">
                      <SiteLink className="w-72px h-72px lg:w-128px lg:h-128px cstack rounded-circle bg-primary-50 dark:bg-gray-900" href="/blog-category">
                        <img className="w-48px lg:w-80px text-primary hover:text-dark dark:hover:text-white duration-150" src="/assets/images/demo-ten/categories/fast-food.svg" alt="Category image" data-uc-svg="" />
                      </SiteLink>
                      <h6 className="h6 m-0">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Fast Food"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2 text-center">
                      <SiteLink className="w-72px h-72px lg:w-128px lg:h-128px cstack rounded-circle bg-primary-50 dark:bg-gray-900" href="/blog-category">
                        <img className="w-48px lg:w-80px text-primary hover:text-dark dark:hover:text-white duration-150" src="/assets/images/demo-ten/categories/dishes.svg" alt="Category image" data-uc-svg="" />
                      </SiteLink>
                      <h6 className="h6 m-0">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Dishes"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2 text-center">
                      <SiteLink className="w-72px h-72px lg:w-128px lg:h-128px cstack rounded-circle bg-primary-50 dark:bg-gray-900" href="/blog-category">
                        <img className="w-48px lg:w-80px text-primary hover:text-dark dark:hover:text-white duration-150" src="/assets/images/demo-ten/categories/salades.svg" alt="Category image" data-uc-svg="" />
                      </SiteLink>
                      <h6 className="h6 m-0">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Salades"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2 text-center">
                      <SiteLink className="w-72px h-72px lg:w-128px lg:h-128px cstack rounded-circle bg-primary-50 dark:bg-gray-900" href="/blog-category">
                        <img className="w-48px lg:w-80px text-primary hover:text-dark dark:hover:text-white duration-150" src="/assets/images/demo-ten/categories/meat.svg" alt="Category image" data-uc-svg="" />
                      </SiteLink>
                      <h6 className="h6 m-0">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Meat"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2 text-center">
                      <SiteLink className="w-72px h-72px lg:w-128px lg:h-128px cstack rounded-circle bg-primary-50 dark:bg-gray-900" href="/blog-category">
                        <img className="w-48px lg:w-80px text-primary hover:text-dark dark:hover:text-white duration-150" src="/assets/images/demo-ten/categories/fruits.svg" alt="Category image" data-uc-svg="" />
                      </SiteLink>
                      <h6 className="h6 m-0">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Friuts"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2 text-center">
                      <SiteLink className="w-72px h-72px lg:w-128px lg:h-128px cstack rounded-circle bg-primary-50 dark:bg-gray-900" href="/blog-category">
                        <img className="w-48px lg:w-80px text-primary hover:text-dark dark:hover:text-white duration-150" src="/assets/images/demo-ten/categories/ice-cream.svg" alt="Category image" data-uc-svg="" />
                      </SiteLink>
                      <h6 className="h6 m-0">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Ice Cream"}
                        </SiteLink>
                      </h6>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div className="destination-item vstack items-center gap-2 text-center">
                      <SiteLink className="w-72px h-72px lg:w-128px lg:h-128px cstack rounded-circle bg-primary-50 dark:bg-gray-900" href="/blog-category">
                        <img className="w-48px lg:w-80px text-primary hover:text-dark dark:hover:text-white duration-150" src="/assets/images/demo-ten/categories/drinks.svg" alt="Category image" data-uc-svg="" />
                      </SiteLink>
                      <h6 className="h6 m-0">
                        <SiteLink className="text-none" href="/blog-category">
                          {"Drinks"}
                        </SiteLink>
                      </h6>
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
  <div className="section panel overflow-hidden uc-dark lg:px-2">
    <div className="section-outer panel py-6 lg:py-8 xl:py-9 bg-primary-25 dark:bg-gray-900 dark:text-white rounded-1-5 lg:rounded-2">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4 md:gap-6 xl:gap-8">
          <div className="block-header panel text-center">
            <div className="hr w-100 position-absolute top-0 start-0 end-0 dark:opacity-10"></div>
            <div className="vstack gap-0 py-1 px-1 lg:px-2 position-absolute top-50 start-50 translate-middle bg-primary-25 dark:bg-gray-900">
              <h2 className="h5 md:h3 m-0 text-black dark:text-white">
                {"Popular Recipes"}
              </h2>
            </div>
          </div>
          <div className="block-content panel">
            <div className="row child-cols-12 lg:child-cols g-3 col-match" data-uc-grid="">
              <div>
                <div className="row child-cols-12 lg:child-cols g-2 xl:g-3 col-macth">
                  <div>
                    <article className="post type-post panel vstack overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded h-100 text-gray-900 dark:text-white">
                      <div className="post-media panel overflow-hidden">
                        <figure className="featured-image m-0 ratio ratio-16x9 rounded bg-gray-50 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-01.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-3 p-2 sm:p-3">
                        <div className="post-top panel vstack items-start gap-1 xl:gap-2 mb-1 sm:mb-0">
                          <div className="post-meta panel fs-6 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary" href="/blog-category">
                                {"Fast Food"}
                              </SiteLink>
                            </div>
                          </div>
                          <h3 className="post-title h4 xl:h3 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                              {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                            </SiteLink>
                          </h3>
                          <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-3">
                            {"Law enforcement officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                          </p>
                        </div>
                        <div className="post-bottom panel hstack justify-between gap-2 fs-7 mt-narrow sm:mt-0 text-black dark:text-white text-opacity-60 d-none sm:d-flex">
                          <div>
                            <div className="post-date hstack gap-narrow">
                              <i className="icon-narrow unicon-time" data-uc-tooltip="Mar 8, 2024"></i>
                              <span>
                                {"1min ago"}
                              </span>
                            </div>
                          </div>
                          <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="link fs-6 fw-bolder text-none duration-250">
                            <span>
                              {"More"}
                            </span>
                            <i className="icon-1 unicon-chevron-right"></i>
                          </SiteLink>
                        </div>
                      </div>
                    </article>
                  </div>
                  <div className="lg:col-3">
                    <div className="panel">
                      <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-12 g-2 xl:g-3">
                        <div>
                          <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                            <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                              <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-02.jpg" alt="image" data-uc-img="loading: lazy" />
                                <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover" data-caption="image"></SiteLink>
                              </figure>
                            </div>
                            <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                              <div className="post-top panel vstack items-start gap-2">
                                <div className="post-meta panel fs-6 d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary" href="/blog-category">
                                      {"Fast Food"}
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
                          <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                            <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                              <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-03.jpg" alt="image" data-uc-img="loading: lazy" />
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover" data-caption="image"></SiteLink>
                              </figure>
                            </div>
                            <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                              <div className="post-top panel vstack items-start gap-2">
                                <div className="post-meta panel fs-6 d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary" href="/blog-category">
                                      {"Healthy Food"}
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
                      </div>
                    </div>
                  </div>
                  <div className="lg:col-3">
                    <div className="panel">
                      <div className="row child-cols-12 sm:child-cols-6 lg:child-cols-12 g-2 xl:g-3">
                        <div>
                          <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                            <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                              <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-04.jpg" alt="image" data-uc-img="loading: lazy" />
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover" data-caption="image"></SiteLink>
                              </figure>
                            </div>
                            <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                              <div className="post-top panel vstack items-start gap-2">
                                <div className="post-meta panel fs-6 d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary" href="/blog-category">
                                      {"Recipes"}
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
                        <div>
                          <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                            <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                              <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-05.jpg" alt="image" data-uc-img="loading: lazy" />
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="image"></SiteLink>
                              </figure>
                            </div>
                            <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                              <div className="post-top panel vstack items-start gap-2">
                                <div className="post-meta panel fs-6 d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-primary" href="/blog-category">
                                      {"Recipes"}
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
    <div className="section-outer panel py-6 lg:py-8 xl:py-9 dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 sm:gap-4 xl:gap-5 panel">
            <div className="block-header panel text-center">
              <div className="hr w-100 position-absolute top-0 start-0 end-0 dark:opacity-10"></div>
              <div className="vstack gap-0 py-1 px-1 lg:px-2 position-absolute top-50 start-50 translate-middle bg-white dark:bg-gray-900">
                <h2 className="h5 md:h3 m-0 text-black dark:text-white">
                  {"Fast Food"}
                </h2>
              </div>
            </div>
            <div className="block-content panel">
              <div className="swiper swiper-match overflow-unset lg:overflow-hidden" data-uc-swiper="items: 1.15; gap: 8; next: .nav-next; prev: .nav-prev; center: true; center-bounds: true; disable-class: d-none;" data-uc-swiper-s="items: 2; gap: 16; center: false; center-bounds: false;" data-uc-swiper-m="items: 3; gap: 16; center: false; center-bounds: false;" data-uc-swiper-l="items: 4; gap: 24; center: false; center-bounds: false;">
                <div className="swiper-wrapper swiper-match">
                  <div className="swiper-slide">
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-13.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-6 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary" href="/blog-category">
                                {"Recipes"}
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
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-14.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-6 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary" href="/blog-category">
                                {"Healthy Food"}
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
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-15.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-6 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary" href="/blog-category">
                                {"Diet"}
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
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-16.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-6 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary" href="/blog-category">
                                {"Healthy Food"}
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
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-17.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-6 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary" href="/blog-category">
                                {"Recipes"}
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
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-18.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-6 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary" href="/blog-category">
                                {"Diet"}
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
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-19.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-6 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary" href="/blog-category">
                                {"Healthy Food"}
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
                    <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                      <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                        <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-20.jpg" alt="image" data-uc-img="loading: lazy" />
                          <SiteLink href="/blog/smart-homes-smarter-living-exploring-iot-and-ai" className="position-cover" data-caption="image"></SiteLink>
                        </figure>
                      </div>
                      <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                        <div className="post-top panel vstack items-start gap-2">
                          <div className="post-meta panel fs-6 d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-primary" href="/blog-category">
                                {"Diet"}
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
  <div className="section panel overflow-hidden">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner overflow-hidden rounded-1-5 lg:rounded-2">
          <a className="text-none" href="#" rel="nofollow">
            <img className="d-none md:d-block" src="/assets/images/common/ad-slot-2.jpg" alt="Ad slot" />
            <img className="d-block md:d-none" src="/assets/images/common/ad-slot-mobile-2.jpg" alt="Ad slot" />
          </a>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden-x">
    <div className="section-outer panel py-6 lg:py-8 xl:py-9 dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4 md:gap-6 xl:gap-8">
          <div className="block-header panel text-center">
            <div className="hr w-100 position-absolute top-0 start-0 end-0 dark:opacity-10"></div>
            <div className="vstack gap-0 py-1 px-1 lg:px-2 position-absolute top-50 start-50 translate-middle bg-white dark:bg-gray-900">
              <h2 className="h5 md:h3 m-0 text-black dark:text-white">
                {"Tasty Dishes"}
              </h2>
            </div>
          </div>
          <div className="block-content panel">
            <div className="row child-cols-12 md:child-cols-4 xl:child-cols-3 g-2 xl:g-3">
              <div>
                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-05.jpg" alt="image" data-uc-img="loading: lazy" />
                      <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="image"></SiteLink>
                    </figure>
                  </div>
                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                    <div className="post-top panel vstack items-start gap-2">
                      <div className="post-meta panel fs-6 d-none sm:d-block">
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="text-none text-primary" href="/blog-category">
                            {"Recipes"}
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
                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-06.jpg" alt="image" data-uc-img="loading: lazy" />
                      <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover" data-caption="image"></SiteLink>
                    </figure>
                  </div>
                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                    <div className="post-top panel vstack items-start gap-2">
                      <div className="post-meta panel fs-6 d-none sm:d-block">
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="text-none text-primary" href="/blog-category">
                            {"Healthy Food"}
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
                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-07.jpg" alt="image" data-uc-img="loading: lazy" />
                      <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover" data-caption="image"></SiteLink>
                    </figure>
                  </div>
                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                    <div className="post-top panel vstack items-start gap-2">
                      <div className="post-meta panel fs-6 d-none sm:d-block">
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="text-none text-primary" href="/blog-category">
                            {"Fast Food"}
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
              <div>
                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-08.jpg" alt="image" data-uc-img="loading: lazy" />
                      <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover" data-caption="image"></SiteLink>
                    </figure>
                  </div>
                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                    <div className="post-top panel vstack items-start gap-2">
                      <div className="post-meta panel fs-6 d-none sm:d-block">
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="text-none text-primary" href="/blog-category">
                            {"Diet"}
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
                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-09.jpg" alt="image" data-uc-img="loading: lazy" />
                      <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover" data-caption="image"></SiteLink>
                    </figure>
                  </div>
                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                    <div className="post-top panel vstack items-start gap-2">
                      <div className="post-meta panel fs-6 d-none sm:d-block">
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="text-none text-primary" href="/blog-category">
                            {"Fast Food"}
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
              <div>
                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-10.jpg" alt="image" data-uc-img="loading: lazy" />
                      <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover" data-caption="image"></SiteLink>
                    </figure>
                  </div>
                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                    <div className="post-top panel vstack items-start gap-2">
                      <div className="post-meta panel fs-6 d-none sm:d-block">
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="text-none text-primary" href="/blog-category">
                            {"Recipes"}
                          </SiteLink>
                        </div>
                      </div>
                      <h3 className="post-title h6 sm:h5 m-0 text-truncate-2">
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
              <div>
                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-11.jpg" alt="image" data-uc-img="loading: lazy" />
                      <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover" data-caption="image"></SiteLink>
                    </figure>
                  </div>
                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                    <div className="post-top panel vstack items-start gap-2">
                      <div className="post-meta panel fs-6 d-none sm:d-block">
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="text-none text-primary" href="/blog-category">
                            {"Diet"}
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
                <article className="post type-post panel hstack sm:vstack items-start gap-2 sm:gap-0 p-2 sm:p-0 overflow-hidden border rounded border-gray-900 dark:border-white border-opacity-15 text-gray-900 dark:text-white">
                  <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                    <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                      <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-12.jpg" alt="image" data-uc-img="loading: lazy" />
                      <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover" data-caption="image"></SiteLink>
                    </figure>
                  </div>
                  <div className="post-header panel vstack justify-between gap-1 sm:gap-2 p-0 sm:p-2 mt-narrow sm:mt-0 w-100">
                    <div className="post-top panel vstack items-start gap-2">
                      <div className="post-meta panel fs-6 d-none sm:d-block">
                        <div className="post-category hstack gap-narrow fw-semibold">
                          <SiteLink className="text-none text-primary" href="/blog-category">
                            {"Fast Food"}
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
  </div>
  <div className="section panel overflow-hidden uc-dark">
    <div className="section-outer panel dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2 p-4 lg:p-8 rounded-2 bg-gray-25 dark:bg-gray-800">
          <img className="position-absolute bottom-0 start-0 m-4 w-128px text-dark dark:text-white d-none lg:d-block" src="/assets/images/demo-ten/common/sandwish.svg" alt="sandwish" data-uc-svg="" />
          <img className="position-absolute top-0 end-0 m-4 w-128px text-dark dark:text-white d-none lg:d-block" src="/assets/images/demo-ten/common/donuts.svg" alt="donuts" data-uc-svg="" />
          <div className="block-layout panel">
            <div className="row child-cols-12 justify-center text-center g-4" data-uc-grid="">
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
    <div className="section-outer panel py-6 lg:py-8 xl:py-9">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="content-wrap row child-cols-12 md:child-cols g-4" data-uc-grid="">
            <div>
              <div className="main-wrap panel vstack gap-3 lg:gap-6">
                <div className="block-layout grid-layout vstack gap-4 lg:gap-6 panel">
                  <div className="block-header panel">
                    <h2 className="h5 lg:h3 m-0 text-black dark:text-white">
                      {"Latest Recipes"}
                    </h2>
                  </div>
                  <div className="block-content">
                    <div className="row child-cols-12 gy-2 sm:gy-4">
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Fast Food"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                      {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"Law enforcement officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Fast Food"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                      {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"Officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Healthy Food"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                      {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"Children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Recipes"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                      {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Recipes"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                      {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-video bg-gray-700 ratio ratio-16x9 md:ratio-4x3">
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
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Healthy Food"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                      {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Fast Food"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                      {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Diet"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                      {"AI and Marketing: Unlocking Customer Insights"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Fast Food"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                      {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Recipes"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                                      {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Diet"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                      {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
                                    </span>
                                    <i className="icon-1 unicon-chevron-right"></i>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel overflow-hidden border border-gray-900 dark:border-white border-opacity-15 rounded-1-5 lg:rounded-2">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px lg:min-w-350px rounded-1-5 lg:rounded-2">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 md:ratio-4x3">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack md:justify-between gap-2 lg:gap-4 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel fs-6 d-none sm:d-block">
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary" href="/blog-category">
                                        {"Fast Food"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                      {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 sm:fs-5 ft-tertiary text-truncate-2">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom panel hstack gap-2 fs-7 text-black dark:text-white text-opacity-60">
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
                                  <span className="vr"></span>
                                  <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="link fs-6 text-none duration-250">
                                    <span>
                                      {"Read more"}
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
            <div className="md:col-auto">
              <div className="sidebar-wrap panel vstack gap-2 lg:gap-4 pb-2 lg:pb-4 md:max-w-250px lg:max-w-350px" data-uc-sticky="end: .content-wrap; offset: 100; media: @m;">
                <div className="widget author-widget vstack gap-3 p-2 lg:p-3 border rounded-1-5 lg:rounded-2 text-center">
                  <div className="widgt-title">
                    <h4 className="h6 m-0">
                      {"About me"}
                    </h4>
                  </div>
                  <div className="widgt-content">
                    <div className="card-top">
                      <figure className="featured-image m-0 ratio ratio-3x4 rounded-1-5 lg:rounded-2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/post-author.jpg" alt="James Doe" data-uc-img="loading: lazy" />
                      </figure>
                    </div>
                    <div className="card-bottom vstack gap-1 mt-3">
                      <span className="h5 fw-bold">
                        {"Amir Nisi"}
                      </span>
                      <p className="fs-6">
                        {"Cooking Chef with 6+ years of experience eager to create unique recipes follow me for more."}
                      </p>
                    </div>
                    <ul className="nav-x justify-center gap-1 mt-3">
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
                    </ul>
                    <img className="w-128px mt-3" src="/assets/images/demo-ten/common/signature.svg" alt="Signature" data-uc-svg="" />
                  </div>
                </div>
                <div className="widget popular-widget vstack gap-3 p-2 lg:p-3 border rounded-1-5 lg:rounded-2">
                  <div className="widget-title text-center">
                    <h5 className="h6 m-0">
                      {"Popular now"}
                    </h5>
                  </div>
                  <div className="widget-content">
                    <div className="row child-cols-12 gx-4 gy-3 sep-x" data-uc-grid="">
                      <div>
                        <article className="post type-post panel">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"1"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
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
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"2"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
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
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"3"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
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
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 fst-italic text-center text-primary m-0 min-w-24px">
                                  {"4"}
                                </span>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/how-businesses-are-adapting-to-e-commerce-and-ai-integration">
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
                <div className="widget social-widget vstack gap-3 p-2 lg:p-3 border rounded-1-5 lg:rounded-2 text-center">
                  <div className="widgt-title">
                    <h4 className="h6 m-0">
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
<Footer8 />
    </TemplateShell>
  );
}
