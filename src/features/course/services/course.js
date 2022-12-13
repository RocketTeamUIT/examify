import base from '../../../lib/base';

export const getAllCoursesService = () => {
  return base.get('/courses');
};

export const getDetailCourseService = (id) => {
  return base.get(`/courses/${id}`);
};
