import MCQ from '../MCQ';
import AudioPlayer from '../../AudioPlayer';
import { useSelector } from 'react-redux';

function Question({ data }) {
  const { id, seq, img, name, audio, choiceList = [] } = data;
  const isFullmode = useSelector((store) => store.tackle.isFullmode);

  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:justify-between">
      <div className="w-full lg:w-[40%] xl:w-[48%]">
        <img src={img} alt="img_toeic" />
      </div>
      <div className="w-full lg:w-[55%] xl:w-[48%] bg-white">
        {!isFullmode && <AudioPlayer src={audio} className="mb-5" includeSetting={true} includeVolume={false} />}
        <MCQ id={id} seq={seq} choiceList={choiceList} name={name} />
      </div>
    </div>
  );
}

export default Question;
