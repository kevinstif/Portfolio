const TechnologyIcons = ({ technologies = [], size = "md" }) => {
  const sizeClasses = {
    sm: "text-base gap-1.5",
    md: "text-xl gap-2",
    lg: "text-3xl gap-2",
  };

  return (
    <ul className={`flex ${sizeClasses[size]}`} aria-label="Tecnologías usadas">
      {technologies.map((technology) => (
        <li key={technology.name} title={technology.name}>
          <i className={technology.icon} aria-hidden="true" />
        </li>
      ))}
    </ul>
  );
};

export default TechnologyIcons;
