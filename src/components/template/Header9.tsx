import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";

export default function Header9() {
  return (
    <header className="uc-header header-three uc-navbar-sticky-wrap z-999" data-uc-sticky="sel-target: .uc-navbar-container; cls-active: uc-navbar-sticky; cls-inactive: uc-navbar-transparent; end: !*;">
  <nav className="uc-navbar-container fs-6 z-1">
    <div className="uc-top-navbar panel z-3 min-h-32px lg:min-h-48px mx-2 rounded-bottom overflow-hidden bg-gray-800 text-white uc-dark d-none md:d-block" data-uc-navbar=" animation: uc-animation-slide-top-small; duration: 150;">
      <div className="position-cover blend-color" data-src="/assets/images/demo-three/topbar-abstract.jpg" data-uc-img=""></div>
      <div className="container max-w-xl">
        <div className="hstack panel z-1">
          <div className="uc-navbar-left gap-2 lg:gap-3">
            <div className="trending-ticker panel swiper-parent max-w-600px">
              <div className="swiper hstack gap-1 min-h-40px" data-uc-swiper="items: 1; autoplay: 3000; parallax: true; pause-mouse: false; reverse: false; prev: .swiper-prev; next: .swiper-next; effect: fade; fade: true;">
                <div className="hstack gap-narrow">
                  <i className="icon-1 unicon-fire text-warning"></i>
                  <span className="fs-6 fw-bold dark:text-white">
                    {"Trending:"}
                  </span>
                </div>
                <div className="swiper-wrapper">
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <h6 className="post-title fs-6 ft-primary fw-medium m-0 opacity-75 dark:text-white" data-swiper-parallax-y="-24">
                        <SiteLink className="text-none" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                          {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                        </SiteLink>
                      </h6>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <h6 className="post-title fs-6 ft-primary fw-medium m-0 opacity-75 dark:text-white" data-swiper-parallax-y="-24">
                        <SiteLink className="text-none" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                          {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                        </SiteLink>
                      </h6>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <h6 className="post-title fs-6 ft-primary fw-medium m-0 opacity-75 dark:text-white" data-swiper-parallax-y="-24">
                        <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                          {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                        </SiteLink>
                      </h6>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <h6 className="post-title fs-6 ft-primary fw-medium m-0 opacity-75 dark:text-white" data-swiper-parallax-y="-24">
                        <SiteLink className="text-none" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                          {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                        </SiteLink>
                      </h6>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <h6 className="post-title fs-6 ft-primary fw-medium m-0 opacity-75 dark:text-white" data-swiper-parallax-y="-24">
                        <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                          {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                        </SiteLink>
                      </h6>
                    </article>
                  </div>
                  <div className="swiper-slide">
                    <article className="post type-post">
                      <h6 className="post-title fs-6 ft-primary fw-medium m-0 opacity-75 dark:text-white" data-swiper-parallax-y="-24">
                        <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                          {"Business Agility the Digital Age: Leveraging AI and Automation"}
                        </SiteLink>
                      </h6>
                    </article>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="uc-navbar-right gap-2 lg:gap-3">
            <div className="uc-navbar-item">
              <ul className="uc-social-header nav-x gap-1 d-none lg:d-flex dark:text-white">
                <li>
                  <a href="#tw" className="w-32px h-32px cstack border rounded-circle hover:bg-primary transition-colors duration-200">
                    <i className="icon icon-1 unicon-logo-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="#in" className="w-32px h-32px cstack border rounded-circle hover:bg-primary transition-colors duration-200">
                    <i className="icon icon-1 unicon-logo-x"></i>
                  </a>
                </li>
                <li>
                  <a href="#yt" className="w-32px h-32px cstack border rounded-circle hover:bg-primary transition-colors duration-200">
                    <i className="icon icon-1 unicon-logo-instagram"></i>
                  </a>
                </li>
              </ul>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-account-trigger btn btn-sm border-0 p-0 duration-0 dark:text-white" href="#uc-newsletter-modal" data-uc-toggle="">
                <i className="icon icon-2 fw-medium unicon-email"></i>
              </a>
            </div>
            <div className="uc-navbar-item">
              <a className="uc-search-trigger icon-2 cstack text-none text-dark dark:text-white" href="#uc-search-modal" data-uc-toggle="">
                <i className="icon icon-2 fw-bold unicon-search"></i>
              </a>
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
            <div className="uc-logo d-none md:d-block text-dark dark:text-white">
              <SiteLink href="/">
                <img className="w-80px text-dark dark:text-white" src="/assets/images/demo-three/common/logo.svg" alt="News5" data-uc-svg="" />
              </SiteLink>
            </div>
            <ul className="uc-navbar-nav gap-3 ft-tertiary fs-5 fw-medium ms-4 d-none lg:d-flex" style={{"--uc-nav-height":"80px"} as React.CSSProperties}>
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                              </div>
                              <div className="post-header panel vstack gap-narrow">
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
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
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
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
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
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
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
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
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
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                          </div>
                          <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                        </div>
                        <div className="post-header panel vstack gap-narrow">
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
                              <SiteLink href="/">
                                {"Tech"}
                              </SiteLink>
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
                          <a className="position-cover" href="https://themeforest.net/user/reacthemes/portfolio" target="_blank"></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div className="uc-navbar-center">
            <div className="uc-logo d-block md:d-none text-dark dark:text-white">
              <SiteLink href="/">
                <img className="w-80px text-dark dark:text-white" src="/assets/images/demo-three/common/logo.svg" alt="News5" data-uc-svg="" />
              </SiteLink>
            </div>
          </div>
          <div className="uc-navbar-right">
            <div className="uc-navbar-item">
              <a className="uc-cart-trigger position-relative btn btn-sm border-0 p-0 gap-narrow duration-0 dark:text-white" href="#uc-cart-panel" data-uc-toggle="">
                <i className="icon icon-3 unicon-shopping-basket"></i>
                <span className="position-absolute top-50 start-50 translate-middle cstack w-20px h-20px" style={{"fontSize":"12px","marginTop":"2px"} as React.CSSProperties}>
                  {"0"}
                </span>
              </a>
            </div>
            <button type="button" className="btn btn-sm btn-alt-primary bg-transparent text-gray-900 dark:text-white border shadow-xs text-none d-none lg:d-inline-flex" data-uc-toggle="target: #uc-account-modal">
              <i className="icon icon-narrow unicon-user-filled"></i>
              <span>
                {"Sign in"}
              </span>
            </button>
            <div className="uc-navbar-item">
              <div className="uc-modes-trigger icon-2 text-dark dark:text-white" data-darkmode-toggle="">
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
  </nav>
</header>
  );
}
