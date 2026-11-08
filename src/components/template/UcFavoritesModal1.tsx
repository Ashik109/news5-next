import { SiteLink } from "@/components/DemoContext";

export default function UcFavoritesModal1() {
  return (
    <div id="uc-favorites-modal" data-uc-modal="overlay: true">
  <div className="uc-modal-dialog lg:max-w-500px bg-white text-dark dark:bg-gray-800 dark:text-white rounded">
    <button className="uc-modal-close-default p-0 icon-3 btn border-0 dark:text-white dark:text-opacity-50 hover:text-primary hover:rotate-90 duration-150 transition-all" type="button">
      <i className="unicon-close"></i>
    </button>
    <div className="panel vstack justify-center items-center gap-2 text-center px-3 py-8">
      <i className="icon icon-4 unicon-bookmark mb-2 text-primary dark:text-white"></i>
      <h2 className="h4 md:h3 m-0">
        {"Saved articles"}
      </h2>
      <p className="fs-5 opacity-60">
        {"You have not yet added any article to your bookmarks!"}
      </p>
      <SiteLink href="/" className="btn btn-sm btn-primary mt-2 uc-modal-close">
        {"Browse articles"}
      </SiteLink>
    </div>
  </div>
</div>
  );
}
