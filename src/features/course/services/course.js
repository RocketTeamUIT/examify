export const getAllCoursesService = (axiosPrivate) => {
  return axiosPrivate.get('/courses');
};

export const getCourseDetailService = (axiosPrivate, courseId, depth = 4) => {
  return axiosPrivate.get(`/courses/${courseId}`, {
    params: {
      depth,
    },
  });
};

export const getChapterService = (axiosPrivate, chapterId, depth = 3) => {
  return axiosPrivate.get(`/chapters/${chapterId}`, {
    params: {
      depth,
    },
  });
};
