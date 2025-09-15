import { useTranslation } from "@/app/i18n";
import LinkUI from "../ui/link-ui";
import SecondaryLink from "../ui/secondary-link";
import Highlights from "./highlights/highlights";

export default async function HomeHeading({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <div className="space-y-8 animate-fade-in">
      <h1 className="text-4xl md:text-5xl font-bold leading-tight text-foreground">
        {t("home.hero.heading-title-1")}{" "}
        <span className="bg-gradient-to-tr from-[hsl(202,86%,23%)] to-[hsl(185,65%,35%)] bg-clip-text text-transparent block">
          {t("home.hero.heading-title-2")}
        </span>
      </h1>

      <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-lg">
        {t("home.hero.heading-desc")}
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <LinkUI title={t("home.hero.button-1")} href={`/${lng}/contact`} />
        <SecondaryLink
          title={t("home.hero.button-2")}
          href={`/${lng}/services`}
        />
      </div>
      <Highlights lng={lng} />
    </div>
  );
}
