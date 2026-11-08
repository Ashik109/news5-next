
export default function NewsletterModal8() {
  return (
    <div id="uc-newsletter-modal" data-uc-modal="overlay: true">
  <div className="uc-modal-dialog w-800px bg-white text-dark dark:bg-gray-900 dark:text-white rounded overflow-hidden">
    <button className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" type="button">
      <i className="unicon-close"></i>
    </button>
    <div className="row md:child-cols-6 col-match g-0">
      <div className="d-none md:d-flex">
        <div className="position-relative w-100 ratio-1x1">
          <img className="media-cover" src="/assets/images/demo-ten/common/newsletter.jpg" alt="Newsletter image" />
        </div>
      </div>
      <div>
        <div className="panel vstack self-center p-4 md:py-8 text-center">
          <h3 className="h3 md:h2">
            {"Subscribe to the Newsletter"}
          </h3>
          <p className="ft-tertiary">
            {"Join 10k+ people to get notified about new posts, news and tips."}
          </p>
          <div className="panel mt-2 lg:mt-4">
            <form className="vstack gap-1">
              <input type="email" className="form-control form-control-sm w-full fs-6 bg-white dark:border-white dark:border-gray-700 dark:text-dark" placeholder="Your email address.." />
              <button type="submit" className="btn btn-sm btn-primary">
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
  );
}
