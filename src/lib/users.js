import base from './base';

export const registerUser = (email, firstname, lastname, password, passwordConfirmation) => {
  return new Promise((resolve, reject) => {
    base
      .post('/users/register', {
        email,
        firstname,
        lastname,
        password,
        passwordConfirmation,
      })
      .then((response) => resolve(response))
      .catch((error) => reject(error));
  });
};
