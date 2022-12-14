import { AiOutlineCheck as CheckIcon, AiFillLock as LockIcon } from 'react-icons/ai';
import { BiPencil as PenIcon } from 'react-icons/bi';
import { Link } from 'react-router-dom';

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

  if (!unit.lessonList || !unit.lessonList.length) return null;

  return (
    <Link to={getPath(unit.lessonList[0].id)}>
      <div className="flex items-center justify-between h-[60px] bg-bg_light_gray shadow-md rounded-md px-4">
        <p>
          <span className="text-body-sm md:text-body-md">{seq}. </span>
          <span className="text-body-sm md:text-body-md">{unit.name}</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden text-t_gray md:block">{unit.lessonList.length} bài giảng</span>
          {progress === 0 && lockItem()}
          {progress === 100 && completedItem()}
          {progress > 0 && progress < 100 && inProgressItem()}
        </div>
      </div>
    </Link>
  );
}

export default Unit;