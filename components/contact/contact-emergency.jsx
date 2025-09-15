import { useTranslation } from "@/app/i18n";

export default async function ContactEmergency({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <div className=" p-6 rounded-md bg-gradient-to-r from-[hsl(185,65%,35%)] via-[hsl(202,86%,23%)] to-[hsl(185,65%,35%)] overflow-hidden text-white">
      <div className="pb-5">
        <h1 className="text-xl text-white flex items-center space-x-2">
          <span>🚨</span>
          <span> {t("contact.contact-form.support.title")}</span>
        </h1>
      </div>
      <div className="space-y-4">
        <p className="text-white/90 text-sm leading-relaxed">
          {t("contact.contact-form.support.subtitle")}
        </p>
        <a className="block text-center  transition duration-300 hover:scale-101 hover:shadow-xl py-2 rounded-md w-full text-[hsl(202,86%,23%)]/95 hover:cursor-pointer bg-white">
          {t("contact.contact-form.support.button")}
        </a>
      </div>
    </div>
  );
}
