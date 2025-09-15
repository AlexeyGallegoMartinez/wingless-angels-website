import AOSInitializer from "../../../components/ui/aos-initializer";

export const metadata = {
  title: "Wingless Angels BS",
  description:
    "Wingless Angels provides compassionate, evidence-based ABA therapy and behavioral services for children with Autism. Our Board-Certified Behavior Analysts and ABA therapists deliver individualized care focused on daily living, academic, and social-emotional skills. Services available in English and Spanish.",
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

export default function DefaultLayout({ children }) {
  return (
    <>
      {children}
      <AOSInitializer />
    </>
  );
}
