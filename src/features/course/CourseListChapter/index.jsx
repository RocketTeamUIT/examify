import { Breadcrumb, Tip } from '../../../components/ui';
import ChapterList from './ChapterList';
import RemindLesson from './RemindLesson';
import { Link, useParams } from 'react-router-dom';
import useCourseDetail from '../hooks/useCourseDetail';
import Container from '../../../layouts/components/Container';
import useFetchLearnedLessonsInWeek from './hooks/useFetchLearnedLessonsInWeek';
import useFetchUncompletedUnit from './hooks/useFetchUncompletedUnit';
import CourseProgress from './CourseProgress';
import isEmptyObject from '../../../utils/isEmptyObject';
import countCompletedLessonsInCourse from '../utils/countCompletedLessonsInCourse';
import { useMemo } from 'react';
function CourseListChapter() {
  const { courseId } = useParams();
  const { courseDetail } = useCourseDetail(courseId, false);
  const { learnedLessons } = useFetchLearnedLessonsInWeek();
  const { uncompletedLessons } = useFetchUncompletedUnit();

  if (isEmptyObject(courseDetail) || !learnedLessons) return null;

  const { name, chapterList } = courseDetail;
  const flashcardLessonQnt = Number(learnedLessons.flashcardLessonQnt);
  const textLessonQnt = Number(learnedLessons.textLessonQnt);
  const videoLessonQnt = Number(learnedLessons.videoLessonQnt);

  const progress = Math.floor((countCompletedLessonsInCourse(courseDetail) * 100) / courseDetail.totalLesson) || 0;

  const hierarchy = [
    <Link to={`/courses`}>Khoá học</Link>,
    <Link to={`/courses/${courseId}/detail`}>{courseDetail.name}</Link>,
    'Chi tiết học tập',
  ];

  return (
    <div>
      {/* Main content Page */}
      <Container className="lg:flex mb-20">
        {/* Breadcrumb component */}
        <div className="pt-8">
          <Breadcrumb hierarchy={hierarchy} />
        </div>

        <div className="mt-10 md:mt-20">
          <h3 className="text-body-lg text-center md:text-h3 font-semibold">{name}</h3>

          <div className="text-body-sm md:text-body-md mt-10">
            <CourseProgress className="mb-6" progress={progress} />
            <b className="text-primary">Tuần này bạn đã học: </b>
            <p className="inline separate-with-comma">
              {videoLessonQnt === 0 && textLessonQnt === 0 && flashcardLessonQnt === 0 && '0 bài'}
              {videoLessonQnt > 0 && (
                <>
                  <b>{videoLessonQnt}</b> bài học video
                </>
              )}
              {textLessonQnt > 0 && (
                <>
                  <b>{textLessonQnt}</b> bài học văn bản
                </>
              )}
              {flashcardLessonQnt > 0 && (
                <>
                  <b>{flashcardLessonQnt}</b> bài học Flashcard
                </>
              )}
            </p>
          </div>

          <div className="mt-10">
            {/* Remind Lesson incompleted */}
            {Array.isArray(uncompletedLessons) && <RemindLesson listUnit={uncompletedLessons} />}
          </div>

          <div className="mt-5">
            <Tip color="green">Tips: Thường xuyên ôn tập lại bài đã học để nắm chắc kiến thức bạn nhé!</Tip>
          </div>
        </div>

        {/* List Chapter */}
        <div className="mt-20">
          <h3 className="text-body-md text-center font-semibold mb-8 md:text-body-lg md:text-left">
            Danh sách các chương học
          </h3>
          <ChapterList listChapter={chapterList} />
        </div>
      </Container>
    </div>
  );
}

export default CourseListChapter;
