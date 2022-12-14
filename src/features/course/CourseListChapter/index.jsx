import { SubNav, Breadcrumb, Tip } from '../../../components/ui';
import ChapterList from './ChapterList';
import RemindLesson from './RemindLesson';
import CourseTrack from '../components/CourseTrack';
import { Link, useParams } from 'react-router-dom';
import useCourseDetail from '../hooks/useCourseDetail';
import Container from '../../../layouts/components/Container';

// This data is a list of units that the User has not completed
const listUnit = [
  {
    id: 1,
    name: '[Grammar] Tenses - Present tenses: present simple; present continuous; state verbs; there is/ there are',
    listLesson: [
      {
        id: 1,
        name: 'Lý thuyết về bất động từ',
        type: 'video',
      },
      {
        id: 2,
        name: 'Lý thuyết về bất động từ',
        type: 'text',
      },
      {
        id: 3,
        name: 'Lý thuyết về bất động từ',
        type: 'flashcard',
      },
    ],
  },
  {
    id: 2,
    name: '[Grammar] Tenses - Present tenses: present simple; present continuous; state verbs; there is/ there are',
    listLesson: [
      {
        id: 1,
        name: 'Lý thuyết về bất động từ',
        type: 'video',
      },
      {
        id: 2,
        name: 'Lý thuyết về bất động từ',
        type: 'text',
      },
    ],
  },
  {
    id: 3,
    name: '[Grammar] Tenses - Present tenses: present simple; present continuous; state verbs; there is/ there are',
    listLesson: [
      {
        id: 1,
        name: 'Lý thuyết về bất động từ',
        type: 'video',
      },
      {
        id: 2,
        name: 'Lý thuyết về bất động từ',
        type: 'text',
      },
    ],
  },
];

// This data is a list of chapter that the User has not completed
const listChapter = [
  {
    id: 1,
    name: '[Grammar] Tenses Chapter 1',
    status: 'inProgress',
    totalUnit: 4,
    userCompleted: 3,
    listUnit: [
      {
        id: 1,
        name: '[Grammar] Tenses - Present tenses: present simple',
        totalLesson: 4,
        userCompleted: 4,
      },
      {
        id: 2,
        name: '[Grammar] Tenses - Present tenses: present simple',
        totalLesson: 3,
        userCompleted: 3,
      },
      {
        id: 3,
        name: '[Grammar] Tenses - Present tenses: present simple',
        totalLesson: 3,
        userCompleted: 2,
      },
      {
        id: 4,
        name: '[Grammar] Tenses - Present tenses: present simple',
        totalLesson: 4,
        userCompleted: 0,
      },
    ],
  },
  {
    id: 2,
    name: '[Grammar] Tenses Chapter 2',
    status: 'inCompleted',
    totalUnit: 2,
    userCompleted: 0,
    listUnit: [
      {
        id: 1,
        name: '[Grammar] Tenses - Present tenses: present simple',
        totalLesson: 7,
        userCompleted: 0,
      },
      {
        id: 2,
        name: '[Grammar] Tenses - Present tenses: present simple',
        totalLesson: 3,
        userCompleted: 0,
      },
    ],
  },
  {
    id: 3,
    name: '[Grammar] Tenses Chapter 3',
    status: 'completed',
    totalUnit: 4,
    userCompleted: 4,
    listUnit: [
      {
        id: 1,
        name: '[Grammar] Tenses - Present tenses: present simple',
        totalLesson: 4,
        userCompleted: 4,
      },
    ],
  },
];

function CourseListChapter() {
  const { courseId } = useParams();
  const { courseDetail } = useCourseDetail(courseId, false);
  const { name, chapterList } = courseDetail;

  return (
    <div>
      {/* Main content Page */}
      <Container className="lg:flex mb-20">
        {/* Breadcrumb component */}
        <div className="pt-8">
          <Breadcrumb hierarchy={[<Link to={`/courses/${courseId}/detail`}>{name || ''}</Link>, 'Hiện tại']} />
        </div>

        <div className="mt-10 md:mt-20">
          <h3 className="text-body-lg text-center md:text-h3 font-semibold">{name}</h3>

          <p className="text-body-sm md:text-body-md mt-10">
            <b className="text-primary">Tuần này bạn đã học: </b>
            <b>8</b> bài học <b>video</b>,<b> 6</b> bài học <b>lý thuyết</b> và
            <b> 2</b> bài học <b>flashcard</b>.
          </p>

          <div className="mt-10">
            {/* Remind Lesson incompleted */}
            <RemindLesson listUnit={listUnit} />
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
          <ChapterList listChapter={chapterList || []} />
        </div>
      </Container>
    </div>
  );
}

export default CourseListChapter;
