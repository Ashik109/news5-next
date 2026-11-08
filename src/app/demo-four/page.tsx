import type { Metadata } from "next";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu4 from "@/components/template/MobileMenu4";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal4 from "@/components/template/NewsletterModal4";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header4 from "@/components/template/Header4";

export const metadata: Metadata = { title: "News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-four" theme="/assets/css/theme/demo-four.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu4 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal4 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header4 />
<div id="wrapper" className="wrap overflow-hidden-x">
  <div className="slider-panel panel overflow-hidden swiper-parent">
    <div className="container max-w-lg">
      <div className="panel w-100">
        <div className="swiper swiper-main swiper-active-visibility h-100" data-uc-swiper="items: 1.25; active: 2; gap: 8; center: true; center-bounds: true; disable-class: d-none;" data-uc-swiper-s="items: 2;" data-uc-swiper-l="items: 3; gap: 32;">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover" data-caption="The Importance of Sleep: Tips for Better Rest and Recovery"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Fashion"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                      {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover" data-caption="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Life Style"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                      {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover" data-caption="Business Agility the Digital Age: Leveraging AI and Automation"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Family"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                      {"Business Agility the Digital Age: Leveraging AI and Automation"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover" data-caption="The Art of Baking: From Classic Bread to Artisan Pastries"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Life Style"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                      {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover" data-caption="AI and Marketing: Unlocking Customer Insights"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Fashion"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
                      {"AI and Marketing: Unlocking Customer Insights"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover" data-caption="Hidden Gems: Underrated Travel Destinations Around the World"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Photography"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                      {"Hidden Gems: Underrated Travel Destinations Around the World"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover" data-caption="Eco-Tourism: Traveling Responsibly and Sustainably"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Fashion"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                      {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover" data-caption="Solo Travel: Some Tips and Destinations for the Adventurous Explorer"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Fashion"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                      {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover" data-caption="AI-Powered Financial Planning: How Algorithms Revolutionizing"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Fashion"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                      {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover" data-caption="Tech Tools for your Time Management: Enhancing Productivity"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Men"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                      {"Tech Tools for your Time Management: Enhancing Productivity"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover" data-caption="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Life Style"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                      {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
            <div className="swiper-slide">
              <article className="post type-post panel uc-transition-toggle vstack gap-2 lg:gap-3">
                <figure className="featured-image m-0 ratio ratio-1x1 overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover" data-caption="Gaming in the Age of AI: Strategies for Startups"></SiteLink>
                </figure>
                <div className="post-header panel vstack justify-center items-center gap-narrow text-center max-w-3/4 mx-auto">
                  <div className="post-category hstack gap-narrow justify-center fw-normal">
                    <SiteLink className="fs-7 text-uppercase text-black dark:text-white text-opacity-50 hover:text-opacity-100 duration-150 text-none" href="/blog-category">
                      {"Life Style"}
                    </SiteLink>
                  </div>
                  <h3 className="h5 m-0">
                    <SiteLink className="text-none" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                      {"Gaming in the Age of AI: Strategies for Startups"}
                    </SiteLink>
                  </h3>
                  <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="link fs-7 text-uppercase text-none mt-1 pb-narrow p-0 border-bottom dark:text-white">
                    <span>
                      {"Read more"}
                    </span>
                  </SiteLink>
                </div>
              </article>
            </div>
          </div>
        </div>
        <div className="swiper-nav swiper-next btn btn-xs md:btn-md p-0 w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white dark:bg-gray-900 text-dark dark:text-white rounded-circle shadow-sm position-absolute top-50 start-100 translate-middle mt-n7 xl:mt-n9 z-1">
          <i className="unicon-chevron-right icon-1 md:icon-2"></i>
        </div>
        <div className="swiper-nav swiper-prev btn btn-xs md:btn-md p-0 w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white dark:bg-gray-900 text-dark dark:text-white rounded-circle shadow-sm position-absolute top-50 start-0 translate-middle mt-n7 xl:mt-n9 z-1">
          <i className="unicon-chevron-left icon-1 md:icon-2"></i>
        </div>
      </div>
    </div>
  </div>
  <div className="image-links-panel panel mt-5 lg:mt-8">
    <div className="container max-w-lg">
      <div className="panel">
        <div className="image-links row child-cols-12 sm:child-cols-6 col-match g-0 lg:g-4">
          <div>
            <div className="image-link-item panel bg-primary-50 dark:bg-gray-900 dark:text-white">
              <div className="row child-cols g-0 col-match">
                <div className="md:col-5">
                  <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/common/image-link-1.jpg" alt="My story" data-uc-img="loading: lazy" />
                    <SiteLink href="/blog-author" className="position-cover" data-caption="My story"></SiteLink>
                  </figure>
                </div>
                <div>
                  <div className="content vstack items-start justify-between p-2 lg:p-3">
                    <div className="heading">
                      <h4 className="h5 lg:h4">
                        {"Who Am I"}
                      </h4>
                      <p>
                        {"Get to know the full story behind the blog."}
                      </p>
                    </div>
                    <SiteLink className="uc-link fs-6 text-underline" href="/blog-author">
                      {"Read more"}
                    </SiteLink>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="image-link-item panel bg-primary-50 dark:bg-gray-900 dark:text-white">
              <div className="row child-cols g-0 col-match">
                <div className="md:col-5 order-1">
                  <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/common/image-link-2.jpg" alt="My Store" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop" className="position-cover" data-caption="My Store"></SiteLink>
                  </figure>
                </div>
                <div className="order-0 lg:order-2">
                  <div className="content vstack items-start justify-between p-2 lg:p-3">
                    <div className="heading">
                      <h4 className="h5 lg:h4">
                        {"My Store"}
                      </h4>
                      <p>
                        {"Check out my last drops and exclusive products."}
                      </p>
                    </div>
                    <SiteLink className="uc-link fs-6 text-underline" href="/shop">
                      {"Shop now"}
                    </SiteLink>
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
    <div className="section-outer panel py-5 lg:py-8">
      <div className="container max-w-lg">
        <div className="section-inner">
          <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
            <div className="block-header panel border-top pt-1">
              <h2 className="h4 xl:h3 -ls-1 xl:-ls-2 m-0 text-inherit hstack gap-1">
                <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                  {"Fashion"}
                </SiteLink>
              </h2>
            </div>
            <div className="block-content">
              <div className="panel row child-cols-12 md:child-cols gy-4 md:gx-3 xl:gx-4">
                <div className="col-12 md:col-6">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Fashion"}
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
                        <h3 className="post-title h5 lg:h4 m-0 text-truncate-2">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                            {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                          </SiteLink>
                        </h3>
                        <p className="fs-6 opacity-60 text-truncate-2 my-1">
                          {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                        </p>
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
                            </div>
                          </div>
                          <div className="actions">
                            <div className="hstack gap-1"></div>
                          </div>
                        </div>
                      </div>
                    </article>
                  </div>
                </div>
                <div>
                  <div className="row child-cols-12 g-4 sep-x">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Fashion"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                  {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Life Style"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                  {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Fashion"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                  {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Fashion"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                  {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                  <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent dark:text-white border w-100 mt-4">
                    <span>
                      {"See all Fashion"}
                    </span>
                    <i className="icon icon-1 unicon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent">
    <div className="section-outer panel py-5 lg:py-8 bg-primary-50 dark:bg-gray-900 dark:text-white">
      <div className="container max-w-lg">
        <div className="section-inner panel vstack gap-5 lg:gap-6">
          <div className="section-header panel">
            <h2 className="h4 xl:h3 -ls-1 xl:-ls-2 m-0 text-inherit hstack justify-center gap-1 text-center">
              <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                {"Most Popular"}
              </SiteLink>
            </h2>
          </div>
          <div className="section-content">
            <div className="swiper" data-uc-swiper="items: 2; gap: 16; autoplay: 2500; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: opacity-40;" data-uc-swiper-s="items: 3;" data-uc-swiper-m="gap: 24;" data-uc-swiper-l="items: 3; gap: 32;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Men"}
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
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                            {"Tech Tools for your Time Management: Enhancing Productivity"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Life Style"}
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
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                            {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Life Style"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"9mo ago"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                            {"Gaming in the Age of AI: Strategies for Startups"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Life Style"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"1yr ago"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                            {"Top Independent Contractors to Invest in Best of Startups"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Fashion"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"1yr ago"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/potential-of-immersive-technologies-help-your-business-grow">
                            {"Potential of Immersive Technologies help your Business Grow"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Life Style"}
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
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                            {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="hstack justify-center gap-1 mt-5 lg:mt-6">
                <div className="swiper-nav nav-prev btn btn-alt-primary bg-transparent dark:text-white rounded-0 p-0 border w-32px lg:w-40px h-32px lg:h-40px">
                  <i className="icon-1 unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next btn btn-alt-primary bg-transparent dark:text-white rounded-0 p-0 border w-32px lg:w-40px h-32px lg:h-40px">
                  <i className="icon-1 unicon-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden">
    <div className="section-outer panel py-5 lg:py-8">
      <div className="container max-w-lg">
        <div className="section-inner">
          <div className="row child-cols-12 lg:child-cols-6 g-4" data-uc-grid="">
            <div>
              <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
                <div className="block-header panel border-top pt-1">
                  <h2 className="h4 xl:h3 -ls-1 xl:-ls-2 m-0 text-inherit hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                      {"Life Style"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-4 sep-x">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Life Style"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                  {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Family"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                  {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Life Style"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                  {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Fashion"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                  {"AI and Marketing: Unlocking Customer Insights"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="block-footer cstack lg:mt-2">
                  <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent dark:text-white border w-100 md:w-auto">
                    <span>
                      {"See all Life Style"}
                    </span>
                    <i className="icon icon-1 unicon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
            <div>
              <div className="block-layout grid-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
                <div className="block-header panel border-top pt-1">
                  <h2 className="h4 xl:h3 -ls-1 xl:-ls-2 m-0 text-inherit hstack gap-1">
                    <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                    <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                      {"Travel"}
                    </SiteLink>
                  </h2>
                </div>
                <div className="block-content">
                  <div className="row child-cols-12 g-4 sep-x">
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Fashion"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                  {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Fashion"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                  {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Men"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
                                <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                                  {"Tech Tools for your Time Management: Enhancing Productivity"}
                                </SiteLink>
                              </h3>
                            </div>
                          </div>
                        </div>
                      </article>
                    </div>
                    <div>
                      <article className="post type-post panel uc-transition-toggle">
                        <div className="row child-cols g-2" data-uc-grid="">
                          <div className="col-auto">
                            <div className="post-media panel overflow-hidden max-w-150px min-w-100px lg:min-w-150px">
                              <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                              </div>
                              <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                            </div>
                          </div>
                          <div>
                            <div className="post-header panel vstack justify-between gap-1">
                              <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                <div>
                                  <div className="post-category hstack gap-narrow fw-medium">
                                    <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                      {"Life Style"}
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
                              </div>
                              <h3 className="post-title h6 lg:h5 m-0 text-truncate-2">
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
                </div>
                <div className="block-footer cstack lg:mt-2">
                  <a href="#" className="animate-btn gap-0 btn btn-sm btn-alt-primary bg-transparent dark:text-white border w-100 md:w-auto">
                    <span>
                      {"See all Travel"}
                    </span>
                    <i className="icon icon-1 unicon-chevron-right"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="section panel overflow-hidden swiper-parent uc-dark">
    <div className="section-outer panel py-5 lg:py-8 bg-primary-50 dark:bg-gray-900 dark:text-white">
      <div className="container max-w-lg">
        <div className="section-inner panel vstack gap-5 lg:gap-6">
          <div className="section-header panel">
            <h2 className="h4 xl:h3 -ls-1 xl:-ls-2 m-0 text-inherit hstack justify-center gap-1 text-center">
              <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
              <SiteLink className="text-none hover:text-primary duration-150" href="/blog-category">
                {"Hand-picked by me"}
              </SiteLink>
            </h2>
          </div>
          <div className="section-content">
            <div className="swiper" data-uc-swiper="items: 2; gap: 16; autoplay: 2500; dots: .dot-nav; next: .nav-next; prev: .nav-prev; disable-class: opacity-40;" data-uc-swiper-s="items: 3;" data-uc-swiper-m="gap: 24;" data-uc-swiper-l="items: 3; gap: 32;">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-13.jpg" alt="Tech Tools for your Time Management: Enhancing Productivity" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/tech-tools-for-your-time-management-enhancing-productivity" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Men"}
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
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/tech-tools-for-your-time-management-enhancing-productivity">
                            {"Tech Tools for your Time Management: Enhancing Productivity"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-14.jpg" alt="A Guide to The Rise of Gourmet Street Food: Trends and Top Picks" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Life Style"}
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
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/a-guide-to-the-rise-of-gourmet-street-food-trends-and-top-picks">
                            {"A Guide to The Rise of Gourmet Street Food: Trends and Top Picks"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-15.jpg" alt="Gaming in the Age of AI: Strategies for Startups" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/gaming-in-the-age-of-ai-strategies-for-startups" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Life Style"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"9mo ago"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/gaming-in-the-age-of-ai-strategies-for-startups">
                            {"Gaming in the Age of AI: Strategies for Startups"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-16.jpg" alt="Top Independent Contractors to Invest in Best of Startups" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/top-independent-contractors-to-invest-in-best-of-startups" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Life Style"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"1yr ago"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/top-independent-contractors-to-invest-in-best-of-startups">
                            {"Top Independent Contractors to Invest in Best of Startups"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-17.jpg" alt="Potential of Immersive Technologies help your Business Grow" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/potential-of-immersive-technologies-help-your-business-grow" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Fashion"}
                              </SiteLink>
                            </div>
                          </div>
                          <div className="sep d-none md:d-block">
                            {"❘"}
                          </div>
                          <div className="d-none md:d-block">
                            <div className="post-date hstack gap-narrow">
                              <span>
                                {"1yr ago"}
                              </span>
                            </div>
                          </div>
                          <div className="cstack w-16px h-16px ms-narrow d-none md:d-inline-flex position-absolute top-0 end-0">
                            <a href="#" className="uc-bookmark-toggle w-16px h-16px text-none" data-uc-tooltip="Add to bookmark">
                              <i className="icon-narrow unicon-bookmark-add"></i>
                            </a>
                          </div>
                        </div>
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/potential-of-immersive-technologies-help-your-business-grow">
                            {"Potential of Immersive Technologies help your Business Grow"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div>
                    <article className="post type-post panel uc-transition-toggle vstack gap-1 lg:gap-2">
                      <div className="post-media panel overflow-hidden">
                        <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-16x9">
                          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-18.jpg" alt="Virtual Reality and Mental Health: Exploring the Therapeutic" data-uc-img="loading: lazy" />
                        </div>
                        <SiteLink href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic" className="position-cover"></SiteLink>
                      </div>
                      <div className="post-header panel vstack gap-1">
                        <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                          <div>
                            <div className="post-category hstack gap-narrow fw-medium">
                              <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                {"Life Style"}
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
                        <h3 className="post-title h6 lg:h5 m-0 text-truncate-2 mb-1">
                          <SiteLink className="text-none hover:text-primary duration-150" href="/blog/virtual-reality-and-mental-health-exploring-the-therapeutic">
                            {"Virtual Reality and Mental Health: Exploring the Therapeutic"}
                          </SiteLink>
                        </h3>
                      </div>
                    </article>
                  </div>
                </div>
              </div>
              <div className="hstack justify-center gap-1 mt-5 lg:mt-6">
                <div className="swiper-nav nav-prev btn btn-alt-primary bg-transparent dark:text-white rounded-0 p-0 border w-32px lg:w-40px h-32px lg:h-40px">
                  <i className="icon-1 unicon-chevron-left"></i>
                </div>
                <div className="swiper-nav nav-next btn btn-alt-primary bg-transparent dark:text-white rounded-0 p-0 border w-32px lg:w-40px h-32px lg:h-40px">
                  <i className="icon-1 unicon-chevron-right"></i>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div id="latest_news" className="latest-news section panel">
    <div className="section-outer panel pt-5 lg:pt-8">
      <div className="container max-w-lg">
        <div className="section-inner">
          <div className="content-wrap row child-cols-12 md:child-cols g-4" data-uc-grid="">
            <div>
              <div className="main-wrap panel vstack gap-3 lg:gap-6">
                <div className="block-layout list-layout vstack gap-3 lg:gap-4 panel overflow-hidden">
                  <div className="block-header panel border-top pt-1">
                    <h2 className="h4 xl:h3 -ls-1 xl:-ls-2 m-0 text-inherit hstack gap-1">
                      <span className="panel d-inline-block bg-primary w-8px h-8px translate-y-px"></span>
                      <span>
                        {"Latest Articles"}
                      </span>
                    </h2>
                  </div>
                  <div className="block-content">
                    <div className="row child-cols-12 gy-2 sm:gy-4">
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Fashion"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage">
                                      {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"Law enforcement officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Life Style"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments">
                                      {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"Officers have been accused of sexually abusing children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-03.jpg" alt="Balancing Work and Wellness: Tech Solutions for Healthy" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Fashion"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy">
                                      {"Balancing Work and Wellness: Tech Solutions for Healthy"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"Children over the past two decades, a Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/balancing-work-and-wellness-tech-solutions-for-healthy" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-04.jpg" alt="The Importance of Sleep: Tips for Better Rest and Recovery" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Fashion"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery">
                                      {"The Importance of Sleep: Tips for Better Rest and Recovery"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"Post investigation found. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/the-importance-of-sleep-tips-for-better-rest-and-recovery" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-05.jpg" alt="The Future of Sustainable Living: Driving Eco-Friendly Lifestyles" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Life Style"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles">
                                      {"The Future of Sustainable Living: Driving Eco-Friendly Lifestyles"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/the-future-of-sustainable-living-driving-eco-friendly-lifestyles" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-06.jpg" alt="Business Agility the Digital Age: Leveraging AI and Automation" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Family"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation">
                                      {"Business Agility the Digital Age: Leveraging AI and Automation"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/business-agility-the-digital-age-leveraging-ai-and-automation" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Life Style"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                                      {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Fashion"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
                                      {"AI and Marketing: Unlocking Customer Insights"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Photography"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                                      {"Hidden Gems: Underrated Travel Destinations Around the World"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Fashion"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                                      {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-11.jpg" alt="Solo Travel: Some Tips and Destinations for the Adventurous Explorer" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Fashion"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer">
                                      {"Solo Travel: Some Tips and Destinations for the Adventurous Explorer"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/solo-travel-some-tips-and-destinations-for-the-adventurous-explorer" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                      <div>
                        <article className="post type-post panel uc-transition-toggle overflow-hidden">
                          <div className="row child-cols g-0">
                            <div className="col-12 md:col-auto">
                              <div className="post-media panel overflow-hidden max-w-100 min-w-100 md:min-w-250px">
                                <div className="featured-image bg-gray-25 dark:bg-gray-800 ratio ratio-1x1">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/img-12.jpg" alt="AI-Powered Financial Planning: How Algorithms Revolutionizing" data-uc-img="loading: lazy" />
                                </div>
                                <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="position-cover"></SiteLink>
                              </div>
                            </div>
                            <div>
                              <div className="post-header panel vstack gap-2 p-2 lg:p-3">
                                <div className="post-top panel vstack items-start gap-1 xl:gap-2">
                                  <div className="post-meta panel hstack justify-start gap-1 fs-7 fw-medium text-gray-900 dark:text-white text-opacity-60 d-none md:d-flex z-1">
                                    <div>
                                      <div className="post-category hstack gap-narrow fw-medium">
                                        <SiteLink className="text-none text-primary dark:text-white" href="/blog-category">
                                          {"Fashion"}
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
                                  </div>
                                  <h3 className="post-title h5 md:h4 m-0 text-truncate-2">
                                    <SiteLink className="text-none" href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing">
                                      {"AI-Powered Financial Planning: How Algorithms Revolutionizing"}
                                    </SiteLink>
                                  </h3>
                                  <p className="fs-6 text-truncate-3 text-dark dark:text-white text-opacity-75">
                                    {"To spread the word, the company embarked on a mass marketing drive. TV campaigns launched in the platform’s key markets. Nisi dignissim tortor sed quam sed ipsum ut. Dolor sit amet, consectetur adipiscing elit."}
                                  </p>
                                </div>
                                <div className="post-bottom">
                                  <SiteLink href="/blog/ai-powered-financial-planning-how-algorithms-revolutionizing" className="uc-link fs-6 text-underline">
                                    <span>
                                      {"Read more"}
                                    </span>
                                  </SiteLink>
                                </div>
                              </div>
                            </div>
                          </div>
                        </article>
                      </div>
                    </div>
                  </div>
                  <div className="block-footer cstack">
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
              <div className="sidebar-wrap panel vstack gap-2 md:max-w-250px lg:max-w-300px" data-uc-sticky="end: .content-wrap; offset: 150; media: @m;">
                <div className="widget author-widget vstack gap-3 p-2 lg:p-3 border text-center">
                  <div className="widgt-title">
                    <h4 className="h6 m-0">
                      {"About me"}
                    </h4>
                  </div>
                  <div className="widgt-content">
                    <div className="card-top">
                      <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-four/posts/post-author.jpg" alt="James Doe" data-uc-img="loading: lazy" />
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
                <div className="widget popular-widget vstack gap-3 p-2 lg:p-3 border">
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
                <div className="widget social-widget vstack gap-3 p-2 lg:p-3 border text-center">
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
  <div className="section panel overflow-hidden">
    <div className="section-outer panel dark:text-white">
      <div className="container max-w-lg">
        <div className="section-inner panel vstack gap-2 p-4 lg:p-8">
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
</div>
<footer id="uc-footer" className="uc-footer panel overflow-hidden px-2">
  <div className="instagram-widget panel overflow-hidden">
    <div className="position-absolute bottom-0 w-100 h-1/2 bg-primary-50 dark:bg-gray-900 z-0"></div>
    <div className="container max-w-lg">
      <div className="row child-cols-4 lg:child-cols g-0">
        <div>
          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/insta/img-01.jpg" alt="Image" data-uc-img="loading: lazy" />
            <a href="#" className="position-cover" data-caption="Image"></a>
          </figure>
        </div>
        <div>
          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/insta/img-02.jpg" alt="Image" data-uc-img="loading: lazy" />
            <a href="#" className="position-cover" data-caption="Image"></a>
          </figure>
        </div>
        <div>
          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/insta/img-03.jpg" alt="Image" data-uc-img="loading: lazy" />
            <a href="#" className="position-cover" data-caption="Image"></a>
          </figure>
        </div>
        <div>
          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/insta/img-04.jpg" alt="Image" data-uc-img="loading: lazy" />
            <a href="#" className="position-cover" data-caption="Image"></a>
          </figure>
        </div>
        <div>
          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/insta/img-05.jpg" alt="Image" data-uc-img="loading: lazy" />
            <a href="#" className="position-cover" data-caption="Image"></a>
          </figure>
        </div>
        <div>
          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-ten/insta/img-06.jpg" alt="Image" data-uc-img="loading: lazy" />
            <a href="#" className="position-cover" data-caption="Image"></a>
          </figure>
        </div>
      </div>
    </div>
  </div>
  <div className="footer-outer py-4 lg:py-6 xl:py-9 bg-primary-50 dark:bg-gray-900">
    <div className="container max-w-lg">
      <div className="footer-inner vstack gap-4 justify-center lg:fs-5 text-gray-900 dark:text-white">
        <div className="footer-logo text-center">
          <img className="uc-logo w-100px text-gray-900 dark:text-white" src="/assets/images/demo-four/common/logo.svg" alt="News5" data-uc-svg="" />
        </div>
        <nav className="footer-nav">
          <ul className="nav-x gap-2 lg:gap-3 justify-center text-center fw-medium">
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"Fashion"}
              </SiteLink>
            </li>
            <li className="vr dark:border-gray-200"></li>
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"Life Style"}
              </SiteLink>
            </li>
            <li className="vr dark:border-gray-200"></li>
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"Family"}
              </SiteLink>
            </li>
            <li className="vr dark:border-gray-200"></li>
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"Photography"}
              </SiteLink>
            </li>
            <li className="vr dark:border-gray-200"></li>
            <li>
              <SiteLink className="hover:text-opacity-70 dark:hover:text-white duration-150" href="/blog-category">
                {"Travel"}
              </SiteLink>
            </li>
          </ul>
        </nav>
        <div className="footer-social hstack justify-center gap-2 lg:gap-3">
          <ul className="nav-x gap-2">
            <li>
              <a className="hover:text-gray-900 dark:hover:text-white duration-150" href="#fb">
                <i className="icon icon-2 unicon-logo-facebook"></i>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 dark:hover:text-white duration-150" href="#x">
                <i className="icon icon-2 unicon-logo-x-filled"></i>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 dark:hover:text-white duration-150" href="#in">
                <i className="icon icon-2 unicon-logo-instagram"></i>
              </a>
            </li>
            <li>
              <a className="hover:text-gray-900 dark:hover:text-white duration-150" href="#yt">
                <i className="icon icon-2 unicon-logo-youtube"></i>
              </a>
            </li>
          </ul>
          <div className="vr"></div>
          <div className="d-inline-block">
            <a href="#" className="hstack gap-1 text-none fw-medium">
              <i className="icon icon-1 unicon-earth-filled"></i>
              <span>
                {"English"}
              </span>
              <span data-uc-drop-parent-icon=""></span>
            </a>
            <div className="p-2 bg-white dark:bg-gray-800 shadow-xs w-150px" data-uc-drop="mode: click; boundary: !.uc-footer-bottom; animation: uc-animation-slide-top-small; duration: 150;">
              <ul className="nav-y gap-1 fw-medium items-end">
                <li>
                  <a href="#en">
                    {"English"}
                  </a>
                </li>
                <li>
                  <a href="#ar">
                    {"العربية"}
                  </a>
                </li>
                <li>
                  <a href="#ch">
                    {"中文"}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="footer-copyright vstack sm:hstack justify-center items-center gap-1 lg:gap-2">
          <p>
            {"News5 © 2024, All rights reserved."}
          </p>
          <ul className="nav-x gap-2 fw-medium">
            <li>
              <SiteLink className="uc-link text-underline hover:text-gray-900 dark:hover:text-white duration-150" href="/page-privacy">
                {"Privacy notice"}
              </SiteLink>
            </li>
            <li>
              <SiteLink className="uc-link text-underline hover:text-gray-900 dark:hover:text-white duration-150" href="/page-terms">
                {"Terms of condition"}
              </SiteLink>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</footer>
    </TemplateShell>
  );
}
