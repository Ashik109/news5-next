import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu3 from "@/components/template/MobileMenu3";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal3 from "@/components/template/NewsletterModal3";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header3 from "@/components/template/Header3";
import ShopCart2Content1 from "@/components/template/ShopCart2Content1";
import Footer3 from "@/components/template/Footer3";

export const metadata: Metadata = { title: "Cart — v2 - News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-five" theme="/assets/css/theme/demo-five.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu3 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal3 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header3 />
<ShopCart2Content1 />
<Footer3 />
    </TemplateShell>
  );
}
