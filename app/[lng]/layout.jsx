// import Header from "@/components/ui/header";
import { dir } from "i18next";

const languages = ["en", "es"];

export const metadata = {
  title: "Our Services | ABA Therapy & Autism Support | Wingless Angels",
  description:
    "Explore our range of ABA therapy services for children with Autism, including personalized treatment plans, daily living skill development, academic readiness, parent training, and virtual support. Wingless Angels is here to support your child’s growth and your family’s journey.",
  robots: {
    index: true, // Allow search engines to index the page (appear in search results)
    follow: true, // Allow search engines to follow links on the page (helps with ranking other pages)
    nocache: false, // Allow caching (helps with faster loading & performance)
    googleBot: {
      index: true, // Specifically tells Google to index the page
      follow: true, // Googlebot can follow all links
      noimageindex: false, // Allows images to be indexed (good for SEO if you have visuals)
      "max-video-preview": -1, // No restriction on video previews in search results
      "max-image-preview": "large", // Show large image previews in search results
      "max-snippet": -1, // No limit on how much content Google can show in snippets
    },
  },
};

export async function generateStaticParams() {
  return languages.map((lng) => ({ lng }));
}

export default async function LangLayout({ children, params }) {
  const { lng } = await params; // Await the dynamic `params` property explicitly.

  return (
    <html lang={lng} dir={dir(lng)}>
      <body
      // className={` font-inter antialiased bg-gray-900 text-gray-100 tracking-tight`}
      >
        {/* <Header /> */}
        <div className="flex flex-col min-h-screen ">{children}</div>
      </body>
    </html>
  );
}
