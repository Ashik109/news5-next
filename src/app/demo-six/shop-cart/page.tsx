import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu7 from "@/components/template/MobileMenu7";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal7 from "@/components/template/NewsletterModal7";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header7 from "@/components/template/Header7";
import ShopCartContent1 from "@/components/template/ShopCartContent1";
import Footer7 from "@/components/template/Footer7";

export const metadata: Metadata = { title: "Cart - News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-six" theme="/assets/css/theme/demo-six.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu7 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal7 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header7 />
<ShopCartContent1 />
<Footer7 />
    </TemplateShell>
  );
}
