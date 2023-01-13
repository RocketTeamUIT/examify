import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SharePerson = (props) => {
  const { className, isOwner } = props;

  return (
    <div className={classNames('flex items-center gap-4', className)}>
      <img
        src="https://i.pinimg.com/736x/0a/77/ab/0a77ab9b741887432031c9d0670ac3f3.jpg"
        alt="Bocchi"
        className="rounded-full w-[50px] h-[50px]"
      />

      <div>
        <p className="font-semibold text-md">Hoàng Đình Anh Tuấn (you)</p>
        <p className="text-md text-t_dark">hdatdragon2@gmail.com</p>
      </div>

      {isOwner && <p className="ml-auto font-semibold text-md text-t_dark">Chủ sở hữu</p>}
    </div>
  );
};

SharePerson.propTypes = {
  className: PropTypes.string,
  isOwner: PropTypes.bool,
};

SharePerson.defaultProps = {
  className: '',
  isOwner: false,
};

export default SharePerson;
