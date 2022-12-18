import React, { useState } from 'react';
import { Confirmation, Tag } from '../../components/ui';
import { MdEdit, MdDelete } from 'react-icons/md';
import CreateNote from './CreateNote';
import useAxiosWithToken from '../../hooks/useAxiosWithToken';
import { deleteNoteService } from './services/note';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { getNotesInLesson } from './noteSlice';
import { useParams } from 'react-router-dom';

const NoteItem = ({ note, seq }) => {
  const [showEdit, setShowEdit] = useState(false);
  const [showingConfirm, setShowingConfirm] = useState(false);
  const axios = useAxiosWithToken();
  const dispatch = useDispatch();
  const { lessonId } = useParams();

  const hide = () => {
    setShowEdit((prev) => false);
  };

  const show = () => {
    setShowEdit((prev) => true);
  };

  const showConfirm = () => {
    setShowingConfirm((prev) => true);
  };

  const hideConfirm = () => {
    setShowingConfirm((prev) => false);
  };

  const deleteNote = async () => {
    try {
      await deleteNoteService({
        axios,
        id: note.id,
      });
      toast.success('Xoá ghi chú thành công');
      dispatch(getNotesInLesson({ axios, lessonId }));
    } catch (error) {
      toast.success('Xoá ghi chú thất bại công');
      console.log('🚀 ~ file: Confirmation.jsx:33 ~ deleteNote ~ error', error);
    }
  };

  return (
    <div>
      <CreateNote showing={showEdit} hide={hide} isEdit initialNote={note} />

      {/* HEADER */}
      <header className="flex items-center gap-4">
        <Tag color="cyan">#{seq}</Tag>
        <span className="text-md font-semibold text-t_gray">{note.createdAt.slice(0, 10)}</span>
        <MdEdit onClick={show} className="text-t_gray ml-auto text-h4 cursor-pointer" />
        <div className="relative">
          <MdDelete className="text-t_gray text-h4 cursor-pointer" onClick={showConfirm} />
          <Confirmation top="top-8" right="right-0" showing={showingConfirm} onConfirm={deleteNote} hide={hideConfirm}>
            Xoá ghi chú này?
          </Confirmation>
        </div>
      </header>

      {/* NOTE CONTENT */}
      <div className="px-4 py-6 bg-bg_light_gray rounded-xl text-t_dark mt-4 break-words">
        {note.note.split('\n').map((s, i) => (
          <span key={i}>
            {s}
            <br />
          </span>
        ))}
      </div>
    </div>
  );
};

export default NoteItem;
