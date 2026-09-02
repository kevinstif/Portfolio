import SectionTitle from "../../atoms/SectionTitle";
import AcademicList from "../../molecules/AcademicList";
import academicData from "../../../data/adacademic";

const AcademicSection = () => {
  return (
    <section
      id="academic"
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
          max-w-md
          px-4
          py-16
          md:max-w-7xl
        "
      >
        <SectionTitle>Formación Académica</SectionTitle>

        <AcademicList academicData={academicData} />
      </div>
    </section>
  );
};

export default AcademicSection;