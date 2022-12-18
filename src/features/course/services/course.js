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

export const searchCourseService = (axiosPrivate, searchValue, limit) => {
  return axiosPrivate.get(`/courses/search`, {
    params: {
      key: searchValue,
      limit,
    },
  });
};

export const enrollCourseService = (axiosPrivate, courseId) => {
  return axiosPrivate.post(`/courses/${courseId}/enroll`);
};

export const getUncompletedUnitsService = (axios, courseId) => {
  return axios.get(`courses/${courseId}/unfinished-lesson`);
};

export const getLearnedLessonInWeekService = (axios, courseId) => {
  return axios.get(`/courses/${courseId}/learned-in-week`);
};

export const getPopularCourseService = (axios, limit = 4) => {
  return axios.get('/courses/popular', {
    params: {
      limit,
    },
  });
};

export const joinLessonService = (axios, lessonId) => {
  return axios.post('/lessons/join', {
    lessonId,
  });
};
