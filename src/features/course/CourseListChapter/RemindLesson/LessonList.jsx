import { AiFillFileText as TextIcon } from 'react-icons/ai';
import { RiSimCardLine as FlashcardIcon } from 'react-icons/ri';
import { MdSlowMotionVideo as VideoIcon } from 'react-icons/md';

const LESSON_TYPE = ['video', 'text', 'flashcard'];

function LessonList({ listLesson }) {
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

  return (
    <>
      {listLesson.map((lesson) => {
        // check type of lesson in list LESSON_TYPE:
        const checkType = LESSON_TYPE.includes(lesson.type) ? lesson.type : 'undefined';

        return (
          <div key={lesson.id} className="flex flex-col md:flex-row md:items-center gap-2">
            {checkType === 'video' && lessonVideo()}
            {checkType === 'text' && lessonText()}
            {checkType === 'flashcard' && lessonFlashcard()}
            <a href="#/" className="ml-5 text-body-sm md:ml-0 md:text-body-md">
              {lesson.name}
            </a>
          </div>
        );
      })}
    </>
  );
}

export default LessonList;
