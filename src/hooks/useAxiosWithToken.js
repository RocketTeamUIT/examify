import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { basePrivate } from '../lib/base';

const useAxiosWithToken = () => {
  const { accessToken } = useSelector((store) => store.auth);

  useEffect(() => {
    const request = basePrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = 'Bearer ' + accessToken;
        }
        return config;
      },
      (error) => error,
    );

    return () => {
      basePrivate.interceptors.request.eject(request);
    };
  }, [accessToken]);

  return basePrivate;
};

export default useAxiosWithToken;
