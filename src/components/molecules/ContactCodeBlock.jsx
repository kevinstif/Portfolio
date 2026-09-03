const ContactCodeBlock = () => {
  return (
    <div
      className="
        hidden
        h-full
        min-h-70
        w-64
        items-center
        justify-center
        border-l
        border-border
        bg-primary-deep
        md:flex
      "
    >
      <div
        className="
          font-mono
          text-sm
          leading-7
          text-muted
        "
      >
        <p>
          <span className="text-accent">const</span> developer = {"{"}
        </p>

        <p className="pl-4">
          backend: <span className="text-text">true</span>,
        </p>

        <p className="pl-4">
          frontend: <span className="text-text">true</span>,
        </p>

        <p className="pl-4">
          available: <span className="text-text">true</span>
        </p>

        <p>{"}"}</p>
      </div>
    </div>
  );
};

export default ContactCodeBlock;