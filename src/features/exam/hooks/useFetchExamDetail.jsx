import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getExamDetail } from '../examSlice';

const useFetchExamDetail = (id) => {
  const dispatch = useDispatch();
  const axios = useAxiosWithToken();
  const { accessToken } = useSelector((store) => store.auth);

  useEffect(() => {
    dispatch(getExamDetail({ axios, id }));
  }, [accessToken, id, axios, dispatch]);
};

export default useFetchExamDetail;
