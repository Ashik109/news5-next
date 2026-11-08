import type { DetailRecord } from "@/data/details";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu1 from "@/components/template/MobileMenu1";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal1 from "@/components/template/NewsletterModal1";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header1 from "@/components/template/Header1";
import Footer1 from "@/components/template/Footer1";

export default function DetailLayout({ detail }: { detail: DetailRecord }) {
  return (<TemplateShell demo="demo-eight" theme="/assets/css/theme/demo-eight.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu1 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal1 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header1 />
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
          <SiteLink href="/blog-category">
            {detail.category || "Strategy"}
          </SiteLink>
        </li>
        <li>
          <i className="unicon-chevron-right opacity-50"></i>
        </li>
        <li>
          <span className="opacity-50">
            {detail.title}
          </span>
        </li>
      </ul>
    </div>
  </div>
  <article className="post type-post single-post pb-4 lg:pb-6 xl:pb-9">
    <div className="container-full">
      <figure className="featured-image m-0">
        <figure className="featured-image m-0 ratio ratio-2x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
          <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src={detail.image} data-src={detail.image} alt={detail.title} data-uc-img="loading: lazy" />
        </figure>
      </figure>
      <div className="post-content-wrap panel">
        <aside className="post-share-float d-none lg:d-block" data-uc-sticky="bottom: .post-author;">
          <div className="vstack justify-center items-center gap-2 position-absolute top-0 end-0 m-4 xl:m-9">
            <span className="ft-secondary">
              {"Share"}
            </span>
            <ul className="social-icons nav-y justify-center gap-2 text-gray-900 dark:text-white">
              <li>
                <a className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110" href="https://dribbble.com/unistudioinc">
                  <i className="unicon-logo-x-filled icon-1 xl:icon-2"></i>
                </a>
              </li>
              <li>
                <a className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110 text-white bg-primary border-primary" href="https://ui8.net/users/unistudio">
                  <i className="unicon-logo-linkedin icon-1 xl:icon-2"></i>
                </a>
              </li>
              <li>
                <a className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110" href="https://themeforest.net/user/unistudioco">
                  <i className="unicon-logo-facebook icon-1 xl:icon-2"></i>
                </a>
              </li>
              <li>
                <a className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110" href="https://unistudio.co/unicore/">
                  <i className="unicon-logo-pinterest icon-1 xl:icon-2"></i>
                </a>
              </li>
              <li>
                <a className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110" href="https://unistudio.co/unicore/">
                  <i className="unicon-email icon-1 xl:icon-2"></i>
                </a>
              </li>
              <li>
                <a className="w-40px xl:w-48px h-40px xl:h-48px d-inline-flex justify-center items-center rounded-circle border transition-all duration-200 ease-in hover:scale-110" href="https://unistudio.co/unicore/">
                  <i className="unicon-link icon-1 xl:icon-2"></i>
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div className="container max-w-900px">
          <div className="post-header mt-4 lg:mt-6 xl:mt-8">
            <div className="panel vstack items-center gap-2 md:gap-3 text-center max-w-400px sm:max-w-500px xl:max-w-md mx-auto">
              <h1 className="h4 sm:h3 xl:h1 m-0">
                {detail.title}
              </h1>
            </div>
          </div>
          <hr className="my-4 lg:my-6 xl:my-8 opacity-100 border-gray-100 dark:border-gray-700" />
          <div className="post-content panel fs-6 md:fs-5" data-uc-lightbox="animation: scale">
            <p>
              {"She started her blog exactly six months before I launched Camels & Chocolate, and she really set the bar high for my own blog birthday, Y’all this summer! I’ve already been brainstorming party ideas … who wants to come? It’s no coincidence that Buster Keaton and Charlot’s movies of the and award-winning chefs about what exactly makes their hometowns In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words. A range of amenities provides many things to do in Bellevue. About 40 percent of the city’s population are minorities, which contributes to an overall diverse range of lifestyles and ideas."}
            </p>
            <p className="mt-3">
              {"I talked to climbers, Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun."}
            </p>
            <div className="panel mt-3">
              <figure className="float-end ms-3 mb-1">
                <figure className="featured-image m-0 ratio ratio-1x1 sm:w-300px rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/post-1.jpg" alt="Holding flower, by Anthony Tran" data-uc-img="loading: lazy" />
                  <a href="/assets/images/demo-eight/posts/post-1.jpg" className="position-cover" data-caption="Holding flower, by Anthony Tran"></a>
                </figure>
                <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                  {"Holding flower, by Anthony Tran"}
                </figcaption>
              </figure>
              <p>
                {"Bike paths and sidewalks make getting to and from the city’s many festivals, museums, restaurants and music venues easy. A range of amenities provides many things to do in Bellevue. About 40 percent of the city’s population are minorities, which contributes to an overall diverse range of lifestyles and ideas."}
              </p>
              <p className="mt-3">
                {"While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained. Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun."}
              </p>
              <p className="mt-3">
                {"In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words. They fully understood and used the power of showing without words. They fully understood and used the power of showing without words."}
              </p>
            </div>
            <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
              {"Capital of Texas"}
            </h4>
            <p>
              {"Visual storytelling is simply the way most brands will decide to go in 2016 & beyond, as they try to tell their story to their customers the oldest and most important unwritten rule in film industry says that you shouldn’t rely much on words to tell your story. In fact, you should rely on them as less as possible. It’s no coincidence that Buster Keaton and Charlot’s movies remain among the biggest classic movies of all time. In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words."}
            </p>
            <p className="mt-3">
              {"While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained sits at the base of the Rocky Mountains, it’s not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained."}
            </p>
            <figure className="my-3 sm:my-4">
              <figure className="featured-image m-0 ratio ratio-3x2 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/post-2.jpg" alt="Pink Marketing, by Mak" data-uc-img="loading: lazy" />
                <a href="/assets/images/demo-eight/posts/post-2.jpg" className="position-cover" data-caption="Pink Marketing, by Mak"></a>
              </figure>
              <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                {"Pink Marketing, by Mak"}
              </figcaption>
            </figure>
            <p>
              {" While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained. Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun. "}
              <br />
              {" In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words. "}
            </p>
            <p className="mt-3">
              {"Probably the oldest and most important unwritten rule in film industry says that you shouldn’t rely much on words to tell your story. In fact, you should rely on them as less as possible is simply the way most brands will decide to go in 2016 & beyond, as they try to tell their story to their customers."}
            </p>
            <h4 className="h4 xl:h3 mt-4 mb-2 xl:mb-3">
              {"Great Schools and Entertainment"}
            </h4>
            <p>
              {"Education is a high point when it comes to analyzing the quality of life factors that make Ann Arbor one of the best places to live. The University of Michigan, which has 43,000 students, makes Ann Arbor a perennial candidate for our annual ranking of the best college towns and plays a big role in the city’s economy and culture."}
            </p>
            <p className="mt-3">
              {"While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town since it takes considered at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained sits at the base of the Rocky Mountains, it’s not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained."}
            </p>
            <div className="panel my-3">
              <figure className="float-start me-3 mb-0">
                <figure className="featured-image m-0 ratio ratio-1x1 sm:w-300px rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/post-3.jpg" alt="Great Schools and Entertainment" data-uc-img="loading: lazy" />
                  <a href="/assets/images/demo-eight/posts/post-3.jpg" className="position-cover" data-caption="Great Schools and Entertainment"></a>
                </figure>
                <figcaption className="fs-7 mt-1 text-center text-gray-400 dark:text-gray-200">
                  {"Great Schools and Entertainment"}
                </figcaption>
              </figure>
              <p>
                {"Bike paths and sidewalks make getting to and from the city’s many festivals, museums, restaurants and music venues easy. A range of amenities provides many things to do in Bellevue. About 40 percent of the city’s population are minorities, which contributes to an overall diverse range of lifestyles and ideas."}
              </p>
              <p>
                {"While Denver sits at the base of the Rocky Mountains, it’s not considered a mountain town since it takes at least an hour to get to the Rockies for snowboarding and ski activities, a local expert explained. Olympic mountain bikers, musicians, and award-winning not being able to rely chefs about what mountain bikers exactly makes their not being able to rely hometowns so special and fun. In fact, not being able to rely on spoken word made them better storytellers. They fully understood and used the power of showing without words. They fully understood and used the power of showing without words."}
              </p>
            </div>
            <p>
              {"Probably the oldest and most important unwritten rule in film industry says that you shouldn’t rely much on words to tell your story. In fact, you should rely on them as less as possible is simply the way most brands will decide to go in 2016 & beyond, as they try to tell their story to their customers."}
            </p>
            <p className="mt-3">
              {"I talked to climbers, Olympic mountain bikers, musicians, and award-winning chefs about what exactly makes their hometowns so special and fun."}
            </p>
          </div>
          <div className="post-footer panel vstack sm:hstack gap-3 justify-between justifybetween border-top py-4 mt-4 xl:py-9 xl:mt-9">
            <ul className="nav-x gap-narrow text-primary">
              <li>
                <span className="text-black dark:text-white me-narrow">
                  {"Tags:"}
                </span>
              </li>
              <li>
                <a href="#" className="uc-link gap-0 dark:text-white">
                  {"Food "}
                  <span className="text-black dark:text-white">
                    {","}
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="uc-link gap-0 dark:text-white">
                  {"Life Style "}
                  <span className="text-black dark:text-white">
                    {","}
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="uc-link gap-0 dark:text-white">
                  {"Tech "}
                  <span className="text-black dark:text-white">
                    {","}
                  </span>
                </a>
              </li>
              <li>
                <a href="#" className="uc-link gap-0 dark:text-white">
                  {"Travel"}
                </a>
              </li>
            </ul>
            <ul className="post-share-icons nav-x gap-narrow">
              <li className="me-1">
                <span className="text-black dark:text-white">
                  {"Share:"}
                </span>
              </li>
              <li>
                <a className="btn btn-md btn-outline-gray-100 p-0 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                  <i className="unicon-logo-facebook icon-1"></i>
                </a>
              </li>
              <li>
                <a className="btn btn-md btn-outline-gray-100 p-0 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                  <i className="unicon-logo-x-filled icon-1"></i>
                </a>
              </li>
              <li>
                <a className="btn btn-md btn-outline-gray-100 p-0 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                  <i className="unicon-email icon-1"></i>
                </a>
              </li>
              <li>
                <a className="btn btn-md btn-outline-gray-100 p-0 w-32px lg:w-40px h-32px lg:h-40px text-dark dark:text-white dark:border-gray-600 hover:bg-primary hover:border-primary hover:text-white rounded-circle" href="#">
                  <i className="unicon-link icon-1"></i>
                </a>
              </li>
            </ul>
          </div>
          <div className="post-author panel py-4 px-3 sm:p-3 xl:p-4 bg-gray-25 dark:bg-opacity-10 rounded lg:rounded-2">
            <div className="row g-4 items-center">
              <div className="col-12 sm:col-5 xl:col-3">
                <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/post-author.jpg" alt="Amir Nisi" data-uc-img="loading: lazy" />
                </figure>
              </div>
              <div className="col">
                <div className="panel vstack items-start gap-2 md:gap-3">
                  <h4 className="h5 lg:h4 m-0">
                    {"Amir Nisi"}
                  </h4>
                  <p className="fs-6 lg:fs-5">
                    {"Creative and experienced content writer with 6+ years of experience lazy to create unique content strategy for News5 to turn website visitors into customers."}
                  </p>
                  <ul className="nav-x gap-1 text-gray-400 dark:text-white">
                    <li>
                      <a href="#medium">
                        <i className="icon-2 unicon-logo-medium"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#twitter">
                        <i className="icon-2 unicon-logo-x-filled"></i>
                      </a>
                    </li>
                    <li>
                      <a href="#instagram">
                        <i className="icon-2 unicon-logo-linkedin"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="post-navigation panel vstack sm:hstack justify-between gap-2 mt-8 xl:mt-9">
            <div className="new-post panel hstack w-100 sm:w-1/2">
              <div className="panel hstack justify-center w-100px h-100px">
                <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-02.jpg" alt="Tech Innovations Reshaping the Retail Landscape: AI Payments" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover" data-caption="Tech Innovations Reshaping the Retail Landscape: AI Payments"></SiteLink>
                </figure>
              </div>
              <div className="panel vstack justify-center px-2 gap-1 w-1/3">
                <span className="fs-7 opacity-60">
                  {"Prev Article"}
                </span>
                <h6 className="h6 lg:h5 m-0">
                  {"Tech Innovations Reshaping the Retail Landscape: AI Payments"}
                </h6>
              </div>
              <SiteLink href="/blog/tech-innovations-reshaping-the-retail-landscape-ai-payments" className="position-cover"></SiteLink>
            </div>
            <div className="new-post panel hstack w-100 sm:w-1/2">
              <div className="panel vstack justify-center px-2 gap-1 w-1/3 text-end">
                <span className="fs-7 opacity-60">
                  {"Next Article"}
                </span>
                <h6 className="h6 lg:h5 m-0">
                  {"The Rise of AI-Powered Personal Assistants: How They Manage"}
                </h6>
              </div>
              <div className="panel hstack justify-center w-100px h-100px">
                <figure className="featured-image m-0 ratio ratio-1x1 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-01.jpg" alt="The Rise of AI-Powered Personal Assistants: How They Manage" data-uc-img="loading: lazy" />
                  <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover" data-caption="The Rise of AI-Powered Personal Assistants: How They Manage"></SiteLink>
                </figure>
              </div>
              <SiteLink href="/blog/the-rise-of-ai-powered-personal-assistants-how-they-manage" className="position-cover"></SiteLink>
            </div>
          </div>
          <div className="post-related panel border-top pt-2 mt-8 xl:mt-9">
            <h4 className="h5 xl:h4 mb-5 xl:mb-6">
              {"Related to this topic:"}
            </h4>
            <div className="row child-cols-6 md:child-cols-3 gx-2 gy-4 sm:gx-3 sm:gy-6">
              <div>
                <article className="post type-post panel vstack gap-2">
                  <figure className="featured-image m-0 ratio ratio-4x3 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-07.jpg" alt="The Art of Baking: From Classic Bread to Artisan Pastries" data-uc-img="loading: lazy" />
                    <SiteLink href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries" className="position-cover" data-caption="The Art of Baking: From Classic Bread to Artisan Pastries"></SiteLink>
                  </figure>
                  <div className="post-header panel vstack gap-1">
                    <h5 className="h6 md:h5 m-0">
                      <SiteLink className="text-none" href="/blog/the-art-of-baking-from-classic-bread-to-artisan-pastries">
                        {"The Art of Baking: From Classic Bread to Artisan Pastries"}
                      </SiteLink>
                    </h5>
                    <div className="post-date hstack gap-narrow fs-7 opacity-60">
                      <span>
                        {"Feb 28, 2024"}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel vstack gap-2">
                  <figure className="featured-image m-0 ratio ratio-4x3 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-08.jpg" alt="AI and Marketing: Unlocking Customer Insights" data-uc-img="loading: lazy" />
                    <SiteLink href="/blog/ai-and-marketing-unlocking-customer-insights" className="position-cover" data-caption="AI and Marketing: Unlocking Customer Insights"></SiteLink>
                  </figure>
                  <div className="post-header panel vstack gap-1">
                    <h5 className="h6 md:h5 m-0">
                      <SiteLink className="text-none" href="/blog/ai-and-marketing-unlocking-customer-insights">
                        {"AI and Marketing: Unlocking Customer Insights"}
                      </SiteLink>
                    </h5>
                    <div className="post-date hstack gap-narrow fs-7 opacity-60">
                      <span>
                        {"Feb 22, 2024"}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel vstack gap-2">
                  <figure className="featured-image m-0 ratio ratio-4x3 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-09.jpg" alt="Hidden Gems: Underrated Travel Destinations Around the World" data-uc-img="loading: lazy" />
                    <SiteLink href="/blog/hidden-gems-underrated-travel-destinations-around-the-world" className="position-cover" data-caption="Hidden Gems: Underrated Travel Destinations Around the World"></SiteLink>
                  </figure>
                  <div className="post-header panel vstack gap-1">
                    <h5 className="h6 md:h5 m-0">
                      <SiteLink className="text-none" href="/blog/hidden-gems-underrated-travel-destinations-around-the-world">
                        {"Hidden Gems: Underrated Travel Destinations Around the World"}
                      </SiteLink>
                    </h5>
                    <div className="post-date hstack gap-narrow fs-7 opacity-60">
                      <span>
                        {"Feb 14, 2024"}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
              <div>
                <article className="post type-post panel vstack gap-2">
                  <figure className="featured-image m-0 ratio ratio-4x3 rounded uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-eight/posts/img-10.jpg" alt="Eco-Tourism: Traveling Responsibly and Sustainably" data-uc-img="loading: lazy" />
                    <SiteLink href="/blog/eco-tourism-traveling-responsibly-and-sustainably" className="position-cover" data-caption="Eco-Tourism: Traveling Responsibly and Sustainably"></SiteLink>
                  </figure>
                  <div className="post-header panel vstack gap-1">
                    <h5 className="h6 md:h5 m-0">
                      <SiteLink className="text-none" href="/blog/eco-tourism-traveling-responsibly-and-sustainably">
                        {"Eco-Tourism: Traveling Responsibly and Sustainably"}
                      </SiteLink>
                    </h5>
                    <div className="post-date hstack gap-narrow fs-7 opacity-60">
                      <span>
                        {"Feb 8, 2024"}
                      </span>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <a href="#commont" className="btn h-56px w-100 mt-8 xl:mt-9 text-black dark:text-white bg-gray-25 dark:bg-opacity-10 hover:bg-gray-50 dark:hover:bg-gray-700">
            <span>
              {"Be the first to write a comment."}
            </span>
          </a>
        </div>
      </div>
    </div>
  </article>
</div>
<Footer1 />
</TemplateShell>);
}
