import GlowDivider from "../atoms/GlowDivider";
import PrimaryButton from "../atoms/PrimaryButton";

const AboutCard = ({
  description,
  onDownloadCV,
}) => {
  return (
    <div
      className="
        col-span-3
        rounded-2xl
        border
        border-border
        bg-surface
        p-8
      "
    >
      <p className="text-md leading-relaxed text-text">
        {description}
      </p>

      <GlowDivider />

      <PrimaryButton
        className="mt-8"
        onClick={onDownloadCV}
      >
        Descargar CV
      </PrimaryButton>
    </div>
  );
};

export default AboutCard;