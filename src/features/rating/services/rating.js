export const getRatingService = (axios, courseId) => {
  return axios.get(`/rating/${courseId}`);
};

export const rateCourseService = (axios, courseId, rate) => {
  return axios.post(`/rating/${courseId}`, {
    rate,
  });
};

export const updateRatingService = (axios, courseId, rate) => {
  return axios.put(`/rating/${courseId}`, {
    rate,
  });
};

export const deleteRatingService = (axios, courseId) => {
  return axios.delete(`/rating/${courseId}`);
};
