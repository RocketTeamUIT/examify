import { basePrivate } from 'lib/base';

export const getAllFlashcardTypesService = () => {
  return basePrivate.get('/flashcard-types');
};

export const getAllExploreFlashcardSetService = ({ typeId }) => {
  return basePrivate.get('/flashcard-sets', {
    params: {
      typeId,
    },
  });
};

export const getFlashcardSetsByTypeService = () => {
  return basePrivate.get('/flashcard-sets/by-type');
};

export const getFlashcardSetDetailService = ({ id, axios }) => {
  return axios.get(`/flashcard-sets/${id}`);
};
