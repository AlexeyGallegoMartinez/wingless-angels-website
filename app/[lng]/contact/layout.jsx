// import Header from "../../../components/ui/header";
// import Footer from "../../../components/ui/footer";

export const metadata = {
  title: "Contact Us | Wingless Angels ABA Therapy",
  description:
    "Get in touch with Wingless Angels to learn more about our ABA therapy services for children with Autism. We’re here to answer your questions, schedule consultations, and support your family in English or Spanish. Reach out today to begin your journey.",
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

export default async function ContactLayout({ children, params }) {
  const { lng } = await params;
  return (
    <>
      {/* <Header lng={lng} /> */}
      <main className="grow">{children}</main>
      {/* <Footer lng={lng} /> */}
    </>
  );
}
