import { useTranslation } from "@/app/i18n";
import ContactEmergency from "./contact-emergency";
import ContactHours from "./contact-hours";
import ContactLocation from "./contact-location";
import InputArea from "./input-area";

export default async function ContactForm({ lng }) {
  const { t } = await useTranslation(lng);

  return (
    <section className="py-20 bg-section-gradient">
      <div className=" mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className="relative border border-[hsl(202,86%,23%)]/15 p-8 rounded-lg">
            <div className="pb-8">
              <h1 className="text-2xl text-foreground">
                {" "}
                {t("contact.contact-form.form.title")}
              </h1>
              <p className="text-muted-foreground">
                {t("contact.contact-form.form.subtitle")}
              </p>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <InputArea
                  label={t("contact.contact-form.form.first-name")}
                  htmlFor={"firstName"}
                  id={"firstName"}
                  placeholder={"John"}
                />
                <InputArea
                  label={t("contact.contact-form.form.last-name")}
                  htmlFor={"lastName"}
                  id={"lastName"}
                  placeholder={"Doe"}
                />
              </div>
              <InputArea
                label={t("contact.contact-form.form.email")}
                htmlFor={"email"}
                id={"email"}
                type={"email"}
                placeholder={"john@example.com"}
              />
              <InputArea
                label={t("contact.contact-form.form.phone-number")}
                htmlFor={"phone"}
                id={"phone"}
                type={"tel"}
                placeholder={"john@example.com"}
              />
              <InputArea
                label={t("contact.contact-form.form.subject")}
                htmlFor={"subject"}
                id={"subject"}
                placeholder={"How can we help you?"}
              />
              <div className="flex flex-col space-y-2 text-sm">
                <label htmlFor="message">
                  {t("contact.contact-form.form.message")}
                </label>
                <textarea
                  id="message"
                  placeholder="Tell us about your needs, questions, or how we can support you..."
                  className="min-h-[120px] border border-[hsl(202,86%,23%)]/15 p-2 rounded-md"
                />
              </div>
              <button className="bg-gradient-to-r from-[hsl(202,86%,23%)] to-[hsl(185,65%,35%)] hover:to-[hsl(202,86%,23%)] transition duration-300 text-white py-2 rounded-md w-full hover:bg-[hsl(202,86%,23%)]/95 hover:cursor-pointer">
                {t("contact.contact-form.form.button")}
              </button>
            </div>
          </div>

          {/* Location & Hours */}
          <div className="space-y-8">
            <ContactLocation lng={lng} />
            <ContactHours lng={lng} />
            <ContactEmergency lng={lng} />
          </div>
        </div>
      </div>
    </section>
  );
}
