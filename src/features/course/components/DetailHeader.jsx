import React from 'react';
import { BiMessageSquareAdd } from 'react-icons/bi';
import { Button } from '../../../components/ui';
import PropTypes from 'prop-types';
import { useState } from 'react';
import { CreateNote } from '../../note';

/*  props
    - sec: specify seconds to take note (time of the video). Eg: You want to take note at 1:30 of the video, pass sec=90
*/
const DetailHeader = () => {
  const [isShowing, setShowing] = useState(false);

  const hideModal = () => {
    setShowing((prev) => false);
  };

  return (
    <div className="xl:flex items-center justify-between">
      {/* Title & time*/}
      <div className="mb-6 xl:mb-0">
        <h4 className="font-semibold text-h4 text-t_dark">Lý thuyết về bất động từ</h4>
        <p className="text-light text-sm mt-2 text-t_dark">Cập nhật tháng 10 năm 2022</p>
      </div>

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
