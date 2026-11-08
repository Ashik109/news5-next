import type { DetailRecord } from "@/data/details";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu6 from "@/components/template/MobileMenu6";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal6 from "@/components/template/NewsletterModal6";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header6 from "@/components/template/Header6";
import ShopProductDetailContent1 from "@/components/template/ShopProductDetailContent1";
import Footer6 from "@/components/template/Footer6";

export default function DetailLayout({ detail }: { detail: DetailRecord }) {
  return (<TemplateShell demo="demo-seven" theme="/assets/css/theme/main.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu6 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal6 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header6 />
<ShopProductDetailContent1 detail={detail} />
<Footer6 />
</TemplateShell>);
}
