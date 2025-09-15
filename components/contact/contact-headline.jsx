import { useTranslation } from "@/app/i18n";
import Background from "../ui/background";

export default async function ContactHeadline({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section className="relative isolate py-28 inset-0 rounded-md opacity-100 overflow-hidden text-white ">
      <Background />
      <div className="container mx-auto px-6 text-center text-[hsl(202,86%,23%)]">
        <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
          {t("contact.hero.title")}
        </h1>
        <p className="text-xl md:text-2xl text-[hsl(202,86%,23%)]/90 max-w-3xl mx-auto animate-fade-in">
          {t("contact.hero.sub-title")}
        </p>
      </div>
    </section>
  );
}
