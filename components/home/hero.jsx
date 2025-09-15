import heroImage from "@/public/images/womanreading.png";
import Image from "next/image";
import Background from "../ui/background";
import HomeHeading from "./home-heading";

export default async function Hero({ lng }) {
  return (
    <section className="relative  flex items-center bg-gradient-to-b from-[hsl(185,84%,98%)] to-[hsl(0,0%,100%)] overflow-hidden">
      <Background />
      <div className="container mx-auto px-10 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <HomeHeading lng={lng} />

          <div className="relative ">
            <Image
              src={heroImage}
              alt="Autism support center with children and adults in a welcoming environment"
              className="rounded-2xl shadow-hero w-full h-auto "
            />
            <div className="absolute inset-0 rounded-2xl bg-hero-gradient opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  );
}
