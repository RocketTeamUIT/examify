import { Button } from '../../../components/ui';
import ToggleButton from '../components/ToggleButton';
import { HiOutlineExclamationCircle } from 'react-icons/hi2';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AudioPlayer from './AudioPlayer';

function ExamTaking() {
  return (
    <div>
      {/* Exam info */}
      <div className="mt-6 flex flex-col items-center">
        <div className="flex items-center gap-4">
          <h1 className="text-h5 sm:text-h4 lg:text-h3 font-semibold">ETS 2022 - Test 1</h1>
          <Button type="outline" height={32}>
            Thoát
          </Button>
        </div>
        <h2 className="text-h6 sm:text-h5 lg:text-h4 font-normal mt-3">Bộ đề thi: ETS 2022</h2>
      </div>

      {/* Layout */}
      <div className="mt-5 px-5 grid grid-cols-4 md:grid-cols-6 lg:grid-cols-12 gap-5">
        {/* Thi */}
        <div className="min-h-screen bg-white col-span-4 md:col-span-6 lg:col-span-9 rounded-lg py-4 px-2 lg:py-6 lg:px-4">
          {/* Flashcard mode */}
          <div className="flex items-center gap-2 text-t_gray">
            <ToggleButton active={true} />
            <span className="italic text-h5 text-t_dark">Flashcard mode</span>
            <Tippy content="Trong quá trình làm bài thi, nếu có từ vựng nào chưa biết, bạn có thể bôi đen từ vựng đó và thêm nó vào flashcard.">
              <span>
                <HiOutlineExclamationCircle fontSize={22} />
              </span>
            </Tippy>
          </div>
          {/* Audio */}
          <AudioPlayer />
        </div>

        {/* Sidebar */}
        <div className="h-28 bg-white hidden lg:block lg:col-span-3 rounded-lg"></div>
      </div>
    </div>
  );
}

export default ExamTaking;
