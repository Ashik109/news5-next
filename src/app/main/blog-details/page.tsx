import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu11 from "@/components/template/MobileMenu11";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcFavoritesModal1 from "@/components/template/UcFavoritesModal1";
import NewsletterModal2 from "@/components/template/NewsletterModal2";
import AccountModal1 from "@/components/template/AccountModal1";
import CookieNotice1 from "@/components/template/CookieNotice1";
import BackToTop1 from "@/components/template/BackToTop1";
import Header11 from "@/components/template/Header11";
import BlogDetailsContent1 from "@/components/template/BlogDetailsContent1";
import Footer2 from "@/components/template/Footer2";

export const metadata: Metadata = { title: "The Rise of Gourmet Street Food: Trends and Top Picks - News5" };

export default function Page() {
  return (
    <TemplateShell demo="main" theme="/assets/css/theme/demo-seven.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu11 />
<UcCartPanel1 />
<UcFavoritesModal1 />
<NewsletterModal2 />
<AccountModal1 />
<CookieNotice1 />
<BackToTop1 />
<Header11 />
<BlogDetailsContent1 />
<Footer2 />
    </TemplateShell>
  );
}
