import { basePrivate } from '../../../lib/base';

export const getAllCoursesService = (axiosPrivate) => {
  return axiosPrivate.get('/courses');
};

export const getCourseDetailService = (accessToken, courseId, depth = 4) => {
  return basePrivate.get(`/courses/${courseId}`, {
    params: {
      depth,
    },
    headers: {
      Authorization: 'Bearer ' + accessToken,
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

export const searchCourseService = (axiosPrivate, searchValue) => {
  return axiosPrivate.get(`/courses/search`, {
    params: {
      q: searchValue,
    },
  });
};

export const enrollCourse = (axiosPrivate) => {
  return axiosPrivate;
};
