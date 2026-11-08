import type { Metadata } from "next";
import TemplateShell from "@/components/TemplateShell";
import SearchModal1 from "@/components/template/SearchModal1";
import MobileMenu11 from "@/components/template/MobileMenu11";
import UcCartPanel1 from "@/components/template/UcCartPanel1";
import UcContactForm1 from "@/components/template/UcContactForm1";
import BackToTop1 from "@/components/template/BackToTop1";
import SignUpContent1 from "@/components/template/SignUpContent1";

export const metadata: Metadata = { title: "Create an account" };

export default function Page() {
  return (
    <TemplateShell demo="main" theme="/assets/css/theme/demo-seven.min.css" bodyClass="uni-body panel bg-white text-gray-900 dark:bg-black dark:text-gray-200 overflow-x-hidden">
<SearchModal1 />
<MobileMenu11 />
<UcCartPanel1 />
<UcContactForm1 />
<BackToTop1 />
<SignUpContent1 />
    </TemplateShell>
  );
}
