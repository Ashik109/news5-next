import type { DetailRecord } from "@/data/details";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu5 from "@/components/template/MobileMenu5";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal5 from "@/components/template/NewsletterModal5";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header5 from "@/components/template/Header5";
import ShopProductDetail2Content1 from "@/components/template/ShopProductDetail2Content1";
import Footer5 from "@/components/template/Footer5";

export default function DetailLayout({ detail }: { detail: DetailRecord }) {
  return (<TemplateShell demo="demo-nine" theme="/assets/css/theme/demo-nine.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu5 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal5 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header5 />
<ShopProductDetail2Content1 detail={detail} />
<Footer5 />
</TemplateShell>);
}
