const ProjectStatus = ({ children, compact = false }) => {
  return (
    <span
      className={`
        shrink-0
        inline-flex
        items-center
        gap-1.5
        border
        border-accent
        rounded-full
        text-accent
        font-mono

        ${compact ? "px-2 py-0.5 text-[10px]" : "px-3 py-1.5 text-xs"}
      `}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden="true" />

      {children}
    </span>
  );
};

export default ProjectStatus;
