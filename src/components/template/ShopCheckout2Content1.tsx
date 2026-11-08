import { SiteLink } from "@/components/DemoContext";

export default function ShopCheckout2Content1() {
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
            {"Checkout — v2"}
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
              {"Checkout — v2"}
            </h1>
          </div>
        </header>
        <div>
          <div className="row gy-4 gx-4 xl:gx-8">
            <div className="col">
              <div className="panel vstack gap-4" data-uc-sticky="bottom: true; offset: 32;">
                <h3 className="h5 lg:h4 m-0">
                  {"Billing details:"}
                </h3>
                <form className="panel vstack gap-2 lg:gap-3" action="?">
                  <div className="row g-2 child-cols-12 lg:child-cols-6">
                    <div className="form-group">
                      <label className="form-label ft-secondary" htmlFor="checkout_firstname">
                        {"Firstname "}
                        <sup className="text-danger">
                          {"*"}
                        </sup>
                      </label>
                      <input type="text" id="checkout_firstname" className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" placeholder="John" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label ft-secondary" htmlFor="checkout_lastname">
                        {"Lastname "}
                        <sup className="text-danger">
                          {"*"}
                        </sup>
                      </label>
                      <input type="text" id="checkout_lastname" className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" placeholder="Doe" required />
                    </div>
                  </div>
                  <div className="form-group">
                    <label className="form-label ft-secondary" htmlFor="checkout_email">
                      {"Email "}
                      <sup className="text-danger">
                        {"*"}
                      </sup>
                    </label>
                    <input type="email" id="checkout_email" className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" placeholder="contact@johndeo.co" required />
                  </div>
                  <div className="form-group">
                    <label className="form-label ft-secondary" htmlFor="checkout_country">
                      {"Country "}
                      <sup className="text-danger">
                        {"*"}
                      </sup>
                    </label>
                    <select className="form-select rounded p-2 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" id="checkout_country" aria-label="checkout_country" required defaultValue="">
                      <option value="">
                        {"Morocco"}
                      </option>
                      <option value="australia">
                        {"Australia"}
                      </option>
                      <option value="usa">
                        {"USA"}
                      </option>
                      <option value="kingdom">
                        {"United Kingdom"}
                      </option>
                    </select>
                  </div>
                  <div className="form-group">
                    <label className="form-label ft-secondary" htmlFor="checkout_street_address">
                      {"Street address "}
                      <sup className="text-danger">
                        {"*"}
                      </sup>
                    </label>
                    <input type="text" id="checkout_street_address" className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" placeholder="House number and street name" required />
                    <input type="text" id="checkout_street_address_2" className="form-control mt-1 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" placeholder="Apartment, suite, unit, etc." />
                  </div>
                  <div className="row g-2 child-cols-12 lg:child-cols-4">
                    <div className="form-group">
                      <label className="form-label ft-secondary" htmlFor="checkout_town_city">
                        {"Town / City "}
                        <sup className="text-danger">
                          {"*"}
                        </sup>
                      </label>
                      <input type="text" id="checkout_town_city" className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" placeholder="Salé" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label ft-secondary" htmlFor="checkout_state_county">
                        {"State / County "}
                        <sup className="text-danger">
                          {"*"}
                        </sup>
                      </label>
                      <input type="text" id="checkout_state_county" className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" placeholder="Rabat / Salé / Zemmour-Zair" required />
                    </div>
                    <div className="form-group">
                      <label className="form-label ft-secondary" htmlFor="checkout_postcode_zip">
                        {"Postcode / ZIP "}
                        <sup className="text-danger">
                          {"*"}
                        </sup>
                      </label>
                      <input type="text" id="checkout_postcode_zip" className="form-control dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800" placeholder="11000" required />
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="col-12 lg:col-5">
              <div className="panel vstack gap-4" data-uc-sticky="bottom: true; offset: 32;">
                <div className="panel vstack gap-4">
                  <h3 className="h5 lg:h4 m-0">
                    {"Your order:"}
                  </h3>
                  <form className="panel max-h-sm overflow-auto border border-gray-50 dark:text-white dark:border-gray-700" action="?">
                    <table className="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                      <thead className="sticky-top ft-secondary bg-gray-800 text-white z-1">
                        <tr>
                          <th className="lg:w-1/2">
                            {"Product"}
                          </th>
                          <th className="lg:w-1/2">
                            {"Subtotal"}
                          </th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <h5 className="title h6 m-0">
                              <SiteLink href="/shop-product-detail" className="text-none">
                                {"Laptop Cover"}
                              </SiteLink>
                              {" x 1"}
                            </h5>
                          </td>
                          <td>
                            <span className="subtotal">
                              {"$24.00"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="title h6 m-0">
                              <SiteLink href="/shop-product-detail" className="text-none">
                                {"Disney Toys"}
                              </SiteLink>
                              {" x 1"}
                            </h5>
                          </td>
                          <td>
                            <span className="subtotal">
                              {"$5.00"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="title h6 m-0">
                              <SiteLink href="/shop-product-detail" className="text-none">
                                {"Screen Axe"}
                              </SiteLink>
                              {" x 1"}
                            </h5>
                          </td>
                          <td>
                            <span className="subtotal">
                              {"$19.00"}
                            </span>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <h5 className="title h6 m-0">
                              <SiteLink href="/shop-product-detail" className="text-none">
                                {"Airpods Pro"}
                              </SiteLink>
                              {" x 1"}
                            </h5>
                          </td>
                          <td>
                            <span className="subtotal">
                              {"$49.00"}
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5">
                          <td>
                            <span className="fw-bold">
                              {"Subtotal"}
                            </span>
                          </td>
                          <td>
                            <span className="checkout-subtotal">
                              {"$97.00"}
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5">
                          <td>
                            <span className="fw-bold">
                              {"Shipping"}
                            </span>
                          </td>
                          <td>
                            <span className="checkout-shipping">
                              {"Flat rate: $23.00"}
                            </span>
                          </td>
                        </tr>
                        <tr className="bg-gray-25 dark:bg-gray-100 dark:bg-opacity-5">
                          <td>
                            <span className="fw-bold">
                              {"Total"}
                            </span>
                          </td>
                          <td>
                            <span className="checkout-total fw-bold">
                              {"$120.00"}
                            </span>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </form>
                </div>
                <div className="panel vstack gap-4">
                  <h3 className="h5 lg:h4 m-0">
                    {"Select payment method:"}
                  </h3>
                  <div className="panel vstack gap-2 lg:gap-4 p-2 lg:p-4 bg-gray-50 dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800 rounded">
                    <div className="vstack gap-1 lg:gap-2 fs-6 md:fs-5">
                      <div className="w-100">
                        <div className="panel p-2 bg-white border-gray-100 w-100 rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                          <div className="form-check">
                            <input className="form-check-input dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-600" type="radio" name="payment_method" id="payment_method_bacs" defaultChecked />
                            <label className="form-check-label fw-bold" htmlFor="payment_method_bacs">
                              {"Direct bank transfer"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="w-100">
                        <div className="panel p-2 bg-white border-gray-100 w-100 rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                          <div className="form-check">
                            <input className="form-check-input dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-600" type="radio" name="payment_method" id="payment_method_cod" />
                            <label className="form-check-label fw-bold" htmlFor="payment_method_cod">
                              {"Cash on delivery"}
                            </label>
                          </div>
                        </div>
                      </div>
                      <div className="w-100">
                        <div className="panel p-2 bg-white border-gray-100 w-100 rounded dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-800">
                          <div className="form-check">
                            <input className="form-check-input dark:bg-gray-100 dark:bg-opacity-5 dark:text-white dark:border-gray-600" type="radio" name="payment_method" id="payment_method_paypal" />
                            <label className="form-check-label fw-bold" htmlFor="payment_method_paypal">
                              {"PayPal"}
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <p className="text-dark dark:text-white text-opacity-60">
                      {"Your personal data will be used to process your order, support your experience throughout this website, and for other purposes described in our privacy policy."}
                    </p>
                    <SiteLink href="/shop-order" className="btn btn-md xl:btn-lg btn-primary">
                      {"Place order"}
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
</div>
  );
}
