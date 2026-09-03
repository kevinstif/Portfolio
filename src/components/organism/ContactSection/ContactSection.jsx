import SectionTitle from "../../atoms/SectionTitle";
import ContactCard from "../../molecules/ContactCard";
import Footer from "../../molecules/Footer";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="
        flex
        items-center
        justify-center
        bg-surface
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-md
          px-4
          py-20
          md:max-w-7xl
        "
      >
        <SectionTitle>
          Contacto
        </SectionTitle>

        <ContactCard />

        <Footer />
      </div>
    </section>
  );
};

export default ContactSection;