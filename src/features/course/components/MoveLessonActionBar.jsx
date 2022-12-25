import React from 'react';
import { Button } from '../../../components/ui';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from 'react-icons/md';
import { IoMenu } from 'react-icons/io5';
import PropTypes from 'prop-types';

// This is the bottom bar which has 'Previous' button and 'Next' button to change the current lesson
/*  props
    - toggle: callback to toggle menu when clicked
*/
const MoveLessonActionBar = ({ toggle, onMove, isPreviousDisable, isNextDisable }) => {
  return (
    <div className="fixed bottom-0 w-full bg-t_light_gray h-[60px] flex items-center justify-start md:justify-center gap-3 md:gap-6">
      {/* Button: Previous Lesson */}
      <Button
        type="text"
        disabled={isPreviousDisable()}
        onClick={() => {
          onMove(-1);
        }}
        height="60px"
        color={!isPreviousDisable() && '#0E46C7'}
        leftIcon={<MdKeyboardArrowLeft className="w-[30px] h-[30px]" />}
      >
        BÀI TRƯỚC
      </Button>

      {/* Button: Next Lesson */}
      <Button
        onClick={() => {
          onMove(1);
        }}
        disabled={isNextDisable()}
        type="text"
        height="60px"
        rightIcon={<MdKeyboardArrowRight className="w-[30px] h-[30px]" />}
        color={!isNextDisable() && '#0E46C7'}
      >
        BÀI TIẾP THEO
      </Button>

      {/* Button: Toggle menu */}
      <Button
        className="absolute right-4 lg:hidden"
        shape="circle"
        type="plain"
        height="40px"
        width="40px"
        onClick={(e) => {
          e.stopPropagation();
          toggle();
        }}
        leftIcon={<IoMenu className="w-5 h-5 text-t_dark" />}
      ></Button>
    </div>
  );
};

MoveLessonActionBar.propTypes = {
  toggle: PropTypes.func.isRequired,
};

export default MoveLessonActionBar;
