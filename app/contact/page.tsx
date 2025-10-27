// app/contact/page.tsx (server component)
export const metadata = { title: "Contact — RS Metal" };

import ContactForm from "./ContactForm";

export default function ContactPage() {
  return (
    <section className="py-20">
      <div className="max-w-6xl mx-auto px-4">
       
        <ContactForm />
      </div>
    </section>
  );
}
