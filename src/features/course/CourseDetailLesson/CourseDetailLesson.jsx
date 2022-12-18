import React from 'react';
import { DetailContainer } from '../components';
import { Link, useParams } from 'react-router-dom';
import { useMemo } from 'react';
import LessonVideo from './LessonVideo';
import LessonText from './LessonText';
import LessonFlashcard from './LessonFlashcard';
import { joinLessonService } from '../services/course';
import useAxiosWithToken from '../../../hooks/useAxiosWithToken';
import { useDispatch, useSelector } from 'react-redux';
import isEmptyObject from '../../../utils/isEmptyObject';
import { getCourseDetail } from '../courseSlice';

const CourseDetailLesson = () => {
  const { courseId, chapterId, lessonId } = useParams();
  const { courseDetail } = useSelector((store) => store.course);
  const { accessToken } = useSelector((store) => store.auth);
  const { learnedLesson, totalLesson, name } = courseDetail;
  const dispatch = useDispatch();
  const axios = useAxiosWithToken();

  const markAsLearnt = async () => {
    try {
      await joinLessonService(axios, lessonId);
      dispatch(getCourseDetail({ accessToken, courseId }));
    } catch (error) {
      console.log('🚀 ~ file: CourseDetailLesson.jsx:21 ~ markAsLearnt ~ error', error);
    }
  };

  const chapter = useMemo(() => {
    return (courseDetail?.chapterList || []).find((chapter) => chapter.id === Number(chapterId));
  }, [courseDetail, chapterId]);

  const hierarchy = useMemo(() => {
    if (!chapter) return;
    return [
      <Link to={`/courses`}>Khoá học</Link>,
      <Link to={`/courses/${courseDetail.id}/detail/list-chapter`}>{courseDetail.name}</Link>,
      chapter.name,
    ];
  }, [courseDetail, chapter]);

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

  if (isEmptyObject(courseDetail)) return null;

  return (
    <DetailContainer
      hierarchy={hierarchy}
      learnedLesson={learnedLesson}
      totalLesson={totalLesson}
      name={name}
      chapterList={courseDetail.chapterList}
    >
      {lesson?.type === 1 && <LessonVideo callback={markAsLearnt} lesson={lesson} />}
      {lesson?.type === 2 && <LessonText lesson={lesson} callback={markAsLearnt} />}
      {lesson?.type === 3 && <LessonFlashcard lesson={lesson} callback={markAsLearnt} />}
    </DetailContainer>
  );
};

export default CourseDetailLesson;
