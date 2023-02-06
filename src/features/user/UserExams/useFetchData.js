import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getAllRecordDetail } from 'features/exam/historySlice';
import useAxiosWithToken from 'hooks/useAxiosWithToken';
import { useSelector } from 'react-redux';

function useFetchData() {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosWithToken();
  const { accessToken } = useSelector((state) => state.auth);

  useEffect(() => {
    dispatch(getAllRecordDetail({ axiosPrivate }));
  }, [dispatch, axiosPrivate, accessToken]);
}

export default useFetchData;
