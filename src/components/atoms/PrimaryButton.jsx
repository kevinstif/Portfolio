const PrimaryButton = ({ children, onClick, className = "", ...props }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`
        cursor-pointer
        rounded-lg
        bg-primary
        px-6
        py-3
        font-medium
        text-white
        transition-colors
        hover:bg-primary-deep
        focus:outline-none
        focus:ring-2
        focus:ring-primary/50
        ${className}
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default PrimaryButton;
