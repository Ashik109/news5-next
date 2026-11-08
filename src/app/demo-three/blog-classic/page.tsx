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

export const metadata: Metadata = { title: "Archive - Classic Layout - News5" };

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
  <div className="breadcrumbs panel z-1 py-2 bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white">
    <div className="container max-w-xl">
      <ul className="breadcrumb nav-x justify-center gap-1 fs-7 sm:fs-6 m-0">
        <li>
          <SiteLink href="/">
            {"Home"}
          </SiteLink>
        </li>
        <li>
          <i className="unicon-chevron-right opacity-50"></i>
        </li>
        <li>
          <SiteLink href="/blog">
            {"Blog"}
          </SiteLink>
        </li>
        <li>
          <i className="unicon-chevron-right opacity-50"></i>
        </li>
        <li>
          <span className="opacity-50">
            {"Archive - Classic Layout"}
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel py-6 lg:py-9">
      <div className="container max-w-lg">
        <div className="section-inner panel vstack gap-3 sm:gap-6 lg:gap-9">
          <header className="page-header vstack justify-center items-center gap-2 md:gap-4 text-center max-w-650px mx-auto">
            <h1 className="h3 md:h2 m-0">
              {"Archive - Classic Layout"}
            </h1>
          </header>
          <div className="row child-cols-12 sm:child-cols-4 col-match gy-4 gx-2 xl:gx-4">
            <div className="col-12">
              <article className="post type-post panel rounded p-2 md:p-4 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-10">
                <div className="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                  <div className="sm:col-4 md:col-6 lg:col-4">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"></SiteLink>
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="vstack items-start gap-2 md:gap-3">
                      <h3 className="h4 sm:h5 md:h4 lg:h3 m-0 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                        </SiteLink>
                      </h3>
                      <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Mar 7, 2024"}
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
                          <div className="hstack gap-1">
                            <div className="cstack w-16px h-16px">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fs-6 md:fs-5 d-none md:d-block">
                        {"Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets."}
                      </p>
                      <SiteLink className="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block" href="/blog-details">
                        {"Continue reading"}
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12">
              <article className="post type-post panel rounded p-2 md:p-4 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-10">
                <div className="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                  <div className="sm:col-4 md:col-6 lg:col-4">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Business Agility the Digital Age: Leveraging AI and Automation"></SiteLink>
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="vstack items-start gap-2 md:gap-3">
                      <h3 className="h4 sm:h5 md:h4 lg:h3 m-0 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Business Agility the Digital Age: Leveraging AI and Automation"}
                        </SiteLink>
                      </h3>
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
                                  {"Mar 1, 2024"}
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
                          <div className="hstack gap-1">
                            <div className="cstack w-16px h-16px">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fs-6 md:fs-5 d-none md:d-block">
                        {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                      </p>
                      <SiteLink className="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block" href="/blog-details">
                        {"Continue reading"}
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12">
              <article className="post type-post panel rounded p-2 md:p-4 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-10">
                <div className="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                  <div className="sm:col-4 md:col-6 lg:col-4">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="The Art of Baking: From Classic Bread to Artisan Pastries"></SiteLink>
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="vstack items-start gap-2 md:gap-3">
                      <h3 className="h4 sm:h5 md:h4 lg:h3 m-0 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                        </SiteLink>
                      </h3>
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
                                  {"Feb 28, 2024"}
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
                          <div className="hstack gap-1">
                            <div className="cstack w-16px h-16px">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fs-6 md:fs-5 d-none md:d-block">
                        {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                      </p>
                      <SiteLink className="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block" href="/blog-details">
                        {"Continue reading"}
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12">
              <article className="post type-post panel rounded p-2 md:p-4 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-10">
                <div className="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                  <div className="sm:col-4 md:col-6 lg:col-4">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="AI and Marketing: Unlocking Customer Insights"></SiteLink>
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="vstack items-start gap-2 md:gap-3">
                      <h3 className="h4 sm:h5 md:h4 lg:h3 m-0 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"AI and Marketing: Unlocking Customer Insights"}
                        </SiteLink>
                      </h3>
                      <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
                        <div className="meta">
                          <div className="hstack gap-2">
                            <div>
                              <div className="post-author hstack gap-1">
                                <SiteLink href="/blog-author" data-uc-tooltip="Rico Santos">
                                  <img src="/assets/images/avatars/07.png" alt="Rico Santos" className="w-24px h-24px rounded-circle" />
                                </SiteLink>
                                <SiteLink href="/blog-author" className="text-black dark:text-white text-none fw-bold">
                                  {"Rico Santos"}
                                </SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Feb 22, 2024"}
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
                          <div className="hstack gap-1">
                            <div className="cstack w-16px h-16px">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fs-6 md:fs-5 d-none md:d-block">
                        {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                      </p>
                      <SiteLink className="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block" href="/blog-details">
                        {"Continue reading"}
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12">
              <article className="post type-post panel rounded p-2 md:p-4 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-10">
                <div className="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                  <div className="sm:col-4 md:col-6 lg:col-4">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Hidden Gems: Underrated Travel Destinations Around the World"></SiteLink>
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="vstack items-start gap-2 md:gap-3">
                      <h3 className="h4 sm:h5 md:h4 lg:h3 m-0 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Hidden Gems: Underrated Travel Destinations Around the World"}
                        </SiteLink>
                      </h3>
                      <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Feb 14, 2024"}
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
                          <div className="hstack gap-1">
                            <div className="cstack w-16px h-16px">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fs-6 md:fs-5 d-none md:d-block">
                        {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                      </p>
                      <SiteLink className="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block" href="/blog-details">
                        {"Continue reading"}
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12">
              <article className="post type-post panel rounded p-2 md:p-4 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-10">
                <div className="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                  <div className="sm:col-4 md:col-6 lg:col-4">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Eco-Tourism: Traveling Responsibly and Sustainably"></SiteLink>
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="vstack items-start gap-2 md:gap-3">
                      <h3 className="h4 sm:h5 md:h4 lg:h3 m-0 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                        </SiteLink>
                      </h3>
                      <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Feb 8, 2024"}
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
                          <div className="hstack gap-1">
                            <div className="cstack w-16px h-16px">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fs-6 md:fs-5 d-none md:d-block">
                        {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                      </p>
                      <SiteLink className="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block" href="/blog-details">
                        {"Continue reading"}
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>
            <div className="col-12">
              <article className="post type-post panel rounded p-2 md:p-4 bg-gray-25 dark:bg-gray-300 dark:bg-opacity-10">
                <div className="panel row child-cols-12 sm:child-cols items-center g-3 md:g-4">
                  <div className="sm:col-4 md:col-6 lg:col-4">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-three/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                        <SiteLink href="/blog-details" className="position-cover" data-caption="Solo Travel: Some Tips and Destinations for the Adventurous Explorer"></SiteLink>
                      </figure>
                    </div>
                  </div>
                  <div>
                    <div className="vstack items-start gap-2 md:gap-3">
                      <h3 className="h4 sm:h5 md:h4 lg:h3 m-0 m-0">
                        <SiteLink className="text-none" href="/blog-details">
                          {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                        </SiteLink>
                      </h3>
                      <div className="post-meta panel hstack justify-between fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex">
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
                              <div className="post-date hstack gap-narrow">
                                <span>
                                  {"Jan 8, 2024"}
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
                        <div className="actions">
                          <div className="hstack gap-1">
                            <div className="cstack w-16px h-16px">
                              <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                                <i className="icon-narrow unicon-bookmark-add"></i>
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                      <p className="fs-6 md:fs-5 d-none md:d-block">
                        {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                      </p>
                      <SiteLink className="btn btn-text text-primary border-bottom d-inline-flex fs-7 md:fs-6 my-1 md:my-2 d-none md:d-block" href="/blog-details">
                        {"Continue reading"}
                      </SiteLink>
                    </div>
                  </div>
                </div>
              </article>
            </div>
          </div>
          <div className="nav-pagination fw-medium">
            <ul className="nav-x uc-pagination hstack gap-1 justify-center ft-secondary" data-uc-margin="">
              <li>
                <a href="#">
                  <span className="icon icon-1 unicon-chevron-left"></span>
                </a>
              </li>
              <li>
                <a href="#">
                  {"1"}
                </a>
              </li>
              <li>
                <a href="#" className="uc-active">
                  {"2"}
                </a>
              </li>
              <li>
                <a href="#">
                  {"3"}
                </a>
              </li>
              <li className="uc-disabled">
                <span>
                  {"…"}
                </span>
              </li>
              <li>
                <a href="#">
                  {"8"}
                </a>
              </li>
              <li>
                <a href="#">
                  {"9"}
                </a>
              </li>
              <li>
                <a href="#">
                  <span className="icon icon-1 unicon-chevron-right"></span>
                </a>
              </li>
            </ul>
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
