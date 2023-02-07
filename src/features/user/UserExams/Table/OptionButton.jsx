import { React, useState } from 'react';
import { PopperActionsList } from 'components/ui/ActionsList';
import Tippy from '@tippyjs/react';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

function OptionButton({ examId }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);
  const navigate = useNavigate();

  return (
    <div className="items-center hidden md:flex">
      <PopperActionsList
        placement="bottom-end"
        offset={[0, 4]}
        visible={menuVisible}
        onHide={hideMenu}
        data={{
          type: 'menu',
          actionsList: [
            {
              title: 'Xem chi tiết đáp án',
              action: () => {
                // Temp
                navigate(`/exams/${examId}`);
              },
            },
            {
              title: 'Làm lại đề thi',
              action: () => {
                navigate(`/exams/${examId}`);
              },
            },
          ],
        }}
      >
        <Tippy content="Tùy chọn">
          <span className="cursor-pointer select-none" onClick={menuVisible ? hideMenu : showMenu}>
            <HiEllipsisHorizontal size={24} />
          </span>
        </Tippy>
      </PopperActionsList>
    </div>
  );
}

export default OptionButton;
