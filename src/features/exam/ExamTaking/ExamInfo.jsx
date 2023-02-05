import { Button } from '../../../components/ui';
import { ModalConfirm } from 'components/ui/Modal';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function ExamInfo({ examSeriesName, examName }) {
  const [modalCloseVisible, setModalCloseVisible] = useState(false);
  const showModal = () => setModalCloseVisible(true);
  const hideModal = () => setModalCloseVisible(false);
  const navigate = useNavigate();

  const handleCloseExam = () => {
    navigate(-1, { replace: true });
  };

  return (
    <>
      <div className="mt-6 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-h5 sm:text-h4 lg:text-h3 font-semibold">{examName}</h1>
          <Button type="outline" height={32} onClick={modalCloseVisible ? hideModal : showModal}>
            Thoát
          </Button>
        </div>
        <h2 className="text-h6 sm:text-h5 lg:text-h4 font-normal mt-3">Thuộc bộ đề: {examSeriesName}</h2>
      </div>

      <ModalConfirm
        header="Xác nhận"
        message="Bạn có chắc chắn muốn thoát? Kết quả sẽ không được lưu lại đâu nha!"
        isShowing={modalCloseVisible}
        onHide={hideModal}
        onResolve={handleCloseExam}
        titleResolve="Xác nhận"
        titleReject="Hủy"
      />
    </>
  );
}

export default ExamInfo;
