// import Header from "../../../components/ui/header";
// import Footer from "../../../components/ui/footer";

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

export default async function ServicesLayout({ children, params }) {
  const { lng } = await params;
  return (
    <>
      {/* <Header lng={lng} /> */}
      <main className="grow">{children}</main>
      {/* <Footer lng={lng} /> */}
    </>
  );
}
