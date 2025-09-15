import { useTranslation } from "@/app/i18n";
import { Clock2 } from "lucide-react";

export default async function ContactHours({ lng }) {
  const { t } = await useTranslation(lng);

  const officeHours = [
    {
      day: t("contact.contact-form.hours.weekdays"),
      hours: "8:00 AM - 6:00 PM",
    },
    {
      day: t("contact.contact-form.hours.saturday"),
      hours: "9:00 AM - 2:00 PM",
    },
    {
      day: t("contact.contact-form.hours.sunday"),
      hours: "Emergency calls only",
    },
    {
      day: t("contact.contact-form.hours.holidays"),
      hours: "Emergency calls only",
    },
  ];

  return (
    <div className="border border-[hsl(202,86%,23%)]/15 p-6 rounded-md">
      <div className="pb-5">
        <h1 className="text-xl text-foreground flex items-center space-x-2">
          <Clock2 size={18} strokeWidth={3} color="hsl(202,86%,23%)" />
          <span className="text-[hsl(202,86%,23%)]">Office Hours</span>
        </h1>
      </div>
      <div>
        <div className="space-y-3">
          {officeHours.map((schedule, index) => (
            <div
              key={index}
              className="flex justify-between items-center py-2 border-[hsl(202,86%,23%)]/15 border-b border-border last:border-b-0"
            >
              <span className="font-medium text-foreground">
                {schedule.day}
              </span>
              <span className="text-muted-foreground text-[hsl(202,86%,23%)]/70">
                {schedule.hours}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
