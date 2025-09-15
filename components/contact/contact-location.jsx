import { useTranslation } from "@/app/i18n";

export default async function ContactLocation({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="border border-[hsl(202,86%,23%)]/15 p-6 rounded-md">
      <div className="pb-5">
        <h1 className="text-xl text-foreground flex items-center space-x-2">
          <span>📍</span>
          <span>{t("contact.contact-form.location.title")}</span>
        </h1>
      </div>
      <div className="space-y-4 text-[hsl(202,86%,23%)]/70">
        <div className="space-y-2">
          <div className="font-semibold text-foreground">
            {t("contact.contact-form.location.title")}
          </div>
          <div className="text-muted-foreground ">
            717 Ponce de Leon BLVD, Suite 323A,
            <br />
            Coral Gables, FL 33134
          </div>
        </div>
        <div className="text-sm text-muted-foreground">
          {t("contact.contact-form.location.center-desc")}
        </div>
        <a
          className="flex justify-center border border-[hsl(202,86%,23%)]/15 transition duration-300
         py-2 rounded-md w-full text-[hsl(202,86%,23%)]/95 hover:cursor-pointer hover:bg-[hsl(185,65%,35%)]/15"
        >
          {t("contact.contact-form.location.button")}
        </a>
      </div>
    </div>
  );
}
