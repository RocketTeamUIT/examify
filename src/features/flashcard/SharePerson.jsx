import React, { useState } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Confirmation } from 'components/ui';
import { deleteShareFlashcardSetService } from './services/flashcard';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';

const SharePerson = (props) => {
  const { person, className, isOwner, small, onDelete, deletable } = props;
  const [showing, setShowing] = useState(false);
  const axios = useAxiosPrivate();
  const { flashcardSetId } = useParams();

  function show() {
    setShowing(true);
  }

  function hide() {
    setShowing(false);
  }

  async function handleConfirm() {
    try {
      await deleteShareFlashcardSetService({ axios, flashcardSetId, userId: person.id });
      toast.success('Xoá thành công');
      onDelete && onDelete(person.id);
    } catch (error) {
      console.log(error);
      toast.error('Xoá thất bại');
    }
  }

  return (
    <div className={classNames('flex items-center gap-4 relative', className)}>
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

      {isOwner && <p className="ml-auto font-semibold text-md flex-shrink-0 text-t_dark">Chủ sở hữu</p>}
      {deletable && (
        <p className="ml-auto font-semibold text-md flex-shrink-0 cursor-pointer text-ac_red" onClick={show}>
          Xoá
        </p>
      )}

      <Confirmation onConfirm={handleConfirm} showing={showing} hide={hide} right="-right-4" top="top-12">
        Xác nhận xoá quyền của người này
      </Confirmation>
    </div>
  );
};

SharePerson.propTypes = {
  className: PropTypes.string,
  isOwner: PropTypes.bool,
  person: PropTypes.object.isRequired,
  onDelete: PropTypes.func,
  deletable: PropTypes.bool,
};

SharePerson.defaultProps = {
  className: '',
  isOwner: false,
  onDelete: () => {},
  deletable: false,
};

export default SharePerson;
