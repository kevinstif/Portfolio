const ExperiencePeriod = ({ children }) => {
  return (
    <span
      className="
        inline-flex
        shrink-0
        items-center
        gap-1.5
        rounded-full
        border
        border-accent
        px-2
        py-0.5
        font-mono
        text-[10px]
        text-accent
      "
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />

      {children}
    </span>
  );
};

export default ExperiencePeriod;
