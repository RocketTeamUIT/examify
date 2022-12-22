import { AiFillFileText } from 'react-icons/ai';
import { RiSimCardLine } from 'react-icons/ri';
import { MdSlowMotionVideo } from 'react-icons/md';
import { Link, useParams } from 'react-router-dom';

function Lesson({ lesson, chapterId, seq }) {
  const { courseId } = useParams();

  return (
    <Link to={`/courses/${courseId}/detail/list-chapter/${chapterId}/lesson/${lesson.id}`}>
      <div className="flex items-center h-[60px] bg-white rounded-md shadow-md cursor-pointer ml-8">
        <div className="flex-shrink-0 px-1 md:px-2">
          {lesson.type === 1 && <MdSlowMotionVideo className="text-t_gray" />}
          {lesson.type === 2 && <AiFillFileText className="text-t_gray" />}
          {lesson.type === 3 && <RiSimCardLine className="text-t_gray" />}
        </div>
        <h3 className="text-body-sm px-2 flex-1">
          {seq}. {lesson.name}
        </h3>
        <p className="flex-shrink-0 text-body-sm px-1 md:mr-3">{lesson.time}</p>
      </div>
    </Link>
  );
}

export default Lesson;
