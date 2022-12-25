const countCompletedLessonsInCourse = (course) => {
  let result = 0;
  (course.chapterList || []).forEach((chapter) => {
    (chapter.unitList || []).forEach((unit) => {
      (unit.lessonList || []).forEach((lesson) => {
        if (lesson.completed) result++;
      });
    });
  });

  return result;
};

export default countCompletedLessonsInCourse;
