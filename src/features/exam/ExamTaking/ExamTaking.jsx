import { Button } from '../../../components/ui';
import ControlBar from './ControlBar';
import Main from './Main';

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
      <div className="mt-5 px-2 xl:px-5 flex w-full gap-3 xl:gap-5 items-start">
        {/* Thi */}
        <Main />

        {/* Sidebar */}
        <ControlBar />
      </div>
    </div>
  );
}

export default ExamTaking;
