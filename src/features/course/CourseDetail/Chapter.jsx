import { useEffect, useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Unit from './Unit';

function Chapter({ chapter, openAll, seq }) {
  const [isOpen, setOpen] = useState(openAll);

  // this is called when the user clicks openAll:
  useEffect(() => {
    setOpen(openAll);
  }, [openAll]);

  // Set state open when click on chapter
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div
        className="w-full h-[64px] flex items-center shadow-md bg-t_light_gray rounded-md cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex-shrink-0 mx-4">{isOpen ? <BsChevronUp /> : <BsChevronDown />}</div>
        <h3 className="text-body-sm md:text-body-md px-2 flex-1">
          Chương {seq}: {chapter.name}
        </h3>
        <p className="flex-shrink-0 text-body-sm px-1 md:mr-3">{chapter.totalLesson} bài học</p>
      </div>
      {isOpen
        ? chapter.unitList.map((unit, index) => (
            <Unit seq={index + 1} chapterId={chapter.id} key={unit.id} unit={unit} openAll={openAll} />
          ))
        : ''}
    </>
  );
}

export default Chapter;
