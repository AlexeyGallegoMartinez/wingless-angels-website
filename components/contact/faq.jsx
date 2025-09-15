import { useTranslation } from "@/app/i18n";

export default async function FAQ({ lng }) {
  const { t } = await useTranslation(lng);

  const questions = [
    {
      question: t("contact.faqs.cards.card-1.title"),
      answer: t("contact.faqs.cards.card-1.desc"),
    },
    {
      question: t("contact.faqs.cards.card-2.title"),
      answer: t("contact.faqs.cards.card-2.desc"),
    },
    {
      question: t("contact.faqs.cards.card-3.title"),
      answer: t("contact.faqs.cards.card-3.desc"),
    },
    {
      question: t("contact.faqs.cards.card-4.title"),
      answer: t("contact.faqs.cards.card-4.desc"),
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-[hsl(202,86%,23%)] mb-4">
            {t("contact.faqs.title")}
          </h2>
          <p className="text-lg text-[hsl(202,86%,23%)]/80 max-w-2xl mx-auto">
            {t("contact.faqs.subtitle")}
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {questions.map((faq, index) => (
            <div
              key={index}
              className="flex flex-col gap-5 border border-[hsl(202,86%,23%)]/15 rounded-md p-8"
            >
              <div>
                <h1 className="text-lg text-[hsl(202,86%,23%)] font-semibold">
                  {faq.question}
                </h1>
              </div>
              <div>
                <p className="text-[hsl(202,86%,23%)]/70 text-sm leading-relaxed">
                  {faq.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
