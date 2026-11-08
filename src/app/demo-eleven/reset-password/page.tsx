import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu2 from "@/components/template/MobileMenu2";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcContactForm1 from "@/components/template/UcContactForm1";
import BackToTop1 from "@/components/template/BackToTop1";
import ResetPasswordContent1 from "@/components/template/ResetPasswordContent1";

export const metadata: Metadata = { title: "Reset password" };

export default function Page() {
  return (
    <TemplateShell demo="demo-eleven" theme="/assets/css/theme/demo-seven.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu2 />
<UcCartPanel1 />
<UcContactForm1 />
<BackToTop1 />
<ResetPasswordContent1 />
    </TemplateShell>
  );
}
