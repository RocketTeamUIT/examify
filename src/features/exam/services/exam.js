export const getAllExamsService = async (axiosPrivate) => {
  return (await axiosPrivate.get('/exams')).data;
};

export function getExamDetailService(axios, id) {
  return axios.get('/exams/' + id);
}

export const getExamTakingService = async (axios, id, data) => {
  return axios.get('/exams/exam-takingg/' + id, {
    params: {
      ...data,
    },
  });
};
