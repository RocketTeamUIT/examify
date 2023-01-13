import { Button, Modal } from 'components/ui';
import React, { useEffect, useRef } from 'react';
import PropTypes from 'prop-types';
import jspreadsheet from 'jspreadsheet-ce';

const OPTIONS = {
  data: [[]],
  defaultColAlign: 'left',
  minDimensions: [0, 2],
  columns: [
    {
      title: 'Từ',
      type: 'text',
      width: 150,
    },
    {
      title: 'Loại từ',
      type: 'dropdown',
      source: ['Danh từ', 'Đại từ', 'Động từ', 'Tính từ', 'Trạng từ', 'Giới từ', 'Liên từ', 'Thán từ'],
      width: 150,
    },
    {
      title: 'Nghĩa',
      type: 'text',
      width: 200,
    },
    {
      title: 'Phiên âm',
      type: 'text',
      width: 150,
    },
    {
      title: 'Ảnh',
      type: 'image',
      width: 100,
    },
    {
      title: 'Ví dụ',
      type: 'textarea',
      width: 244,
    },
    {
      title: 'Ghi chú',
      type: 'text',
      width: 200,
    },
  ],
};

const AddMultipleFlashcardsModal = (props) => {
  const { isShowing, hide } = props;
  const jRef = useRef(null);

  useEffect(() => {
    if (!jRef.current.jspreadsheet) {
      jspreadsheet(jRef.current, OPTIONS);
    }
  }, []);

  const handleSubmit = () => {
    console.log(jRef.current.jspreadsheet.getData());
  };

  return (
    <Modal header="Thêm hàng loạt" isShowing={isShowing} hide={hide} maxWidth="max-w-[85vw]">
      <div ref={jRef} />
      <br />

      <Button size="large" className="mt-4 ml-auto" width="120px" onClick={handleSubmit}>
        Lưu
      </Button>
    </Modal>
  );
};

AddMultipleFlashcardsModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default AddMultipleFlashcardsModal;
