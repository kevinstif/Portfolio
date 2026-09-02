import ExperiencePeriod from "../atoms/ExperiencePeriod";
import CertificateLink from "../atoms/CertificateLink";

const AcademicItem = ({
  title,
  period,
  institution,
  description,
  certificate,
}) => {
  return (
    <article
      className="
        flex
        flex-col
        gap-2
        rounded-lg
        border
        border-border
        bg-surface
        p-4
        shadow-md
      "
    >
      <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div className="flex items-start gap-4">
          <div className="h-15 w-1 shrink-0 bg-accent" />

          <div className="flex flex-col">
            <div className="mt-1 flex flex-wrap items-center gap-2">
              <p className="text-base font-semibold text-text">
                {title}
              </p>

              <ExperiencePeriod>
                {period}
              </ExperiencePeriod>
            </div>

            <p className="text-sm text-accent">
              {institution}
            </p>

            <p className="text-sm text-muted">
              {description}
            </p>
          </div>
        </div>

        <div className="shrink-0 md:self-center">
          <CertificateLink href={certificate} />
        </div>
      </div>
    </article>
  );
};

export default AcademicItem;