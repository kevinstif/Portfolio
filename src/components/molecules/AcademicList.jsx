import AcademicItem from "./AcademicItem";

const AcademicList = ({ academicData }) => {
  return (
    <div className="flex flex-col gap-4">
      {academicData.map((item, index) => (
        <AcademicItem
          key={index}
          {...item}
        />
      ))}
    </div>
  );
};

export default AcademicList;