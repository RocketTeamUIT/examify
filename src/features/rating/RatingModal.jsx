import React from 'react';
import { useCallback } from 'react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { toast } from 'react-toastify';
import Button from '../../components/ui/Button';
import Modal from '../../components/ui/Modal';
import useAxiosPrivate from '../../hooks/useAxiosPrivate';
import useAxiosWithToken from '../../hooks/useAxiosWithToken';
import { getCourseDetail } from '../course/courseSlice';
import Rating from './Rating';
import { setRating } from './ratingSlice';
import { deleteRatingService, getRatingService, rateCourseService, updateRatingService } from './services/rating';

const RatingModal = ({ isShowing, hide }) => {
  const { rating, isEdit, initialRating } = useSelector((store) => store.rating);
  const { courseId } = useParams();
  const { accessToken } = useSelector((store) => store.auth);
  const axios = useAxiosPrivate();
  const axiosWithToken = useAxiosWithToken();
  const dispatch = useDispatch();

  const onRating = (rate) => {
    dispatch(setRating({ rating: rate }));
  };

  useEffect(() => {
    dispatch(setRating({ rating: initialRating }));
  }, [isShowing, initialRating, dispatch]);

  const fetchRating = useCallback(async () => {
    try {
      const response = await getRatingService(axiosWithToken, courseId);
      dispatch(
        setRating({
          rating: response.data.data.rate,
          initialRating: response.data.data.rate,
          isEdit: true,
        }),
      );
    } catch (error) {
      console.log('🚀 ~ file: RatingModal.jsx:25 ~ fetchRating ~ error', error);
    }
  }, [axiosWithToken, courseId, dispatch]);

  useEffect(() => {
    fetchRating();
  }, [fetchRating, accessToken]);

  const editRating = async () => {
    try {
      await updateRatingService(axios, courseId, rating);
      toast.success('Cập nhật đánh giá thành công');
      hide();
      dispatch(setRating({ rating, initialRating: rating, isEdit: true }));
      dispatch(getCourseDetail({ accessToken, courseId }));
    } catch (error) {
      toast.error('Cập nhật đánh giá thất bại');
      console.log('🚀 ~ file: RatingModal.jsx:42 ~ editRating ~ error', error);
    }
  };

  const rateCourse = async () => {
    try {
      await rateCourseService(axios, courseId, rating);
      toast.success('Đánh giá thành công');
      hide();
      dispatch(setRating({ rating, initialRating: rating, isEdit: true }));
      dispatch(getCourseDetail({ accessToken, courseId }));
    } catch (error) {
      toast.error('Đánh giá thành công');
      console.log('🚀 ~ file: RatingModal.jsx:19 ~ rateCourse ~ error', error);
    }
  };

  const deleteRating = async () => {
    try {
      await deleteRatingService(axios, courseId);
      toast.success('Xoá đánh giá thành công');
      hide();
      dispatch(setRating({ rating: 0, initialRating: 0, isEdit: false }));
      dispatch(getCourseDetail({ accessToken, courseId }));
    } catch (error) {
      console.log('🚀 ~ file: RatingModal.jsx:70 ~ deteletRating ~ error', error);
      toast.error('Xoá đánh giá thất bại');
    }
  };

  const hideModal = () => {
    hide();
    setRating(0);
  };

  const disableButton = rating === 0 || rating === initialRating;
  return (
    <Modal header="Đánh giá khoá học" isShowing={isShowing} hide={hideModal}>
      <Rating rating={rating} onRating={onRating} />
      <div className="flex gap-4 justify-end mt-6">
        {isEdit && (
          <Button type="danger" height="36px" onClick={deleteRating}>
            Xoá
          </Button>
        )}
        <Button height="36px" disabled={disableButton} onClick={isEdit ? editRating : rateCourse}>
          {isEdit ? 'Lưu' : 'Đánh giá'}
        </Button>
      </div>
    </Modal>
  );
};

export default RatingModal;
