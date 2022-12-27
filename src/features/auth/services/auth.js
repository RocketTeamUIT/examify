import base from '../../../lib/base';

export const signUpService = (email, firstname, lastname, password, passwordConfirmation) => {
  return base.post('/users/register', {
    email,
    firstname,
    lastname,
    password,
    passwordConfirmation,
  });
};

export const signInService = (email, password) => {
  return base.post(
    '/users/login',
    {
      email,
      password,
    },
    {
      withCredentials: true,
    },
  );
};

export const logOutService = (axiosPrivate) => {
  return axiosPrivate.delete('/users/logout');
};

export const refreshTokenService = () => {
  return base.post('/users/refresh-token', {}, { withCredentials: true });
};

// User
export const getAllUsersService = () => {
  return base.get('/users');
};

export const getUserInfoService = (axiosPrivate) => {
  return axiosPrivate.get('/users/me');
};

export const updateUserInfoService = (axiosPrivate, firstName, lastName, dateOfBirth, phoneNumber, description) => {
  return axiosPrivate.put('/users/update-info', {
    firstName,
    lastName,
    dateOfBirth,
    phoneNumber,
    description,
  });
};

export const changePasswordService = (axiosPrivate, oldPassword, newPassword) => {
  return axiosPrivate.put('/users/change-password', {
    oldPassword,
    newPassword,
  });
};

export const changeAvatarService = (axiosPrivate, newImageUrl) => {
  return axiosPrivate.put('/users/avatar', {
    newImageUrl,
  });
};

export const changeBannerService = (axiosPrivate, newImageUrl) => {
  return axiosPrivate.put('/users/banner', {
    newImageUrl,
  });
};
