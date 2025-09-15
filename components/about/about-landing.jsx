import Img1 from "@/public/images/children.png";
import Img2 from "@/public/images/adultandkid.png";
import Img3 from "@/public/images/teacherclass.png";
import Img4 from "@/public/images/teacherandchild.png";

import Image from "next/image";
import Background from "../ui/background";
import { useTranslation } from "@/app/i18n";

export default async function AboutLanding({ lng }) {
  const { t } = await useTranslation(lng);

  const stats = [
    {
      label: t("about.hero.stats.stat-1.desc"),
      value: t("about.hero.stats.stat-1.title"),
    },
    {
      label: t("about.hero.stats.stat-2.desc"),
      value: t("about.hero.stats.stat-2.title"),
    },
    {
      label: t("about.hero.stats.stat-3.desc"),
      value: t("about.hero.stats.stat-3.title"),
    },
    {
      label: t("about.hero.stats.stat-4.desc"),
      value: t("about.hero.stats.stat-4.title"),
    },
  ];

  const statsOne = [
    {
      label: t("about.hero.stats.stat-1.desc"),
      value: t("about.hero.stats.stat-1.title"),
    },
    {
      label: t("about.hero.stats.stat-2.desc"),
      value: t("about.hero.stats.stat-2.title"),
    },
    // {
    //   label: t("about.hero.stats.stat-3.desc"),
    //   value: t("about.hero.stats.stat-3.title"),
    // },
    // {
    //   label: t("about.hero.stats.stat-4.desc"),
    //   value: t("about.hero.stats.stat-4.title"),
    // },
  ];

  return (
    <div className="bg-white">
      <main className="relative isolate">
        {/* Background */}
        <Background />

        {/* Header section */}
        <div className="px-6 pt-0 lg:px-8">
          <div className="mx-auto max-w-2xl pt-24 text-center sm:pt-24">
            <h1 className="text-5xl font-semibold tracking-tight text-[hsl(202,86%,23%)] sm:text-7xl">
              {t("about.hero.title")}
            </h1>
            <p className="mt-8 text-lg font-medium text-pretty text-gray-500 sm:text-xl/8">
              {t("about.hero.sub-title")}
            </p>
          </div>
        </div>

        {/* Stat section */}
        <div className="mx-auto mt-20 max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
            <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-4">
              {stats.map((stat, statIdx) => (
                <div
                  key={statIdx}
                  className="flex flex-col-reverse gap-y-3 border-l border-gray-200 pl-6"
                >
                  <dt className="text-base/7 text-gray-600">{stat.label}</dt>
                  <dd className="text-3xl font-semibold tracking-tight text-[hsl(202,86%,23%)]">
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-32 overflow-hidden sm:mt-40">
          <div className="mx-auto max-w-7xl px-6 lg:flex lg:px-8">
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-12 gap-y-16 lg:mx-0 lg:max-w-none lg:min-w-full lg:flex-none lg:gap-y-8">
              <div className="lg:col-end-1 lg:w-full lg:max-w-lg lg:pb-8">
                <h2 className="text-4xl font-semibold tracking-tight text-[hsl(202,86%,23%)] sm:text-5xl">
                  {t("about.goal.title")}
                </h2>
                <p className="mt-6 text-xl/8 text-gray-700">
                  {t("about.goal.sub-title-1")}
                </p>
                <p className="mt-6 text-base/7 text-gray-600">
                  {t("about.goal.sub-title-2")}
                </p>
              </div>
              <div className="flex flex-wrap items-start justify-end gap-6 sm:gap-8 lg:contents">
                <div className="w-0 flex-auto lg:ml-auto lg:w-auto lg:flex-none lg:self-end">
                  <Image
                    alt=""
                    src={Img1}
                    // src="https://images.unsplash.com/photo-1670272502246-768d249768ca?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80"
                    width={200}
                    height={200}
                    className="aspect-[7/5] w-148 max-w-none rounded-2xl bg-gray-50 object-cover object-right max-sm:w-120"
                  />
                </div>
                <div className="contents lg:col-span-2 lg:col-end-2 lg:ml-auto lg:flex lg:w-148 lg:items-start lg:justify-end lg:gap-x-8">
                  <div className="order-first flex w-64 flex-none justify-end self-end max-sm:w-40 lg:w-auto">
                    <Image
                      alt=""
                      src={Img2}
                      //   src="https://images.unsplash.com/photo-1605656816944-971cd5c1407f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      className="aspect-4/3 w-[24rem] max-w-none flex-none rounded-2xl bg-gray-50 object-cover"
                    />
                  </div>
                  <div className="flex w-96 flex-auto justify-end lg:w-auto lg:flex-none">
                    <Image
                      alt=""
                      src={Img3}
                      //   src="https://images.unsplash.com/photo-1568992687947-868a62a9f521?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&h=842&q=80"
                      className="aspect-7/5 w-148 max-w-none flex-none rounded-2xl bg-gray-50 object-cover max-sm:w-120"
                    />
                  </div>
                  <div className="hidden sm:block sm:w-0 sm:flex-auto lg:w-auto lg:flex-none">
                    <Image
                      alt=""
                      src={Img4}
                      //   src="https://images.unsplash.com/photo-1612872087720-bb876e2e67d1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=768&h=604&q=80"
                      className="aspect-4/3 w-[24rem] max-w-none rounded-2xl bg-gray-50 object-right object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Content section */}
        <div className="mx-auto max-w-7xl px-6  lg:px-8 mt-40 mb-20">
          <div className="mx-auto max-w-5xl lg:mx-0 lg:max-w-none">
            <h2 className="text-4xl font-semibold tracking-tight text-pretty text-[hsl(202,86%,23%)] sm:text-5xl">
              {t("about.mission.title")}
            </h2>
            <div className="mt-6 flex flex-col gap-x-8 gap-y-20 lg:flex-row">
              <div className="lg:w-full lg:max-w-3xl lg:flex-auto">
                <p className="text-xl/8 text-gray-600">
                  {t("about.mission.sub-title-1")}
                </p>
                <p className="mt-10 max-w-3xl text-base/7 text-gray-700">
                  {t("about.mission.sub-title-2")}
                </p>
              </div>
              <div className="lg:flex lg:flex-auto lg:justify-end">
                <dl className="w-64 space-y-8 xl:w-80">
                  {statsOne.map((stat) => (
                    <div
                      key={stat.label}
                      className="flex flex-col-reverse gap-y-4"
                    >
                      <dt className="text-base/7 text-gray-600">
                        {stat.label}
                      </dt>
                      <dd className="text-5xl font-semibold tracking-tight text-[hsl(202,86%,23%)]">
                        {stat.value}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
