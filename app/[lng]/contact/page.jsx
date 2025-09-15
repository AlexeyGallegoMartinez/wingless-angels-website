import ContactForm from "@/components/contact/contact-form";
import ContactHeadline from "@/components/contact/contact-headline";
import ContactMethods from "@/components/contact/contact-methods";
import FAQ from "@/components/contact/faq";
import Footer from "@/components/footer/footer";
import Header from "@/components/header/header";

export default async function ContactPage({ params }) {
  const { lng } = await params;
  return (
    <div className="min-h-screen bg-background">
      <Header lng={lng} />
      <main>
        <ContactHeadline lng={lng} />
        <ContactForm lng={lng} />
        <ContactMethods lng={lng} />
        <FAQ lng={lng} />
        <Footer lng={lng} />
      </main>
    </div>
  );
}
