import Layout from "@/components/layout/layout";
import { ContactForm } from "@/components/contact/contactForm";

export default function Contact() {
  return (
    <>
      <Layout>
        <main className="flex-1 flex items-center justify-center mt-14 mb-24">
          <section className="flex flex-col w-2/5 max-w-[500px] lg:w-3/5 sm:w-4/5">
              <h1 className="text-3xl font-bold text-center">Contact</h1>
              <p className="text-center pt-3 pb-10">{`Contacter notre équipe pour plus d'informations, nous vous répondrons dans les meilleurs délai`}</p>
              <ContactForm />
          </section>
        </main>
      </Layout>
  </>
  )
}