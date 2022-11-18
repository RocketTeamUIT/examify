import { AiOutlineCheck as CheckIcon, AiFillLock as LockIcon } from 'react-icons/ai';
import { BiPencil as PenIcon } from 'react-icons/bi';

function UnitBox({ progress }) {
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

  return (
    <a href="#/" className="">
      <div className="flex items-center justify-between h-[60px] bg-bg_light_gray shadow-md rounded-md px-4">
        <p className="">
          <span className="text-body-sm md:text-body-md">1. </span>
          <span className="text-body-sm md:text-body-md">Giới thiệu về bảng kí hiệu ngữ âm quốc tế (IPA)</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="hidden text-t_gray md:block">2 bài giảng</span>
          {progress === 0 && lockItem()}
          {progress === 100 && completedItem()}
          {progress > 0 && progress < 100 && inProgressItem()}
        </div>
      </div>
    </a>
  );
}

export default UnitBox;
