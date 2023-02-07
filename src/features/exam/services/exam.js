export const getAllExamsService = async (axiosPrivate) => {
  return (await axiosPrivate.get('/exams')).data;
};

export const getLatestExamsService = async (axiosPrivate) => {
  return axiosPrivate.get('/exams');
};

export function getExamDetailService(axios, id) {
  return axios.get('/exams/' + id);
}

export const getExamTakingService = (axios, id, data) => {
  return axios.get('/exams/exam-takingg/' + id, {
    params: {
      ...data,
    },
  });
};

export const submitExamService = (axiosPrivate, data) => {
  return axiosPrivate.post(
    '/exams/submit',
    {
      ...data,
    },
    {
      withCredentials: true,
    },
  );
};

export const getRecord = (axiosPrivate, id) => {
  return axiosPrivate.get(`/exams/result/${id}`, {}, { withCredentials: true });
};

export const getAllRecordService = (axiosPrivate) => {
  return axiosPrivate.get('/exams/history-taking', {}, { withCredentials: true });
};
