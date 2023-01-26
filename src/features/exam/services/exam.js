export const getAllExamsService = async (axiosPrivate) => {
  return (await axiosPrivate.get('/exams')).data;
};

export function getExamDetailService(axios, id) {
  return axios.get('/exams/' + id);
}
