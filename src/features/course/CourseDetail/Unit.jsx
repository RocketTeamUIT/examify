import { useState, useEffect } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Lesson from './Lesson';

function Unit({ unit, openAll, chapterId, seq }) {
  const [isOpen, setOpen] = useState(openAll);

  // this is called when the user clicks openAll:
  useEffect(() => {
    setOpen(openAll);
  }, [openAll]);

  return (
    <>
      <div
        className="h-[60px] flex items-center bg-bg_light_gray rounded-md cursor-pointer ml-4"
        onClick={() => setOpen(!isOpen)}
      >
        <div className="flex-shrink-0 px-1 md:px-2">{isOpen ? <BsChevronUp /> : <BsChevronDown />}</div>
        <h3 className="text-body-sm px-2 flex-1">
          Chủ đề {seq}: {unit.name}
        </h3>

        <p className="flex-shrink-0 text-body-sm px-1 md:mr-3">{unit.lessonList.length || 0} bài học</p>
      </div>
      {isOpen
        ? unit.lessonList.map((lesson, index) => (
            <Lesson seq={index + 1} chapterId={chapterId} key={lesson.id} lesson={lesson} />
          ))
        : ''}
    </>
  );
}

export default Unit;
