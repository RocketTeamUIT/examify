import { HiChevronLeft } from 'react-icons/hi2';

function HeaderActionItem({ title, onBack }) {
  return (
    <li className="flex items-center px-3 pt-1 pb-3 text-t_dark gap-x-2">
      <span onClick={onBack} className="cursor-pointer">
        <HiChevronLeft size={20} />
      </span>
      <span className="text-h5 font-medium">{title}</span>
    </li>
  );
}

export default HeaderActionItem;
