import { AiOutlineCheck as CheckIcon, AiFillLock as LockIcon } from 'react-icons/ai';
import { BiPencil as PenIcon } from 'react-icons/bi';
import Lesson from './Lesson';

function Unit({ progress, unit, seq, getPath }) {
  const completedItem = () => (
    <div className="w-[20px] h-[20px] rounded-full bg-green-100 border-[1px] border-ac_green flex flex-shrink-0">
      <CheckIcon className="text-ac_green text-[12px] m-auto" />
    </div>
  );

  const inProgressItem = () => (
    <div className="w-[20px] h-[20px] rounded-full bg-yellow-100 border-[1px] border-ac_orange flex flex-shrink-0">
      <PenIcon className="text-ac_orange text-[12px] m-auto" />
    </div>
  );

  const lockItem = () => <LockIcon className="text-[24px] text-gray-400" />;

  if (!Array.isArray(unit.lessonList)) return null;

  return (
    <>
      <div className="flex items-center justify-between h-[60px] bg-bg_light_gray shadow-md rounded-md px-4">
        <p>
          <span className="text-body-sm md:text-body-md">Chủ đề {seq}: </span>
          <span className="text-body-sm md:text-body-md">{unit.name}</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden text-t_gray md:block">{unit.lessonList.length} bài giảng</span>
          {progress === 0 && lockItem()}
          {progress === 100 && completedItem()}
          {progress > 0 && progress < 100 && inProgressItem()}
        </div>
      </div>

      {unit.lessonList.map((lesson, index) => (
        <Lesson key={index} to={getPath(lesson.id)} lesson={lesson} seq={index + 1} />
      ))}
    </>
  );
}

export default Unit;
