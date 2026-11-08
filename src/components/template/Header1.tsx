import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";

export default function Header1() {
  return (
    <header className="uc-header header-three uc-navbar-sticky-wrap z-999" data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
  <nav className="uc-navbar-container fs-6 z-1">
    <div className="uc-center-navbar panel z-2 border-4 border-top border-primary bg-black uc-dark">
      <div className="container max-w-2xl px-2 lg:px-4 xl:px-0">
        <div className="uc-navbar items-center text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;" style={{"height":"60px"} as React.CSSProperties}>
          <div className="uc-navbar-left gap-2 lg:gap-4">
            <div>
              <a className="uc-menu-trigger icon-2" href="#uc-menu-panel" data-uc-toggle=""></a>
            </div>
            <div className="uc-logo text-white">
              <SiteLink href="/">
                <img className="w-80px text-dark dark:text-white" src="/assets/images/demo-eight/common/logo.svg" alt="News5" data-uc-svg="" />
              </SiteLink>
            </div>
            <ul className="uc-navbar-nav gap-3 fs-5 fw-bolder ms-2 d-none lg:d-flex" style={{"--uc-nav-height":"60px"} as React.CSSProperties}>
              <li>
                <a href="#">
                  {"Latest "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-3">
                    <div className="col-2">
                      <div className="uc-navbar-switcher-nav p-1 rounded bg-gray-25 dark:bg-gray-800">
                        <ul className="uc-tab-left fs-5 text-end" data-uc-tab="connect: #uc-navbar-switcher-tending; animation: uc-animation-slide-right-small, uc-animation-slide-left-small">
                          <li>
                            <a href="#">
                              {"News"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Gadgets"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Tech"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Science"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"AI"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-10">
                      <div id="uc-navbar-switcher-tending" className="uc-navbar-switcher uc-switcher">
                        <div className="row child-cols col-match g-2">
                          <div>
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-06.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Tech"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-07.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Network"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-08.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Virtual Reality"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"AI and Marketing: Unlocking Customer Insights"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-09.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-01.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Gadgets"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-02.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Startups"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-03.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Gadgets"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-04.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-11.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Travel"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-12.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Tech"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                          <div>
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-13.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Startups"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Tech Tools for your Time Management: Enhancing Productivity"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                          <div>
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-14.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-09.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-10.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Trips"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-11.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Travel"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-12.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Tech"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-03.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Gadgets"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-04.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-05.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"AI Powered"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-06.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Tech"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog-details">
                                    {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                  </SiteLink>
                                </h3>
                                <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
              </li>
              <li>
                <a href="#">
                  {"Trending "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-01.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                          <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-white" href="/blog-category">
                                {"Gadgets"}
                              </SiteLink>
                            </div>
                          </div>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 w-100">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog-details">
                              {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-02.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                          <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-white" href="/blog-category">
                                {"Startups"}
                              </SiteLink>
                            </div>
                          </div>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 w-100">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog-details">
                              {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-03.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                          <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-white" href="/blog-category">
                                {"Gadgets"}
                              </SiteLink>
                            </div>
                          </div>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 w-100">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog-details">
                              {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-04.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                          <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-white" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 w-100">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog-details">
                              {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
                      <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden">
                        <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                          <figure className="featured-image m-0 ratio ratio-3x2 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-05.jpg" alt="image" data-uc-img="loading: lazy" />
                            <SiteLink href="/blog-details" className="position-cover" data-caption="image"></SiteLink>
                          </figure>
                          <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 px-narrow bg-primary d-none sm:d-block">
                            <div className="post-category hstack gap-narrow fw-semibold">
                              <SiteLink className="text-none text-white" href="/blog-category">
                                {"AI Powered"}
                              </SiteLink>
                            </div>
                          </div>
                        </div>
                        <div className="post-header panel vstack justify-between gap-1 w-100">
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none" href="/blog-details">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                          <div className="post-meta panel hstack gap-2 fs-7 fw-normal text-black dark:text-white text-opacity-60">
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
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"News"}
                </SiteLink>
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"Tech"}
                </SiteLink>
              </li>
              <li>
                <SiteLink href="/blog-category">
                  {"Sciense"}
                </SiteLink>
              </li>
              <li>
                <a href="#">
                  {"More "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
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
                              <SiteLink href="/">
                                {"Magazine"}
                              </SiteLink>
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
          <div className="uc-navbar-right gap-2 lg:gap-4">
            <div className="uc-modes-trigger w-32px h-32px border fs-4 fw-medium rounded-circle border-white border-opacity-25 text-dark dark:text-white d-none sm:d-inline-flex" data-darkmode-toggle="">
              <label className="switch">
                <span className="sr-only">
                  {"Dark mode toggle"}
                </span>
                <input type="checkbox" />
                <span className="slider"></span>
              </label>
            </div>
            <button type="button" className="btn h-40px p-0 text-white border-0 lg:d-inline-flex" data-uc-toggle="target: #uc-account-modal">
              <i className="icon icon-narrow unicon-user-filled"></i>
              <span>
                {"Log in"}
              </span>
            </button>
            <div className="vr h-16px my-auto"></div>
            <div className="uc-navbar-item d-none xl:d-inline-flex">
              <ul className="nav-x gap-2">
                <li>
                  <a className="text-gray-900 dark:text-white hover:text-primary" href="#fb">
                    <i className="icon icon-1 unicon-logo-facebook"></i>
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 dark:text-white hover:text-primary" href="#fl">
                    <i className="icon icon-1 unicon-logo-flickr"></i>
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 dark:text-white hover:text-primary" href="#in">
                    <i className="icon icon-1 unicon-logo-instagram"></i>
                  </a>
                </li>
                <li>
                  <a className="text-gray-900 dark:text-white hover:text-primary" href="#yt">
                    <i className="icon icon-1 unicon-logo-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-search-trigger cstack text-none text-dark dark:text-white" href="#uc-search-modal" data-uc-toggle="">
                <i className="icon icon-1 fw-bold unicon-search"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
  );
}
