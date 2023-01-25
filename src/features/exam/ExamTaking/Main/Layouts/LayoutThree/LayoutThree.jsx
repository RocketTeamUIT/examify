import useHalveData from 'features/exam/hooks/useHalveData';
import SetQuestion from './SetQuestion';
import AudioPlayer from '../../AudioPlayer';
import { useSelector } from 'react-redux';

// Layout này dành riêng cho Part 3, Part 4
function LayoutThree({ data }) {
  const [leftData, rightData] = useHalveData(data);
  const isFullmode = useSelector((store) => store.tackle.isFullmode);

  return (
    <div className="flex flex-col xl:flex-row xl:justify-between gap-x-[128px] gap-y-10 xl:gap-y-20">
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {leftData.map(({ img, setQuestion, audio }, index) => (
          <div key={index}>
            {!isFullmode && <AudioPlayer src={audio} className="mb-2" includeSetting={true} includeVolume={false} />}
            <SetQuestion img={img} setQuestion={setQuestion} />
          </div>
        ))}
      </div>

      {/* Right column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {rightData.map(({ img, setQuestion, audio }, index) => (
          <div key={index}>
            {!isFullmode && <AudioPlayer src={audio} className="mb-2" includeSetting={true} includeVolume={false} />}
            <SetQuestion img={img} setQuestion={setQuestion} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LayoutThree;
