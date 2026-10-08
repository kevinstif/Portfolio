import ExperiencePeriod from "../atoms/ExperiencePeriod";

const ExperienceItem = ({ title, period, company, responsibilities }) => {
  return (
    <div
      className="
        relative
        flex
        min-h-32
        border-l
        border-accent
      "
    >
      {/* TIMELINE NODE */}

      <div
        className="
          absolute
          left-0
          top-1/2
          flex
          h-7
          w-7
          -translate-x-1/2
          -translate-y-1/2
          items-center
          justify-center
          rounded-full
          border
          border-accent
          bg-base
        "
      >
        <div
          className="
            h-3
            w-3
            rounded-full
            bg-accent
          "
        />
      </div>

      {/* EXPERIENCE CARD */}

      <div
        className="
          m-2
          ml-6
          flex
          w-full
          flex-col
          justify-center
          rounded-lg
          border
          border-border
          bg-surface
          p-3
          shadow-md
          sm:ml-8
          sm:p-4
        "
      >
        <div className="flex flex-col gap-1 sm:flex-row sm:items-center sm:gap-2">
          <h3 className="text-lg font-semibold text-text">{title}</h3>

          <ExperiencePeriod>{period}</ExperiencePeriod>
        </div>

        <p className="text-sm text-accent">{company}</p>

        <p
          className="
            h-20
            max-h-20
            overflow-hidden
            text-sm
            text-muted
          "
        >
          {responsibilities}
        </p>
      </div>
    </div>
  );
};

export default ExperienceItem;
