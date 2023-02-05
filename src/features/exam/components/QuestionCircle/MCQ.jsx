import { Radio } from 'components/form';
import { PopperActionsList } from 'components/ui/ActionsList';
import ReportModal from '../../ExamTaking/Main/Layouts/MCQ/ReportModal';
import QuestionNumber from './QuestionNumber';

import { useState } from 'react';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

function MCQ({ id, seq, name, choiceList = [], disabled = false, userChoiceId }) {
  const [menuVisible, setMenuVisible] = useState(false);
  const showMenu = () => setMenuVisible(true);
  const hideMenu = () => setMenuVisible(false);

  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);

  function contentMapping(type, seq, content) {
    const seqMap = {
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
    };

    if (type === 'value') return `${seqMap[seq]}`;
    return `${seqMap[seq]}. ${content}`;
  }

  return (
    <div className="flex gap-5" id={`question-${id}`}>
      <QuestionNumber>{seq}</QuestionNumber>
      <div className="flex-1">
        {/* Name question & flag button & option button */}
        <div className="flex justify-between gap-5 items-start">
          <p className={'text-h5 text-t_dark mb-4 select-none'}>{name ? name : ''}</p>
          <div className="gap-4 items-center hidden md:flex">
            <PopperActionsList
              placement="bottom-end"
              offset={[0, 4]}
              visible={menuVisible}
              onHide={hideMenu}
              data={{
                type: 'menu',
                actionsList: [
                  {
                    title: 'Báo cáo câu hỏi',
                    action: () => {
                      showModal();
                      console.log('Báo cáo câu hỏi');
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
        </div>

        {/* MCQ */}
        <div>
          {choiceList.map((choiceItem, index) => {
            const value = contentMapping('value', choiceItem.seq);
            let curStatus = choiceItem.id === userChoiceId ? (choiceItem.key === true ? 'correct' : 'wrong') : 'normal';

            return (
              <Radio
                key={index}
                name={id}
                disabled={disabled}
                checked={choiceItem.id === userChoiceId}
                value={value}
                status={curStatus}
                label={contentMapping('', choiceItem.seq, choiceItem.content)}
                leftDockLabel={32}
                mb={choiceList.length - 1 === index ? 0 : 8}
              />
            );
          })}
        </div>
      </div>

      {/* Modal */}
      <ReportModal isShowing={modalVisible} hide={hideModal} />
    </div>
  );
}

export default MCQ;
