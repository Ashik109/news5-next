import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";

export default function Header6() {
  return (
    <header className="uc-header header-one uc-navbar-sticky-wrap z-999" data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
  <nav className="uc-navbar-container shadow-xs bg-white dark:bg-gray-900 fs-6 z-1">
    <div className="uc-top-navbar panel z-3 min-h-32px lg:min-h-48px border-bottom" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container max-w-xl">
        <div className="hstack">
          <div className="uc-navbar-left gap-2 lg:gap-3">
            <div className="uc-navbar-item dark:text-white dark:text-opacity-70 d-none sm:d-flex">
              <div className="uc-weather-mini hstack gap-1 fs-7 lg:fs-6 fw-bold">
                <i className="icon icon-1 fw-medium unicon-cloud-lightning"></i>
                <span>
                  {"Storm - 10° C"}
                </span>
              </div>
            </div>
            <div className="vr h-24px my-auto d-none sm:d-block"></div>
            <div className="uc-navbar-item dark:text-white dark:text-opacity-70">
              <ul className="nav-x gap-2 lg:gap-3 fs-7 lg:fs-6 fw-bold">
                <li>
                  <a href="#">
                    {"Deals"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Newsletter"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="uc-navbar-right gap-2 lg:gap-3">
            <div className="uc-navbar-item">
              <a className="uc-account-trigger btn btn-sm border-0 p-0 duration-0 dark:text-white" href="#uc-favorites-modal" data-uc-toggle="">
                <i className="icon icon-1 fw-medium unicon-bookmark"></i>
                <span className="d-none lg:d-block">
                  {"My bookmarks"}
                </span>
              </a>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-account-trigger btn btn-sm border-0 p-0 duration-0 dark:text-white" href="#uc-account-modal" data-uc-toggle="">
                <i className="icon icon-1 fw-medium unicon-user-avatar-filled"></i>
                <span className="d-none lg:d-block">
                  {"My account"}
                </span>
              </a>
            </div>
            <div className="uc-navbar-item">
              <div className="uc-modes-trigger w-32px h-32px border fs-4 fw-medium rounded-circle text-dark dark:text-white" data-darkmode-toggle="">
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
            <div className="uc-logo d-none md:d-block">
              <SiteLink href="/">
                <img className="w-80px d-none dark:d-block" src="/assets/images/main/common/logo-dark.svg" alt="News5" />
                <img className="w-80px d-block dark:d-none" src="/assets/images/main/common/logo-light.svg" alt="News5" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-center">
            <div className="uc-logo d-block md:d-none">
              <SiteLink href="/">
                <img className="w-80px d-none dark:d-block" src="/assets/images/main/common/logo-dark.svg" alt="News5" />
                <img className="w-80px d-block dark:d-none" src="/assets/images/main/common/logo-light.svg" alt="News5" />
              </SiteLink>
            </div>
            <ul className="uc-navbar-nav gap-3 xl:gap-4 fs-5 xl:fs-4 fw-bold d-none lg:d-flex" style={{"--uc-nav-height":"80px"} as React.CSSProperties}>
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Tech"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"7d ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Network"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"9d ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Virtual Reality"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"15d ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"AI Powered"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"23d ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Gadgets"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"1min ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Startups"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"55min ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Gadgets"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"1h ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"AI Powered"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2h ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Travel"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Tech"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Startups"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"3mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"AI Powered"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"6mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"AI Powered"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"23d ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Trips"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"29d ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Travel"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Tech"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2mo ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Gadgets"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"1h ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"AI Powered"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"2h ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"AI Powered"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"12h ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-medium">
                                      <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                        {"Tech"}
                                      </SiteLink>
                                    </div>
                                  </div>
                                  <div className="sep d-none md:d-block">
                                    {"❘"}
                                  </div>
                                  <div className="d-none md:d-block">
                                    <div className="post-date hstack gap-narrow">
                                      <span>
                                        {"7d ago"}
                                      </span>
                                    </div>
                                  </div>
                                  <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                                    <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                      <i className="icon-narrow unicon-bookmark-add"></i>
                                    </a>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
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
                  {"Trending "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-medium">
                                <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                  {"Gadgets"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1min ago"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
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
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-medium">
                                <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                  {"Startups"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"55min ago"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
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
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-medium">
                                <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                  {"Gadgets"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"1h ago"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
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
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-medium">
                                <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                  {"AI Powered"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"2h ago"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
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
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-medium">
                                <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                  {"AI Powered"}
                                </SiteLink>
                              </div>
                            </div>
                            <div className="sep d-none md:d-block">
                              {"❘"}
                            </div>
                            <div className="d-none md:d-block">
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"12h ago"}
                                </span>
                              </div>
                            </div>
                            <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
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
                              <SiteLink href="/">
                                {"Newspaper"}
                              </SiteLink>
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
                          <a className="position-cover" href="#"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="uc-navbar-right">
            <div>
              <a className="uc-search-trigger" href="#uc-search-modal" data-uc-toggle="">
                <img className="w-24px" src="/assets/images/common/icons/search.svg" alt="Search" data-uc-svg="" />
              </a>
            </div>
            <button type="button" className="animate-btn btn btn-sm btn-primary text-none gap-0 d-none lg:d-inline-flex" data-uc-toggle="target: #uc-newsletter-modal">
              <span>
                {"Subscribe"}
              </span>
              <i className="icon icon-narrow unicon-email fw-bold"></i>
            </button>
          </div>
        </div>
      </div>
    </div>
    <div className="uc-bottom-navbar panel z-1 min-h-32px lg:min-h-48px bg-primary uc-dark" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container max-w-xl">
        <div className="hstack">
          <div className="uc-navbar-left gap-2 lg:gap-3">
            <div className="uc-navbar-item">
              <ul className="nav-x fs-6 fw-bold flex-nowrap overflow-x-auto hide-scrollbar uc-horizontal-scroll w-screen md:w-auto md:mask-end-0 mx-n2 px-2 dark:text-primary-50">
                <li>
                  <a href="#">
                    {"Tech"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Gadgets"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Sciense"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Travel"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Business"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Marketing"}
                  </a>
                </li>
                <li>
                  <a href="#">
                    {"Startups"}
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
          <div className="uc-navbar-right gap-2 lg:gap-3 d-none md:d-flex">
            <div className="uc-navbar-item">
              <a className="uc-cart-trigger btn btn-sm border-0 p-0 duration-0 dark:text-white" href="#uc-cart-panel" data-uc-toggle="">
                <i className="icon icon-1 fw-medium unicon-shopping-cart"></i>
                <span>
                  {"Cart (0)"}
                </span>
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
