import React from 'react';
import { DetailContainer } from '../components';
import useCourseDetail from '../hooks/useCourseDetail';
import { Link, useParams } from 'react-router-dom';
import useFetchChapter from './hooks/useFetchChapter';
import { useMemo } from 'react';
import LessonVideo from './LessonVideo';
import LessonText from './LessonText';
import LessonFlashcard from './LessonFlashcard';

const CourseDetailLesson = () => {
  const { courseId, chapterId, lessonId } = useParams();
  const { courseDetail } = useCourseDetail(courseId, false, 2);
  const { chapter } = useFetchChapter(chapterId, false);
  const { learnedLesson, totalLesson, name } = courseDetail;

  const hierarchy = useMemo(() => {
    return [
      <Link to={`/courses/${courseDetail.id}/detail`}>{courseDetail.name}</Link>,
      <Link to={`/courses/${courseDetail.id}/detail/list-chapter`}>{chapter.name}</Link>,
      'Hiện tại',
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

  return (
    <DetailContainer
      hierarchy={hierarchy}
      learnedLesson={learnedLesson}
      totalLesson={totalLesson}
      name={name}
      unitList={chapter.unitList}
    >
      {lesson?.type === 1 && <LessonVideo url={lesson.videoUrl} />}
      {lesson?.type === 2 && <LessonText text={lesson.text} />}
      {lesson?.type === 3 && <LessonFlashcard flashcardSetId={lesson.flashcardSetId} />}
    </DetailContainer>
  );
};

export default CourseDetailLesson;
