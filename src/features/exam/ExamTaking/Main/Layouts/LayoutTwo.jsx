import MCQ from './MCQ';
import useHalveData from 'features/exam/hooks/useHalveData';
import AudioPlayer from '../AudioPlayer';
import { useSelector } from 'react-redux';

// Layout này dành riêng cho Part 2, Part 5
function LayoutTwo({ data, includeAudio = false }) {
  // Split array into 2 sub-arrays
  const [leftData, rightData] = useHalveData(data);
  const isFullmode = useSelector((store) => store.tackle.isFullmode);

  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-x-[140px] gap-y-10">
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {leftData.map(({ id, seq, choiceList, name, audio }, index) => (
          <div key={index}>
            {includeAudio && !isFullmode && (
              <AudioPlayer src={audio} className="mb-2" includeSetting={true} includeVolume={false} />
            )}
            <MCQ id={id} seq={seq} choiceList={choiceList} name={name} />
          </div>
        ))}
      </div>

      {/* Right column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {rightData.map(({ id, seq, choiceList, name, audio }, index) => (
          <div key={index}>
            {includeAudio && !isFullmode && (
              <AudioPlayer src={audio} className="mb-2" includeSetting={true} includeVolume={false} />
            )}
            <MCQ id={id} seq={seq} choiceList={choiceList} name={name} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default LayoutTwo;
