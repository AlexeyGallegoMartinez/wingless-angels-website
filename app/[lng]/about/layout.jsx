// import Header from "../../../components/ui/header";
// import Footer from "../../../components/ui/footer";

export const metadata = {
  title: "About Us - Wingless Angels BS",
  description:
    "Learn more about Wingless Angels, a dedicated team of Board-Certified Behavior Analysts and ABA therapists providing compassionate, high-quality behavioral therapy for children with Autism. Discover our mission, values, and commitment to helping families thrive through evidence-based care.",
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

export default async function AboutLayout({ children, params }) {
  const { lng } = await params;
  return (
    <>
      {/* <Header lng={lng} /> */}
      <main className="">{children}</main>
      {/* <Footer lng={lng} /> */}
    </>
  );
}
