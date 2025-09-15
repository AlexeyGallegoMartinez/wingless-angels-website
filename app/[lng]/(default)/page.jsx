import CTA from "@/components/footer/cta";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";
import About from "@/components/home/about";
import Hero from "@/components/home/hero";
import Services from "@/components/home/services";

export default async function HomePage({ params }) {
  const { lng } = await params;
  return (
    <div className="">
      <Header lng={lng} />
      <Hero lng={lng} />
      <Services lng={lng} />
      <About lng={lng} />
      <CTA lng={lng} />
      <Footer lng={lng} />
    </div>
  );
}
