import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu8 from "@/components/template/MobileMenu8";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal8 from "@/components/template/NewsletterModal8";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header8 from "@/components/template/Header8";
import ShopCategoryContent1 from "@/components/template/ShopCategoryContent1";
import Footer8 from "@/components/template/Footer8";

export const metadata: Metadata = { title: "Toys - News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-ten" theme="/assets/css/theme/demo-ten.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu8 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal8 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header8 />
<ShopCategoryContent1 />
<Footer8 />
    </TemplateShell>
  );
}
