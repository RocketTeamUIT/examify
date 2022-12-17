export const getCommentsService = (axiosPrivate, id, type = 'latest', page = '1') => {
  return axiosPrivate.get(`/comments/courses/${id}`, {
    params: {
      type,
      page,
    },
  });
};

export const sendCommentService = (axiosPrivate, courseId, content, respondId) => {
  return axiosPrivate.post('/comments/create', {
    courseId: Number(courseId),
    content,
    respondId,
  });
};

export const likeCommentService = (axiosPrivate, commentId) => {
  return axiosPrivate.post(`/comments/${commentId}/like`);
};

export const unlikeCommentService = (axiosPrivate, commentId) => {
  return axiosPrivate.post(`/comments/${commentId}/unlike`);
};

export const editCommentService = (axiosPrivate, commentId, content) => {
  return axiosPrivate.put(`/comments/${commentId}`, {
    newContent: content,
  });
};
