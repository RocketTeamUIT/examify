import { AiOutlineCheck as CheckIcon, AiFillLock as LockIcon } from 'react-icons/ai';

function UnitBox({ progress }) {
  const completedItem = () => (
    <div className="w-[24px] h-[24px] rounded-full bg-green-100 border-[1px] border-ac_green flex">
      <CheckIcon className="text-ac_green text-[14px] m-auto" />
    </div>
  );

  const inProgressItem = (percent) => (
    <div className="w-[24px] h-[24px] rounded-full bg-blue-100 border-[1px] border-ac_blue flex">
      <span className="text-[10px] text-ac_blue m-auto font-bold">{percent}%</span>
    </div>
  );

  const lockItem = () => <LockIcon className="text-[24px] text-gray-400" />;

  return (
    <a href="#/" className="">
      <div className="flex items-center justify-between h-[60px] bg-bg_light_gray shadow-md rounded-md px-4">
        <p className="">
          <span>1. </span>
          <span>Giới thiệu về bảng kí hiệu ngữ âm quốc tế (IPA)</span>
        </p>
        <div className="flex items-center gap-4">
          <span className="text-t_gray">2 bài giảng</span>
          {progress === 0 && lockItem()}
          {progress === 100 && completedItem()}
          {progress > 0 && progress < 100 && inProgressItem(progress)}
        </div>
      </div>
    </a>
  );
}

export default UnitBox;
