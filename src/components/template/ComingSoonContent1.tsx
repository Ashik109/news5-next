
export default function ComingSoonContent1() {
  return (
    <div id="wrapper" className="wrap overflow-x-hidden">
  <div className="section bg-white dark:bg-gray-900 text-dark dark:text-white">
    <div className="container max-w-xl">
      <div className="panel vstack justify-center items-center gap-2 sm:gap-4 lg:gap-8 text-center h-screen">
        <h2 className="display-6 sm:display-5 lg:display-4 -ls-3 mt-8 text-primary">
          {"Coming soon!"}
        </h2>
        <div className="row child-cols-3 items-center justify-center g-1 sm:g-2" data-uc-countdown="date: 2024-09-12T16:09:10+00:00">
          <div>
            <div>
              <div className="h2 lg:h1 w-72px sm:min-w-96px py-2 border rounded uc-countdown-days"></div>
              <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
                {"Days"}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="h2 lg:h1 w-72px sm:min-w-96px py-2 border rounded uc-countdown-hours"></div>
              <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
                {"Hours"}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="h2 lg:h1 w-72px sm:min-w-96px py-2 border rounded uc-countdown-minutes"></div>
              <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
                {"Minutes"}
              </div>
            </div>
          </div>
          <div>
            <div>
              <div className="h2 lg:h1 w-72px sm:min-w-96px py-2 border rounded uc-countdown-seconds"></div>
              <div className="uc-countdown-label mt-1 text-center d-none sm:d-block opacity-60">
                {"Seconds"}
              </div>
            </div>
          </div>
        </div>
        <p className="fs-6 xl:fs-5 mt-4">
          {" Comeback again when we’re live! "}
          <br />
          {" Thank you for understanding and patience! "}
        </p>
      </div>
    </div>
  </div>
</div>
  );
}
