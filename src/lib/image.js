import { axiosImage } from './base';

export const uploadImageService = (file, upload_preset) => {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', upload_preset);

  return axiosImage.post('', data);
};
