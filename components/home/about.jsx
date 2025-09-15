import Image from "next/image";
import EducatorImg from "@/public/images/children.png";
import ProfileImg from "@/public/images/profile.png";
import { useTranslation } from "@/app/i18n";
import LinkUI from "../ui/link-ui";

export default async function About({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex flex-col my-20 container mx-auto px-10">
      <h1 className="text-[hsl(202,86%,23%)] text-4xl mb-12 font-bold">
        {t("home.about.heading-title")}
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 relative">
        {/* LEFT SIDE (scrolls with page) */}
        <div className="w-full lg::w-2/3 space-y-6 border border-[hsl(202,86%,23%)]/20 p-10 rounded-2xl">
          {/* Section 1 */}
          <section className="space-y-6">
            <h2 className="text-3xl sm:text-4xl">
              {" "}
              {t("home.about.who.title")}
            </h2>
            <p className=" text-slate-600">
              <span className="font-semibold">Wingless Angels</span>{" "}
              {t("home.about.who.desc-1")}
            </p>
          </section>

          {/* Section 2 */}
          <section className="space-y-6">
            <blockquote className="border-l-4 border-[hsl(185,65%,35%)] pl-4 italic text-slate-700">
              {t("home.about.who.quote")}
            </blockquote>
            <p className="text-slate-700">{t("home.about.who.desc-2")}</p>
          </section>

          {/* Section 3 */}
          <section className="space-y-6">
            <h3 className="text-2xl sm:text-3xl">
              {" "}
              {t("home.about.promise.title")}
            </h3>
            <p className="text-slate-700">{t("home.about.promise.desc-1")}</p>

            <figure className="text-center rounded-xl overflow-hidden">
              <Image
                src={EducatorImg}
                alt="Our dedicated team working with a child in a supportive ABA therapy session."
                className="rounded-2xl shadow-hero w-full h-auto"
              />
              <figcaption className="p-4 text-sm text-slate-600">
                {t("home.about.promise.caption")}
              </figcaption>
            </figure>

            <p className="text-slate-700">{t("home.about.promise.desc-2")}</p>
            <p className="text-slate-700">{t("home.about.promise.desc-3")}</p>
          </section>
        </div>

        {/* RIGHT SIDE (sticky) */}
        <div className="w-full lg::w-1/3 mt-20 lg:mt-0 px-5 lg:px-10">
          <div className="sticky top-20 space-y-12">
            <h2 className="text-3xl sm:text-2xl text-slate-800">
              {t("home.testimonials.heading-title")}
            </h2>

            <div className="space-y-10">
              <div>
                <Image
                  height={50}
                  width={50}
                  src={ProfileImg}
                  alt="Parent testimonial profile"
                  className="object-cover rounded-full w-[4rem] h-[4rem] my-8"
                />
                <blockquote className="space-y-4">
                  <p className="text-lg text-slate-700/50 italic">
                    {t("home.testimonials.testimonial-1.desc")}
                  </p>
                  <footer className="text-slate-600 font-medium">
                    – {t("home.testimonials.testimonial-1.author")}
                  </footer>
                </blockquote>
              </div>
            </div>

            <blockquote className="border-l-4 border-[hsl(185,65%,35%)]/30 pl-4 italic text-slate-700">
              <h3 className="text-2xl sm:text-3xl font-semibold text-slate-800">
                {t("home.testimonials.cta.title-1")} <br />
                {t("home.testimonials.cta.title-2")}
              </h3>

              <div className="mt-8">
                <LinkUI
                  title={t("home.testimonials.cta.button")}
                  href={`/${lng}/services`}
                />
              </div>
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
