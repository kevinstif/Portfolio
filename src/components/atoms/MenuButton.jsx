const MenuButton = ({ isOpen = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        inline-flex
        h-10 w-10
        items-center
        justify-center
        rounded-lg
        p-2
        text-sm
        text-text
        transition-colors
        hover:bg-surface
        hover:text-primary
        focus:outline-none
        focus:ring-2
        focus:ring-primary/50
        md:hidden
      "
      aria-controls="main-navigation"
      aria-expanded={isOpen}
      aria-label={isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
    >
      <span className="sr-only">
        {isOpen ? "Cerrar menú principal" : "Abrir menú principal"}
      </span>

      <svg
        className="h-6 w-6"
        aria-hidden="true"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
      >
        <path
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="2"
          d="M5 7h14M5 12h14M5 17h14"
        />
      </svg>
    </button>
  );
};

export default MenuButton;