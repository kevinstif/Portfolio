const Footer = () => {
  return (
    <footer
      className="
        flex
        items-center
        justify-center
        bg-surface
      "
    >
      <div
        className="
          flex
          flex-row
          justify-between
          mx-auto
          w-full
          max-w-md
          px-4
          py-20
          md:max-w-7xl
          text-muted
        "
      >
        <span>© 2026 Kevin Stif Sánchez Urbina</span>

        <span>Diseñado y desarrollado con React</span>
      </div>
    </footer>
  );
};

export default Footer;
