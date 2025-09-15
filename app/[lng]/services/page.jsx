import CTA from "@/components/footer/cta";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import AboutServices from "@/components/service/about-services";
import HowTo from "@/components/service/how-to";

export default async function ServicesPage({ params }) {
  const { lng } = await params;
  return (
    <div className="">
      <Header lng={lng} />
      <AboutServices lng={lng} />
      <HowTo lng={lng} />
      <CTA lng={lng} />
      <Footer lng={lng} />
    </div>
  );
}
