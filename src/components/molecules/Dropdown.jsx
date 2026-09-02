import { useState } from "react";
import PrimaryButton from "../atoms/PrimaryButton";

const Dropdown = ({ label = "Dropdown button", items = [], onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => {
    setIsOpen((current) => !current);
  };

  const handleSelect = (item) => {
    onSelect?.(item);

    setIsOpen(false);
  };

  return (
    <div className="relative inline-block">
      <PrimaryButton
        type="button"
        onClick={handleToggle}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        className="
          inline-flex
          items-center
        "
      >
        {label}

        <svg
          className={`
            ms-1.5
            h-4
            w-4
            transition-transform
            ${isOpen ? "rotate-180" : ""}
          `}
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 9-7 7-7-7"
          />
        </svg>
      </PrimaryButton>

      {isOpen && (
        <div
          className="
            absolute
            right-0
            z-50
            mt-2
            w-44
            rounded-xl
            border
            border-border
            bg-surface
            shadow-lg
          "
        >
          <ul className="p-2 text-sm font-medium text-text" role="menu">
            {items.map((item, index) => (
              <li key={index}>
                <button
                  type="button"
                  role="menuitem"
                  onClick={() => handleSelect(item)}
                  className="
                    inline-flex
                    w-full
                    items-center
                    rounded-lg
                    p-2
                    text-left
                    transition-colors
                    hover:bg-base
                    hover:text-primary
                  "
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
