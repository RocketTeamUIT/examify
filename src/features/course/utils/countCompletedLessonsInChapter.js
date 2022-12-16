const countCompletedLessonsInChapter = (chapter) => {
  let result = 0;
  (chapter.unitList || []).forEach((unit) => {
    (unit.lessonList || []).forEach((lesson) => {
      if (lesson.completed) result++;
    });
  });

  return result;
};

export default countCompletedLessonsInChapter;
