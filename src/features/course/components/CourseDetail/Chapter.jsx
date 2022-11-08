import { useState } from 'react';
import { BsChevronDown, BsChevronUp } from 'react-icons/bs';
import Unit from './Unit';

function Chapter({ chapter }) {
  const [isOpen, setOpen] = useState(false);

  // Set state open when click on chapter
  const handleClick = () => {
    setOpen(!isOpen);
  };

  return (
    <>
      <div
        className="w-full h-[70px] flex items-center shadow-md bg-t_light_gray rounded-md cursor-pointer"
        onClick={handleClick}
      >
        <div className="flex-shrink-0 px-1 md:px-2">{isOpen ? <BsChevronUp /> : <BsChevronDown />}</div>
        <h3 className="text-body-sm md:text-body-md px-2 flex-1">{chapter.name}</h3>
        <p className="flex-shrink-0 text-body-sm px-1 md:mr-3">{chapter.total} bài học</p>
      </div>
      {isOpen ? chapter.units.map((unit) => <Unit key={unit.id} unit={unit} />) : ''}
    </>
  );
}

export default Chapter;
