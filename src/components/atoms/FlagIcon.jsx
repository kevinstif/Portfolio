import "flag-icons/css/flag-icons.min.css";

const FlagIcon = ({ country = "pe", className = "" }) => {
  return (
    <span
      className={`fi fi-${country} ${className}`}
      aria-hidden="true"
    />
  );
};

export default FlagIcon;