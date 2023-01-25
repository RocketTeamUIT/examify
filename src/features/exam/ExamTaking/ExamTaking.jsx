import { Button } from '../../../components/ui';
import ControlBar from './ControlBar';
import Main from './Main';
import { ModalConfirm } from 'components/ui/Modal';
import { useState } from 'react';
import useFetchExamTakingData from './useFetchExamTakingData';

const mockConfig = {
  id: 1,
  partTakeList: [
    { id: '1p', name: 'Part 1' },
    { id: '2p', name: 'Part 2' },
    { id: '3p', name: 'Part 3' },
    { id: '4p', name: 'Part 4' },
    { id: '5p', name: 'Part 5' },
    { id: '6p', name: 'Part 6' },
    { id: '7p', name: 'Part 7' },
  ],
  duration: 7200,
};

function ExamTaking({ config = mockConfig }) {
  const [modalCloseVisible, setModalCloseVisible] = useState(false);
  const showModal = () => setModalCloseVisible(true);
  const hideModal = () => setModalCloseVisible(false);
  const [tackle, partList] = useFetchExamTakingData(config);

  const handleCloseExam = () => {
    console.log('handle close exam');
    // Call API at here
  };

  return (
    <>
      <div>
        {/* Exam info */}
        <div className="mt-6 flex flex-col items-center">
          <div className="flex items-center gap-4">
            <h1 className="text-h5 sm:text-h4 lg:text-h3 font-semibold">ETS 2022 - Test 1</h1>
            <Button type="outline" height={32} onClick={modalCloseVisible ? hideModal : showModal}>
              Thoát
            </Button>
          </div>
          <h2 className="text-h6 sm:text-h5 lg:text-h4 font-normal mt-3">Bộ đề thi: ETS 2022</h2>
        </div>

        {/* Layout */}
        <div className="mt-5 px-2 xl:px-5 flex w-full gap-3 xl:gap-5 items-start">
          {/* Thi */}
          <Main tackle={tackle} />

          {/* Sidebar */}
          <ControlBar partList={partList} />
        </div>
      </div>
      <ModalConfirm
        message="Bạn có chắc chắn muốn thoát? Kết quả sẽ không được lưu lại đâu nha!"
        isShowing={modalCloseVisible}
        onHide={hideModal}
        onResolve={handleCloseExam}
      />
    </>
  );
}

export default ExamTaking;
