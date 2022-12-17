import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import Modal from '../../components/ui/Modal';
import useAxiosWithToken from '../../hooks/useAxiosWithToken';
import NoteItem from './NoteItem';
import { getAllNotesInLessonService } from './services/note';

const Note = ({ showing, setShowing }) => {
  const hide = () => {
    setShowing(false);
  };
  const { notes } = useFetchNotesInLesson({ showing });

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

const useFetchNotesInLesson = ({ showing }) => {
  const [notes, setNotes] = useState([]);
  const axiosWithToken = useAxiosWithToken();
  const { lessonId } = useParams();

  useEffect(() => {
    const fetchNote = async () => {
      try {
        const response = await getAllNotesInLessonService({
          axios: axiosWithToken,
          lessonId,
        });
        setNotes(response.data.data.sort((a, b) => a.createdAt < b.createdAt));
      } catch (error) {
        console.log('🚀 ~ file: Note.jsx:33 ~ fetchNote ~ error', error);
      }
    };

    fetchNote();
  }, [axiosWithToken, lessonId, showing]);

  return { notes };
};

export default Note;
