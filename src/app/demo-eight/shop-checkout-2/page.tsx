import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu1 from "@/components/template/MobileMenu1";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal1 from "@/components/template/NewsletterModal1";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header1 from "@/components/template/Header1";
import ShopCheckout2Content1 from "@/components/template/ShopCheckout2Content1";
import Footer1 from "@/components/template/Footer1";

export const metadata: Metadata = { title: "Checkout — v2 - News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-eight" theme="/assets/css/theme/demo-eight.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu1 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal1 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header1 />
<ShopCheckout2Content1 />
<Footer1 />
    </TemplateShell>
  );
}
