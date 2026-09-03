const CertificateLink = ({ href }) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="
        inline-flex
        items-center
        gap-1.5
        rounded
        text-sm
        font-medium
        text-accent
        transition-colors
        hover:text-text
        focus-visible:outline-none
        focus-visible:ring-2
        focus-visible:ring-accent
        focus-visible:ring-offset-2
        focus-visible:ring-offset-surface
      "
    >
      Ver certificado

      <svg
        className="h-3.5 w-3.5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={2}
        aria-hidden="true"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M17 8l4 4m0 0l-4 4m4-4H3"
        />
      </svg>
    </a>
  );
};

export default CertificateLink;