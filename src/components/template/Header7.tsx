import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";

export default function Header7() {
  return (
    <header className="uc-header header-six uc-navbar-sticky-wrap z-999 border-top border-3 border-primary" data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
  <nav className="uc-navbar-container bg-white dark:bg-gray-900 fs-6 z-1">
    <div className="uc-top-navbar panel z-3 min-h-32px overflow-hidden border-bottom d-none" style={{"--uc-nav-height":"32px"} as React.CSSProperties} data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="container max-w-xl">
        <div className="hstack panel z-1">
          <div className="uc-navbar-left gap-2 lg:gap-3">
            <div className="uc-navbar-item">
              <span className="datetime fs-7 text-gray-900 dark:text-white text-opacity-50">
                {"23 April, 2024"}
              </span>
            </div>
            <div className="opacity-30">
              {"|"}
            </div>
            <div className="uc-navbar-item">
              <ul className="uc-social-header nav-x gap-narrow d-none lg:d-flex text-gray-900 dark:text-white">
                <li>
                  <a href="#fb" className="cstack w-24px h-24px">
                    <i className="icon icon-1 unicon-logo-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#x" className="cstack w-24px h-24px">
                    <i className="icon icon-1 unicon-logo-x-filled"></i>
                  </a>
                </li>
                <li>
                  <a href="#in" className="cstack w-24px h-24px">
                    <i className="icon icon-1 unicon-logo-instagram"></i>
                  </a>
                </li>
                <li>
                  <a href="#yt" className="cstack w-24px h-24px">
                    <i className="icon icon-1 unicon-logo-youtube"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="uc-navbar-right gap-2">
            <div className="uc-navbar-item">
              <a className="uc-account-trigger btn btn-sm border-0 p-0 duration-0 dark:text-white" href="#uc-newsletter-modal" data-uc-toggle="">
                <i className="icon icon-1 unicon-email-filled"></i>
                <span>
                  {"Newsletter"}
                </span>
              </a>
            </div>
            <div className="opacity-30">
              {"|"}
            </div>
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
    <div className="uc-center-navbar panel z-2">
      <div className="container max-w-xl">
        <div className="uc-navbar min-h-72px lg:min-h-80px text-gray-900 dark:text-white" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
          <div className="uc-navbar-left">
            <div className="d-block lg:d-none">
              <a className="uc-menu-trigger" href="#uc-menu-panel" data-uc-toggle=""></a>
            </div>
            <div className="uc-logo d-block md:d-none">
              <SiteLink href="/">
                <img className="w-80px d-none dark:d-block" src="/assets/images/demo-six/common/logo-dark.svg" alt="News5" />
                <img className="w-80px d-block dark:d-none" src="/assets/images/demo-six/common/logo-light.svg" alt="News5" />
              </SiteLink>
            </div>
            <div className="uc-logo d-none md:d-block">
              <SiteLink href="/">
                <img className="w-100px d-none dark:d-block" src="/assets/images/demo-six/common/logo-dark.svg" alt="News5" />
                <img className="w-100px d-block dark:d-none" src="/assets/images/demo-six/common/logo-light.svg" alt="News5" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-right gap-2 lg:gap-3">
            <ul className="uc-navbar-nav gap-4 fs-4 text-uppercase fw-bold me-2 d-none lg:d-flex" style={{"--uc-nav-height":"80px"} as React.CSSProperties}>
              <li>
                <a href="#">
                  {"Latest "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row col-match g-2">
                    <div className="w-1/5">
                      <div className="uc-navbar-switcher-nav p-1 rounded bg-gray-25 dark:bg-gray-800">
                        <ul className="uc-tab-left fs-5 text-uppercase text-end" data-uc-tab="connect: #uc-navbar-switcher-tending; animation: uc-animation-slide-right-small, uc-animation-slide-left-small">
                          <li>
                            <a href="#">
                              {"All"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Football"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Basketball"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Tennis"}
                            </a>
                          </li>
                          <li>
                            <a href="#">
                              {"Esports"}
                            </a>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="w-4/5">
                      <div id="uc-navbar-switcher-tending" className="uc-navbar-switcher uc-switcher">
                        <div className="row child-cols col-match g-2">
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                    {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/smart-homes-smarter-living-exploring-iot-and-ai" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
                                    {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-21.jpg" alt="How Businesses Are Adapting to E-Commerce and AI Integration" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/how-businesses-are-adapting-to-e-commerce-and-ai-integration" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
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
                                        {"29d ago"}
                                      </span>
                                    </div>
                                  </div>
                                </div>
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/how-businesses-are-adapting-to-e-commerce-and-ai-integration">
                                    {"How Businesses Are Adapting to E-Commerce and AI Integration"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-22.jpg" alt="Technology: Wearables, AR, and AI in the Apparel Industry" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/technology-wearables-ar-and-ai-in-the-apparel-industry" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Sprint"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/technology-wearables-ar-and-ai-in-the-apparel-industry">
                                    {"Technology: Wearables, AR, and AI in the Apparel Industry"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Football"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                    {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Football"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                    {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Football"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                                    {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Football"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                    {"Tech Tools for your Time Management: Enhancing Productivity"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                    {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                    {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                                    {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Basketball"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                                    {"Top Independent Contractors to Invest in Best of Startups"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                        </div>
                        <div className="row child-cols g-2">
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Tennis"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                    {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Tennis"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                    {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Tennis"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                    {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Tennis"}
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
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                    {"AI and Marketing: Unlocking Customer Insights"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                    {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
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
                                <h3 className="post-title h6 m-0 text-truncate-2">
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                                    {"Gaming in the Age of AI: Strategies for Startups"}
                                  </SiteLink>
                                </h3>
                              </div>
                            </article>
                          </div>
                          <div>
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden rounded-1">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
                                <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                  <div>
                                    <div className="post-category hstack gap-narrow fw-semibold">
                                      <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                        {"Esports"}
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
                                  <SiteLink className="text-none hover:text-primary duration-150" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
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
              </li>
              <li>
                <a href="#">
                  {"Football "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                              {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                              {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                              {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                              {"Tech Tools for your Time Management: Enhancing Productivity"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Football"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/potential-of-immersive-technologies-help-your-business-grow">
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
                <a href="#">
                  {"Basketball "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                              {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                              {"Business Agility the Digital Age: Leveraging AI and Automation"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                              {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                              {"Top Independent Contractors to Invest in Best of Startups"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Basketball"}
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
                <a href="#">
                  {"Tennis "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                              {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                              {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                              {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                              {"Hidden Gems: Underrated Travel Destinations Around the World"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Tennis"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                              {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  {"Esports "}
                  <span data-uc-navbar-parent-icon=""></span>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 pb-4 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols col-match g-2">
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                              {"AI and Marketing: Unlocking Customer Insights"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                              {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
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
                          <h3 className="post-title h6 m-0 text-truncate-2">
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                              {"Gaming in the Age of AI: Strategies for Startups"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                              {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden rounded-1">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-six/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/smart-homes-smarter-living-exploring-iot-and-ai" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
                          <div className="post-meta panel hstack justify-start gap-1 fs-7 ft-tertiary fw-medium text-uppercase text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                            <div>
                              <div className="post-category hstack gap-narrow fw-semibold">
                                <SiteLink className="text-none text-primary dark:text-primary-400" href="/blog-category">
                                  {"Esports"}
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
                            <SiteLink className="text-none hover:text-primary duration-150" href="/blog/smart-homes-smarter-living-exploring-iot-and-ai">
                              {"Smart Homes, Smarter Living: Exploring IoT and AI"}
                            </SiteLink>
                          </h3>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </li>
              <li>
                <a href="#">
                  <i className="icon-2 fw-medium unicon-overflow-menu-horizontal"></i>
                </a>
                <div className="uc-navbar-dropdown ft-primary text-unset p-3 rounded-0 hide-scrollbar" data-uc-drop=" offset: 0; boundary: !.uc-navbar; stretch: x; animation: uc-animation-slide-top-small; duration: 150;">
                  <div className="row child-cols g-4">
                    <div>
                      <div className="row child-cols g-4">
                        <div>
                          <ul className="uc-nav uc-navbar-dropdown-nav">
                            <li className="uc-nav-header text-uppercase mb-1">
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
                              <SiteLink href="/">
                                {"Sports"}
                              </SiteLink>
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
                            <li className="uc-nav-header text-uppercase mb-1">
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
                            <li className="uc-nav-header text-uppercase mb-1">
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
                            <li className="uc-nav-header text-uppercase mb-1">
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
            <div className="uc-navbar-item">
              <a className="uc-cart-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-cart-panel" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-shopping-cart"></i>
                <span className="cstack w-20px h-20px rounded-circle bg-primary text-white" style={{"fontSize":"12px"} as React.CSSProperties}>
                  {"0"}
                </span>
              </a>
            </div>
            <div className="uc-navbar-item d-none lg:d-inline-flex">
              <a className="uc-account-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-account-modal" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-user-avatar"></i>
              </a>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-search-trigger icon-2 cstack text-none text-dark dark:text-white" href="#uc-search-modal" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-search"></i>
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
