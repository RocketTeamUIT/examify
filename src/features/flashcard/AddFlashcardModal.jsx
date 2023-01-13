import { Button, Input, Modal } from 'components/ui';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { BiChevronRight } from 'react-icons/bi';
import classNames from 'classnames';

const AddFlashcardModal = (props) => {
  const { isShowing, hide } = props;
  const [showMore, setShowMore] = useState(false);
  const [flashcard, setFlashcard] = useState({
    word: '',
    typeOfWord: '',
    meaning: '',
  });

  const toggleMore = () => {
    setShowMore((prev) => !prev);
  };

  const handleChange = (e) => {
    setFlashcard({
      ...flashcard,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Modal isShowing={isShowing} maxWidth="max-w-[500px]" hide={hide} header="Thêm từ mới">
      <h6 className="font-semibold text-h6">Từ</h6>
      <div className="mt-3">
        <Input value={flashcard.word} name="word" onChange={handleChange} />
      </div>

      <h6 className="font-semibold text-h6 mt-6">Loại từ</h6>
      <div className="mt-3">
        <Input value={flashcard.typeOfWord} name="typeOfWord" onChange={handleChange} />
      </div>

      <h6 className="font-semibold text-h6 mt-6">Nghĩa</h6>
      <div className="mt-3">
        <Input value={flashcard.meaning} name="meaning" onChange={handleChange} />
      </div>

      <div className="border-t border-br_gray mt-3 mb-4" />

      <button className="font-semibold text-md flex gap-[14px] items-center" onClick={toggleMore}>
        Thêm phiên âm, ảnh, ví dụ và ghi chú{' '}
        <BiChevronRight size="16px" className={classNames('transition', showMore && 'rotate-90')} />
      </button>

      <Button className="mt-7" width="100%">
        Thêm
      </Button>
    </Modal>
  );
};

AddFlashcardModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default AddFlashcardModal;
