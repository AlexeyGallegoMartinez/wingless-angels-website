import { useTranslation } from "@/app/i18n";
import {
  Brain,
  ClipboardList,
  Users,
  Globe,
  MessageCircle,
  Target,
} from "lucide-react";

export default async function Services({ lng }) {
  const { t } = await useTranslation(lng);

  const services = [
    {
      title: t("home.services.services.service-1.title"),
      description: t("home.services.services.service-1.desc"),
      icon: <Brain className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />,
    },
    {
      title: t("home.services.services.service-2.title"),
      description: t("home.services.services.service-2.desc"),
      icon: (
        <MessageCircle className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />
      ),
    },
    {
      title: t("home.services.services.service-3.title"),
      description: t("home.services.services.service-3.desc"),
      icon: <Target className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />,
    },
    {
      title: t("home.services.services.service-4.title"),
      description: t("home.services.services.service-4.desc"),
      icon: (
        <ClipboardList className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />
      ),
    },
    {
      title: t("home.services.services.service-5.title"),
      description: t("home.services.services.service-5.desc"),
      icon: <Users className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />,
    },
    {
      title: t("home.services.services.service-6.title"),
      description: t("home.services.services.service-6.desc"),
      icon: <Globe className="w-10 h-10 text-[hsl(185,65%,35%)] mx-auto" />,
    },
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            {t("home.services.heading-title")}
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            {t("home.services.heading-desc")}
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="shadow-card hover:shadow-lg transition-all duration-300 hover:-translate-y-2 border border-[hsl(202,86%,23%)]/20 rounded-md px-8 py-12 hover:bg-[hsl(185,84%,93%)]/30"
            >
              <div className="text-center pb-4">
                <div className="mb-4">{service.icon}</div>
                <h3 className="text-xl text-[hsl(202,86%,23%)] font-extrabold">
                  {service.title}
                </h3>
              </div>
              <p className="text-center leading-relaxed text-[hsl(202,86%,23%)]">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
