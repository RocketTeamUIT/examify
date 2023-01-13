import { Button, Input, Modal, Select, TextArea } from 'components/ui';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BiChevronRight } from 'react-icons/bi';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';

const schema = yup.object().shape({
  word: yup.string().required('Không được để trống'),
  meaning: yup.string().required('Không được để trống trường này'),
});

const AddFlashcardModal = (props) => {
  const { isShowing, hide } = props;
  const [showMore, setShowMore] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [image, setImage] = useState('');
  const imageFile = watch('image');

  useEffect(() => {
    if (imageFile && imageFile.length > 0) {
      setImage(URL.createObjectURL(imageFile[0]));
    } else {
      setImage('');
    }
  }, [imageFile]);

  const toggleMore = () => {
    setShowMore((prev) => !prev);
  };

  const onSubmit = (data) => {
    console.log(data);
  };

  const deleteImage = () => {
    setValue('image', '');
  };

  return (
    <Modal isShowing={isShowing} maxWidth="max-w-[500px]" hide={hide} header="Thêm từ mới">
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* Word */}
        <h6 className="font-semibold text-h6">Từ</h6>
        <div className="mt-3">
          <Input status={errors.word && 'error'} {...register('word')} />
        </div>
        <p className="text-ac_red text-sm mt-1">{errors.word?.message}</p>

        {/* Type of word */}
        <h6 className="font-semibold text-h6 mt-6">Loại từ</h6>
        <div className="mt-3">
          <Select {...register('typeOfWord')}>
            <option value="noun">Danh từ</option>
            <option value="pronoun">Đại từ</option>
            <option value="verb">Động từ</option>
            <option value="adjective">Tính từ</option>
            <option value="adverb">Trạng từ</option>
            <option value="preposition">Giới từ</option>
            <option value="conjunction">Liên từ</option>
            <option value="interjection">Thán từ</option>
          </Select>
        </div>

        {/* Meaning */}
        <h6 className="font-semibold text-h6 mt-6">Nghĩa</h6>
        <div className="mt-3">
          <Input status={errors.meaning && 'error'} {...register('meaning')} />
        </div>
        <p className="text-ac_red text-sm mt-1">{errors.meaning?.message}</p>

        <div className="border-t border-br_gray mt-3 mb-4" />

        {/* Expand */}
        <button className="font-semibold text-md flex gap-[14px] items-center" onClick={toggleMore}>
          Thêm phiên âm, ảnh, ví dụ và ghi chú{' '}
          <BiChevronRight size="16px" className={classNames('transition', showMore && 'rotate-90')} />
        </button>

        <div className={classNames(!showMore && 'hidden')}>
          {/* Pronounce */}
          <h6 className="font-semibold text-h6 mt-6">Phiên âm</h6>
          <div className="mt-3">
            <Input {...register('pronounce')} />
          </div>
          {/* Image */}
          <div className="flex mt-6 items-center">
            <h6 className="font-semibold text-h6">Ảnh</h6>
            <label
              htmlFor="upload-image-flashcard"
              className="ml-auto font-semibold text-md text-primary cursor-pointer"
            >
              Thêm
            </label>
            <button className="ml-4 font-semibold text-md text-ac_red" onClick={deleteImage}>
              Xoá
            </button>
          </div>
          <input
            type="file"
            id="upload-image-flashcard"
            className="hidden"
            {...register('image')}
            accept="image/png, image/jpeg"
          />
          <div className="mt-3 border border-br_gray rounded-lg h-[200px] overflow-hidden">
            <img
              src={image || 'https://vmsco.vn/wp-content/uploads/2021/05/placeholder.png'}
              alt="flashcard"
              className="object-cover w-full h-full"
            />
          </div>
          {/* Example */}
          <h6 className="font-semibold text-h6 mt-6">Ví dụ</h6>
          <div className="mt-3">
            <TextArea {...register('example')} />
          </div>
          {/* Note */}
          <h6 className="font-semibold text-h6 mt-6">Ghi chú</h6>
          <div className="mt-3">
            <TextArea {...register('note')} />
          </div>
        </div>

        {/* Submit button */}
        <Button className="mt-7" width="100%">
          Thêm
        </Button>
      </form>
    </Modal>
  );
};

AddFlashcardModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
};

export default AddFlashcardModal;
