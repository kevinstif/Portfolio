const ContactActions = () => {
  return (
    <div className="mt-8 flex flex-col gap-3 sm:flex-row">
      <a
        href="mailto:kevinstif21@gmail.com"
        className="
          inline-flex
          items-center
          justify-center
          rounded-lg
          bg-primary
          px-6
          py-3
          font-medium
          text-white
          transition
          duration-300
          hover:brightness-110
        "
      >
        <span className="mr-2">✉</span>
        Enviar correo
      </a>

      <a
        href="https://www.linkedin.com/in/kstif"
        target="_blank"
        rel="noopener noreferrer"
        className="
          inline-flex
          items-center
          justify-center
          gap-2
          rounded-lg
          border
          border-border
          px-6
          py-3
          font-medium
          text-text
          transition
          duration-300
          hover:border-primary
          hover:text-primary
        "
      >
        <i className="devicon-linkedin-plain colored" aria-hidden="true" />
        LinkedIn
      </a>
    </div>
  );
};

export default ContactActions;
