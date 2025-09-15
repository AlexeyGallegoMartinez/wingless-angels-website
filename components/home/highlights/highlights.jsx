import { useTranslation } from "@/app/i18n";
import Highlight from "./highlight";

export default async function Highlights({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="flex items-center space-x-8 pt-8">
      <Highlight
        title={t("home.hero.highlights.highlight-1.title")}
        desc={t("home.hero.highlights.highlight-1.desc")}
      />
      <Highlight
        title={t("home.hero.highlights.highlight-2.title")}
        desc={t("home.hero.highlights.highlight-2.desc")}
      />
      <Highlight
        title={t("home.hero.highlights.highlight-3.title")}
        desc={t("home.hero.highlights.highlight-3.desc")}
      />
    </div>
  );
}
