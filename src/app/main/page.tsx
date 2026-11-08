import type { Metadata } from "next";
import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu11 from "@/components/template/MobileMenu11";
import UcCartPanel2 from "@/components/template/UcCartPanel2";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal2 from "@/components/template/NewsletterModal2";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Footer2 from "@/components/template/Footer2";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="main" theme="/assets/css/theme/demo-seven.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-white text-opacity-50 overflow-x-hidden">
<SearchModal1 />
<MobileMenu11 />
<UcCartPanel2 />
<UcFavoritesModal1 />
<NewsletterModal2 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<header className="uc-header header-seven uc-navbar-sticky-wrap z-999" data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
  <nav className="uc-navbar-container text-gray-900 dark:text-white fs-6 z-1">
    <div className="uc-top-navbar panel z-3 overflow-hidden bg-primary-600 swiper-parent" style={{"--uc-nav-height":"32px"} as React.CSSProperties} data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container container-full">
        <div className="uc-navbar-item">
          <div className="swiper swiper-ticker swiper-ticker-sep px-2" style={{"--uc-ticker-gap":"32px"} as React.CSSProperties} data-uc-swiper="items: auto; gap: 32; center: true; center-bounds: true; autoplay: 10000; speed: 10000; autoplay-delay: 0.1; loop: true; allowTouchMove: false; freeMode: true; autoplay-disableOnInteraction: true;">
            <div className="swiper-wrapper">
              <div className="swiper-slide text-white">
                <div className="type-post post panel">
                  <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="fs-7 fw-normal text-none text-inherit">
                    {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                  </SiteLink>
                </div>
              </div>
              <div className="swiper-slide text-white">
                <div className="type-post post panel">
                  <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="fs-7 fw-normal text-none text-inherit">
                    {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                  </SiteLink>
                </div>
              </div>
              <div className="swiper-slide text-white">
                <div className="type-post post panel">
                  <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="fs-7 fw-normal text-none text-inherit">
                    {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                  </SiteLink>
                </div>
              </div>
              <div className="swiper-slide text-white">
                <div className="type-post post panel">
                  <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="fs-7 fw-normal text-none text-inherit">
                    {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                  </SiteLink>
                </div>
              </div>
              <div className="swiper-slide text-white">
                <div className="type-post post panel">
                  <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="fs-7 fw-normal text-none text-inherit">
                    {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                  </SiteLink>
                </div>
              </div>
              <div className="swiper-slide text-white">
                <div className="type-post post panel">
                  <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="fs-7 fw-normal text-none text-inherit">
                    {"Business Agility the Digital Age: Leveraging AI and Automation"}
                  </SiteLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="uc-center-navbar panel hstack z-2 min-h-48px d-none lg:d-flex" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container max-w-xl">
        <div className="navbar-container hstack border-bottom">
          <div className="uc-navbar-center gap-2 lg:gap-3 flex-1">
            <ul className="uc-navbar-nav gap-3 justify-between flex-1 fs-6 fw-bold" style={{"--uc-nav-height":"48px"} as React.CSSProperties}>
              <li>
                <a href="#">
                  <span className="icon-1 unicon-finance"></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.navbar-container; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div className="col-2">
                      <ul className="uc-nav uc-navbar-dropdown-nav">
                        <li>
                          <SiteLink href="/blog-category">
                            {"Trending"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Politics"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Opinions"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"World"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Media"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2">
                      <ul className="uc-nav uc-navbar-dropdown-nav">
                        <li>
                          <SiteLink href="/blog-category">
                            {"Tech"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Business"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Fashion"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Arts"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Food"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2">
                      <ul className="uc-nav uc-navbar-dropdown-nav">
                        <li>
                          <SiteLink href="/blog-category">
                            {"Economy"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Finance"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Education"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Health"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"National"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                    <div className="col-2">
                      <ul className="uc-nav uc-navbar-dropdown-nav">
                        <li>
                          <SiteLink href="/blog-category">
                            {"E-Books"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Press"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Podcasts"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Entertainments"}
                          </SiteLink>
                        </li>
                        <li>
                          <SiteLink href="/blog-category">
                            {"Weather"}
                          </SiteLink>
                        </li>
                      </ul>
                    </div>
                    <div>
                      <div className="uc-navbar-newsletter panel vstack">
                        <h6 className="fs-6 ft-tertiary fw-medium">
                          {"Newsletter"}
                        </h6>
                        <form className="hstack gap-1 bg-gray-300 bg-opacity-10">
                          <input type="email" className="form-control-plaintext form-control-xs fs-6 dark:text-white" placeholder="Your email address.." />
                          <button type="submit" className="btn btn-sm btn-primary fs-6 rounded-0">
                            {"Subscribe"}
                          </button>
                        </form>
                        <p className="fs-7 mt-1">
                          {"Do not worry, we don't spam!"}
                        </p>
                        <ul className="nav-x gap-2 mt-3">
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
                </div>
              </li>
              <li>
                <a href="#">
                  {"Latest "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.navbar-container; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row col-match g-2">
                    <div className="w-1/5">
                      <div className="uc-navbar-switcher-nav border-end">
                        <ul className="uc-tab-left fs-6 text-end" data-uc-tab="connect: #uc-navbar-switcher-tending; animation: uc-animation-slide-right-small, uc-animation-slide-left-small">
                          <li>
                            <a href="#">
                              {"All"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Politics"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Opinions"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"World"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Media"}
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
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                    {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/smart-homes-smarter-living-exploring-iot-and-ai" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
                                    {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"23d"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-21.jpg" alt="How Businesses Are Adapting to E-Commerce and AI Integration" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/how-businesses-are-adapting-to-e-commerce-and-ai-integration" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/how-businesses-are-adapting-to-e-commerce-and-ai-integration">
                                    {"How Businesses Are Adapting to E-Commerce and AI Integration"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"29d"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-22.jpg" alt="Technology: Wearables, AR, and AI in the Apparel Industry" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/technology-wearables-ar-and-ai-in-the-apparel-industry" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/technology-wearables-ar-and-ai-in-the-apparel-industry">
                                    {"Technology: Wearables, AR, and AI in the Apparel Industry"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                    {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2h"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                    {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"12h"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                                    {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"29d"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                    {"Tech Tools for your Time Management: Enhancing Productivity"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"3mo"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                    {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"1h"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                    {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"7d"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                                    {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"6mo"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                                    {"Top Independent Contractors to Invest in Best of Startups"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"1yr"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                    {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"1min"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                    {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"55min"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                    {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"9d"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                    {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"23d"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                    {"AI and Marketing: Unlocking Customer Insights"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"15d"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                    {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                                    {"Gaming in the Age of AI: Strategies for Startups"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"9mo"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                          <div>
                            <article className="post type-post panel uc-transition-toggle vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                                    {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                                  <div>
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo"}
                                      </span>
                                    </div>
                                  </div>
                                  <div>
                                    {"·"}
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
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  {"Politics "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.navbar-container; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                              {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2h"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"12h"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                              {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"29d"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                              {"Tech Tools for your Time Management: Enhancing Productivity"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"3mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/potential-of-immersive-technologies-help-your-business-grow">
                              {"Potential of Immersive Technologies help your Business Grow"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1yr"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  {"Opinions "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.navbar-container; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                              {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1h"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                              {"Business Agility the Digital Age: Leveraging AI and Automation"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"7d"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                              {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"6mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                              {"Top Independent Contractors to Invest in Best of Startups"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1yr"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
              </li>
              <li>
                <a href="#">
                  {"World "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.navbar-container; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                              {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1min"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                              {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"55min"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                              {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"9d"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                              {"Hidden Gems: Underrated Travel Destinations Around the World"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"23d"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                              {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
              </li>
              <li>
                <a href="#">
                  {"Media "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.navbar-container; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                              {"AI and Marketing: Unlocking Customer Insights"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"15d"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                              {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                              {"Gaming in the Age of AI: Strategies for Startups"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"9mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                              {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/smart-homes-smarter-living-exploring-iot-and-ai" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
                              {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"23d"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"Tech"}
                </SiteLink>
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"Business"}
                </SiteLink>
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"Fashion"}
                </SiteLink>
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"Arts & Entertainments"}
                </SiteLink>
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"Food"}
                </SiteLink>
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"E-Books"}
                </SiteLink>
              </li>
              <li>
                <a href="#">
                  <i className="icon-2 fw-medium unicon-overflow-menu-horizontal"></i>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.navbar-container; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols g-4">
                    <div>
                      <div className="row child-cols g-4">
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header fs-6 ft-tertiary fw-medium mb-1">
                              {"Main Pages"}
                            </li>
                            <li>
                              <SiteLink href="/">
                                {"Main"}
                              </SiteLink>
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
                        </div>
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header fs-6 ft-tertiary fw-medium mb-1">
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
                              <SiteLink href="/blog/the-rise-of-gourmet-street-food-trends-and-top-picks">
                                {"Blog single"}
                              </SiteLink>
                            </li>
                            <li>
                              <SiteLink href="/blog-details-2/the-rise-of-gourmet-street-food-trends-and-top-picks">
                                {"Blog single v2"}
                              </SiteLink>
                            </li>
                            <li>
                              <SiteLink href="/blog-details-3/the-rise-of-gourmet-street-food-trends-and-top-picks">
                                {"Blog single v3"}
                              </SiteLink>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header fs-6 ft-tertiary fw-medium mb-1">
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
                              <SiteLink href="/shop/disney-toys">
                                {"Product detail"}
                              </SiteLink>
                            </li>
                            <li>
                              <SiteLink href="/shop-product-detail-2/disney-toys">
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
                            <li className="uc-nav-header fs-6 ft-tertiary fw-medium mb-1">
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
                        <div className="ratio ratio-3x4 overflow-hidden">
                          <img src="/assets/images/common/menu-banner.jpg" alt="Let's build anything with News5!" />
                          <a className="position-cover" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div className="uc-bottom-navbar panel z-1">
      <div className="container max-w-xl">
        <div className="uc-navbar min-h-72px lg:min-h-100px" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div className="uc-navbar-left">
            <div>
              <a className="uc-menu-trigger icon-2" href="#uc-menu-panel" data-uc-toggle=""></a>
            </div>
            <div className="uc-navbar-item d-none lg:d-inline-flex">
              <a className="btn btn-xs gap-narrow ps-1 border rounded-pill fw-bold dark:text-white hover:bg-gray-25 dark:hover:bg-gray-900" href="#live_now" data-uc-scroll="offset: 128">
                <i className="icon icon-narrow unicon-dot-mark text-red" data-uc-animate="flash"></i>
                <span>
                  {"Live"}
                </span>
              </a>
            </div>
            <div className="uc-logo d-block md:d-none">
              <SiteLink href="/">
                <img className="w-100px text-dark dark:text-white" src="/assets/images/demo-seven/common/logo.svg" alt="News5" data-uc-svg="" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-center">
            <div className="uc-logo d-none md:d-block">
              <SiteLink href="/">
                <img className="w-150px text-dark dark:text-white" src="/assets/images/demo-seven/common/logo.svg" alt="News5" data-uc-svg="" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-right gap-2 lg:gap-3">
            <div className="uc-navbar-item d-inline-flex lg:d-none">
              <a className="btn btn-xs gap-narrow ps-1 border rounded-pill fw-bold dark:text-white hover:bg-gray-25 dark:hover:bg-gray-900" href="#live_now" data-uc-scroll="offset: 128">
                <i className="icon icon-narrow unicon-dot-mark text-red" data-uc-animate="flash"></i>
                <span>
                  {"Live"}
                </span>
              </a>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-cart-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-cart-panel" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-shopping-basket"></i>
              </a>
            </div>
            <div className="uc-navbar-item d-none lg:d-inline-flex">
              <a className="uc-account-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-account-modal" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-user-avatar"></i>
              </a>
            </div>
            <div className="uc-navbar-item d-none lg:d-inline-flex">
              <a className="uc-search-trigger cstack text-none text-dark dark:text-white" href="#uc-search-modal" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-search"></i>
              </a>
            </div>
            <div className="uc-navbar-item d-none lg:d-inline-flex">
              <div className="uc-modes-trigger btn btn-xs w-32px h-32px p-0 border fw-normal rounded-circle dark:text-white hover:bg-gray-25 dark:hover:bg-gray-900" data-darkmode-toggle="">
                <label className="switch">
                  <span className="sr-only">
                    {"Dark toggle"}
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
  </nav>
</header>
<div id="wrapper" className="wrap overflow-hidden-x">
  <div className="section panel overflow-hidden swiper-parent border-top">
    <div className="section-outer panel py-2 lg:py-4 dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2">
          <div className="block-layout carousel-layout vstack gap-2 lg:gap-3 panel">
            <div className="block-content panel">
              <div className="swiper" data-uc-swiper="items: 1; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: d-none;" data-uc-swiper-s="items: 3; gap: 24;" data-uc-swiper-l="items: 4; gap: 24;">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle gap-2">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
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
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle gap-2">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                                  {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle gap-2">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                  {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle gap-2">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                  {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle gap-2">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                  {"Tech Tools for your Time Management: Enhancing Productivity"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle gap-2">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                                  {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle gap-2">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                                  {"Gaming in the Age of AI: Strategies for Startups"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle gap-2">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-64px min-w-64px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                                  {"Top Independent Contractors to Invest in Best of Startups"}
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
              <div className="swiper-nav nav-prev position-absolute top-50 start-0 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
                <i className="icon-1 unicon-chevron-left"></i>
              </div>
              <div className="swiper-nav nav-next position-absolute top-50 start-100 translate-middle btn btn-alt-primary text-black rounded-circle p-0 border shadow-xs w-32px h-32px z-1">
                <i className="icon-1 unicon-chevron-right"></i>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel mb-4 lg:mb-6">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-4">
          <div className="section-content">
            <div className="row child-col-12 lg:child-cols g-4 lg:g-6 col-match">
              <div className="lg:col-9">
                <div className="block-layout slider-layout swiper-parent uc-dark">
                  <div className="block-content panel uc-visible-toggle">
                    <div className="swiper" data-uc-swiper="items: 1; active: 1; gap: 4; prev: .nav-prev; next: .nav-next; autoplay: 6000; parallax: true; fade: true; effect: fade; disable-class: d-none;">
                      <div className="swiper-wrapper">
                        <div className="swiper-slide">
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                            <div className="post-media panel overflow-hidden h-100">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                                <canvas className="h-100 w-100"></canvas>
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white" data-swiper-parallax-y="-24">
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                              <h3 className="post-title h5 lg:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
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
                        <div className="swiper-slide">
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                            <div className="post-media panel overflow-hidden h-100">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                                <canvas className="h-100 w-100"></canvas>
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                              </div>
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white" data-swiper-parallax-y="-24">
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"9mo"}
                                </span>
                              </div>
                              <h3 className="post-title h5 lg:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                                  {"Gaming in the Age of AI: Strategies for Startups"}
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
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                            <div className="post-media panel overflow-hidden h-100">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                                <canvas className="h-100 w-100"></canvas>
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                              </div>
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white" data-swiper-parallax-y="-24">
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                              <h3 className="post-title h5 lg:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                                  {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                                </SiteLink>
                              </h3>
                              <div>
                                <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
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
                              </div>
                            </div>
                          </article>
                        </div>
                        <div className="swiper-slide">
                          <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                            <div className="post-media panel overflow-hidden h-100">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                                <canvas className="h-100 w-100"></canvas>
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                              </div>
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                              </div>
                            </div>
                            <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                            <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white" data-swiper-parallax-y="-24">
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"23d"}
                                </span>
                              </div>
                              <h3 className="post-title h5 lg:h4 xl:h3 m-0 max-w-600px text-white text-truncate-2">
                                <SiteLink className="text-none text-white" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
                                  {"Smart Homes, Smarter Living: Exploring IoT and AI"}
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
              <div className="lg:col-3">
                <div className="panel cstack gap-2 h-100">
                  <div>
                    <div className="widget ad-widget vstack gap-2">
                      <div className="widget-title text-center">
                        <h5 className="fs-7 ft-tertiary text-uppercase m-0">
                          {"Sponsore"}
                        </h5>
                      </div>
                      <div className="widget-content">
                        <a className="cstack max-w-300px mx-auto text-none" href="#" rel="nofollow">
                          <img className="d-none sm:d-block" src="/assets/images/common/ad-desktop.jpg" alt="Ad slot" />
                          <img className="d-block sm:d-none" src="/assets/images/common/ad-slot-mobile.jpg" alt="Ad slot" />
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
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols g-4 lg:g-6 col-match" data-uc-grid="">
            <div className="lg:col-8">
              <div className="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"Poltics"}
                      </span>
                      <i className="icon-1 fw-bold unicon-chevron-right"></i>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="panel row child-cols-12 md:child-cols g-2 lg:g-4 col-match sep-y" data-uc-grid="">
                    <div className="col-12 md:col-6 order-0 md:order-1">
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                          <div className="post-media panel overflow-hidden h-100">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                              <canvas className="h-100 w-100"></canvas>
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                            </div>
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                            </div>
                          </div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                          <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white">
                            <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                              <span>
                                {"2h"}
                              </span>
                            </div>
                            <h3 className="post-title h5 lg:h4 m-0 max-w-600px text-white text-truncate-2">
                              <SiteLink className="text-none text-white" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                              </SiteLink>
                            </h3>
                            <div>
                              <div className="post-meta panel hstack justify-between fs-7 text-white text-opacity-60 mt-1">
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
                      <div className="row child-cols-12 g-2 lg:g-4 sep-x" data-uc-grid="">
                        <div>
                          <article className="post type-post panel uc-transition-toggle">
                            <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                              <div>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                      {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"12h"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-auto">
                                <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                  </div>
                                  <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle">
                            <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                              <div>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
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
                                <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                  </div>
                                  <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle">
                            <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                              <div>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                      {"Tech Tools for your Time Management: Enhancing Productivity"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"3mo"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-auto">
                                <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                                  </div>
                                  <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle">
                            <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                              <div>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/potential-of-immersive-technologies-help-your-business-grow">
                                      {"Potential of Immersive Technologies help your Business Grow"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"1yr"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-auto">
                                <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                                  </div>
                                  <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover"></SiteLink>
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
            <div className="lg:col-4">
              <div className="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"Media"}
                      </span>
                      <i className="icon-1 fw-bold unicon-chevron-right"></i>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 lg:g-4 sep-x" data-uc-grid="">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                                  {"Gaming in the Age of AI: Strategies for Startups"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"9mo"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                                  {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
                                  {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"23d"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/smart-homes-smarter-living-exploring-iot-and-ai" className="position-cover"></SiteLink>
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
    <div className="section-outer panel py-4 lg:py-6 dark:text-white">
      <div className="container max-w-xl">
        <div className="section-inner panel vstack gap-2">
          <div className="block-layout carousel-layout vstack gap-2 lg:gap-3 panel">
            <div className="block-header panel pt-1 border-top">
              <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                {"Hot now"}
              </h2>
            </div>
            <div className="block-content panel">
              <div className="swiper" data-uc-swiper="items: 2; gap: 16; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: d-none;" data-uc-swiper-s="items: 3; gap: 24;" data-uc-swiper-l="items: 5; gap: 24;">
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                              {"Hidden Gems: Underrated Travel Destinations Around the World"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"23d"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                              {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"29d"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                              {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                              {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                              {"Tech Tools for your Time Management: Enhancing Productivity"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"3mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                              {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"6mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                              {"Gaming in the Age of AI: Strategies for Startups"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"9mo"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
                  </div>
                  <div className="swiper-slide">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-1">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                              {"Top Independent Contractors to Invest in Best of Startups"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1 d-none md:d-block">
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1yr"}
                                </span>
                              </div>
                            </div>
                            <div>
                              {"·"}
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
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel">
      <div className="container max-w-xl">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols g-4 lg:g-6 col-match" data-uc-grid="">
            <div className="lg:col-8 order-0 lg:order-2">
              <div className="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"Opinions"}
                      </span>
                      <i className="icon-1 fw-bold unicon-chevron-right"></i>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="panel row child-cols-12 md:child-cols g-2 lg:g-4 col-match sep-y" data-uc-grid="">
                    <div className="col-12 md:col-6 order-0 md:order-1">
                      <div>
                        <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 h-100 overflow-hidden uc-dark">
                          <div className="post-media panel overflow-hidden h-100">
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 h-100 d-none md:d-block">
                              <canvas className="h-100 w-100"></canvas>
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                            </div>
                            <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9 d-block md:d-none">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                            </div>
                          </div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
                          <div className="post-header panel vstack justify-end items-start gap-1 p-2 sm:p-4 position-cover text-white">
                            <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                              <span>
                                {"1min"}
                              </span>
                            </div>
                            <h3 className="post-title h5 lg:h4 m-0 max-w-600px text-white text-truncate-2">
                              <SiteLink className="text-none text-white" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                {"The Rise of AI-Powered Personal Assistants: How They Manage"}
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
                      <div className="row child-cols-12 g-2 lg:g-4 sep-x" data-uc-grid="">
                        <div>
                          <article className="post type-post panel uc-transition-toggle">
                            <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                              <div>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
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
                                <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                  </div>
                                  <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle">
                            <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                              <div>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                                      {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"6mo"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-auto">
                                <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                                  </div>
                                  <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle">
                            <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                              <div>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                                      {"Top Independent Contractors to Invest in Best of Startups"}
                                    </SiteLink>
                                  </h3>
                                  <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                    <span>
                                      {"1yr"}
                                    </span>
                                  </div>
                                </div>
                              </div>
                              <div className="col-auto">
                                <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                                  </div>
                                  <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                                </div>
                              </div>
                            </div>
                          </article>
                        </div>
                        <div>
                          <article className="post type-post panel uc-transition-toggle">
                            <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                              <div>
                                <div className="post-header panel vstack justify-between gap-1">
                                  <h3 className="post-title h6 m-0 text-truncate-2">
                                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                      {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
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
                                <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                                  <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                  </div>
                                  <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
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
            <div className="lg:col-4 order-1">
              <div className="block-layout grid-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"World"}
                      </span>
                      <i className="icon-1 fw-bold unicon-chevron-right"></i>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 lg:g-4 sep-x" data-uc-grid="">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                  {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                </SiteLink>
                              </h3>
                              <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                                <span>
                                  {"23d"}
                                </span>
                              </div>
                            </div>
                          </div>
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
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
          <div className="row child-cols-12 lg:child-cols g-4 lg:g-6 col-match" data-uc-grid="">
            <div className="lg:col-4">
              <div className="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"Tech"}
                      </span>
                      <i className="icon-1 fw-bold unicon-chevron-right"></i>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 lg:g-4 sep-x" data-uc-grid="">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden uc-dark">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
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
                            <SiteLink className="text-none text-white" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                              {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                            </SiteLink>
                          </h3>
                          <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                            <span>
                              {"1min"}
                            </span>
                          </div>
                        </div>
                        <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
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
            </div>
            <div className="lg:col-4">
              <div className="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"Business"}
                      </span>
                      <i className="icon-1 fw-bold unicon-chevron-right"></i>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 lg:g-4 sep-x" data-uc-grid="">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden uc-dark">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
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
                            <SiteLink className="text-none text-white" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                          <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                            <span>
                              {"12h"}
                            </span>
                          </div>
                        </div>
                        <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
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
              <div className="block-layout list-layout vstack gap-2 lg:gap-3 panel overflow-hidden">
                <div className="block-header panel pt-1 border-top">
                  <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                    <SiteLink className="hstack d-inline-flex gap-0 text-none hover:text-primary duration-150" href="/blog-category">
                      <span>
                        {"Arts & Entertainments"}
                      </span>
                      <i className="icon-1 fw-bold unicon-chevron-right"></i>
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-2 lg:g-4 sep-x" data-uc-grid="">
                    <div>
                      <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3 overflow-hidden uc-dark">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-4x3">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                          </div>
                        </div>
                        <div className="position-cover bg-gradient-to-t from-black to-transparent opacity-90"></div>
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
                            <SiteLink className="text-none text-white" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                              {"Hidden Gems: Underrated Travel Destinations Around the World"}
                            </SiteLink>
                          </h3>
                          <div className="post-date hstack gap-narrow fs-7 text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                            <span>
                              {"23d"}
                            </span>
                          </div>
                        </div>
                        <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <h3 className="post-title h6 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
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
                            <div className="post-media panel overflow-hidden max-w-72px min-w-72px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="live_now" className="live_now section panel uc-dark swiper-parent">
    <div className="section-outer panel py-4 lg:py-6 bg-gray-900 text-white">
      <div className="container max-w-xl">
        <div className="block-layout slider-thumbs-layout slider-thumbs panel vstack gap-2 lg:gap-3 panel overflow-hidden">
          <div className="block-header panel">
            <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase hstack gap-narrow m-0 text-black dark:text-white">
              <i className="icon-1 fw-bold unicon-dot-mark text-red" data-uc-animate="flash"></i>
              <span>
                {"Live now"}
              </span>
            </h2>
          </div>
          <div className="block-content">
            <div className="row child-cols-12 g-2" data-uc-grid="">
              <div className="md:col-8 lg:col-9">
                <div className="panel overflow-hidden rounded">
                  <div className="swiper swiper-main" data-uc-swiper="connect: .swiper-thumbs; items: 1; gap: 8; autoplay: 7000; parallax: true; fade: true; effect: fade; dots: .swiper-pagination; disable-class: last-slide;">
                    <div className="swiper-wrapper">
                      <div className="swiper-slide">
                        <article className="post type-post h-250px md:h-350px lg:h-500px bg-black uc-dark">
                          <div className="post-media panel overflow-hidden position-cover">
                            <div className="featured-video bg-gray-700 ratio ratio-3x2">
                              <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/videos/vid-01.webm" type="video/webm" />
                                {" Your browser does not support the video tag. "}
                              </video>
                            </div>
                          </div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent z-1 opacity-80"></div>
                          <div className="post-header panel position-absolute bottom-0 vstack justify-between gap-2 xl:gap-4 max-300px lg:max-w-600px p-2 md:p-4 xl:p-6 z-1">
                            <h3 className="post-title h4 lg:h3 xl:h2 m-0 text-truncate-2" data-swiper-parallax-x="-8">
                              <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                {"Balancing Work and Wellness: Tech Solutions for Healthy"}
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
                          <div className="post-media panel overflow-hidden position-cover">
                            <div className="featured-video bg-gray-700 ratio ratio-3x2">
                              <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/videos/vid-03.webm" type="video/webm" />
                                {" Your browser does not support the video tag. "}
                              </video>
                            </div>
                          </div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent z-1 opacity-80"></div>
                          <div className="post-header panel position-absolute bottom-0 vstack justify-between gap-2 xl:gap-4 max-300px lg:max-w-600px p-2 md:p-4 xl:p-6 z-1">
                            <h3 className="post-title h4 lg:h3 xl:h2 m-0 text-truncate-2" data-swiper-parallax-x="-8">
                              <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                {"Business Agility the Digital Age: Leveraging AI and Automation"}
                              </SiteLink>
                            </h3>
                            <div data-swiper-parallax-x="8">
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
                                      <div className="post-date hstack gap-narrow">
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
                          <div className="post-media panel overflow-hidden position-cover">
                            <div className="featured-video bg-gray-700 ratio ratio-3x2">
                              <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/videos/vid-04.webm" type="video/webm" />
                                {" Your browser does not support the video tag. "}
                              </video>
                            </div>
                          </div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent z-1 opacity-80"></div>
                          <div className="post-header panel position-absolute bottom-0 vstack justify-between gap-2 xl:gap-4 max-300px lg:max-w-600px p-2 md:p-4 xl:p-6 z-1">
                            <h3 className="post-title h4 lg:h3 xl:h2 m-0 text-truncate-2" data-swiper-parallax-x="-8">
                              <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                              </SiteLink>
                            </h3>
                            <div data-swiper-parallax-x="8">
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
                                      <div className="post-date hstack gap-narrow">
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
                          <div className="post-media panel overflow-hidden position-cover">
                            <div className="featured-video bg-gray-700 ratio ratio-3x2">
                              <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/videos/vid-05.webm" type="video/webm" />
                                {" Your browser does not support the video tag. "}
                              </video>
                            </div>
                          </div>
                          <div className="position-cover bg-gradient-to-t from-black to-transparent z-1 opacity-80"></div>
                          <div className="post-header panel position-absolute bottom-0 vstack justify-between gap-2 xl:gap-4 max-300px lg:max-w-600px p-2 md:p-4 xl:p-6 z-1">
                            <h3 className="post-title h4 lg:h3 xl:h2 m-0 text-truncate-2" data-swiper-parallax-x="-8">
                              <SiteLink className="text-none" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
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
                    </div>
                    <div className="swiper-pagination top-auto start-auto bottom-0 end-0 m-2 md:m-4 xl:m-6 text-white d-none md:d-inline-flex justify-end w-auto"></div>
                  </div>
                </div>
              </div>
              <div className="md:col-4 lg:col-3">
                <div className="panel md:vstack gap-1 h-100">
                  <div className="swiper swiper-thumbs swiper-thumbs-progress rounded order-2" data-uc-swiper={"items: 2;\n                            gap: 4; \n                            disable-class: last-slide;"} data-uc-swiper-s={"items: auto;\n                            direction: vertical;\n                            autoHeight: true;\n                            mousewheel: true;\n                            freeMode: false;\n                            watchSlidesVisibility: true;\n                            watchSlidesProgress: true;\n                            watchOverflow: true"}>
                    <div className="swiper-wrapper md:flex-1">
                      <div className="swiper-slide overflow-hidden rounded min-h-64px lg:min-h-100px">
                        <div className="swiper-slide-progress position-cover z-0">
                          <span></span>
                        </div>
                        <article className="post type-post panel uc-transition-toggle p-1 z-1">
                          <div className="row gx-1">
                            <div className="col-auto post-media-wrap">
                              <div className="post-media panel overflow-hidden w-40px lg:w-64px rounded">
                                <div className="featured-video bg-gray-700 ratio ratio-3x4">
                                  <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                    <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/videos/vid-01.webm" type="video/webm" />
                                    {" Your browser does not support the video tag. "}
                                  </video>
                                </div>
                                <div className="has-video-overlay position-absolute top-0 end-0 w-40px h-40px lg:w-64px lg:h-64px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                                <span className="cstack has-video-icon position-absolute top-50 start-50 translate-middle fs-6 w-40px h-40px text-white">
                                  <i className="icon-narrow unicon-play-filled-alt"></i>
                                </span>
                              </div>
                            </div>
                            <div className="col">
                              <p className="fs-6 m-0 text-truncate-2 text-gray-900 dark:text-white">
                                {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide overflow-hidden rounded min-h-64px lg:min-h-100px">
                        <div className="swiper-slide-progress position-cover z-0">
                          <span></span>
                        </div>
                        <article className="post type-post panel uc-transition-toggle p-1 z-1">
                          <div className="row gx-1">
                            <div className="col-auto post-media-wrap">
                              <div className="post-media panel overflow-hidden w-40px lg:w-64px rounded">
                                <div className="featured-video bg-gray-700 ratio ratio-3x4">
                                  <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                    <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/videos/vid-03.webm" type="video/webm" />
                                    {" Your browser does not support the video tag. "}
                                  </video>
                                </div>
                                <div className="has-video-overlay position-absolute top-0 end-0 w-40px h-40px lg:w-64px lg:h-64px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                                <span className="cstack has-video-icon position-absolute top-50 start-50 translate-middle fs-6 w-40px h-40px text-white">
                                  <i className="icon-narrow unicon-play-filled-alt"></i>
                                </span>
                              </div>
                            </div>
                            <div className="col">
                              <p className="fs-6 m-0 text-truncate-2 text-gray-900 dark:text-white">
                                {"Business Agility the Digital Age: Leveraging AI and Automation"}
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide overflow-hidden rounded min-h-64px lg:min-h-100px">
                        <div className="swiper-slide-progress position-cover z-0">
                          <span></span>
                        </div>
                        <article className="post type-post panel uc-transition-toggle p-1 z-1">
                          <div className="row gx-1">
                            <div className="col-auto post-media-wrap">
                              <div className="post-media panel overflow-hidden w-40px lg:w-64px rounded">
                                <div className="featured-video bg-gray-700 ratio ratio-3x4">
                                  <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                    <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/videos/vid-04.webm" type="video/webm" />
                                    {" Your browser does not support the video tag. "}
                                  </video>
                                </div>
                                <div className="has-video-overlay position-absolute top-0 end-0 w-40px h-40px lg:w-64px lg:h-64px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                                <span className="cstack has-video-icon position-absolute top-50 start-50 translate-middle fs-6 w-40px h-40px text-white">
                                  <i className="icon-narrow unicon-play-filled-alt"></i>
                                </span>
                              </div>
                            </div>
                            <div className="col">
                              <p className="fs-6 m-0 text-truncate-2 text-gray-900 dark:text-white">
                                {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                              </p>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div className="swiper-slide overflow-hidden rounded min-h-64px lg:min-h-100px">
                        <div className="swiper-slide-progress position-cover z-0">
                          <span></span>
                        </div>
                        <article className="post type-post panel uc-transition-toggle p-1 z-1">
                          <div className="row gx-1">
                            <div className="col-auto post-media-wrap">
                              <div className="post-media panel overflow-hidden w-40px lg:w-64px rounded">
                                <div className="featured-video bg-gray-700 ratio ratio-3x4">
                                  <video className="video-cover video-lazyload min-h-100px" preload="none" loop playsInline>
                                    <source src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-two/videos/vid-05.webm" type="video/webm" />
                                    {" Your browser does not support the video tag. "}
                                  </video>
                                </div>
                                <div className="has-video-overlay position-absolute top-0 end-0 w-40px h-40px lg:w-64px lg:h-64px bg-gradient-45 from-transparent via-transparent to-black opacity-50"></div>
                                <span className="cstack has-video-icon position-absolute top-50 start-50 translate-middle fs-6 w-40px h-40px text-white">
                                  <i className="icon-narrow unicon-play-filled-alt"></i>
                                </span>
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
                    </div>
                  </div>
                  <div className="swiper-prev btn btn-2xs lg:btn-xs btn-primary w-100 d-none md:d-flex order-1">
                    {"Prev"}
                  </div>
                  <div className="swiper-next btn btn-2xs lg:btn-xs btn-primary w-100 d-none md:d-flex order-3">
                    {"Next"}
                  </div>
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
          <div className="content-wrap row child-cols-12 g-4 lg:g-6" data-uc-grid="">
            <div className="md:col-9">
              <div className="main-wrap panel vstack gap-3 lg:gap-6">
                <div className="block-layout grid-layout vstack gap-2 panel overflow-hidden">
                  <div className="block-header panel pt-1 border-top">
                    <h2 className="h6 ft-tertiary fw-bold ls-0 text-uppercase m-0 text-black dark:text-white">
                      {"Latest"}
                    </h2>
                  </div>
                  <div className="block-content">
                    <div className="row child-cols-12 g-2 lg:g-4 sep-x">
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                    {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"Law enforcement officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                    {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"Officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                    {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"Children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                    {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                    {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                    {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                    {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                    {"AI and Marketing: Unlocking Customer Insights"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                    {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                                    {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                    {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div className="col-auto">
                              <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-3x2">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack justify-between gap-1">
                                <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                    {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                  </SiteLink>
                                </h3>
                              </div>
                              <p className="post-excrept ft-tertiary fs-6 text-gray-900 dark:text-white text-opacity-60 text-truncate-2 my-1">
                                {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                              </p>
                              <div className="post-link">
                                <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="link fs-7 fw-bold text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                                  <span>
                                    {"Read more"}
                                  </span>
                                </SiteLink>
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
              <div className="sidebar-wrap panel vstack gap-2 pb-2" data-uc-sticky="end: .content-wrap; offset: 150; media: @m;">
                <div className="widget ad-widget vstack gap-2 text-center p-2 border">
                  <div className="widgt-content">
                    <a className="cstack max-w-300px mx-auto text-none" href="#" rel="nofollow">
                      <img className="d-block dark:d-none" src="/assets/images/common/ad-slot-aside.jpg" alt="Ad slot" />
                      <img className="d-none dark:d-block" src="/assets/images/common/ad-slot-aside-2.jpg" alt="Ad slot" />
                    </a>
                  </div>
                </div>
                <div className="widget popular-widget vstack gap-2 p-2 border">
                  <div className="widget-title text-center">
                    <h5 className="fs-7 ft-tertiary text-uppercase m-0">
                      {"Popular now"}
                    </h5>
                  </div>
                  <div className="widget-content">
                    <div className="row child-cols-12 gx-4 gy-3 sep-x" data-uc-grid="">
                      <div>
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 ft-tertiary fst-italic text-center text-primary m-0 min-w-24px">
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
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 ft-tertiary fst-italic text-center text-primary m-0 min-w-24px">
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
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 ft-tertiary fst-italic text-center text-primary m-0 min-w-24px">
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
                        <article className="post type-post panel uc-transition-toggle">
                          <div className="row child-cols g-2 lg:g-3" data-uc-grid="">
                            <div>
                              <div className="hstack items-start gap-3">
                                <span className="h3 lg:h2 ft-tertiary fst-italic text-center text-primary m-0 min-w-24px">
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
                <div className="widget social-widget vstack gap-2 text-center p-2 border">
                  <div className="widgt-title">
                    <h4 className="fs-7 ft-tertiary text-uppercase m-0">
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
<Footer2 />
    </TemplateShell>
  );
}
