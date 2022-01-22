const SectionTitle = ({ title, subTitle = '' }) => {
  return (
    <div className="bg-green-primary w-full text-white text-xl font-semibold flex justify-center rounded-sm p-3 flex-col">
      <span>{title}</span>
      {subTitle && <span>{subTitle}</span>}
    </div>
  );
};

export default SectionTitle;
