import useHalveData from 'features/exam/hooks/useHalveData';
import SetQuestion from './SetQuestion';

// Layout này dành riêng cho Part 3, Part 4
function LayoutThree({ data }) {
  const [leftData, rightData] = useHalveData(data);

  return (
    <div className="flex flex-col xl:flex-row xl:justify-between gap-x-[128px] gap-y-10 xl:gap-y-20">
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {leftData.map(({ img, setQuestion }, index) => (
          <SetQuestion key={index} img={img} setQuestion={setQuestion} />
        ))}
      </div>

      {/* Right column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {rightData.map(({ img, setQuestion }, index) => (
          <SetQuestion key={index} img={img} setQuestion={setQuestion} />
        ))}
      </div>
    </div>
  );
}

export default LayoutThree;
