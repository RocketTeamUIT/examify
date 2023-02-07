import { Button, Input, Modal, Select, TextArea } from 'components/ui';
import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { BiChevronRight } from 'react-icons/bi';
import classNames from 'classnames';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addFlashcardService, updateFlashcardService } from './services/flashcard';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';
import { uploadImageService } from 'lib/image';
import 'react-tooltip/dist/react-tooltip.css';
import { getWordAudioService } from 'lib/dictionary';

const schema = yup.object().shape({
  word: yup.string().required('Không được để trống'),
  meaning: yup.string().required('Không được để trống'),
});

const AddFlashcardModal = (props) => {
  const { isShowing, hide, onSubmit: onOuterSubmit, isUpdate, initialData, onUpdate } = props;
  const [loading, setLoading] = useState(false);
  const [showMore, setShowMore] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    watch,
    setValue,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const [image, setImage] = useState('');
  const imageFile = watch('image');
  const axios = useAxiosPrivate();
  const { flashcardSetId } = useParams();

  useEffect(() => {
    if (typeof imageFile === 'string') return;

    if (imageFile && imageFile.length > 0) {
      console.log('triggered');
      setImage(URL.createObjectURL(imageFile[0]));
    } else {
      setImage('');
    }
  }, [imageFile]);

  useEffect(() => {
    console.log('🚀 ~ file: AddFlashcardModal.jsx:58 ~ useEffect ~ initialData', initialData);
    if (isUpdate) {
      reset(initialData);
    } else {
      setValue('word', '');
      setValue('typeOfWord', 'noun');
      setValue('meaning', '');
      setValue('pronounce', '');
      setValue('image', '');
      setValue('example', '');
      setValue('note', '');
    }
    setImage(initialData.image);
  }, [isUpdate, initialData, reset, setValue]);

  const toggleMore = () => {
    setShowMore((prev) => !prev);
  };

  const createFlashcard = async (data) => {
    try {
      // Upload image
      setLoading(true);
      const response = imageFile?.length > 0 && (await uploadImageService(imageFile[0], 'examify'));
      const phonetic = await generatePhonetic(data);
      await addFlashcardService({
        axios,
        flashcardSetId,
        ...data,
        image: response ? response.data.url : '',
        audio: phonetic.audio,
        pronounce: phonetic.pronounce,
      });
      onOuterSubmit();
      toast.success('Thêm flashcard thành công');
      hide();
      reset();
    } catch (error) {
      console.log(error);
      toast.error('Thêm flashcard thất bại');
    } finally {
      setLoading(false);
    }
  };

  async function updateFlashcard(data) {
    try {
      setLoading(true);
      const response =
        typeof imageFile !== 'string' && imageFile?.length > 0 && (await uploadImageService(imageFile[0], 'examify'));
      const phonetic = await generatePhonetic(data);
      const newData = {
        ...data,
        image: response ? response.data.url : image,
        audio: phonetic.audio,
        pronounce: phonetic.pronounce,
      };

      await updateFlashcardService({
        axios,
        ...newData,
        flashcardId: initialData.fc_id,
        typeOfWord: initialData.type_of_word,
      });
      toast.success('Cập nhật flashcard thành công');
      onUpdate(newData);
      hide();
      reset();
    } catch (error) {
      toast.error('Cập nhật thất bại');
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  const deleteImage = () => {
    setValue('image', '');
    setImage('');
  };

  function handleDrop(e) {
    e.preventDefault();
    e.stopPropagation();
    setValue('image', e.dataTransfer?.files);
  }

  async function generatePhonetic(data) {
    const result = {
      audio: '',
      pronounce: data.pronounce,
    };
    try {
      const response = await getWordAudioService(data.word);
      if (response.data.length > 0) {
        const audioRes = response.data[0].phonetics.find((item) => item.audio);
        const textRes = response.data[0].phonetics.find((item) => item.text);

        if (audioRes) {
          result.audio = audioRes.audio;
        }

        if (textRes && !data.pronounce) {
          result.pronounce = textRes.text;
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      return result;
    }
  }

  return (
    <Modal isShowing={isShowing} maxWidth="max-w-[500px]" hide={hide} header="Thêm từ mới">
      <form onSubmit={handleSubmit(isUpdate ? updateFlashcard : createFlashcard)}>
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
        <button className="font-semibold text-md flex gap-3 items-center" type="button" onClick={toggleMore}>
          Thêm phiên âm, ảnh, ví dụ và ghi chú
          <BiChevronRight size="16px" className={classNames('transition', showMore && 'rotate-90')} />
        </button>
        {!showMore && <p className="text-sm text-t_dark italic">Phiên âm sẽ tự động thêm nếu có thể</p>}

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
            <button type="button" className="ml-4 font-semibold text-md text-ac_red" onClick={deleteImage}>
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
          <div className="mt-3 border border-br_gray rounded-lg h-[360px] overflow-hidden">
            <img
              src={image || 'https://vmsco.vn/wp-content/uploads/2021/05/placeholder.png'}
              alt="flashcard"
              onDrop={handleDrop}
              onDragOver={(e) => e.preventDefault()}
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
        <Button className="mt-7" width="100%" disabled={loading}>
          {isUpdate ? 'Cập nhật' : 'Thêm'}
        </Button>
      </form>
    </Modal>
  );
};

AddFlashcardModal.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  onSubmit: PropTypes.func,
  isUpdate: PropTypes.bool,
  initialData: PropTypes.object,
  onUpdate: PropTypes.func,
};

AddFlashcardModal.defaultProps = {
  onSubmit: () => {},
  isUpdate: false,
  initialData: {},
  onUpdate: () => {},
};

export default AddFlashcardModal;
