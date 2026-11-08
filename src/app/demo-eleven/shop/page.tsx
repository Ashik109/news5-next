import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu2 from "@/components/template/MobileMenu2";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal2 from "@/components/template/NewsletterModal2";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header2 from "@/components/template/Header2";
import ShopContent1 from "@/components/template/ShopContent1";
import Footer2 from "@/components/template/Footer2";

export const metadata: Metadata = { title: "Shop - News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-eleven" theme="/assets/css/theme/demo-seven.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu2 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal2 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header2 />
<ShopContent1 />
<Footer2 />
    </TemplateShell>
  );
}
