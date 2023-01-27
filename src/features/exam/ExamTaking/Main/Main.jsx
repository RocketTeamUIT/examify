import { HiOutlineExclamationCircle } from 'react-icons/hi2';
import { ToggleButton } from 'features/exam/components';
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import AudioPlayer from './AudioPlayer';
import { GroupButtonTabs } from '../../components';
import { useCallback } from 'react';
import LayoutMap from './Layouts';
import { useSelector } from 'react-redux';

function Main({ tackle, audio }) {
  const isFullmode = useSelector((store) => store.tackle.isFullmode);

  const dataMapping = useCallback((data = []) => {
    return data.map((item) => {
      return {
        id: item.id,
        title: item.name,
        element: <LayoutMap part={item.name} data={item.data} />,
      };
    });
  }, []);

  return (
    <div className="min-h-screen bg-white flex-shrink-0 flex-grow-0 basis-full md:basis-[68%] lg:basis-3/4 xl:basis-4/5 max-w-full rounded-lg py-4 px-2 lg:py-6 lg:px-4">
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
      {isFullmode && <AudioPlayer src={audio} className="mt-10" includeVolume={true} includeSetting={true} />}

      <GroupButtonTabs className="mt-10" tabList={dataMapping(tackle)} mtContentDock="40px" nextMode={true} />
    </div>
  );
}

export default Main;
