import 'moment-duration-format';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRecordDetail } from '../recordSlice';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useParams } from 'react-router-dom';

function useFetchData() {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { recordId } = useParams();

  // Call API
  useEffect(() => {
    dispatch(getRecordDetail({ axiosPrivate, id: recordId }));
  }, [dispatch, axiosPrivate, recordId]);
}

export default useFetchData;
