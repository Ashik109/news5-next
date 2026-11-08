import Link from "next/link";
import { SiteLink } from "@/components/DemoContext";

export default function Header11() {
  return (
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-21.jpg" alt="How Businesses Are Adapting to E-Commerce and AI Integration" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-22.jpg" alt="Technology: Wearables, AR, and AI in the Apparel Industry" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
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
                            <article className="post type-post panel vstack gap-1">
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
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
                            <article className="post type-post panel vstack gap-1">
                              <div className="post-media panel overflow-hidden">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                  <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
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
                      <article className="post type-post panel vstack gap-1">
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-19.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
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
                      <article className="post type-post panel vstack gap-1">
                        <div className="post-media panel overflow-hidden">
                          <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                            <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/posts/img-20.jpg" alt="Smart Homes, Smarter Living: Exploring IoT and AI" data-uc-img="loading: lazy" />
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
  );
}
