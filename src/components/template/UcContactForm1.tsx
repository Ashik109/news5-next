
export default function UcContactForm1() {
  return (
    <div id="uc-contact-form" data-uc-modal="overlay: true">
  <div className="uc-modal-dialog lg:max-w-500px bg-white text-dark dark:bg-gray-800 dark:text-white rounded">
    <button className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" type="button">
      <i className="unicon-close"></i>
    </button>
    <div className="panel vstack gap-2 md:gap-4 text-center">
      <div className="panel cstack px-3 lg:px-4 py-4 lg:py-8 m-0 lg:mx-auto">
        <div className="panel vstack justify-center items-center gap-2 sm:gap-4 text-center">
          <h4 className="h5 lg:h4 m-0">
            {"Let's get in touch"}
          </h4>
          <div className="panel w-100 sm:w-350px xl:w-400px mx-auto">
            <form className="vstack gap-2">
              <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:border-white" type="text" placeholder="Full name" required />
              <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:border-white" type="email" placeholder="Your email" required />
              <input className="form-control form-control-sm h-40px w-full fs-6 bg-white dark:border-white" type="text" placeholder="Subject" />
              <textarea className="form-control min-h-150px w-full bg-white dark:border-white" placeholder="Your message.." required defaultValue={""} />
              <button className="btn btn-primary btn-md mt-2" type="submit">
                {"Send message"}
              </button>
            </form>
          </div>
          <p>
            {"Or drop us a message via "}
            <a className="uc-link" href="mailto:hello@news5.co">
              {"email"}
            </a>
            {"."}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
