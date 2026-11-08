import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";

export default function Header8() {
  return (
    <header className="uc-header header-ten uc-navbar-sticky-wrap z-999" data-uc-sticky="start: 200; sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; animation: uc-animation-slide-top; end: !*;">
  <nav className="uc-navbar-container uc-navbar-transparent fs-6 z-1">
    <div className="uc-top-navbar panel z-2">
      <div className="container max-w-2xl px-1 lg:px-2">
        <div className="uc-navbar items-center min-h-56px md:min-h-72px mt-1 md:mt-2 px-2 lg:px-3 border rounded-1-5 lg:rounded-2 bg-white dark:bg-gray-900 bg-opacity-85 text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;" style={{"backdropFilter":"blur(5px)"} as React.CSSProperties}>
          <div className="uc-navbar-left gap-2 md:gap-3">
            <div>
              <a className="uc-menu-trigger icon-2" href="#uc-menu-panel" data-uc-toggle=""></a>
            </div>
            <div className="uc-navbar-item hide-on-default">
              <div className="uc-logo text-dark dark:text-white">
                <SiteLink href="/">
                  <img className="w-56px md:w-64px d-none dark:d-block" src="/assets/images/demo-ten/common/logo-dark.svg" alt="News5" />
                  <img className="w-56px md:w-64px d-block dark:d-none" src="/assets/images/demo-ten/common/logo-light.svg" alt="News5" />
                </SiteLink>
              </div>
            </div>
          </div>
          <div className="uc-navbar-center">
            <ul className="uc-navbar-nav gap-3 fs-5 fw-bold ms-2 d-none lg:d-flex" style={{"--uc-nav-height":"72px"} as React.CSSProperties}>
              <li>
                <a href="#">
                  {"Home "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;">
                  <ul className="uc-nav uc-navbar-dropdown-nav">
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
                      <SiteLink href="/">
                        {"Food"}
                      </SiteLink>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <a href="#">
                  <i className="icon icon-narrow unicon-bar fw-bold text-primary"></i>
                  <span>
                    {"Recipes"}
                  </span>
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
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
                              {"Fast Food"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Dishes"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Salades"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Drinks"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-10">
                      <div id="uc-navbar-switcher-tending" className="uc-navbar-switcher uc-switcher">
                        <div className="row child-cols col-match g-2">
                          <div>
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-06.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Healthy Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-07.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Fast Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-08.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Diet"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-09.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Fast Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-01.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Fast Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-02.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Fast Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-03.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Healthy Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-04.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Recipes"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-11.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Diet"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-12.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Fast Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-13.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Recipes"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-14.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Healthy Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-09.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Fast Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-10.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Recipes"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-11.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Diet"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-12.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Fast Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-03.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Healthy Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-04.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Recipes"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-05.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Recipes"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
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
                            <article className="post type-post panel hstack sm:vstack items-start gap-2 overflow-hidden rounded">
                              <div className="post-media panel overflow-hidden w-200px sm:w-100 order-1 sm:order-0">
                                <figure className="featured-image m-0 ratio ratio-3x2 sm:ratio-16x9 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/posts/img-06.jpg" alt="image" data-uc-img="loading: lazy" />
                                  <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover" data-caption="image"></SiteLink>
                                </figure>
                                <div className="post-meta-catgory position-absolute top-0 start-0 m-1 fs-7 py-narrow px-1 rounded-1 bg-primary d-none sm:d-block">
                                  <div className="post-category hstack gap-narrow fw-semibold">
                                    <SiteLink className="text-none text-white" href="/blog-category">
                                      {"Healthy Food"}
                                    </SiteLink>
                                  </div>
                                </div>
                              </div>
                              <div className="post-header panel vstack justify-between gap-1 w-100">
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
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
                  {"Salades"}
                </a>
              </li>
              <li>
                <a href="#">
                  {"Dishes"}
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon icon-narrow unicon-course fw-bold text-primary"></i>
                  <span>
                    {"Blog"}
                  </span>
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;">
                  <ul className="uc-nav uc-navbar-dropdown-nav">
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
              </li>
              <li>
                <a href="#">
                  <i className="icon icon-narrow unicon-shopping-cart fw-bold text-primary"></i>
                  <span>
                    {"Shop"}
                  </span>
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;">
                  <ul className="uc-nav uc-navbar-dropdown-nav">
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
              </li>
              <li>
                <a href="#">
                  <i className="icon-2 fw-medium unicon-overflow-menu-horizontal"></i>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset fs-6 fw-medium p-3 rounded-0 hide-scrollbar w-auto" data-uc-drop=" offset: 0; boundary: !.uc-navbar; animation: uc-animation-slide-top-small; duration: 150;">
                  <ul className="uc-nav uc-navbar-dropdown-nav">
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
              </li>
            </ul>
          </div>
          <div className="uc-navbar-right gap-2 md:gap-3">
            <button type="button" className="btn h-40px p-0 border-0 text-dark dark:text-white lg:d-inline-flex" data-uc-toggle="target: #uc-favorites-modal">
              <i className="icon icon-1 fw-bold unicon-favorite"></i>
              <span className="cstack w-16px h-16px fs-7 bg-primary text-white rounded-circle position-relative ms-nnarrow">
                {"0"}
              </span>
            </button>
            <div className="vr h-16px my-auto"></div>
            <div className="uc-navbar-item">
              <a className="uc-search-trigger cstack text-none text-dark dark:text-white" href="#uc-search-modal" data-uc-toggle="">
                <i className="icon icon-1 fw-bold unicon-search"></i>
              </a>
            </div>
            <div className="uc-modes-trigger w-32px h-32px border fs-4 fw-medium rounded-circle dark:border-white border-opacity-25 text-dark dark:text-white" data-darkmode-toggle="">
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
    <div className="uc-center-navbar panel z-1 hide-on-sticky">
      <div className="container max-w-2xl px-2 lg:px-4 xl:px-0">
        <div className="uc-navbar items-center min-h-128px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div className="uc-navbar-center">
            <div className="uc-navbar-item">
              <div className="uc-logo text-dark dark:text-white">
                <SiteLink href="/">
                  <img className="w-100px d-none dark:d-block" src="/assets/images/demo-ten/common/logo-dark.svg" alt="News5" />
                  <img className="w-100px d-block dark:d-none" src="/assets/images/demo-ten/common/logo-light.svg" alt="News5" />
                </SiteLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</header>
  );
}
