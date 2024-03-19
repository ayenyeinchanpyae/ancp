const SectionWrapper = ({ children, sectionName, fullHeight = false }) => {
  return (
    <div
      name={sectionName}
      className={`w-full pt-[80px] bg-white text-slate-600 ${fullHeight ? 'h-full' : 'h-screen'}`}
    >
      <main>{children}</main>
    </div>
  );
};
export default SectionWrapper;