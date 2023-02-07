import { Collapse, Modal, Tag } from 'components/ui';
import AudioPlayer from 'features/exam/ExamTaking/Main/AudioPlayer';
import MCQ from './MCQ';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModalVisible } from 'features/exam/recordSlice';
import { useCallback } from 'react';
import { getImgFromInnerHtml, isEmptyObject } from 'utils';
import Side from 'features/exam/ExamTaking/Main/Layouts/LayoutFour/SetQuestion/Side';

function Divider() {
  return <div className="my-4 w-full h-[1px] bg-br_light_gray"></div>;
}

function QuestionModal() {
  const dispatch = useDispatch();
  const { modalVisible, curQuestionId: questionId, headerData } = useSelector((store) => store.record);
  const question = useSelector((store) => store.record?.questionList?.[questionId]);

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

  const handleAutoCollapseParagraph = () => false;

  if (!question || isEmptyObject(question)) return null;

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

      <div className="flex gap-3">
        {/* Img */}
        {question.img && (
          <div className="max-w-[320px] flex-shrink-0">
            <img src={getImgFromInnerHtml(question.img)} alt="toeic_img" />
          </div>
        )}

        {/* Transcript */}
        {question?.transcript && (
          <Collapse
            title="Hiển thị transcript"
            className=""
            content={
              <div
                className="table-para-css text-md"
                dangerouslySetInnerHTML={{
                  __html: question.transcript,
                }}
              ></div>
            }
          />
        )}

        {/* Paragraph */}
        {question.ancestor && (
          <Collapse
            title="Hiển thị đoạn văn"
            onControl={modalVisible ? undefined : handleAutoCollapseParagraph}
            className="mt-2"
            content={<Side data={question.ancestor} />}
          />
        )}
      </div>
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
            className="table-para-css table-para-pd"
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
