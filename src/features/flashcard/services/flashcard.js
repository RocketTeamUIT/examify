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

export const getFlashcardsInSetService = ({ flashcardSetId, page, axios }) => {
  return axios.get(`/flashcards/get-from-set/${flashcardSetId}`, { params: { page } });
};

export const markAsLearntService = ({ flashcardId, axios }) => {
  return axios.post(`/flashcards/mark-learnt/${flashcardId}`);
};

export const markAsUnlearntService = ({ flashcardId, axios }) => {
  return axios.delete(`/flashcards/mark-learnt/${flashcardId}`);
};

export function createFlashcardSetService({ axios, name, description, access }) {
  return axios.post('/flashcard-sets/create', {
    name,
    access,
    description,
  });
}

export function updateFlashcardSetService({ axios, flashcardSetId, name, description, access }) {
  return axios.patch(`/flashcard-sets/update/${flashcardSetId}`, {
    name,
    description,
    access,
  });
}

export function deleteFlashcardSetService({ axios, flashcardSetId }) {
  return axios.delete(`/flashcard-sets/delete/${flashcardSetId}`);
}

export function getMyFlashcardService({ axios }) {
  return axios.get('/flashcard-sets/my');
}

export function addFlashcardService({
  axios,
  flashcardSetId,
  word,
  meaning,
  typeOfWord,
  pronounce,
  example,
  note,
  image,
}) {
  return axios.post('/flashcards/create', {
    flashcardSetId,
    word,
    meaning,
    typeOfWord,
    pronounce,
    example,
    note,
    image,
  });
}

export function updateFlashcardService({
  axios,
  flashcardId,
  word,
  meaning,
  typeOfWord,
  pronounce,
  example,
  note,
  image,
}) {
  return axios.put(`/flashcards/update/${flashcardId}`, {
    word,
    meaning,
    typeOfWord,
    pronounce,
    example,
    note,
    image,
  });
}
