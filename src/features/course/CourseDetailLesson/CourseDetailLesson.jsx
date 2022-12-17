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
  const { courseDetail } = useCourseDetail(courseId, false);
  const { chapter } = useFetchChapter(chapterId, false);
  const { learnedLesson, totalLesson, name } = courseDetail;
  // const navigate = useNavigate();

  const hierarchy = useMemo(() => {
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

  // const getCurrentChapterIndex = () => {
  //   if (!courseDetail.chapterList) {
  //     return -1;
  //   }

  //   return courseDetail.chapterList.findIndex((chapter) => {
  //     return chapter.id === Number(chapterId);
  //   });
  // };

  // const isNextChapterAvailable = (index) => {
  //   if (!index) index = getCurrentChapterIndex();
  //   return index < courseDetail.chapterList?.length - 1;
  // };

  // const moveNextChapter = () => {
  //   const currentChapterIndex = getCurrentChapterIndex();
  //   if (isNextChapterAvailable(currentChapterIndex)) {
  //     const newChapter = courseDetail.chapterList[currentChapterIndex + 1];
  //     const firstNewLesson = ((newChapter.unitList || [])[0]?.lessonList || [])[0];
  //     navigate(`/courses/${courseId}/detail/list-chapter/${newChapter.id}/lesson/${firstNewLesson.id}`);
  //   }
  // };

  return (
    <DetailContainer
      hierarchy={hierarchy}
      learnedLesson={learnedLesson}
      totalLesson={totalLesson}
      // isNextChapterAvailable={isNextChapterAvailable}
      name={name}
      chapterList={courseDetail.chapterList}
    >
      {lesson?.type === 1 && <LessonVideo url={lesson.videoUrl} />}
      {lesson?.type === 2 && <LessonText text={lesson.text} />}
      {lesson?.type === 3 && <LessonFlashcard flashcardSetId={lesson.flashcardSetId} />}
    </DetailContainer>
  );
};

export default CourseDetailLesson;
