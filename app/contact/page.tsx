import Contact from "@/src/component/Contact/Contact";
import ContactFormSection from "@/src/component/ContactForm/ContactForm";
import Footer from "@/src/component/Footer/Footer";
import Header from "@/src/component/Header/Header";

const ContactPage = () => {
  return (
    <>
      <Header />
      <div>
        <Contact />
        <ContactFormSection />
      </div>
      <Footer />
    </>
  );
};

export default ContactPage;
