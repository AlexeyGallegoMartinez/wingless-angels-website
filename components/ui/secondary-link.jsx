import Link from "next/link";

export default function SecondaryLink({ title, href }) {
  return (
    <Link
      href={href}
      className="px-8 py-6 text-lg font-semibold border rounded-md
         border-[hsl(202,86%,23%)]/20 text-[hsl(202,86%,23%)]
         transition-all duration-300
         hover:scale-105 hover:shadow-md hover:bg-[hsl(185,84%,93%)]"
    >
      {title}
    </Link>
  );
}
