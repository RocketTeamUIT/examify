import { Collapse, Modal, Tag } from 'components/ui';
import AudioPlayer from 'features/exam/ExamTaking/Main/AudioPlayer';
import MCQ from './MCQ';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModalVisible } from 'features/exam/recordSlice';
import { useCallback } from 'react';

function Divider() {
  return <div className="my-4 w-full h-[1px] bg-br_light_gray"></div>;
}

function QuestionModal() {
  const dispatch = useDispatch();
  const { modalVisible, curQuestionId: questionId, headerData } = useSelector((store) => store.record);
  const question = useSelector((store) => store.record.questionList[questionId]);

  const correctAnswer = useCallback((choiceList = []) => {
    const choiceMapping = {
      1: 'A',
      2: 'B',
      3: 'C',
      4: 'D',
    };

    let result;
    choiceList.forEach((choiceItem) => {
      if (choiceItem.key) {
        result = choiceMapping[choiceItem.seq];
      }
    });
    return result;
  }, []);

  return (
    <Modal
      maxWidth="max-w-[800px]"
      isShowing={modalVisible}
      hide={() => dispatch(toggleModalVisible())}
      header={`Đáp án chi tiết #${question.order}`}
    >
      <p className="text-h4 font-medium text-t_gray">{headerData.examName}</p>

      {/* Hashtag */}
      <div className="flex flex-wrap mt-2 gap-2">
        <Tag color="blue">{question.hashtag}</Tag>
      </div>

      {/* Audio */}
      {question.audio && <AudioPlayer src={question.audio} className="my-4" includeSetting={true} />}

      {/* Img */}
      {question.img && (
        <div className="max-w-[320px]">
          <img src={question.img} alt="toeic_img" />
        </div>
      )}

      {/* Transcript */}
      <Collapse
        title="Hiển thị transcript"
        className="mt-2"
        content={
          <div
            dangerouslySetInnerHTML={{
              __html: question.explain,
            }}
          ></div>
        }
      />
      <Divider />
      <MCQ
        id={question.id}
        seq={question.order}
        disabled={true}
        name={question.name}
        choiceList={question.choiceList}
        userChoiceId={question.userChoiceId}
      />
      {question.userAnswer !== 1 && (
        <p className="mt-3 text-ac_green select-none">Đáp án đúng: {correctAnswer(question.choiceList)}</p>
      )}
      <Collapse
        className="mt-6"
        title="Giải thích"
        open
        content={
          <div
            dangerouslySetInnerHTML={{
              __html: question.explain,
            }}
          ></div>
        }
      />
    </Modal>
  );
}

export default QuestionModal;
