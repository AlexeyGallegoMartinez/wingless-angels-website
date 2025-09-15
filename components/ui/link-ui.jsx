import Link from "next/link";

export default function LinkUI({ title, href }) {
  return (
    <Link
      href={href}
      className="relative overflow-hidden px-10 py-6 text-lg font-semibold text-white rounded-md
         bg-gradient-to-r from-[hsl(202,86%,23%)] to-[hsl(185,65%,35%)]
         shadow-lg transition-all duration-300
         hover:scale-105 hover:shadow-xl"
    >
      <span className="relative z-10">{title}</span>
      <span
        className="absolute inset-0 rounded-md opacity-0 hover:opacity-30
           bg-gradient-to-r from-[hsl(185,65%,35%)] via-[hsl(202,86%,23%)] to-[hsl(185,65%,35%)]
           bg-[length:200%_200%] animate-[shimmer_3s_linear_infinite]"
      ></span>
    </Link>
  );
}
