import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu4 from "@/components/template/MobileMenu4";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal4 from "@/components/template/NewsletterModal4";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header4 from "@/components/template/Header4";
import PageFaqContent1 from "@/components/template/PageFaqContent1";
import Footer4 from "@/components/template/Footer4";

export const metadata: Metadata = { title: "FAQ - News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-four" theme="/assets/css/theme/demo-four.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu4 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal4 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header4 />
<PageFaqContent1 />
<Footer4 />
    </TemplateShell>
  );
}
