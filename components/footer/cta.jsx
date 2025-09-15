import { useTranslation } from "@/app/i18n";

export default async function CTA({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="mx-auto max-w-2xl text-center pt-20">
      <hgroup>
        <p className="mt-2 text-4xl font-semibold tracking-tight text-balance text-[hsl(202,86%,23%)]  sm:text-5xl">
          {t("cta.title")}
        </p>
      </hgroup>
      <p className="mx-auto mt-6 max-w-xl text-lg/8 text-pretty text-black">
        {t("cta.sub-title")}
      </p>
      <div className="mt-8 flex justify-center">
        <button
          className="relative overflow-hidden px-8 py-6 text-lg font-semibold text-white rounded-md
           bg-gradient-to-r from-[hsl(202,86%,23%)] to-[hsl(185,65%,35%)]
           shadow-lg transition-all duration-300
           hover:scale-105 hover:shadow-xl"
        >
          <span className="relative z-10"> {t("cta.button")}</span>
          <span
            className="absolute inset-0 rounded-md opacity-0 hover:opacity-30
             bg-gradient-to-r from-[hsl(185,65%,35%)] via-[hsl(202,86%,23%)] to-[hsl(185,65%,35%)]
             bg-[length:200%_200%] animate-[shimmer_3s_linear_infinite]"
          ></span>
        </button>
      </div>
    </div>
  );
}
