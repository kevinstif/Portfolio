const HeroContent = ({ greeting, name, title }) => {
  return (
    <div className="flex flex-col items-start justify-center gap-2 p-8">
      <span className="ml-4 text-lg font-semibold text-accent">{greeting}</span>

      <h1 className="ml-4 text-4xl font-bold text-text">{name}</h1>

      <h2 className="ml-4 text-2xl font-semibold text-primary">{title}</h2>
    </div>
  );
};

export default HeroContent;
