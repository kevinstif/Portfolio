const NavigationLink = ({
  href,
  children,
  isActive = false,
  onClick,
}) => {
  return (
    <a
      href={href}
      onClick={onClick}
      aria-current={isActive ? "page" : undefined}
      className={`
        block
        rounded-lg
        px-3 py-2
        text-sm font-medium
        transition-colors
        md:p-0
        ${
          isActive
            ? "text-primary"
            : "text-text hover:text-primary"
        }
      `}
    >
      {children}
    </a>
  );
};

export default NavigationLink;