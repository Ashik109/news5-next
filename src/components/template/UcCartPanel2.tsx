import { SiteLink } from "@/components/DemoContext";

export default function UcCartPanel2() {
  return (
    <div id="uc-cart-panel" data-uc-offcanvas="overlay: true; flip: true;">
  <div className="uc-offcanvas-bar bg-white text-dark dark:bg-gray-900 dark:text-white">
    <button className="uc-offcanvas-close top-0 ltr:end-0 rtl:start-0 rtl:end-auto m-2 p-0 border-0 icon-2 lg:icon-3 btn btn-md dark:text-white transition-transform duration-150 hover:rotate-90" type="button">
      <i className="unicon-close"></i>
    </button>
    <div className="mini-cart-content vstack justify-between panel h-100">
      <div className="mini-cart-header">
        <h3 className="title h5 m-0 text-dark dark:text-white">
          {"Shopping cart"}
        </h3>
      </div>
      <div className="mini-cart-listing panel flex-1 my-4 overflow-scroll">
        <p className="alert alert-warning" hidden>
          {"Your cart empty!"}
        </p>
        <div className="panel vstack gap-3">
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-07.jpg" alt="Laptop Cover" data-uc-img="loading: lazy" />
                  <SiteLink href="/shop-product-detail" className="position-cover" data-caption="Laptop Cover"></SiteLink>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <SiteLink className="text-none text-dark dark:text-white" href="/shop-product-detail">
                      {"Laptop Cover"}
                    </SiteLink>
                  </h5>
                  <div className="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white">
                    <span className="qty">
                      {"1"}
                    </span>
                    {" x "}
                    <span className="price">
                      {"$24.00"}
                    </span>
                  </div>
                  <a href="#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-08.jpg" alt="Disney Toys" data-uc-img="loading: lazy" />
                  <SiteLink href="/shop-product-detail" className="position-cover" data-caption="Disney Toys"></SiteLink>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <SiteLink className="text-none text-dark dark:text-white" href="/shop-product-detail">
                      {"Disney Toys"}
                    </SiteLink>
                  </h5>
                  <div className="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white">
                    <span className="qty">
                      {"1"}
                    </span>
                    {" x "}
                    <span className="price">
                      {"$5.00"}
                    </span>
                  </div>
                  <a href="#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-09.jpg" alt="Screen Axe" data-uc-img="loading: lazy" />
                  <SiteLink href="/shop-product-detail" className="position-cover" data-caption="Screen Axe"></SiteLink>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <SiteLink className="text-none text-dark dark:text-white" href="/shop-product-detail">
                      {"Screen Axe"}
                    </SiteLink>
                  </h5>
                  <div className="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white">
                    <span className="qty">
                      {"1"}
                    </span>
                    {" x "}
                    <span className="price">
                      {"$19.00"}
                    </span>
                  </div>
                  <a href="#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
          <div>
            <article className="product type-product panel">
              <div className="hstack gap-2">
                <figure className="featured-image m-0 ratio ratio-1x1 w-80px uc-transition-toggle overflow-hidden bg-gray-25 dark:bg-gray-800">
                  <img className="media-cover image uc-transition-scale-up uc-transition-opaque uc-transition-scale-up uc-transition-opaque" src="/assets/images/common/img-fallback.png" data-src="/assets/images/common/products/img-10.jpg" alt="Airpods Pro" data-uc-img="loading: lazy" />
                  <SiteLink href="/shop-product-detail" className="position-cover" data-caption="Airpods Pro"></SiteLink>
                </figure>
                <div className="content vstack gap-narrow fs-6">
                  <h5 className="h6 m-0">
                    <SiteLink className="text-none text-dark dark:text-white" href="/shop-product-detail">
                      {"Airpods Pro"}
                    </SiteLink>
                  </h5>
                  <div className="hstack gap-narrow fs-7 opacity-50 text-dark dark:text-white">
                    <span className="qty">
                      {"1"}
                    </span>
                    {" x "}
                    <span className="price">
                      {"$49.00"}
                    </span>
                  </div>
                  <a href="#remove_from_cart" className="remove fs-7 text-dark dark:text-white">
                    {"Remove"}
                  </a>
                </div>
                <a href="#remove_from_cart" className="remove position-absolute top-0 end-0 btn p-0 hover:text-danger" hidden>
                  <i className="unicon-close icon-1"></i>
                </a>
              </div>
            </article>
          </div>
        </div>
      </div>
      <div className="mini-cart-footer panel pt-3 border-top">
        <div className="panel vstack gap-3 justify-between">
          <div className="mini-cart-total hstack justify-between">
            <h5 className="h5 m-0 text-dark dark:text-white">
              {"Subtotal"}
            </h5>
            <b className="fs-5">
              {"$97.00"}
            </b>
          </div>
          <div className="mini-cart-actions vstack gap-1">
            <SiteLink href="/shop-cart" className="btn btn-md btn-outline-gray-100 text-dark dark:text-white dark:border-gray-700 dark:hover:bg-gray-700">
              {"View cart"}
            </SiteLink>
            <SiteLink href="/shop-checkout" className="btn btn-md btn-primary text-white">
              {"Checkout"}
            </SiteLink>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
