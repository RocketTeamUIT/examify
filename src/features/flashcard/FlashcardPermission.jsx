import React, { useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { MdPublic, MdPublicOff } from 'react-icons/md';
import PropTypes from 'prop-types';
import { PureDropdown } from 'components/ui';
import { FiCheck } from 'react-icons/fi';
const FlashcardPermission = (props) => {
  const { permission, setPermission } = props;
  const [isShowing, setShowing] = useState(false);

  const ACTION_LIST = [
    {
      title: (
        <span className="flex gap-2 items-center">
          {permission === 'public' ? <FiCheck className="text-primary" /> : <span className="mr-4" />}
          Công khai
        </span>
      ),
      func: () => setPermission('public'),
    },
    {
      title: (
        <span className="flex gap-2 items-center">
          {permission === 'private' ? <FiCheck className="text-primary" /> : <span className="mr-4" />}
          Riêng tư
        </span>
      ),
      func: () => setPermission('private'),
    },
  ];

  const toggle = () => setShowing((prev) => !prev);

  return (
    <PureDropdown actionList={ACTION_LIST} visible={isShowing} hide={toggle}>
      <div
        className="flex items-center gap-4 hover:bg-bg_light_gray transition p-2 -m-2 rounded-xl cursor-pointer"
        onClick={toggle}
      >
        <div className="rounded-full flex items-center justify-center bg-opacity-10 bg-primary w-[50px] h-[50px] flex-shrink-0">
          {permission === 'public' ? (
            <MdPublic size="40px" className="text-primary" />
          ) : (
            <MdPublicOff size="40px" className="text-primary" />
          )}
        </div>

        <div className="min-w-0">
          <p className="font-semibold text-md">{permission === 'public' ? 'Công khai' : 'Riêng tư'}</p>
          <p className="text-md text-t_dark">
            {permission === 'public'
              ? 'Bộ flashcard của bạn sẽ được hiển thị công khai'
              : 'Chỉ những ai có quyền truy cập mới xem được bộ Flashcard của bạn'}
          </p>
        </div>

        <BiChevronDown className="ml-auto flex-shrink-0" size="20px" />
      </div>
    </PureDropdown>
  );
};

FlashcardPermission.propTypes = {
  permission: PropTypes.string.isRequired,
  setPermission: PropTypes.func.isRequired,
};

export default FlashcardPermission;
