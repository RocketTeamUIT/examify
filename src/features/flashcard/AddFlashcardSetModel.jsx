import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import { Button, Input, Modal, Select, TextArea } from 'components/ui';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { createFlashcardSetService, updateFlashcardSetService } from './services/flashcard';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { toast } from 'react-toastify';
import { useParams } from 'react-router-dom';

const schema = yup.object().shape({
  name: yup.string().required('Không được để trống'),
});

const AddFlashcardSetModel = (props) => {
  const [loading, setLoading] = useState(false);
  const { isShowing, hide, addSet, isUpdate, initialData, setDetail } = props;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: initialData,
  });
  const axios = useAxiosPrivate();
  const { flashcardSetId } = useParams();

  useEffect(() => {
    reset(initialData);
  }, [initialData, reset]);

  async function createSet(data) {
    try {
      const response = await createFlashcardSetService({
        axios,
        name: data.name,
        description: data.description,
      });
      addSet(response.data.data);
      toast.success('Thêm bộ flashcard thành công');
      hide();
    } catch (error) {
      toast.error('Thêm thất bại');
      console.log(error);
    }
  }

  async function updateSet(data) {
    try {
      await updateFlashcardSetService({
        axios,
        flashcardSetId,
        name: data.name,
        description: data.description,
        access: data.access,
      });
      setDetail((prev) => ({
        ...prev,
        ...data,
      }));
      toast.success('Cập nhật thành công');
      hide();
    } catch (error) {
      toast.error('Cập nhật thất bại');
      console.log(error);
    }
  }

  async function onSubmit(data) {
    setLoading(true);
    if (isUpdate) {
      await updateSet(data);
    } else {
      await createSet(data);
    }
    setLoading(false);
  }

  return (
    <Modal isShowing={isShowing} maxWidth="max-w-[500px]" hide={hide} header="Thêm bộ flashcard mới">
      <form onSubmit={handleSubmit(onSubmit)}>
        <h6 className="font-semibold text-h6">Tên</h6>
        <div className="mt-3">
          <Input status={errors.name && 'error'} {...register('name')} />
        </div>
        {<p className="text-ac_red text-sm mt-1">{errors.name?.message}</p>}

        <h6 className="font-semibold text-h6 mt-6">Quyền truy cập</h6>
        <div className="mt-3">
          <Select {...register('access')}>
            <option value="public">Công khai</option>
            <option value="private">Riêng tư</option>
          </Select>
        </div>

        <h6 className="font-semibold text-h6 mt-6">Mô tả</h6>
        <div className="mt-3">
          <TextArea status={errors.description && 'error'} {...register('description')} />
        </div>

        <Button width="100%" className="mt-7" disabled={loading}>
          {isUpdate ? 'Cập nhật' : 'Thêm'}
        </Button>
      </form>
    </Modal>
  );
};

AddFlashcardSetModel.propTypes = {
  isShowing: PropTypes.bool.isRequired,
  hide: PropTypes.func.isRequired,
  addSet: PropTypes.func,
  isUpdate: PropTypes.bool,
  initialData: PropTypes.object,
  setDetail: PropTypes.func,
};

AddFlashcardSetModel.defaultProps = {
  isUpdate: false,
  initialData: undefined,
  setDetail: undefined,
  addSet: undefined,
};

export default AddFlashcardSetModel;
