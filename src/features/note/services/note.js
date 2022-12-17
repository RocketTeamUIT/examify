export const getAllNotesInLessonService = ({ axios, lessonId }) => {
  return axios.get(`/notes/note-in-lessons/${lessonId}`);
};

export const createNewNoteService = ({ axios, lessonId, note }) => {
  return axios.post('/notes/create', {
    lessonId,
    note,
  });
};
