import { SiteLink } from "@/components/DemoContext";

export default function ShopOrderContent1() {
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
            {"Order confirmation"}
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div className="section py-4 lg:py-6 xl:py-8">
    <div className="container max-w-lg">
      <div className="panel vstack gap-4 lg:gap-6 xl:gap-8">
        <header className="shop-header panel vstack justify-center gap-2 lg:gap-4 text-center">
          <div className="panel">
            <h1 className="h3 lg:h1">
              {"Thank you for your order!"}
            </h1>
            <p className="fs-6 sm:fs-5 opacity-60">
              {"Your order has been placed successfully."}
            </p>
          </div>
        </header>
        <div>
          <div className="panel vstack gap-8">
            <div className="panel vstack gap-4">
              <form className="panel max-h-sm overflow-auto border border-gray-50 dark:text-white dark:border-gray-700" action="?">
                <table className="table align-middle overflow-auto m-0 fs-6 dark:text-white dark:border-gray-700">
                  <thead className="sticky-top ft-secondary bg-gray-800 text-white z-1">
                    <tr>
                      <th className="lg:w-1/3">
                        {"Product"}
                      </th>
                      <th className="lg:w-1/6">
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
              <div className="vstack gap-2">
                <p className="text-center">
                  {"Paid via "}
                  <span className="bg-warning-100 text-dark px-narrow">
                    {"Credit Card (450XXXXXX230)"}
                  </span>
                  {" at "}
                  <span className="bg-warning-100 text-dark px-narrow">
                    {"24 December, 2024"}
                  </span>
                  {" — "}
                  <a href="#" className="text-primary">
                    {"Download invoice"}
                  </a>
                </p>
                <hr />
                <p className="text-center opacity-60">
                  {" Your order has been shipped to your shipping address via DHL. "}
                  <br />
                  {" Estimated arrival time is 15 days. "}
                </p>
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
