import { basePrivate } from '../lib/base';
import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { refreshTokenService } from '../features/auth/services/auth';
import { useNavigate } from 'react-router-dom';

const useAxiosPrivate = () => {
  const { accessToken } = useSelector((store) => store.auth);
  const navigate = useNavigate();

  useEffect(() => {
    const requestInterceptor = basePrivate.interceptors.request.use(
      (config) => {
        if (!config.headers.Authorization) {
          config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
      },
      (error) => {
        Promise.reject(error);
      },
    );

    const responseIntercept = basePrivate.interceptors.response.use(
      (response) => response,
      async (error) => {
        const prevRequest = error?.config;

        if (error?.response?.status === 401 && !prevRequest.sent) {
          prevRequest.sent = true;
          try {
            const newAccessToken = (await refreshTokenService()).data.accessToken;
            prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
            return basePrivate({
              ...prevRequest,
              headers: {
                ...prevRequest.headers,
              },
            });
          } catch (error) {
            navigate('/signin');
          }
        }

        return Promise.reject(error);
      },
    );

    return () => {
      basePrivate.interceptors.request.eject(requestInterceptor);
      basePrivate.interceptors.response.eject(responseIntercept);
    };
  }, [accessToken]);

  return basePrivate;
};

export default useAxiosPrivate;
