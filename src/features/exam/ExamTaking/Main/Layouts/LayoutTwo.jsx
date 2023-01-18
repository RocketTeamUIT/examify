import MCQ from './MCQ';
import useHalveData from 'features/exam/hooks/useHalveData';

// Layout này dành riêng cho Part 2, Part 5
function LayoutTwo({ data }) {
  // Split array into 2 sub-arrays
  const [leftData, rightData] = useHalveData(data);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-x-[140px] gap-y-10">
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {leftData.map(({ seq, choiceList, name }, index) => (
          <MCQ key={index} seq={seq} choiceList={choiceList} name={name} />
        ))}
      </div>

      {/* Right column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {rightData.map(({ seq, choiceList, name }, index) => (
          <MCQ key={index} seq={seq} choiceList={choiceList} name={name} />
        ))}
      </div>
    </div>
  );
}

export default LayoutTwo;
