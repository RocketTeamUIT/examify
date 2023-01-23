import { Radio } from 'components/form';
import { PopperActionsList } from 'components/ui/ActionsList';
import ReportModal from './ReportModal';

import { useState } from 'react';
import { HiEllipsisHorizontal, HiFlag, HiOutlineFlag } from 'react-icons/hi2';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function MCQ({ id, seq, name, choiceList = [] }) {
  const [flag, setFlag] = useState(false);
  const [menuVisible, setMenuVisible] = useState(false);
  const menuShow = () => setMenuVisible(true);
  const menuHide = () => setMenuVisible(false);

  const [modalVisible, setModalVisible] = useState(false);
  const modalShow = () => setModalVisible(true);
  const modalHide = () => setModalVisible(false);

  function contentMapping(seq, content) {
    const seqMap = {
      1: 'A.',
      2: 'B.',
      3: 'C.',
      4: 'D.',
    };

    return `${seqMap[seq]} ${content}`;
  }

  return (
    <div className="">
      {/* Name question & flag button & option button */}
      <div className="flex justify-between gap-5 items-start">
        <p className="text-h5 text-t_dark mb-4 select-none">{`${seq}. ${name ? name : ''}`}</p>
        <div className="gap-4 items-center hidden md:flex">
          <Tippy content={flag ? 'Tắt đánh dấu' : 'Đánh dấu câu hỏi'}>
            <span className="cursor-pointer select-none" onClick={() => setFlag(!flag)}>
              {flag ? <HiFlag size={20} color="#EF3737" /> : <HiOutlineFlag size={20} />}
            </span>
          </Tippy>
          <PopperActionsList
            placement="bottom-end"
            offset={[0, 4]}
            visible={menuVisible}
            onHide={menuHide}
            data={{
              type: 'menu',
              actionsList: [
                {
                  title: 'Báo cáo câu hỏi',
                  action: () => {
                    modalShow();
                    console.log('Báo cáo câu hỏi');
                  },
                },
              ],
            }}
          >
            <Tippy content="Tùy chọn">
              <span className="cursor-pointer select-none" onClick={menuVisible ? menuHide : menuShow}>
                <HiEllipsisHorizontal size={24} />
              </span>
            </Tippy>
          </PopperActionsList>
        </div>
      </div>

      {/* MCQ */}
      <div>
        {choiceList.map((choiceItem, index) => (
          <Radio
            key={index}
            name={id}
            label={contentMapping(choiceItem.seq, choiceItem.content)}
            leftDockLabel={32}
            mb={choiceList.length - 1 === index ? 0 : 8}
          />
        ))}
      </div>

      {/* Modal */}
      <ReportModal isShowing={modalVisible} hide={modalHide} />
    </div>
  );
}

export default MCQ;
