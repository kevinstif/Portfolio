import ContactActions from "./ContactActions";
import ContactCodeBlock from "./ContactCodeBlock";

const ContactCard = () => {
  return (
    <div
      className="
        mt-12
        overflow-hidden
        rounded-2xl
        border
        border-border
        bg-base
      "
    >
      <div
        className="
          grid
          md:grid-cols-[1fr_auto]
          md:items-center
        "
      >
        <div className="p-8 md:p-12 lg:p-16">
          <span
            className="
              font-mono
              text-sm
              text-accent
            "
          >
            // let's_connect
          </span>

          <h3
            className="
              mt-4
              max-w-2xl
              text-3xl
              font-semibold
              tracking-tight
              text-text
              md:text-4xl
              lg:text-5xl
            "
          >
            ¿Tienes un proyecto en mente?
          </h3>

          <p
            className="
              mt-5
              max-w-xl
              text-base
              leading-relaxed
              text-muted
              md:text-lg
            "
          >
            Hablemos sobre tu proyecto, una oportunidad profesional o
            simplemente conectemos.
          </p>

          <ContactActions />

          <div
            className="
              mt-6
              flex
              flex-wrap
              items-center
              gap-2
              text-sm
            "
          >
            <span className="text-muted">
              Email:
            </span>

            <span className="font-mono text-text">
              kevinstif21@gmail.com
            </span>
          </div>
        </div>

        <ContactCodeBlock />
      </div>
    </div>
  );
};

export default ContactCard;