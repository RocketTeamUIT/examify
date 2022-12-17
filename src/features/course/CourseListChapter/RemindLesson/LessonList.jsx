import { AiFillFileText as TextIcon } from 'react-icons/ai';
import { RiSimCardLine as FlashcardIcon } from 'react-icons/ri';
import { MdSlowMotionVideo as VideoIcon } from 'react-icons/md';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import findChapterByLessonId from '../../utils/findChapterByLessonId';

const LESSON_TYPE = [1, 2, 3];

function LessonList({ listLesson }) {
  const { courseDetail } = useSelector((store) => store.course);

  const lessonVideo = () => (
    <div className="shrink-0 flex items-center gap-1">
      <VideoIcon className="text-t_gray shrink-0" />
      <b className="text-body-sm md:text-body-md font-semibold">Video bài giảng: </b>
    </div>
  );

  const lessonText = () => (
    <div className="shrink-0 flex items-center gap-1">
      <FlashcardIcon className="text-t_gray shrink-0" />
      <b className="text-body-sm md:text-body-md font-semibold">Danh sách từ vựng: </b>
    </div>
  );

  const lessonFlashcard = () => (
    <div className="shrink-0 flex items-center gap-1">
      <TextIcon className="text-t_gray shrink-0" />
      <b className="text-body-sm md:text-body-md font-semibold">Lý thuyết: </b>
    </div>
  );

  if (!courseDetail) return null;

  const getLessonPath = (lessonId) => {
    const chapterId = findChapterByLessonId(courseDetail.chapterList, lessonId);
    if (!chapterId) return '#';
    return `${chapterId}/lesson/${lessonId}`;
  };

  return (
    <>
      {listLesson.map((lesson) => {
        // check type of lesson in list LESSON_TYPE:
        const checkType = LESSON_TYPE.includes(lesson.type) ? lesson.type : 'undefined';

        return (
          <Link
            to={getLessonPath(lesson.id)}
            key={lesson.id}
            className="flex flex-col md:flex-row md:items-center gap-2 py-3 rounded-md px-4 md:px-8 hover:bg-bg_light_gray_4"
          >
            {checkType === 1 && lessonVideo()}
            {checkType === 2 && lessonText()}
            {checkType === 3 && lessonFlashcard()}
            <div className="ml-5 text-body-sm md:ml-0 md:text-body-md">{lesson.name}</div>
          </Link>
        );
      })}
    </>
  );
}

export default LessonList;
