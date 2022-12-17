import React from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, TextArea } from '../../components/ui';
import { createNewNoteService } from './services/note';
import useAxiosWithToken from '../../hooks/useAxiosWithToken';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';

const CreateNote = ({ showing, hide }) => {
  const { lessonId } = useParams();
  const { register, handleSubmit, watch, resetField } = useForm();
  const note = watch('note');
  const axiosWithToken = useAxiosWithToken();
  const [loading, setLoading] = useState(false);

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      await createNewNoteService({
        axios: axiosWithToken,
        lessonId,
        note: data.note,
      });
      toast.success('Thêm ghi chú thành công');
      resetField();
      hide();
    } catch (error) {
      console.log('🚀 ~ file: CreateNote.jsx:13 ~ onSubmit ~ error', error);
      toast.error('Thêm ghi chú thất bại');
    } finally {
      setLoading(false);
    }
  };

  const disableButton = loading || !note;

  return (
    <Modal header="Thêm ghi chú" isShowing={showing} hide={hide}>
      <form onSubmit={handleSubmit(onSubmit)}>
        {/* <label className="font-semibold text-md mb-2 block">Tiêu đề</label>
          <Input size="large" {...register('title')} /> */}

        <label className="font-semibold text-md mb-2 mt-8 block">Mô tả</label>
        <TextArea {...register('note')} />

        <Button width="100%" className="mt-7" disabled={disableButton}>
          <span className="text-md">Thêm</span>
        </Button>
      </form>
    </Modal>
  );
};

export default CreateNote;
