import { SiteLink } from "@/components/DemoContext";
import type { DetailRecord } from "@/data/details";

export default function ShopProductDetailContent1({ detail }: { detail: DetailRecord }) {
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
          <SiteLink href="/shop-category">
            {"Toys"}
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
  <article className="product type-product single product-single py-2 lg:py-6 xl:py-8">
    <div className="container max-w-xl">
      <div className="product-header panel">
        <div className="row child-cols-12 lg:child-cols-6 gy-4 gx-4 md:gx-6 xl:gx-8">
          <div>
            <div className="product-slider panel swiper-parent">
              <div className="vstack gap-1">
                <div className="panel">
                  <div className="swiper swiper-main h-100" data-uc-swiper="connect: .swiper-thumbs; items: 1; gap: 8; dots: .swiper-pagination; disable-class: d-none;">
                    <div className="swiper-wrapper" data-uc-lightbox="">
                      {detail.gallery.map((image, index) => (<div key={index} className="swiper-slide">
                        <div className="product type-product">
                          <figure className="featured-image m-0 ratio ratio-3x4 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src={image} data-src={image} alt={detail.title} data-uc-img="loading: lazy" />
                            <a href={image} className="position-cover" data-caption={detail.title}></a>
                          </figure>
                        </div>
                      </div>))}
                    </div>
                    <div className="swiper-nav swiper-next btn btn-xs md:btn-md w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white text-dark rounded-circle shadow-xs position-absolute top-50 end-0 translate-middle-y me-narrow md:me-2 z-1">
                      <i className="unicon-chevron-right icon-1 md:icon-2"></i>
                    </div>
                    <div className="swiper-nav swiper-prev btn btn-xs md:btn-md w-32px md:w-40px xl:w-56px h-32px md:h-40px xl:h-56px bg-white text-dark rounded-circle shadow-xs position-absolute top-50 start-0 translate-middle-y ms-narrow md:ms-2 z-1">
                      <i className="unicon-chevron-left icon-1 md:icon-2"></i>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="swiper swiper-thumbs" data-uc-swiper="items: 5; gap: 8;">
                    <div className="swiper-wrapper">
                      {detail.gallery.map((image, index) => (<div key={index} className="swiper-slide">
                        <div className="product type-product h-100">
                          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src={image} data-src={image} alt={detail.title} data-uc-img="loading: lazy" />
                          </figure>
                        </div>
                      </div>))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="product-details panel vstack gap-1 xl:gap-2 max-w-500px mx-auto" data-uc-sticky="bottom: true; offset: 40;">
              <h1 className="product-title h3 xl:h1 m-0">
                {detail.title}
              </h1>
              <div className="hstack justify-between items-center gap-2">
                <div className="product-price hstack gap-1 fs-5 xl:fs-4">
                  <span className="price-old text-line-through opacity-40">
                    {detail.oldPrice}
                  </span>
                  <span className="price">
                    {detail.price}
                  </span>
                </div>
                <div className="product-rating hstack gap-1">
                  <span className="hstack gap-narrow fs-7 opacity-60">
                    {"5"}
                    <span className="d-none sm:d-inline-block">
                      {" reviews"}
                    </span>
                  </span>
                  <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                    <li>
                      <i className="icon fs-6 lg:fs-5 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 lg:fs-5 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 lg:fs-5 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 lg:fs-5 unicon-star-filled text-yellow"></i>
                    </li>
                    <li>
                      <i className="icon fs-6 lg:fs-5 unicon-star-filled"></i>
                    </li>
                  </ul>
                </div>
              </div>
              <p className="product-desc fs-6 xl:fs-5 my-2">
                {" Consetetur sadipscing elitr, syosma vero eos et accusam et justo takimata sit amet sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. "}
                <br />
                <br />
                {" Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut laliqua. "}
              </p>
              <form className="product-actions hstack gap-1 xl:mt-2">
                <input type="number" className="form-control form-control-sm lg:form-control-md w-100px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" step="1" min="1" max="99" name="quantity" defaultValue="1" title="Qty" autoComplete="off" />
                <button type="submit" className="btn btn-sm lg:btn-md btn-primary md:max-w-150px flex-1">
                  {"Add to cart"}
                </button>
              </form>
              <ul className="nav-y mt-2 xl:mt-4 ft-secondary">
                <li className="hstack gap-narrow">
                  <span className="text-uppercase opacity-60 me-narrow">
                    {"SKU:"}
                  </span>
                  <span>
                    {"HVRYXK 1"}
                  </span>
                </li>
                <li className="hstack gap-narrow">
                  <span className="text-uppercase opacity-60 me-narrow">
                    {"Categories:"}
                  </span>
                  <SiteLink className="text-primary" href="/shop-category">
                    {"Toys"}
                  </SiteLink>
                  {", "}
                  <SiteLink className="text-primary" href="/shop-category">
                    {"Games"}
                  </SiteLink>
                </li>
                <li className="hstack gap-narrow">
                  <span className="text-uppercase opacity-60 me-narrow">
                    {"Tags:"}
                  </span>
                  <SiteLink className="text-primary" href="/shop-category">
                    {"Heads toys"}
                  </SiteLink>
                  {", "}
                  <SiteLink className="text-primary" href="/shop-category">
                    {"Child"}
                  </SiteLink>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="product-tabs panel mt-8">
        <ul className="product-tabs-nav nav-x justify-center ft-secondary h6 pb-2 border-bottom" data-uc-tab="">
          <li>
            <a href="#">
              {"Description"}
            </a>
          </li>
          <li>
            <a href="#">
              {"Reviews (5)"}
            </a>
          </li>
        </ul>
        <div className="product-tabs-content uc-switcher mt-4 max-w-lg mx-auto">
          <div>
            <div id="product-details" className="product-details panel py-2 lg:py-4">
              <p>
                {"Consetetur sadipscing elitr, syosma vero eos et accusam et justo takimata sit amet sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua."}
              </p>
              <p>
                {"Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
              </p>
              <p>
                {"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur, sed do eiusmod."}
              </p>
              <p>
                {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid iusto dolores laudantium commodi ut ullam id, numquam repellat quo maiores excepturi cum atque consequuntur alias sunt, dignissimos architecto odio unde!"}
              </p>
              <p>
                {"Accusamus odio soluta nostrum nemo esse explicabo ab eos sed perspiciatis possimus."}
              </p>
            </div>
          </div>
          <div>
            <div id="product-reviews" className="product-reviews panel py-2 lg:py-4 overflow-hidden-x">
              <div className="row g-9 sep" data-uc-grid="">
                <div className="col-12 lg:col-6">
                  <div className="panel vstack gap-1 lg:gap-2">
                    <h4 className="h5 lg:h4 m-0">
                      {"Reviews (5)"}
                    </h4>
                    <p className="text-dark dark:text-white text-opacity-70">
                      {"Be the first to review “Disney Toys”"}
                    </p>
                    <div className="reviews-wrap panel vstack gap-4 mt-6">
                      <div className="reviews-lisiting panel row child-cols-12 sep-x gy-9">
                        <div className="review-item">
                          <div className="vstack items-start gap-2">
                            <div className="vstack gap-2 flex-1">
                              <div className="hstack justify-between items-center gap-2">
                                <h5 className="h5 m-0 flex-1">
                                  {"I like it!!"}
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
                              </div>
                              <p className="text-dark dark:text-white text-opacity-70">
                                {"Molestiae quam exercitationem quisquam quasi veniam dolores temporibus nam doloribus, cumque quibusdam."}
                              </p>
                            </div>
                            <div className="hstack items-center gap-2 h6 ft-secondary text-dark dark:text-white text-opacity-70">
                              <div className="w-40px">
                                <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/users/img-01.png" alt="Reviewer name" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                              <div className="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>
                                  {"By "}
                                  <a className="text-none text-primary" href="#">
                                    {"Sarah"}
                                  </a>
                                </span>
                                <span>
                                  {"On 24 July, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review-item">
                          <div className="vstack items-start gap-2">
                            <div className="vstack gap-2 flex-1">
                              <div className="hstack justify-between items-center gap-2">
                                <h5 className="h5 m-0 flex-1">
                                  {"Just outstanding, I recommended!"}
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
                              </div>
                              <p className="text-dark dark:text-white text-opacity-70">
                                {"Ratione quis deleniti error porro ipsum, aspernatur illo nisi officia aliquam similique."}
                              </p>
                            </div>
                            <div className="hstack items-center gap-2 h6 ft-secondary text-dark dark:text-white text-opacity-70">
                              <div className="w-40px">
                                <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/users/img-02.png" alt="Reviewer name" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                              <div className="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>
                                  {"By "}
                                  <a className="text-none text-primary" href="#">
                                    {"Amir"}
                                  </a>
                                </span>
                                <span>
                                  {"On 24 July, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review-item">
                          <div className="vstack items-start gap-2">
                            <div className="vstack gap-2 flex-1">
                              <div className="hstack justify-between items-center gap-2">
                                <h5 className="h5 m-0 flex-1">
                                  {"Sounds good, but I hope more."}
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
                              </div>
                              <p className="text-dark dark:text-white text-opacity-70">
                                {"Nam consequuntur aut, qui eaque molestias excepturi reiciendis quo ut fugit odio."}
                              </p>
                            </div>
                            <div className="hstack items-center gap-2 h6 ft-secondary text-dark dark:text-white text-opacity-70">
                              <div className="w-40px">
                                <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/users/img-03.png" alt="Reviewer name" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                              <div className="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>
                                  {"By "}
                                  <a className="text-none text-primary" href="#">
                                    {"Jennifer"}
                                  </a>
                                </span>
                                <span>
                                  {"On 24 July, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review-item">
                          <div className="vstack items-start gap-2">
                            <div className="vstack gap-2 flex-1">
                              <div className="hstack justify-between items-center gap-2">
                                <h5 className="h5 m-0 flex-1">
                                  {"What a waste of money!!"}
                                </h5>
                                <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 2 out of 5">
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
                                  <li>
                                    <i className="icon fs-6 unicon-star-filled"></i>
                                  </li>
                                </ul>
                              </div>
                              <p className="text-dark dark:text-white text-opacity-70">
                                {"Quisquam illo iste consequatur qui aspernatur vel mollitia eaque animi autem nemo."}
                              </p>
                            </div>
                            <div className="hstack items-center gap-2 h6 ft-secondary text-dark dark:text-white text-opacity-70">
                              <div className="w-40px">
                                <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/users/img-04.png" alt="Reviewer name" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                              <div className="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>
                                  {"By "}
                                  <a className="text-none text-primary" href="#">
                                    {"Lora"}
                                  </a>
                                </span>
                                <span>
                                  {"On 24 July, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className="review-item">
                          <div className="vstack items-start gap-2">
                            <div className="vstack gap-2 flex-1">
                              <div className="hstack justify-between items-center gap-2">
                                <h5 className="h5 m-0 flex-1">
                                  {"This is extremly recommended!!"}
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
                              </div>
                              <p className="text-dark dark:text-white text-opacity-70">
                                {"Consetetur sadipscing elitr, syosma vero eos et accusam et justo takimata sit amet sed diam nonumy eirmod tempor invidunt."}
                              </p>
                            </div>
                            <div className="hstack items-center gap-2 h6 ft-secondary text-dark dark:text-white text-opacity-70">
                              <div className="w-40px">
                                <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/users/img-05.png" alt="Reviewer name" data-uc-img="loading: lazy" />
                                </figure>
                              </div>
                              <div className="hstack justify-between items-center gap-2 flex-1 fs-7 fw-normal">
                                <span>
                                  {"By "}
                                  <a className="text-none text-primary" href="#">
                                    {"Amal"}
                                  </a>
                                </span>
                                <span>
                                  {"On 24 July, 2024"}
                                </span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="reviews-loadmore" hidden>
                        <a href="#" className="btn btn-sm btn-outline-gray-100 w-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
                          {"Load more reviews"}
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col">
                  <div className="panel vstack gap-1 lg:gap-2" data-uc-sticky="bottom: true; offset: 40;">
                    <h4 className="h5 lg:h4 m-0">
                      {"Submit a review"}
                    </h4>
                    <p className="text-dark dark:text-white text-opacity-70">
                      {"Your email address will not be published. Required fields are marked "}
                      <sup className="text-danger">
                        {"*"}
                      </sup>
                    </p>
                    <form className="panel vstack gap-2 lg:gap-3 mt-2" action="?">
                      <div className="row g-2 child-cols-12 lg:child-cols-6">
                        <div className="form-group">
                          <label className="form-label fs-7 ft-secondary" htmlFor="reviewer_name">
                            {"Name "}
                            <sup className="text-danger">
                              {"*"}
                            </sup>
                          </label>
                          <input type="text" id="reviewer_name" className="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" />
                        </div>
                        <div className="form-group">
                          <label className="form-label fs-7 ft-secondary" htmlFor="reviewer_email">
                            {"Email "}
                            <sup className="text-danger">
                              {"*"}
                            </sup>
                          </label>
                          <input type="email" id="reviewer_email" className="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" required />
                        </div>
                      </div>
                      <div className="form-group">
                        <label className="form-label fs-7 ft-secondary">
                          {"Your rating "}
                          <sup className="text-danger">
                            {"*"}
                          </sup>
                        </label>
                        <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 1 out of 5">
                          <li>
                            <i className="icon fs-5 unicon-star-filled text-yellow"></i>
                          </li>
                          <li>
                            <i className="icon fs-5 unicon-star-filled"></i>
                          </li>
                          <li>
                            <i className="icon fs-5 unicon-star-filled"></i>
                          </li>
                          <li>
                            <i className="icon fs-5 unicon-star-filled"></i>
                          </li>
                          <li>
                            <i className="icon fs-5 unicon-star-filled"></i>
                          </li>
                        </ul>
                      </div>
                      <div className="form-group">
                        <label className="form-label fs-7 ft-secondary" htmlFor="reviewer_title">
                          {"Review title "}
                          <sup className="text-danger">
                            {"*"}
                          </sup>
                        </label>
                        <input type="text" id="reviewer_title" className="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" />
                      </div>
                      <div className="form-group">
                        <label className="form-label fs-7 ft-secondary" htmlFor="reviewer_message">
                          {"Your review"}
                        </label>
                        <textarea id="reviewer_message" className="form-control form-control-sm dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" rows={5} required defaultValue={""} />
                      </div>
                      <div className="form-group form-check text-start">
                        <input className="form-check-input rounded-0 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" type="checkbox" id="remember_me" />
                        <label className="hstack justify-between form-check-label fs-7 lg:fs-6" htmlFor="remember_me">
                          {"Save my name, email, and website in this browser for the next time I comment."}
                        </label>
                      </div>
                      <button className="btn btn-sm lg:btn-md btn-primary w-100">
                        {"Submit review"}
                      </button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="featured-products-panel panel pt-4 lg:pt-8 mt-4 border-top border-gray-100 dark:border-gray-800">
        <header className="panel hstack justify-center gap-2 text-center">
          <h3 className="h5 lg:h4">
            {"You might also like"}
          </h3>
        </header>
        <div className="panel swiper-parent mt-4 md:mt-6">
          <div className="swiper" data-uc-swiper="items: 2; gap: 8; dots: .swiper-pagination; disable-class: d-none;" data-uc-swiper-s="items: 3; gap: 16;" data-uc-swiper-m="items: 4; gap: 24;" data-uc-swiper-l="items: 5; gap: 32;">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <article className="product type-product panel">
                  <div className="vstack gap-2">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-01.jpg" alt="Elegant Watch" data-uc-img="loading: lazy" />
                        <SiteLink href="/shop/elegant-watch" className="position-cover" data-caption="Elegant Watch"></SiteLink>
                      </figure>
                      <span className="position-absolute top-0 start-0 m-1 fs-7 ft-secondary lh-sm h-16px px-narrow rounded bg-yellow-400 text-dark">
                        {"51%"}
                      </span>
                    </div>
                    <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 className="h6 lg:h5 m-0">
                        <SiteLink className="text-none" href="/shop/elegant-watch">
                          {"Elegant Watch"}
                        </SiteLink>
                      </h5>
                      <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
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
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article className="product type-product panel">
                  <div className="vstack gap-2">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-02.jpg" alt="Hemp Seed" data-uc-img="loading: lazy" />
                        <SiteLink href="/shop/hemp-seed" className="position-cover" data-caption="Hemp Seed"></SiteLink>
                      </figure>
                    </div>
                    <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 className="h6 lg:h5 m-0">
                        <SiteLink className="text-none" href="/shop/hemp-seed">
                          {"Hemp Seed"}
                        </SiteLink>
                      </h5>
                      <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 4 out of 5">
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled"></i>
                        </li>
                      </ul>
                      <div className="hstack justify-center gap-narrow fs-7">
                        <span className="price">
                          {"$49.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article className="product type-product panel">
                  <div className="vstack gap-2">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-03.jpg" alt="White Classic Watch" data-uc-img="loading: lazy" />
                        <SiteLink href="/shop/white-classic-watch" className="position-cover" data-caption="White Classic Watch"></SiteLink>
                      </figure>
                      <span className="position-absolute top-0 start-0 m-1 fs-7 ft-secondary lh-sm h-16px px-narrow rounded bg-yellow-400 text-dark">
                        {"67%"}
                      </span>
                    </div>
                    <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 className="h6 lg:h5 m-0">
                        <SiteLink className="text-none" href="/shop/white-classic-watch">
                          {"White Classic Watch"}
                        </SiteLink>
                      </h5>
                      <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
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
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article className="product type-product panel">
                  <div className="vstack gap-2">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-04.jpg" alt="Stylish Starbucks" data-uc-img="loading: lazy" />
                        <SiteLink href="/shop/stylish-starbucks" className="position-cover" data-caption="Stylish Starbucks"></SiteLink>
                      </figure>
                    </div>
                    <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 className="h6 lg:h5 m-0">
                        <SiteLink className="text-none" href="/shop/stylish-starbucks">
                          {"Stylish Starbucks"}
                        </SiteLink>
                      </h5>
                      <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 5 out of 5">
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                      </ul>
                      <div className="hstack justify-center gap-narrow fs-7">
                        <span className="price">
                          {"$20.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
              <div className="swiper-slide">
                <article className="product type-product panel">
                  <div className="vstack gap-2">
                    <div className="panel">
                      <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                        <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-05.jpg" alt="Black AirTag" data-uc-img="loading: lazy" />
                        <SiteLink href="/shop/black-airtag" className="position-cover" data-caption="Black AirTag"></SiteLink>
                      </figure>
                    </div>
                    <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                      <h5 className="h6 lg:h5 m-0">
                        <SiteLink className="text-none" href="/shop/black-airtag">
                          {"Black AirTag"}
                        </SiteLink>
                      </h5>
                      <ul className="nav-x gap-0 text-gray-100 dark:text-gray-700" title="Average 3 out of 5">
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled text-yellow"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled"></i>
                        </li>
                        <li>
                          <i className="icon fs-7 unicon-star-filled"></i>
                        </li>
                      </ul>
                      <div className="hstack justify-center gap-narrow fs-7">
                        <span className="price">
                          {"$74.00"}
                        </span>
                      </div>
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
          <div className="swiper-nav swiper-next btn btn-xs md:btn-md w-32px md:w-48px h-32px md:h-48px bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-circle shadow-xs position-absolute top-50 start-100 translate-middle-x mt-n9 md:mt-n10 z-1">
            <i className="unicon-chevron-right icon-1 md:icon-2"></i>
          </div>
          <div className="swiper-nav swiper-prev btn btn-xs md:btn-md w-32px md:w-48px h-32px md:h-48px bg-white text-gray-900 dark:bg-gray-700 dark:text-white rounded-circle shadow-xs position-absolute top-50 start-0 translate-middle-x mt-n9 md:mt-n10 z-1">
            <i className="unicon-chevron-left icon-1 md:icon-2"></i>
          </div>
        </div>
      </div>
    </div>
  </article>
</div>
  );
}
