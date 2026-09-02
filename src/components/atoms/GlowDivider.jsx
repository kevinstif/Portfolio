const GlowDivider = () => {
  return (
    <div className="relative mt-8 h-px w-full">
      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-transparent
          via-primary-deep
          to-transparent
          blur-[6px]
          animate-pulse
        "
      />

      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-transparent
          via-accent
          to-transparent
        "
      />

      <div
        className="
          absolute inset-0
          bg-linear-to-r
          from-transparent
          via-primary
          to-transparent
          blur-[6px]
          animate-pulse
        "
      />
    </div>
  );
};

export default GlowDivider;