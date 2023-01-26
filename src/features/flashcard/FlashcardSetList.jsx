import React, { useState } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import FlashcardSet from './FlashcardSet';
import PropTypes from 'prop-types';
import AddFlashcardSetModel from './AddFlashcardSetModel';

const FlashcardSetList = (props) => {
  const { flashcardSets, hideCreate, addSet, hideType } = props;
  const [isShowing, setShowing] = useState(false);

  function toggle() {
    setShowing((prev) => !prev);
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5">
      {!hideCreate && (
        <div
          className="h-[216px] rounded-lg shadow-sd_large flex flex-col text-primary items-center justify-center cursor-pointer transition hover:bg-bg_light_gray_5"
          onClick={toggle}
        >
          <AiOutlinePlus className="h-5 w-5" />
          <p className="font-semibold mt-2">Thêm bộ Flashcard mới</p>
        </div>
      )}

      {flashcardSets.map((set) => (
        <FlashcardSet set={set} hideType={hideType} key={set.fc_set_id} />
      ))}

      {!hideCreate && <AddFlashcardSetModel addSet={addSet} hide={toggle} isShowing={isShowing} />}
    </div>
  );
};

FlashcardSetList.propTypes = {
  flashcardSets: PropTypes.arrayOf(PropTypes.object).isRequired,
  hideCreate: PropTypes.bool,
  addSet: PropTypes.func,
  hideType: PropTypes.bool,
};

FlashcardSetList.defaultProps = {
  hideCreate: false,
  addSet: () => {},
  hideType: true,
};

export default FlashcardSetList;
