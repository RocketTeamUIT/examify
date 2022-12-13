import { mockServer } from '../../../lib/base';
import base from '../../../lib/base';

export const getCommentsService = (id) => {
  return mockServer.get('/comments', {
    params: {
      course_id: id,
    },
  });
};

export const getAllCoursesService = (axiosPrivate) => {
  if (axiosPrivate === undefined) return base.get('/courses');
  return axiosPrivate.get('/courses');
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
