import { Button } from '../../../../../components/ui';
import Part from './Part';
import { Checkbox } from '../../../../../components/form';
import { useParams, useNavigate } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { ModalConfirm } from 'components/ui/Modal';
import { useState } from 'react';
import { setCountup, setDuration, setMode, setExamId } from 'features/exam/tackleSlice';

function ChoosePart({ choosePart }) {
  const { examId } = useParams();
  const { detail } = useSelector((store) => store.exam);
  const dispatch = useDispatch();
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const navigate = useNavigate();

  const fullTestConfig = {
    id: examId,
    partIdList: detail.parts.map((partItem) => partItem.id),
    duration: detail.duration,
    isFullmode: true,
  };

  return (
    <>
      <div className="mt-9">
        <div className="flex justify-between">
          <h4 className="text-h4 font-semibold">Chọn phần thi muốn làm</h4>
          {/* <Link to="/exams/tackle" state={{ config: fullTestConfig }}> */}
          <Button
            height={40}
            type="danger"
            onClick={() => {
              showModal();
            }}
          >
            Làm fulltest
          </Button>
          {/* </Link> */}
        </div>
        <div className="mt-4">
          {detail.parts.map((partItem, index) => (
            <Checkbox
              key={index}
              onClick={() => choosePart(partItem.id)}
              label={<Part key={index} part={partItem} />}
              leftDockLabel={'28px'}
              mb="20px"
            />
          ))}
        </div>
      </div>
      <ModalConfirm
        type="confirm"
        header="Xác nhận"
        isShowing={modalVisible}
        onHide={hideModal}
        onResolve={() => {
          dispatch(setExamId(fullTestConfig.id));
          dispatch(setCountup(0));
          dispatch(setMode(fullTestConfig.isFullmode));
          dispatch(setDuration(fullTestConfig.duration));
          navigate('/exams/tackle', {
            state: {
              config: fullTestConfig,
            },
          });
        }}
        titleResolve="Quất thôi"
        titleReject="Chờ tui chuẩn bị xí"
        message="Thời gian làm bài khá dài, bạn đã chuẩn bị tinh thần cũng như chỗ ngồi ổn định chưa đó?"
      />
    </>
  );
}

export default ChoosePart;
