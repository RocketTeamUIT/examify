import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const SharePerson = (props) => {
  const { person, className, isOwner, small } = props;

  return (
    <div className={classNames('flex items-center gap-4', className)}>
      <img
        src={person.avt || 'https://i.pinimg.com/736x/0a/77/ab/0a77ab9b741887432031c9d0670ac3f3.jpg'}
        alt={person.lastName}
        className={classNames('rounded-full', small ? 'w-[40px] h-[40px]' : 'w-[50px] h-[50px]')}
      />

      <div>
        <p className="font-semibold text-md break-all">
          {person.firstName + ' ' + person.lastName} {isOwner && '(Bạn)'}
        </p>
        <p className="text-md text-t_dark">{person.email}</p>
      </div>

      {isOwner && <p className="ml-auto font-semibold text-md text-t_dark">Chủ sở hữu</p>}
    </div>
  );
};

SharePerson.propTypes = {
  className: PropTypes.string,
  isOwner: PropTypes.bool,
  person: PropTypes.object.isRequired,
};

SharePerson.defaultProps = {
  className: '',
  isOwner: false,
};

export default SharePerson;
