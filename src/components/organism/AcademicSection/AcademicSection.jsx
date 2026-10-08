import SectionTitle from "../../atoms/SectionTitle";
import AcademicList from "../../molecules/AcademicList";
import academicData from "../../../data/adacademic";

const AcademicSection = () => {
  return (
    <section
      id="education"
      className="
        flex
        min-h-screen
        items-center
        justify-center
        bg-base
      "
    >
      <div
        className="
          mx-auto
          w-full
          max-w-7xl
          px-4
          py-16
          sm:px-6
          lg:px-8
        "
      >
        <SectionTitle>Educación</SectionTitle>

        <AcademicList academicData={academicData} />
      </div>
    </section>
  );
};

export default AcademicSection;