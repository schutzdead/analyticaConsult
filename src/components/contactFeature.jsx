import { ContactForm } from "@/components/contact/contactForm";

export default function Contact() {
  return (
    <main id='contact' className="my-32 flex-1 flex items-center justify-center sm:my-24 scroll-m-28">
      <section className="flex flex-col w-2/5 max-w-[500px] lg:w-3/5 sm:w-4/5">
          <h1 className="text-4xl font-bold text-center font-Caslon">Contact</h1>
          <p className="text-center pt-3 pb-10 tracking-wide font-normal">{`Contactez notre équipe pour plus d'informations, nous vous répondrons dans les meilleurs délais`}</p>
          <ContactForm />
      </section>
    </main>
  )
}