export const getAllNotesInLessonService = ({ axios, lessonId }) => {
  return axios.get(`/notes/note-in-lessons/${lessonId}`);
};

export const createNewNoteService = ({ axios, lessonId, note }) => {
  return axios.post('/notes/create', {
    lessonId,
    note,
  });
};

export const updateNoteService = ({ axios, id, note }) => {
  return axios.put(`notes/update/${id}`, {
    note,
  });
};

export const deleteNoteService = ({ axios, id }) => {
  return axios.delete(`notes/delete/${id}`);
};
