import base from '../../../lib/base';

export const getAllCoursesService = (axiosPrivate) => {
  return axiosPrivate.get('/courses');
};

export const getDetailCourseService = (id) => {
  return base.get(`/courses/${id}`);
};
