const findChapterByLessonId = (chapterList, lessonId) => {
  if (!Array.isArray(chapterList)) return null;

  const findResult = (chapterList || []).find((chapter) => {
    return (chapter.unitList || []).find((unit) => {
      return (unit.lessonList || []).find((lesson) => String(lesson.id) === String(lessonId));
    });
  });

  if (!findResult) return null;
  return findResult.id;
};

export default findChapterByLessonId;
