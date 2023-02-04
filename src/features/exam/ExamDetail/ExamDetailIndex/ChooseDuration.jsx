import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button, Dropdown, Input } from '../../../../components/ui';
import { ModalConfirm } from 'components/ui/Modal';
import { useDispatch } from 'react-redux';
import { setCountup, setDuration, setExamId, setMode } from 'features/exam/tackleSlice';

function ChooseDuration({ durationValue, durationList, onChange, config }) {
  const isActive = (() => config.partIdList.length !== 0)();
  const [modalVisible, setModalVisible] = useState(false);
  const showModal = () => setModalVisible(true);
  const hideModal = () => setModalVisible(false);
  const dispatch = useDispatch();

  return (
    <>
      <div className="mt-9">
        <h4 className="text-h4 font-semibold">Chọn thời gian thi (Để trống nếu bạn không muốn giới hạn)</h4>

        <div className="flex justify-between mt-5">
          <div className="basis-4/12">
            <Dropdown color="#777777" type="default" data={durationList}>
              -- Chọn thời gian --
            </Dropdown>
            <div className="mt-6">
              <p className="mb-1 text-h5 font-normal">Hoặc tùy chỉnh</p>
              <Input
                onChange={onChange}
                value={durationValue.toString()}
                height={32}
                type="number"
                fancyOutlined
                rightIcon={<span className="text-h6 text-t_gray">phút</span>}
              />
            </div>
          </div>
          {isActive ? (
            <Link to="/exams/tackle" state={{ config }} className="flex flex-col-reverse">
              <Button
                type="outline"
                onClick={() => {
                  dispatch(setExamId(config.id));
                  dispatch(setCountup(0));
                  dispatch(setMode(config.isFullmode));
                  dispatch(setDuration(config.duration));
                }}
              >
                Thực hiện
              </Button>
            </Link>
          ) : (
            <div className="flex flex-col-reverse">
              <Button
                type="outline"
                onClick={() => {
                  showModal();
                }}
              >
                Thực hiện
              </Button>
            </div>
          )}
        </div>
      </div>
      <ModalConfirm
        type="notify"
        isShowing={modalVisible}
        onHide={hideModal}
        titleResolve="Hiểu rồi"
        message="Bạn vẫn chưa chọn phần để thi!"
        header="Chưa thể thực hiện"
      />
    </>
  );
}

export default ChooseDuration;
