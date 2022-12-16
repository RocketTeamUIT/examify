import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { getCommentsService } from '../../../comments/services/comment';

const useComments = (courseId) => {
  const axiosPrivate = useAxiosPrivate(true);
  const [comments, setComments] = useState([]);
  const [totalRootComments, setTotalRootComments] = useState(0);
  const [totalComments, setTotalComments] = useState(0);
  const [type, setType] = useState('latest');
  const [loading, setLoading] = useState(false);
  const [selectedPage, setSelectedPage] = useState(0);
  const { user } = useSelector((store) => store.auth);

  const getComments = useCallback(
    async (id, type, page) => {
      try {
        setLoading(true);
        const response = await getCommentsService(axiosPrivate, id, type, page);
        const {
          commentList: res_comments,
          totalRootComment: res_totalRootComment,
          totalComment: res_totalComment,
        } = response.data.data;
        setComments(res_comments);
        setTotalRootComments(res_totalRootComment);
        setTotalComments(res_totalComment);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    },
    [axiosPrivate],
  );

  useEffect(() => {
    getComments(courseId, type, selectedPage + 1);
  }, [selectedPage, type, user, courseId, axiosPrivate, getComments]);

  return {
    comments,
    totalRootComments,
    totalComments,
    type,
    setType,
    loading,
    selectedPage,
    setSelectedPage,
    getComments,
  };
};

export default useComments;
