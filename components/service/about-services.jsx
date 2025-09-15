import { useTranslation } from "@/app/i18n";
import ServiceImg from "@/public/images/womanandgirl.png";
import Image from "next/image";

export default async function AboutServices({ lng }) {
  const { t } = await useTranslation(lng);
  const features = [
    {
      name: t("services.hero.service-1.title"),
      description: t("services.hero.service-1.sub-title"),
    },
    {
      name: t("services.hero.service-2.title"),
      description: t("services.hero.service-2.sub-title"),
    },
    {
      name: t("services.hero.service-3.title"),
      description: t("services.hero.service-4.sub-title"),
    },
    {
      name: t("services.hero.service-4.title"),
      description: t("services.hero.service-4.sub-title"),
    },
    {
      name: t("services.hero.service-5.title"),
      description: t("services.hero.service-5.sub-title"),
    },
    {
      name: t("services.hero.service-6.title"),
      description: t("services.hero.service-6.sub-title"),
    },
    {
      name: t("services.hero.service-7.title"),
      description: t("services.hero.service-7.sub-title"),
    },
    {
      name: t("services.hero.service-8.title"),
      description: t("services.hero.service-8.sub-title"),
    },
    {
      name: t("services.hero.service-9.title"),
      description: t("services.hero.service-9.sub-title"),
    },
  ];
  return (
    <div className="bg-white">
      <div aria-hidden="true" className="relative">
        <Image
          alt=""
          src={ServiceImg}
          height={200}
          width={200}
          className="h-96 w-full object-cover"
        />
        <div className="absolute inset-0 bg-linear-to-t from-white" />
      </div>

      <div className="relative mx-auto mt-12 max-w-7xl px-4 pb-16 sm:px-6 sm:pb-24 lg:px-8">
        <div className="mx-auto max-w-2xl text-center lg:max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-[hsl(202,86%,23%)] sm:text-4xl">
            {t("services.hero.title")}
          </h2>
          <p className="mt-4 text-gray-500">{t("services.hero.desc")}</p>
        </div>

        <dl className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 sm:gap-y-16 lg:max-w-none lg:grid-cols-3 lg:gap-x-8">
          {features.map((feature) => (
            <div key={feature.name} className="border-t border-gray-200 pt-4">
              <dt className="font-medium text-gray-900">{feature.name}</dt>
              <dd className="mt-2 text-sm text-gray-500">
                {feature.description}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  );
}
