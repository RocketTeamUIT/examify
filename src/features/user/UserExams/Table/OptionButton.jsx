import { React, useState } from 'react';
import { PopperActionsList } from 'components/ui/ActionsList';
import Tippy from '@tippyjs/react';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { useNavigate } from 'react-router-dom';

function OptionButton({ examId }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const [destination, setDestination] = useState('');
  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);
  const navigate = useNavigate();

  const navigateTo = () => {
    examId++;
    const link = '/exams/' + examId;
    if (destination !== '')
      if (destination === 'answer') navigate(link + '/answer');
      else navigate(link);
  };

  return (
    <div className="items-center hidden md:flex">
      <PopperActionsList
        placement="bottom-end"
        offset={[0, 4]}
        visible={menuVisible}
        onHide={hideMenu}
        handleChangeType={navigateTo()}
        data={{
          type: 'menu',
          actionsList: [
            {
              title: 'Xem chi tiết đáp án',
              action: () => {
                setDestination('answer');
              },
            },
            {
              title: 'Làm lại đề thi',
              action: () => {
                setDestination('detail');
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
