import { SiteLink } from "@/components/DemoContext";

export default function PageFaqContent1() {
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
          <span className="opacity-50">
            {"FAQ"}
          </span>
        </li>
      </ul>
    </div>
  </div>
  <div className="section py-4 lg:py-6 xl:py-8">
    <div className="container max-w-lg">
      <div className="page-wrap panel vstack gap-4 lg:gap-6 xl:gap-8">
        <header className="page-header panel vstack justify-center gap-2 lg:gap-4 text-center">
          <div className="panel">
            <h1 className="h3 lg:h1 m-0">
              {"FAQ"}
            </h1>
          </div>
        </header>
        <div className="page-content panel fs-6 md:fs-5">
          <h3 className="h4 md:h3 mb-2">
            {"This is you first question?"}
          </h3>
          <p>
            {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam."}
          </p>
          <p>
            {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum."}
          </p>
          <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
            {"This is you second question?"}
          </h3>
          <p>
            {"Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam."}
          </p>
          <p>
            {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum."}
          </p>
          <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
            {"This is you third question?"}
          </h3>
          <p>
            {"Dolor sit amet consectetur adipisicing elit. Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam."}
          </p>
          <p>
            {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum."}
          </p>
          <h3 className="h4 md:h3 mt-3 lg:mt-6 mb-2">
            {"This is you fourth question?"}
          </h3>
          <p>
            {"Sit amet consectetur adipisicing elit. Sequi, cum esse possimus officiis amet ea voluptatibus libero! Dolorum assumenda esse, deserunt ipsum ad iusto! Praesentium error nobis tenetur at, quis nostrum facere excepturi architecto totam."}
          </p>
          <p>
            {"Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore, soluta alias eaque modi ipsum sint iusto fugiat vero velit rerum."}
          </p>
        </div>
        <div className="page-footer panel">
          <p className="fs-7 opacity-60 m-0">
            {"Last updated: 27 Oct, 2024"}
          </p>
        </div>
      </div>
    </div>
  </div>
</div>
  );
}
