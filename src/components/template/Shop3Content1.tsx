import { SiteLink } from "@/components/DemoContext";

export default function Shop3Content1() {
  return (
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
          <SiteLink href="/shop">
            {"Shop"}
          </SiteLink>
        </li>
        <li>
          <i className="unicon-chevron-right opacity-50"></i>
        </li>
        <li>
          <span className="opacity-50">
            {"Shop with 3 columns"}
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div className="section py-4 lg:py-6 xl:py-8">
    <div className="container max-w-xl">
      <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
        <header className="shop-header panel vstack justify-center gap-2 lg:gap-4 text-center">
          <div className="panel">
            <h1 className="h3 lg:h1 m-0">
              {"Shop"}
            </h1>
          </div>
          <div className="vstack sm:hstack justify-between items-center gap-2 sm:gap-4">
            <div className="panel text-center sm:text-start">
              <span className="fs-6 m-0 opacity-60">
                {"Showed 16 products out of 100 total."}
              </span>
            </div>
            <div>
              <div className="hstack gap-1 fs-6">
                <span>
                  {"Filter by:"}
                </span>
                <select name="select" id="filter_by" className="form-select form-control-xs fs-6 w-150px dark:bg-gray-900 dark:text-white dark:border-gray-700" defaultValue="">
                  <option value="">
                    {"Latest"}
                  </option>
                  <option value="">
                    {"Relevance"}
                  </option>
                  <option value="">
                    {"Most popular"}
                  </option>
                  <option value="">
                    {"Trending"}
                  </option>
                  <option value="">
                    {"Rating"}
                  </option>
                </select>
              </div>
            </div>
          </div>
        </header>
        <div className="shop-lisiting row child-cols-6 lg:child-cols-4 col-match gy-4 lg:gy-8 gx-2 lg:gx-6">
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-01.jpg" alt="Elegant Watch" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/elegant-watch" className="position-cover" data-caption="Elegant Watch"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span className="position-absolute top-0 start-0 m-1 md:m-2 ft-secondary h-24px px-1 bg-yellow-400 text-dark">
                    {"51%"}
                  </span>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/elegant-watch">
                      {"Elegant Watch"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price-old text-line-through opacity-40">
                      {" $99.00 "}
                    </span>
                    <span className="price">
                      {"$49.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-02.jpg" alt="Hemp Seed" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/hemp-seed" className="position-cover" data-caption="Hemp Seed"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/hemp-seed">
                      {"Hemp Seed"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price">
                      {"$49.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-03.jpg" alt="White Classic Watch" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/white-classic-watch" className="position-cover" data-caption="White Classic Watch"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span className="position-absolute top-0 start-0 m-1 md:m-2 ft-secondary h-24px px-1 bg-yellow-400 text-dark">
                    {"67%"}
                  </span>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/white-classic-watch">
                      {"White Classic Watch"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price-old text-line-through opacity-40">
                      {" $89.00 "}
                    </span>
                    <span className="price">
                      {"$29.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-04.jpg" alt="Stylish Starbucks" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/stylish-starbucks" className="position-cover" data-caption="Stylish Starbucks"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/stylish-starbucks">
                      {"Stylish Starbucks"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price">
                      {"$20.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-05.jpg" alt="Black AirTag" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/black-airtag" className="position-cover" data-caption="Black AirTag"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/black-airtag">
                      {"Black AirTag"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 3 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price">
                      {"$74.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-06.jpg" alt="Modern Headsets" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/modern-headsets" className="position-cover" data-caption="Modern Headsets"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/modern-headsets">
                      {"Modern Headsets"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price">
                      {"$24.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-07.jpg" alt="Laptop Cover" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/laptop-cover" className="position-cover" data-caption="Laptop Cover"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span className="position-absolute top-0 start-0 m-1 md:m-2 ft-secondary h-24px px-1 bg-yellow-400 text-dark">
                    {"70%"}
                  </span>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/laptop-cover">
                      {"Laptop Cover"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price-old text-line-through opacity-40">
                      {" $80.00 "}
                    </span>
                    <span className="price">
                      {"$24.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-08.jpg" alt="Disney Toys" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/disney-toys" className="position-cover" data-caption="Disney Toys"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span className="position-absolute top-0 start-0 m-1 md:m-2 ft-secondary h-24px px-1 bg-yellow-400 text-dark">
                    {"75%"}
                  </span>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/disney-toys">
                      {"Disney Toys"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price-old text-line-through opacity-40">
                      {" $20.00 "}
                    </span>
                    <span className="price">
                      {"$5.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-09.jpg" alt="Screen Axe" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/screen-axe" className="position-cover" data-caption="Screen Axe"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span className="position-absolute top-0 start-0 m-1 md:m-2 ft-secondary h-24px px-1 bg-yellow-400 text-dark">
                    {"50%"}
                  </span>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/screen-axe">
                      {"Screen Axe"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price-old text-line-through opacity-40">
                      {" $38.00 "}
                    </span>
                    <span className="price">
                      {"$19.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-10.jpg" alt="Airpods Pro" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/airpods-pro" className="position-cover" data-caption="Airpods Pro"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span className="position-absolute top-0 start-0 m-1 md:m-2 ft-secondary h-24px px-1 bg-yellow-400 text-dark">
                    {"30%"}
                  </span>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/airpods-pro">
                      {"Airpods Pro"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price-old text-line-through opacity-40">
                      {" $70.00 "}
                    </span>
                    <span className="price">
                      {"$49.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-11.jpg" alt="USB Cable" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/usb-cable" className="position-cover" data-caption="USB Cable"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span className="position-absolute top-0 start-0 m-1 md:m-2 ft-secondary h-24px px-1 bg-yellow-400 text-dark">
                    {"80%"}
                  </span>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/usb-cable">
                      {"USB Cable"}
                    </SiteLink>
                  </h5>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price-old text-line-through opacity-40">
                      {" $5.00 "}
                    </span>
                    <span className="price">
                      {"$1.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-12.jpg" alt="Stylish Decoration" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/stylish-decoration" className="position-cover" data-caption="Stylish Decoration"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/stylish-decoration">
                      {"Stylish Decoration"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price">
                      {"$120.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-13.jpg" alt="Elegant Tree" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/elegant-tree" className="position-cover" data-caption="Elegant Tree"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span className="position-absolute top-0 start-0 m-1 md:m-2 ft-secondary h-24px px-1 bg-yellow-400 text-dark">
                    {"50%"}
                  </span>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/elegant-tree">
                      {"Elegant Tree"}
                    </SiteLink>
                  </h5>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price-old text-line-through opacity-40">
                      {" $50.00 "}
                    </span>
                    <span className="price">
                      {"$25.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-14.jpg" alt="Classic Printer" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/classic-printer" className="position-cover" data-caption="Classic Printer"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/classic-printer">
                      {"Classic Printer"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price">
                      {"$49.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="vstack gap-2">
                <div className="panel">
                  <figure className="featured-image m-0 ratio ratio-3x4 overflow-hidden uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                    <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-15.jpg" alt="Sportive Shoes" data-uc-img="loading: lazy" />
                    <SiteLink href="/shop/sportive-shoes" className="position-cover" data-caption="Sportive Shoes"></SiteLink>
                  </figure>
                  <a href="#add_to_favorite" className="btn btn-md btn-alt-gray-200 hover:bg-primary w-32px h-32px p-0 rounded-circle shadow-xs position-absolute top-0 end-0 m-1 md:m-2">
                    <i className="icon icon-narrow unicon-favorite-filled"></i>
                  </a>
                  <span className="position-absolute top-0 start-0 m-1 md:m-2 ft-secondary h-24px px-1 bg-yellow-400 text-dark">
                    {"20%"}
                  </span>
                </div>
                <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                  <h5 className="h6 md:h5 m-0">
                    <SiteLink className="text-none" href="/shop/sportive-shoes">
                      {"Sportive Shoes"}
                    </SiteLink>
                  </h5>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 unicon-star-filled text-yellow"></i>
                    </li>
                  </ul>
                  <div className="hstack justify-center gap-narrow fs-7">
                    <span className="price-old text-line-through opacity-40">
                      {" $100.00 "}
                    </span>
                    <span className="price">
                      {"$80.00"}
                    </span>
                  </div>
                  <a className="btn btn-text text-none text-primary border-bottom fs-7 lg:fs-6 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                    {"Add to cart"}
                  </a>
                </div>
              </div>
            </article>
          </div>
        </div>
        <div className="nav-pagination pt-3 border-top border-gray-100 dark:border-gray-800">
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
  );
}
