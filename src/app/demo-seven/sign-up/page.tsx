import type { Metadata } from "next";
import { SiteLink } from "@/components/DemoContext";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu6 from "@/components/template/MobileMenu6";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcContactForm1 from "@/components/template/UcContactForm1";
import BackToTop1 from "@/components/template/BackToTop1";

export const metadata: Metadata = { title: "Create an account" };

export default function Page() {
  return (
    <TemplateShell demo="demo-seven" theme="/assets/css/theme/main.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu6 />
<UcCartPanel1 />
<UcContactForm1 />
<BackToTop1 />
<div id="wrapper" className="wrap overflow-x-hidden">
  <div id="sign-in" className="sign-in section panel overflow-hidden">
    <div className="section-outer panel">
      <div className="section-inner panel">
        <div className="row child-cols-12 lg:child-cols-6 g-0" data-uc-grid="">
          <div className="d-none lg:d-block">
            <figure className="panel h-100 m-0 bg-gray-25 dark:bg-gray-900 bg-gray-25 dark:bg-gray-800">
              <canvas className="h-100 w-100"></canvas>
              <img className="media-cover image" src="/assets/images/common/img-fallback.png" data-src="/assets/images/main/common/my-account.jpg" alt="My account" data-uc-img="loading: lazy" />
            </figure>
          </div>
          <div>
            <div className="panel vstack md:items-center justify-center h-screen overflow-hidden">
              <div data-anime="targets: >*; translateY: [-24, 0]; opacity: [0, 1]; easing: easeInOutCubic; duration: 750; delay: anime.stagger(100);">
                <div className="uc-logo cstack mx-auto mb-6 lg:mb-8">
                  <SiteLink href="/">
                    <img className="w-100px lg:w-128px text-dark dark:text-white hover:text-primary transition-color duration-150 d-none dark:d-block" src="/assets/images/main/common/logo-dark.svg" alt="Create an account" />
                    <img className="w-100px lg:w-128px text-dark dark:text-white hover:text-primary transition-color duration-150 d-block dark:d-none" src="/assets/images/main/common/logo-light.svg" alt="Create an account" />
                  </SiteLink>
                </div>
              </div>
              <div className="panel py-4 px-2">
                <div className="panel vstack gap-3 w-100 sm:w-350px mx-auto text-center" data-anime="targets: >*; translateY: [24, 0]; opacity: [0, 1]; easing: easeInOutExpo; duration: 750; delay: anime.stagger(100);">
                  <h1 className="h4 sm:h3">
                    {"Create an account"}
                  </h1>
                  <div className="hstack gap-2">
                    <a href="#google" className="btn btn-sm btn-alt-danger w-100 rounded bg-gray-50 dark:bg-gray-800 text-dark dark:text-white">
                      <i className="icon icon-1 unicon-logo-google"></i>
                    </a>
                    <a href="#facebook" className="btn btn-sm btn-alt-blue-700 w-100 rounded bg-gray-50 dark:bg-gray-800 text-dark dark:text-white">
                      <i className="icon icon-1 unicon-logo-facebook"></i>
                    </a>
                    <a href="#github" className="btn btn-sm btn-alt-dark w-100 rounded bg-gray-50 dark:bg-gray-800 text-dark dark:text-white">
                      <i className="icon icon-1 unicon-logo-github"></i>
                    </a>
                  </div>
                  <div className="panel h-24px">
                    <hr className="position-absolute top-50 start-50 translate-middle hr m-0 w-100 dark:opacity-30" />
                    <span className="position-absolute top-50 start-50 translate-middle px-1 fs-7 fw-medium text-uppercase bg-white dark:bg-black">
                      {"Or"}
                    </span>
                  </div>
                  <form className="vstack gap-2">
                    <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="email" placeholder="Your email" required />
                    <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="password" placeholder="Password" autoComplete="new-password" required />
                    <div className="hstack text-start">
                      <div className="form-check text-start">
                        <input id="form_accept_terms" className="form-check-input rounded bg-white dark:bg-opacity-0 dark:text-white dark:border-gray-300 dark:border-opacity-30" type="checkbox" required />
                        <label htmlFor="form_accept_terms" className="hstack justify-between form-check-label fs-6">
                          {"I read and accept the "}
                          <SiteLink href="/page-terms" className="uc-link ms-narrow">
                            {"terms of use"}
                          </SiteLink>
                          {". "}
                        </label>
                      </div>
                    </div>
                    <button className="btn btn-primary btn-sm mt-1" type="submit">
                      {"Create my account"}
                    </button>
                  </form>
                  <p>
                    {"Already have an account? "}
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
    </TemplateShell>
  );
}
