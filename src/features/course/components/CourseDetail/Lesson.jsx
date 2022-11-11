import { AiFillFileText } from 'react-icons/ai';
import { RiSimCardLine } from 'react-icons/ri';
import { MdSlowMotionVideo } from 'react-icons/md';

function Lesson({ lesson }) {
  // todo: handle when click lesson
  const handleClick = () => {
    console.log(lesson.id);
  };

  return (
    <div
      className="w-full flex items-center h-[60px] bg-white rounded-md shadow-md cursor-pointer"
      onClick={handleClick}
    >
      <div className="flex-shrink-0 px-1 md:px-2">
        {lesson.type === 'video' && <MdSlowMotionVideo className="text-t_gray" />}
        {lesson.type === 'text' && <AiFillFileText className="text-t_gray" />}
        {lesson.type === 'flashcard' && <RiSimCardLine className="text-t_gray" />}
      </div>
      <h3 className="text-body-sm px-2 flex-1">{lesson.name}</h3>
      <p className="flex-shrink-0 text-body-sm px-1 md:mr-3">{lesson.time}</p>
    </div>
  );
}

export default Lesson;
