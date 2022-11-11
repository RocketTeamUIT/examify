import { memo } from 'react';
import { TiTick } from 'react-icons/ti';

const TickItem = ({ children }) => (
  <li className="mt-2 flex gap-3 items-center">
    <div className="w-[24px] h-[24px] bg-ac_green flex flex-shrink-0 justify-center rounded-sm items-center">
      <TiTick className="text-white" />
    </div>
    <p>{children}</p>
  </li>
);

export default memo(TickItem);
