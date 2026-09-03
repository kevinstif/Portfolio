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
        bg-console-bg
        md:flex
      "
    >
      <div
        className="
          font-mono
          text-sm
          leading-7
          text-console-var
        "
      >
        <p className="flex gap-2">
          <span className="text-console-ref">const</span>
          <span>developer =</span>
          <span className="text-white">{"{"}</span>
        </p>

        <p className="pl-4">
          backend: <span className="text-console-text">true</span>,
        </p>

        <p className="pl-4">
          frontend: <span className="text-console-text">true</span>,
        </p>

        <p className="pl-4">
          available: <span className="text-console-text">true</span>
        </p>

        <p className="text-white">{"}"}</p>
      </div>
    </div>
  );
};

export default ContactCodeBlock;
