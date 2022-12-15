import { basePrivate } from '../lib/base';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { refreshTokenService } from '../features/auth/services/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import { setAccessToken } from '../features/auth/authSlice';
import * as PropTypes from 'prop-types';

const storeSet = new Set();

const useAxiosPrivate = (stayOnError) => {
  const { accessToken } = useSelector((store) => store.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const location = useLocation();

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
        console.log('🚀 ~ file: useAxiosPrivate.js:48 ~ stayOnError', stayOnError);

        if (error?.response?.status === 401 && !prevRequest.sent) {
          prevRequest.sent = true;
          if (!storeSet.has('refresh-sent')) {
            storeSet.add('refresh-sent');
            try {
              const newAccessToken = (await refreshTokenService()).data.accessToken;
              dispatch(setAccessToken(newAccessToken));
              prevRequest.headers.Authorization = `Bearer ${newAccessToken}`;
              return basePrivate({
                ...prevRequest,
                headers: {
                  ...prevRequest.headers,
                },
              });
            } catch (error) {
              console.log('🚀 ~ file: useAxiosPrivate.js:45 ~ error', error);
              if (!stayOnError) {
                navigate('/signin', {
                  state: {
                    from: location,
                  },
                  replace: true,
                });
              }
            } finally {
              storeSet.delete('refresh-sent');
            }
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

useAxiosPrivate.propTypes = {
  stayOnError: PropTypes.bool,
};

export default useAxiosPrivate;
