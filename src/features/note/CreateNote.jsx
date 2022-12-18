import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { Button, Modal, TextArea } from '../../components/ui';
import { createNewNoteService, updateNoteService } from './services/note';
import useAxiosWithToken from '../../hooks/useAxiosWithToken';
import { useParams } from 'react-router-dom';
import { useState } from 'react';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getNotesInLesson } from './noteSlice';

const CreateNote = ({ showing, hide, isEdit, initialNote }) => {
  const [loading, setLoading] = useState(false);
  const { lessonId } = useParams();
  const { register, handleSubmit, watch, resetField, setValue } = useForm();
  const note = watch('note');
  const axiosWithToken = useAxiosWithToken();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    setLoading(true);
    try {
      if (!isEdit)
        await createNewNoteService({
          axios: axiosWithToken,
          lessonId,
          note: data.note,
        });
      else await updateNoteService({ axios: axiosWithToken, id: initialNote.id, note: data.note });
      toast.success(!isEdit ? 'Thêm ghi chú thành công' : 'Cập nhật ghi chú thành công');
      dispatch(getNotesInLesson({ axios: axiosWithToken, lessonId }));
      resetField('note');
      hide();
    } catch (error) {
      console.log('🚀 ~ file: CreateNote.jsx:13 ~ onSubmit ~ error', error);
      toast.error(!isEdit ? 'Thêm ghi chú thất bại' : 'Cập nhật ghi chú thất bại');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isEdit) {
      setValue('note', initialNote.note);
    }
  }, [isEdit, initialNote, setValue]);

  const disableButton = () => {
    if (loading) return true;
    if (!isEdit) return !note;
    return note === initialNote.note;
  };

  return (
    <Modal header={isEdit ? 'Cập nhật ghi chú' : 'Thêm ghi chú'} isShowing={showing} hide={hide}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <label className="font-semibold text-md mb-2 mt-8 block">Mô tả</label>
        <TextArea {...register('note')} />

        <Button width="100%" className="mt-7" disabled={disableButton()}>
          <span className="text-md">{!isEdit ? 'Thêm' : 'Cập nhật'}</span>
        </Button>
      </form>
    </Modal>
  );
};

export default CreateNote;
