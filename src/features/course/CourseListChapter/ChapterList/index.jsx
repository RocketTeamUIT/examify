import Unit from './Unit';
import Wrapper from '../Wrapper';
import countCompletedLessonsInChapter from '../../utils/countCompletedLessonsInChapter';

function ChapterList({ listChapter }) {
  const getPath = (chapterId) => (lessonId) => {
    return `${chapterId}/lesson/${lessonId}`;
  };

  return (
    <div className="flex flex-col gap-10">
      {listChapter.map((chapter, index) => {
        return (
          // Wrapper component
          <Wrapper key={chapter.id} status={chapter.statusLearned}>
            {/* Header */}
            <div className=" flex items-center justify-between bg-bg_light_gray px-5 py-2 shadow-[0_0_10px_0_rgba(0,0,0,0.3)]">
              <h4 className="font-medium">
                Chương {index + 1}: {chapter.name}
              </h4>
              <p>
                <b>
                  {countCompletedLessonsInChapter(chapter)}/{chapter.totalLesson}
                </b>
                &nbsp;bài học
              </p>
            </div>

            {/* List Unit */}
            <div className="flex flex-col gap-4 px-5 py-2 mb-5">
              {chapter.unitList.map((unit, index) => {
                // percent complete Unit
                let percent = ~~((unit.userCompleted / unit.totalLesson) * 100);
                // Unit component
                return (
                  <Unit getPath={getPath(chapter.id)} key={unit.id} progress={percent} unit={unit} seq={index + 1} />
                );
              })}
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}

export default ChapterList;
