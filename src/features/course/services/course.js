import { mockServer } from '../../../lib/base';
import base from '../../../lib/base';

export const getAllCoursesService = (axiosPrivate) => {
  return axiosPrivate.get('/courses');
};

export const getDetailCourseService = (id) => {
  return base.get(`/courses/${id}`);
};
export const getCourseDetailService = (courseId, axiosPrivate) => {
  if (axiosPrivate === undefined)
    return base.get(`/courses/${courseId}`, {
      params: {
        depth: 4,
      },
    });
  return axiosPrivate.get(`/courses/${courseId}`, {
    params: {
      depth: 4,
    },
  });
};

export const sendCommentService = (axiosPrivate, course_id, content, respond_id) => {
  return mockServer.post(
    '/comments',
    {
      content,
      respond_id,
    },
    {
      params: {
        course_id,
      },
      headers: {
        // Todo: remove this line when use axiosPrivate
        'x-mock-match-request-body': 'false',
      },
    },
  );
};
