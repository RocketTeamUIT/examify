import React, { useEffect, useState } from 'react';
import { DetailContainer } from '../components';
import { Link, useLocation, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import LessonVideo from './LessonVideo';
import LessonText from './LessonText';
import LessonFlashcard from './LessonFlashcard';
import { joinLessonService } from '../services/course';
import useAxiosWithToken from '../../../hooks/useAxiosWithToken';
import { useDispatch, useSelector } from 'react-redux';
import isEmptyObject from '../../../utils/isEmptyObject';
import { getCourseDetail } from '../courseSlice';
import { useCallback } from 'react';

const CourseDetailLesson = () => {
  const { courseId, chapterId, lessonId } = useParams();
  const [reachBottom, setReachBottom] = useState(false);
  const [enoughTime, setEnoughTime] = useState(false);
  const { courseDetail } = useSelector((store) => store.course);
  const { accessToken } = useSelector((store) => store.auth);
  const { totalLesson, name } = courseDetail;
  const dispatch = useDispatch();
  const axios = useAxiosWithToken();
  const location = useLocation();

  const markAsLearnt = useCallback(async () => {
    try {
      await joinLessonService(axios, lessonId);
      dispatch(getCourseDetail({ accessToken, courseId }));
    } catch (error) {
      console.log('🚀 ~ file: CourseDetailLesson.jsx:21 ~ markAsLearnt ~ error', error);
    }
  }, [accessToken, courseId, dispatch, axios, lessonId]);

  const chapter = useMemo(() => {
    return (courseDetail?.chapterList || []).find((chapter) => chapter.id === Number(chapterId));
  }, [courseDetail, chapterId]);

  const hierarchy = useMemo(() => {
    if (!chapter) return;
    return [
      <Link to={`/courses`}>Khoá học</Link>,
      <Link to={`/courses/${courseId}/detail`}>{courseDetail.name}</Link>,
      <Link to={`/courses/${courseDetail.id}/detail/list-chapter`}>Chi tiết học tập</Link>,
      chapter.name,
    ];
  }, [courseDetail, chapter, courseId]);

  const lesson = useMemo(() => {
    let foundLesson = {};
    (chapter?.unitList || []).forEach((unit) => {
      let findResult = unit.lessonList.find((lesson) => lesson.id === Number(lessonId));
      if (findResult) {
        foundLesson = findResult;
      }
    });
    return foundLesson;
  }, [chapter, lessonId]);

  useEffect(() => {
    setEnoughTime(false);
    setReachBottom(false);
  }, [location]);

  // If users learnt at least 60 seconds and they have scrolled to the bottom of the lesson, mark this lesson as learnt
  // If this lesson is a video lesson, user only to watch at least 80% of video
  useEffect(() => {
    if (enoughTime && reachBottom && (lesson?.type === 2 || lesson?.type === 3) && !lesson.completed) {
      markAsLearnt();
    }
  }, [reachBottom, enoughTime, lesson, markAsLearnt]);

  if (isEmptyObject(courseDetail)) return null;

  const onScroll = (e) => {
    const bottom = e.target.scrollHeight - e.target.scrollTop - 100 <= e.target.clientHeight;
    if (bottom && !reachBottom) {
      setReachBottom(true);
    }
  };

  const markEnoughTime = () => {
    setEnoughTime(true);
  };

  return (
    <DetailContainer
      onScroll={onScroll}
      hierarchy={hierarchy}
      totalLesson={totalLesson}
      name={name}
      chapterList={courseDetail.chapterList}
    >
      {lesson?.type === 1 && <LessonVideo callback={markAsLearnt} lesson={lesson} />}
      {lesson?.type === 2 && <LessonText lesson={lesson} callback={markEnoughTime} />}
      {lesson?.type === 3 && <LessonFlashcard lesson={lesson} callback={markEnoughTime} />}
    </DetailContainer>
  );
};

export default CourseDetailLesson;
