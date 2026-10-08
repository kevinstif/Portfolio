import {
  Bars3Icon,
  XMarkIcon,
} from "@heroicons/react/24/outline";

const MenuButton = ({ isOpen = false, onClick }) => {
  return (
    <button
      type="button"
      onClick={onClick}
      className="
        relative
        inline-flex
        h-10
        w-10
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
      aria-label={
        isOpen
          ? "Cerrar menú principal"
          : "Abrir menú principal"
      }
    >
      <span className="sr-only">
        {isOpen
          ? "Cerrar menú principal"
          : "Abrir menú principal"}
      </span>

      <Bars3Icon
        className={`
          absolute
          h-6
          w-6
          transition-all
          duration-200
          ease-in-out
          ${
            isOpen
              ? "rotate-90 scale-75 opacity-0"
              : "rotate-0 scale-100 opacity-100"
          }
        `}
        aria-hidden="true"
      />

      <XMarkIcon
        className={`
          absolute
          h-6
          w-6
          transition-all
          duration-200
          ease-in-out
          ${
            isOpen
              ? "rotate-0 scale-100 opacity-100"
              : "-rotate-90 scale-75 opacity-0"
          }
        `}
        aria-hidden="true"
      />
    </button>
  );
};

export default MenuButton;