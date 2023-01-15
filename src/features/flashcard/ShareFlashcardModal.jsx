import { Button, Input, Modal } from 'components/ui';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import SharePerson from './SharePerson';
import FlashcardPermission from './FlashcardPermission';
import { toast } from 'react-toastify';

const ShareFlashcardModal = (props) => {
  const [permission, setPermisson] = useState('public');
  const { isShowing, hide } = props;

  const copyLink = () => {
    toast.success('Sao chép thành công');
  };

  return (
    <Modal
      isShowing={isShowing}
      hide={hide}
      header="Chia sẻ bộ Flashcard: 600 TOEIC words: Entertainment"
      maxWidth="max-w-[552px]"
    >
      <div>
        <Input placeholder="Thêm người vào danh sách chia sẻ" />

        <h5 className="font-semibold text-h5 text-t_dark mt-4">Những người được truy cập</h5>
        <div className="space-y-4 mt-4">
          <SharePerson isOwner />
          <SharePerson />
        </div>

        <h5 className="font-semibold text-h5 text-t_dark mt-6 mb-4">Quyền truy cập</h5>
        <FlashcardPermission permission={permission} setPermission={setPermisson} />

        <Button className="mt-[30px]" width="100%" onClick={copyLink}>
          Sao chép đường dẫn chia sẻ
        </Button>
      </div>
    </Modal>
  );
};

ShareFlashcardModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default ShareFlashcardModal;
