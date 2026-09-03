import PrimaryButton from "../atoms/PrimaryButton";
import Dropdown from "./Dropdown";

const ProjectActions = ({
  liveUrl,
  githubItems = [],
}) => {
  const handleVisit = () => {
    if (!liveUrl) return;

    window.open(
      liveUrl,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const handleSelectRepository = (item) => {
    if (!item?.value) return;

    window.open(
      item.value,
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="flex items-center gap-2">
      {liveUrl && (
        <PrimaryButton onClick={handleVisit}>
          Visitar
        </PrimaryButton>
      )}

      {githubItems.length > 0 && (
        <Dropdown
          label="Código"
          items={githubItems}
          onSelect={handleSelectRepository}
        />
      )}
    </div>
  );
};

export default ProjectActions;