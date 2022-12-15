import { useCallback, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import useAxiosPrivate from '../../../../hooks/useAxiosPrivate';
import { getCommentsService } from '../../../comments/services/comment';

const useComments = (courseId) => {
  const axiosPrivate = useAxiosPrivate(true);
  const [comments, setComments] = useState([]);
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
        setComments(response.data.data.commentList);
        const totalComment = response.data.data.totalComment;
        setTotalComments(totalComment);
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

  return { comments, totalComments, type, setType, loading, selectedPage, setSelectedPage, getComments };
};

export default useComments;
