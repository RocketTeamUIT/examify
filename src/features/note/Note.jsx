import React from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import Modal from '../../components/ui/Modal';
import useAxiosWithToken from '../../hooks/useAxiosWithToken';
import NoteItem from './NoteItem';
import { getNotesInLesson } from './noteSlice';

const Note = ({ showing, setShowing }) => {
  const { notes } = useSelector((store) => store.note);
  const axiosWithToken = useAxiosWithToken();
  const { lessonId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    if (axiosWithToken) {
      dispatch(getNotesInLesson({ axios: axiosWithToken, lessonId }));
    }
  }, [lessonId, axiosWithToken, dispatch]);

  const hide = () => {
    setShowing(false);
  };

  return (
    <Modal
      hide={hide}
      isShowing={showing}
      header="Ghi chú"
      maxWidth="max-w-[50vw]"
      borderRadius="rounded-none"
      type="right"
    >
      <div className="h-8" />
      <div className="space-y-14">
        {notes.map((note, index) => (
          <NoteItem note={note} seq={notes.length - index} key={index} />
        ))}
      </div>
    </Modal>
  );
};

export default Note;
