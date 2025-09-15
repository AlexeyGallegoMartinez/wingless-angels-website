import { useTranslation } from "@/app/i18n";
import { CalendarDays, Siren, Inbox, PhoneIncoming } from "lucide-react";

export default async function ContactMethods({ lng }) {
  const { t } = await useTranslation(lng);

  const contactMethods = [
    {
      icon: (
        <PhoneIncoming className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />
      ),
      title: t("contact.contact-methods.cards.card-1.title"),
      primary: t("contact.contact-methods.cards.card-1.method"),
      secondary: t("contact.contact-methods.cards.card-1.method-desc"),
      description: t("contact.contact-methods.cards.card-1.cta"),
    },
    {
      icon: <Inbox className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />,
      title: t("contact.contact-methods.cards.card-2.title"),
      primary: t("contact.contact-methods.cards.card-2.method"),
      secondary: t("contact.contact-methods.cards.card-2.method-desc"),
      description: t("contact.contact-methods.cards.card-2.cta"),
    },
    {
      icon: <Siren className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />,
      title: t("contact.contact-methods.cards.card-3.title"),
      primary: t("contact.contact-methods.cards.card-3.method"),
      secondary: t("contact.contact-methods.cards.card-3.method-desc"),
      description: t("contact.contact-methods.cards.card-3.cta"),
    },
    {
      icon: (
        <CalendarDays className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />
      ),
      title: t("contact.contact-methods.cards.card-4.title"),
      primary: t("contact.contact-methods.cards.card-4.method"),
      secondary: t("contact.contact-methods.cards.card-4.method-desc"),
      description: t("contact.contact-methods.cards.card-4.cta"),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[hsl(202,86%,23%)]">
            {t("contact.contact-methods.title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-[hsl(202,86%,23%)]/80">
            {t("contact.contact-methods.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="text-center p-5 hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-[hsl(202,86%,23%)]/20 rounded-md px-8 py-12 "
            >
              <div>
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {method.icon}
                </div>
                <div className="text-lg text-foreground pb-5 font-semibold">
                  {method.title}
                </div>
              </div>
              <div className="space-y-3 w-full">
                <div className="text-primary font-semibold text-[hsl(202,86%,23%)]/95">
                  {method.primary}
                </div>
                <div className="text-sm text-muted-foreground text-[hsl(202,86%,23%)]/85">
                  {method.secondary}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed text-[hsl(202,86%,23%)]/85">
                  {method.description}
                </p>
                <a
                  href=""
                  className="flex justify-center text-sm border border-[hsl(202,86%,23%)]/15 transition duration-300
                            py-2 rounded-md w-full text-[hsl(202,86%,23%)]/95 hover:cursor-pointer
                             hover:bg-[hsl(185,65%,35%)]/15 "
                >
                  {t("contact.contact-methods.cards.button")}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
