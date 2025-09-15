import AboutLanding from "@/components/about/about-landing";
import CTA from "@/components/footer/cta";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default async function AboutPage({ params }) {
  const { lng } = await params;
  return (
    <div className="">
      <Header lng={lng} />
      <AboutLanding lng={lng} />
      <CTA lng={lng} />
      <Footer lng={lng} />
    </div>
  );
}
