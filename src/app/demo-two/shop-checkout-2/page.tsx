import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu10 from "@/components/template/MobileMenu10";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal10 from "@/components/template/NewsletterModal10";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header10 from "@/components/template/Header10";
import ShopCheckout2Content1 from "@/components/template/ShopCheckout2Content1";
import Footer10 from "@/components/template/Footer10";

export const metadata: Metadata = { title: "Checkout — v2 - News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-two" theme="/assets/css/theme/demo-two.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu10 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal10 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header10 />
<ShopCheckout2Content1 />
<Footer10 />
    </TemplateShell>
  );
}
