
export default function BackToTop1() {
  return (
    <div className="backtotop-wrap position-fixed bottom-0 end-0 z-99 m-2 vstack">
  <div className="darkmode-trigger cstack w-40px h-40px rounded-circle text-none bg-gray-100 dark:bg-gray-700 dark:text-white" data-darkmode-toggle="">
    <label className="switch">
      <span className="sr-only">
        {"Dark mode toggle"}
      </span>
      <input type="checkbox" />
      <span className="slider fs-5"></span>
    </label>
  </div>
  <a className="btn btn-sm bg-primary text-white w-40px h-40px rounded-circle" href="#to_top" data-uc-backtotop="">
    <i className="icon-2 unicon-chevron-up"></i>
  </a>
</div>
  );
}
