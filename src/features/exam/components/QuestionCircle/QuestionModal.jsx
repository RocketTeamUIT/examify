import { Collapse, Modal, Tag } from 'components/ui';
import AudioPlayer from 'features/exam/ExamTaking/Main/AudioPlayer';
import MCQ from './MCQ';
import { useSelector, useDispatch } from 'react-redux';
import { toggleModalVisible } from 'features/exam/recordSlice';

function Divider() {
  return <div className="my-4 w-full h-[1px] bg-br_light_gray"></div>;
}

function QuestionModal({ seq = 1 }) {
  const dispatch = useDispatch();
  const modalVisible = useSelector((store) => store.record.modalVisible);

  return (
    <Modal
      maxWidth="max-w-[800px]"
      isShowing={modalVisible}
      hide={() => dispatch(toggleModalVisible())}
      header={`Đáp án chi tiết #${seq}`}
    >
      <p className="text-h4 font-medium text-t_gray">ETS TOEIC 2022 Test 1</p>
      <div className="flex flex-wrap mt-2 gap-2">
        <Tag color="blue">#[Part 2] Câu hỏi 5W1H - why</Tag>
      </div>
      <AudioPlayer
        src="https://study4.com/media/tez_media1/sound/ets_toeic_2022_test_1_1.mp3"
        className="mt-4 mb-2"
        includeSetting={true}
      />
      <Collapse />
      <Divider />
      <MCQ
        id="1as"
        seq={32}
        disabled={true}
        name="Mougey Fine Gifts is known for its large range of _____ goods."
        choiceList={[
          {
            seq: 1,
            content: 'regional',
          },
          {
            seq: 2,
            content: 'regionally',
          },
          {
            seq: 3,
            content: 'region',
          },
          {
            seq: 4,
            content: 'regions',
          },
        ]}
      />
      <p className="mt-3 text-ac_green select-none">Đáp án đúng: B</p>
      <Collapse className="mt-6" />
    </Modal>
  );
}

export default QuestionModal;
