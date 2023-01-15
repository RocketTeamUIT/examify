export const getAllExamsService = async (axiosPrivate) => {
  return (await axiosPrivate.get('/exams')).data;
};
