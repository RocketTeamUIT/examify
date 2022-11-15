import { AiFillFileText as TextIcon } from 'react-icons/ai';
import { RiSimCardLine as FlashcardIcon } from 'react-icons/ri';
import { MdSlowMotionVideo as VideoIcon } from 'react-icons/md';

const LESSON_TYPE = ['video', 'text', 'flashcard'];

function Lessons({ listLesson }) {
  const lessonVideo = () => (
    <>
      <VideoIcon className="text-t_gray" />
      <b className="font-semibold">Video bài giảng: </b>
    </>
  );

  const lessonText = () => (
    <>
      <FlashcardIcon className="text-t_gray" />
      <b className="font-semibold">Danh sách từ vựng: </b>
    </>
  );

  const lessonFlashcard = () => (
    <>
      <TextIcon className="text-t_gray" />
      <b className="font-semibold">Lý thuyết: </b>
    </>
  );

  return (
    <>
      {listLesson.map((lesson) => {
        // check type of lesson in list LESSON_TYPE:
        const checkType = LESSON_TYPE.includes(lesson.type) ? lesson.type : 'undefined';

        return (
          <div key={lesson.id} className="flex items-center gap-2">
            {checkType === 'video' && lessonVideo()}
            {checkType === 'text' && lessonText()}
            {checkType === 'flashcard' && lessonFlashcard()}
            <a href="#/">{lesson.name}</a>
          </div>
        );
      })}
    </>
  );
}

export default Lessons;
