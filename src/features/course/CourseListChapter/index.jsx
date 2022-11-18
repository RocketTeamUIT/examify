import { SubNav, Breadcrumb, Tip } from '../../../components/ui';
import CourseTrack from '../components/CourseTrack';
import ListUnitParaph from './ListUnitParaph';
import Wrapper from './Wrapper';
import Progress from './Progress';
import UnitBox from './UnitBox';

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
  return (
    <div>
      {/* Banner Course */}
      <div className="w-full h-40 bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] flex">
        <h1 className="my-auto ml-[100px] text-h2 font-bold text-t_dark">Course</h1>
      </div>

      {/* SubNav component */}
      <SubNav />

      <div className="lg:flex">
        <div className="lg:w-8/12 mx-6 md:mx-20 lg:mx-[100px]">
          {/* Breadcrub component */}
          <div className="hidden md:block pt-8">
            <Breadcrumb hierarchy={['IELTS Fundaments', 'Hiện tại']} />
          </div>

          {/* Content Page */}
          <div className="mt-10 md:mt-20">
            {/* Course Name */}
            <h3 className="text-body-lg text-center md:text-h3 font-semibold">
              Trọn bộ 3 khoá học thực hành tiếng Anh online - Practical English [Tặng khoá TED Talks]
            </h3>

            {/* In this week */}
            <p className="text-body-sm md:text-body-md mt-10">
              <b className="text-primary">Tuần này bạn đã học: </b>
              <b>8</b> bài học <b>video</b>,<b> 6</b> bài học <b>lý thuyết</b> và
              <b> 2</b> bài học <b>flashcard</b>.
            </p>

            <div className="mt-10">
              {/* Lesson InCompleted */}
              <Wrapper status="inProgress">
                <div className="flex flex-col gap-6 p-5">
                  <p className="text-body-sm md:text-body-md">Bạn chưa hoàn thành các bài học này!</p>
                  {/* Unit component */}
                  <ListUnitParaph listUnit={listUnit} />
                </div>
              </Wrapper>
            </div>

            {/* Tip component*/}
            <div className="mt-5">
              <Tip color="green">Tips: Thường xuyên ôn tập lại bài đã học để nắm chắc kiến thức bạn nhé!</Tip>
            </div>
          </div>

          {/* List Chapter */}
          <div className="mt-20">
            <h3 className="text-body-md text-center font-semibold mb-8 md:text-body-lg md:text-left">
              Danh sách các chương học
            </h3>
            <div className="flex flex-col gap-10">
              {listChapter.map((chapter) => {
                let chapterPercent = Math.floor((chapter.userCompleted / chapter.totalUnit) * 100);

                return (
                  // Wrapper component
                  <Wrapper key={chapter.id} status={chapter.status}>
                    {/* Header */}
                    <div className=" flex items-center justify-between bg-bg_light_gray px-5 py-2 shadow-[0_0_10px_0_rgba(0,0,0,0.3)]">
                      <h4 className="font-medium">[Grammar] Tenses Chapter 1</h4>
                      <div className="hidden md:flex items-center gap-3">
                        {/* Progress component */}
                        <Progress progress={chapterPercent} />
                        <p>
                          <b>
                            {chapter.userCompleted}/{chapter.totalUnit}
                          </b>
                          bài học
                        </p>
                      </div>
                    </div>

                    {/* List Unit */}
                    <div className="flex flex-col gap-4 px-5 py-2">
                      {chapter.listUnit.map((unit) => {
                        // percent complete Unit
                        let percent = Math.floor((unit.userCompleted / unit.totalLesson) * 100);
                        // Unii component
                        return <UnitBox key={unit.id} progress={percent} />;
                      })}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
        <div className="hidden lg:block lg:w-4/12">
          <div className="sticky top-0 right-0">
            <CourseTrack />
          </div>
        </div>
      </div>
    </div>
  );
}

export default CourseListChapter;
