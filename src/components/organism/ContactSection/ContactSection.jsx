import SectionTitle from "../../atoms/SectionTitle";
import ContactCard from "../../molecules/ContactCard";

const ContactSection = () => {
  return (
    <section
      id="contact"
      className="
        flex
        items-center
        justify-center
        bg-background
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
      </div>
    </section>
  );
};

export default ContactSection;