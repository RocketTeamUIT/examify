import { React, useState } from 'react';
import { HiEllipsisHorizontal } from 'react-icons/hi2';
import { PopperActionsList } from 'components/ui/ActionsList';
import Tippy from '@tippyjs/react';
import { RadioAnswer } from 'components/form';
import ReportModal from '../../../../ExamTaking/Main/Layouts/MCQ/ReportModal';
import Advice from './Advice';

function Answer({ id, seq, name, choiceList = [], explain, choicedId }) {
  // console.log('id: ', id);
  // console.log('choiceId: ', choicedId);

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
    <div className="" id={`question-${id}`}>
      {/* Question and option button */}
      <div className="flex justify-between items-start gap-5">
        <p className="text-h5 text-t_dark mb-4 select-none">{`${seq ? seq : id}. ${name ? name : ''}`}</p>
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
      <div>
        {choiceList.map((choiceItem, index) => {
          const value = contentMapping('value', choiceItem.seq);

          return (
            <RadioAnswer
              key={index}
              id={choiceItem.id}
              name={id}
              value={value}
              label={contentMapping('', choiceItem.seq, choiceItem.content)}
              leftDockLabel={32}
              mb={choiceList.length - 1 === index ? 0 : 8}
              isAnswer={choiceItem.key}
              choicedId={choicedId}
            />
          );
        })}
      </div>

      <Advice explain={explain ? explain : 'Câu hỏi này không có ghi chú'} />

      {/* Report */}
      <ReportModal isShowing={modalVisible} hide={hideModal} />
    </div>
  );
}

export default Answer;
