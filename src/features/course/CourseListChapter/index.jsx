import { SubNav, Breadcrumb, Tip, Tag } from '../../../components/ui';
import Units from './Units';
import Wrapper from './Wrapper';

// This data is a list of units that the User has not completed
const listUnit = [
  {
    id: 1,
    name: '[Grammar] Tenses - Present tenses: present simple; present continuous; state verbs; there is/ there are',
  },
  {
    id: 2,
    name: '[Grammar] Tenses - Present tenses: present simple; present continuous; state verbs; there is/ there are',
  },
  {
    id: 3,
    name: '[Grammar] Tenses - Present tenses: present simple; present continuous; state verbs; there is/ there are',
  },
];

function CourseListChapter() {
  return (
    <div className="min-h-[2000px]">
      {/* Banner Course */}
      <div className="w-full h-40 bg-gradient-to-r from-[#6DD5ED] to-[#2193B0] flex">
        <h1 className="my-auto ml-[100px] text-h2 font-bold text-t_dark">Course</h1>
      </div>

      {/* SubNav component */}
      <SubNav />

      <div className="flex">
        <div className="w-8/12 mx-[100px]">
          {/* Breadcrub component */}
          <div className="pt-8">
            <Breadcrumb hierarchy={['IELTS Fundaments', 'Hiện tại']} />
          </div>

          {/* Content Page */}
          <div className="mt-20">
            {/* Course Name */}
            <h3 className="text-center text-h3 font-semibold">
              Trọn bộ 3 khoá học thực hành tiếng Anh online - Practical English [Tặng khoá TED Talks]
            </h3>

            {/* In this week */}
            <p className="mt-10">
              <b className="text-primary">Tuần này bạn đã học: </b>
              <b>8</b> bài học <b>video</b>,<b> 6</b> bài học <b>lý thuyết</b> và
              <b> 2</b> bài học <b>flashcard</b>.
            </p>

            <div className="mt-10">
              {/* Lesson InCompleted */}
              <Wrapper status="inProgress">
                <div className="flex flex-col gap-4">
                  <p>Bạn chưa hoàn thành các bài học này!</p>
                  {/* Unit component */}
                  <Units listUnit={listUnit} />
                </div>
              </Wrapper>
            </div>

            {/* Tip component*/}
            <div className="mt-5">
              <Tip color="green">Tips: Thường xuyên ôn tập lại bài đã học để nắm chắc kiến thức bạn nhé!</Tip>
            </div>
          </div>
        </div>
        <div className="w-4/12"></div>
      </div>
    </div>
  );
}

export default CourseListChapter;
