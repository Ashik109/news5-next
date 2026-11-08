import { SiteLink } from "@/components/DemoContext";

export default function ShopCart2Content1() {
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
            {"Cart — v2"}
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div className="section py-4 lg:py-6 xl:py-8">
    <div className="container max-w-xl">
      <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
        <header className="cart-header panel vstack justify-center gap-2 lg:gap-4 text-center">
          <div className="panel">
            <h1 className="h3 lg:h1 m-0">
              {"Cart — v2"}
            </h1>
          </div>
        </header>
        <div className="cart-details panel">
          <div className="row gy-4 gx-4 xl:gx-8">
            <div className="col">
              <form className="panel max-h-sm overflow-auto border border-gray-50 dark:border-gray-700" action="?">
                <table className="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                  <thead className="bg-gray-800 text-white sticky-top ft-secondary z-1">
                    <tr>
                      <th className="w-100px"></th>
                      <th className="w-100px"></th>
                      <th className="w-1/3">
                        {"Product"}
                      </th>
                      <th className="w-1/6">
                        {"Price"}
                      </th>
                      <th className="w-1/6">
                        {"QTY"}
                      </th>
                      <th className="w-1/6">
                        {"Subtotal"}
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>
                        <a href="#remove_from_cart" className="remove text-none">
                          <i className="icon icon-1 unicon-close"></i>
                        </a>
                      </td>
                      <td>
                        <div className="image panel w-48px lg:w-72px">
                          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-07.jpg" alt="Laptop Cover" data-uc-img="loading: lazy" />
                            <SiteLink href="/shop-product-detail" className="position-cover" data-caption="Laptop Cover"></SiteLink>
                          </figure>
                        </div>
                      </td>
                      <td>
                        <h5 className="title h6 m-0">
                          <SiteLink href="/shop-product-detail" className="text-none">
                            {"Laptop Cover"}
                          </SiteLink>
                        </h5>
                      </td>
                      <td>
                        <span className="price">
                          {"$24.00"}
                        </span>
                      </td>
                      <td>
                        <input type="number" className="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" step="1" min="1" max="99" name="quantity" defaultValue="1" title="Qty" autoComplete="off" />
                      </td>
                      <td>
                        <span className="subtotal">
                          {"$24.00"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#remove_from_cart" className="remove text-none">
                          <i className="icon icon-1 unicon-close"></i>
                        </a>
                      </td>
                      <td>
                        <div className="image panel w-48px lg:w-72px">
                          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-08.jpg" alt="Disney Toys" data-uc-img="loading: lazy" />
                            <SiteLink href="/shop-product-detail" className="position-cover" data-caption="Disney Toys"></SiteLink>
                          </figure>
                        </div>
                      </td>
                      <td>
                        <h5 className="title h6 m-0">
                          <SiteLink href="/shop-product-detail" className="text-none">
                            {"Disney Toys"}
                          </SiteLink>
                        </h5>
                      </td>
                      <td>
                        <span className="price">
                          {"$5.00"}
                        </span>
                      </td>
                      <td>
                        <input type="number" className="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" step="1" min="1" max="99" name="quantity" defaultValue="1" title="Qty" autoComplete="off" />
                      </td>
                      <td>
                        <span className="subtotal">
                          {"$5.00"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#remove_from_cart" className="remove text-none">
                          <i className="icon icon-1 unicon-close"></i>
                        </a>
                      </td>
                      <td>
                        <div className="image panel w-48px lg:w-72px">
                          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-09.jpg" alt="Screen Axe" data-uc-img="loading: lazy" />
                            <SiteLink href="/shop-product-detail" className="position-cover" data-caption="Screen Axe"></SiteLink>
                          </figure>
                        </div>
                      </td>
                      <td>
                        <h5 className="title h6 m-0">
                          <SiteLink href="/shop-product-detail" className="text-none">
                            {"Screen Axe"}
                          </SiteLink>
                        </h5>
                      </td>
                      <td>
                        <span className="price">
                          {"$19.00"}
                        </span>
                      </td>
                      <td>
                        <input type="number" className="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" step="1" min="1" max="99" name="quantity" defaultValue="1" title="Qty" autoComplete="off" />
                      </td>
                      <td>
                        <span className="subtotal">
                          {"$19.00"}
                        </span>
                      </td>
                    </tr>
                    <tr>
                      <td>
                        <a href="#remove_from_cart" className="remove text-none">
                          <i className="icon icon-1 unicon-close"></i>
                        </a>
                      </td>
                      <td>
                        <div className="image panel w-48px lg:w-72px">
                          <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                            <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-10.jpg" alt="Airpods Pro" data-uc-img="loading: lazy" />
                            <SiteLink href="/shop-product-detail" className="position-cover" data-caption="Airpods Pro"></SiteLink>
                          </figure>
                        </div>
                      </td>
                      <td>
                        <h5 className="title h6 m-0">
                          <SiteLink href="/shop-product-detail" className="text-none">
                            {"Airpods Pro"}
                          </SiteLink>
                        </h5>
                      </td>
                      <td>
                        <span className="price">
                          {"$49.00"}
                        </span>
                      </td>
                      <td>
                        <input type="number" className="form-control form-control-xs w-64px lg:w-80px dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" step="1" min="1" max="99" name="quantity" defaultValue="1" title="Qty" autoComplete="off" />
                      </td>
                      <td>
                        <span className="subtotal">
                          {"$49.00"}
                        </span>
                      </td>
                    </tr>
                  </tbody>
                  <tfoot className="sticky-bottom ft-secondary bg-gray-50 text-dark dark:bg-gray-800 dark:text-white z-1">
                    <tr>
                      <td colSpan={5}>
                        <div className="coupon hstack gap-narrow lg:gap-1 max-w-250px lg:max-w-350px">
                          <input type="text" name="coupon_code" className="form-control form-control-xs sm:form-control-sm lg:form-control-md dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-500" id="coupon_code" defaultValue="" placeholder="Coupon code" />
                          <button type="submit" className="btn btn-xs sm:btn-sm lg:btn-md btn-alt-dark text-nowrap dark:hover:bg-gray-500" name="apply_coupon" value="Apply coupon">
                            {"Apply coupon"}
                          </button>
                        </div>
                      </td>
                      <td colSpan={1}>
                        <button type="submit" className="btn btn-xs sm:btn-sm lg:btn-md btn-alt-dark text-nowrap w-100 dark:hover:bg-gray-500" name="update_cart" value="Update cart">
                          {"Update cart"}
                        </button>
                      </td>
                    </tr>
                  </tfoot>
                </table>
              </form>
            </div>
            <div className="col-12 lg:col-4">
              <div className="panel vstack gap-4 lg:gap-6">
                <div className="panel vstack gap-1 lg:gap-2">
                  <h5 className="h5 sm:h4 mx-0">
                    {"Cart totals"}
                  </h5>
                  <div className="max-h-sm overflow-auto border border-gray-50 dark:border-gray-700">
                    <table className="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                      <tbody>
                        <tr>
                          <th className="ft-secondary bg-gray-800 text-white">
                            {"Subtotal"}
                          </th>
                          <td>
                            {"$97.00"}
                          </td>
                        </tr>
                        <tr>
                          <th className="ft-secondary bg-gray-800 text-white">
                            {"Shipping"}
                          </th>
                          <td>
                            <div className="nav-y">
                              <span>
                                {"Flat rate: $23.00"}
                              </span>
                              <span>
                                {"Shipping to Morocco"}
                              </span>
                              <a className="text-primary" href="#">
                                {"Edit address"}
                              </a>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <th className="ft-secondary bg-gray-800 text-white">
                            {"Total"}
                          </th>
                          <td>
                            <span className="total fw-bold fs-6 lg:fs-5">
                              {"$120.00"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                  <SiteLink href="/shop-checkout" className="btn btn-md xl:btn-lg btn-primary text-nowrap w-100 mt-1">
                    {"Proceed to checkout"}
                  </SiteLink>
                </div>
                <div className="panel vstack gap-1 lg:gap-2">
                  <h5 className="h5 sm:h4 mx-0">
                    {"You may interested in:"}
                  </h5>
                  <div className="row child-cols-6 gy-4 gx-2">
                    <div>
                      <article className="product type-product panel">
                        <div className="vstack gap-2">
                          <div className="panel">
                            <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-03.jpg" alt="White Classic Watch" data-uc-img="loading: lazy" />
                              <SiteLink href="/shop-product-detail" className="position-cover" data-caption="White Classic Watch"></SiteLink>
                            </figure>
                            <span className="position-absolute top-0 start-0 m-1 fs-7 ft-secondary lh-sm h-16px px-narrow bg-yellow-400 text-dark">
                              {"67%"}
                            </span>
                          </div>
                          <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                            <h5 className="h6 m-0">
                              <SiteLink className="text-none" href="/shop-product-detail">
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
                            <a className="btn btn-text text-none text-primary border-bottom fs-7 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
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
                            <figure className="featured-image m-0 ratio ratio-1x1 uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                              <img className="media-cover image uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-04.jpg" alt="Stylish Starbucks" data-uc-img="loading: lazy" />
                              <SiteLink href="/shop-product-detail" className="position-cover" data-caption="Stylish Starbucks"></SiteLink>
                            </figure>
                          </div>
                          <div className="content vstack items-center gap-1 fs-6 text-center xl:mt-1">
                            <h5 className="h6 m-0">
                              <SiteLink className="text-none" href="/shop-product-detail">
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
                            <a className="btn btn-text text-none text-primary border-bottom fs-7 mt-1 pb-narrow" href="#uc-cart-panel" data-uc-toggle="">
                              {"Add to cart"}
                            </a>
                          </div>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
