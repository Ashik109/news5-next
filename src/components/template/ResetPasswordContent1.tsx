import { SiteLink } from "@/components/DemoContext";

export default function ResetPasswordContent1() {
  return (
    <div id="wrapper" className="wrap overflow-x-hidden">
  <div id="sign-in" className="sign-in section panel overflow-hidden">
    <div className="section-outer panel">
      <div className="section-inner panel">
        <div className="row child-cols-12 lg:child-cols-6 g-0" data-uc-grid="">
          <div className="d-none lg:d-block">
            <figure className="panel h-100 m-0 bg-gray-25 dark:bg-gray-900 bg-gray-25 dark:bg-gray-800">
              <canvas className="h-100 w-100"></canvas>
              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/demo-seven/common/my-account.jpg" alt="My account" data-uc-img="loading: lazy" />
            </figure>
          </div>
          <div>
            <div className="panel vstack md:items-center justify-center h-screen overflow-hidden">
              <div data-anime="targets: >*; translateY: [-24, 0]; opacity: [0, 1]; easing: easeInOutCubic; duration: 750; delay: anime.stagger(100);">
                <div className="uc-logo cstack mx-auto mb-6 lg:mb-8">
                  <SiteLink href="/">
                    <img className="w-100px lg:w-128px text-dark dark:text-white hover:text-primary transition-color duration-150 d-none dark:d-block" src="/assets/images/demo-seven/common/logo-dark.svg" alt="Reset password" />
                    <img className="w-100px lg:w-128px text-dark dark:text-white hover:text-primary transition-color duration-150 d-block dark:d-none" src="/assets/images/demo-seven/common/logo-light.svg" alt="Reset password" />
                  </SiteLink>
                </div>
              </div>
              <div className="panel py-4 px-2">
                <div className="panel vstack gap-3 w-100 sm:w-350px mx-auto text-center" data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeInOutCubic; duration: 750; delay: anime.stagger(100);">
                  <h1 className="h4 sm:h3">
                    {"Reset password"}
                  </h1>
                  <form className="vstack gap-2">
                    <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="email" placeholder="Your email" required />
                    <div className="form-check text-start">
                      <input id="form_human_verify" className="form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="checkbox" required />
                      <label htmlFor="form_human_verify" className="form-check-label fs-6">
                        <span>
                          {"I'm not a robot"}
                        </span>
                        {". "}
                      </label>
                    </div>
                    <button className="btn btn-primary btn-sm mt-1" type="submit">
                      {"Reset my password"}
                    </button>
                  </form>
                  <p className="mt-2 sm:m-0">
                    {"Remember your password? "}
                    <SiteLink className="uc-link" href="/sign-in">
                      {"Sign in"}
                    </SiteLink>
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
  );
}
