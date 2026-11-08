import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu3 from "@/components/template/MobileMenu3";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcContactForm1 from "@/components/template/UcContactForm1";
import BackToTop1 from "@/components/template/BackToTop1";
import Page404Content1 from "@/components/template/Page404Content1";

export const metadata: Metadata = { title: "404 page" };

export default function Page() {
  return (
    <TemplateShell demo="demo-five" theme="/assets/css/theme/demo-five.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu3 />
<UcCartPanel1 />
<UcContactForm1 />
<BackToTop1 />
<Page404Content1 />
    </TemplateShell>
  );
}
