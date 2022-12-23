import React from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { Button } from '../../../components/ui';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CreateNote } from '../../note';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

/*  props
    - sec: specify seconds to take note (time of the video). Eg: You want to take note at 1:30 of the video, pass sec=90
*/
const DetailHeader = ({ title, date, month, year }) => {
  const [isShowing, setShowing] = useState(false);

  const hideModal = () => {
    setShowing((prev) => false);
  };

  return (
    <div className="xl:flex items-center space-y-4">
      {/* Title & time*/}
      <div>
        <h4 className="font-semibold text-h4 text-t_dark">{title}</h4>
        <p className="text-light text-sm mt-2 text-t_dark">
          Cập nhật ngày {date} tháng {month} năm {year}
        </p>
      </div>

      <AiOutlineQuestionCircle className="text-h4 xl:ml-auto mr-8" id="mark-as-learnt-help" />
      <Tooltip
        anchorId="mark-as-learnt-help"
        content={
          <>
            <p>Bạn cần lướt tới cuối trang và học ít nhất 1 phút đối với các bài học tài liệu và flashcard</p>
            <p>hoặc xem ít nhất 80% đối với các bài học video để được công nhận là hoàn thành bài học</p>
          </>
        }
      />
      {/* Note */}
      <Button
        type="default"
        unbold
        leftIcon={<BiMessageSquareAdd className="w-6 h-6" />}
        onClick={() => setShowing(true)}
      >
        Thêm ghi chú
      </Button>

      <CreateNote showing={isShowing} hide={hideModal} />
    </div>
  );
};

DetailHeader.propTypes = {
  sec: PropTypes.number,
};

export default DetailHeader;
