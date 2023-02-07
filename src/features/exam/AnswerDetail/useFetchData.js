import 'moment-duration-format';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { getRecordDetail } from '../recordSlice';
import useAxiosPrivate from 'hooks/useAxiosPrivate';
import { useParams } from 'react-router-dom';

function useFetchData() {
  const dispatch = useDispatch();
  const axiosPrivate = useAxiosPrivate();
  const { examId } = useParams();

  // Call API
  useEffect(() => {
    alert(examId);
    dispatch(getRecordDetail({ axiosPrivate, id: examId }));
  }, [dispatch, axiosPrivate, examId]);
}

export default useFetchData;
