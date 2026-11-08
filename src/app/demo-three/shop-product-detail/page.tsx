import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu9 from "@/components/template/MobileMenu9";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal9 from "@/components/template/NewsletterModal9";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header9 from "@/components/template/Header9";
import ShopProductDetailContent1 from "@/components/template/ShopProductDetailContent1";
import Footer9 from "@/components/template/Footer9";

export const metadata: Metadata = { title: "Disney Toys - News5" };

export default function Page() {
  return (
    <TemplateShell demo="demo-three" theme="/assets/css/theme/demo-three.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu9 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal9 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header9 />
<ShopProductDetailContent1 />
<Footer9 />
    </TemplateShell>
  );
}
