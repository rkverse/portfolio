import Link from "next/link";
import { cn } from "@/lib/utils";

export default function Button({ href, children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center gap-2 font-mono font-semibold text-sm rounded-lg px-6 py-2.5 transition-all duration-200";
  const variants = {
    primary: "bg-[#6366f1] text-white hover:bg-[#818cf8] hover:shadow-lg hover:shadow-[#6366f1]/30",
    outline: "border border-[#3f3f52] text-[#f8f9fa] hover:border-[#6366f1] hover:text-[#6366f1]",
    ghost: "text-[#a1a1b3] hover:text-[#f8f9fa]",
  };

  if (href) {
    return (
      <Link href={href} className={cn(base, variants[variant], className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button className={cn(base, variants[variant], className)} {...props}>
      {children}
    </button>
  );
}