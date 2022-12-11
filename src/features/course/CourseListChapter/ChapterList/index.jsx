import Unit from './Unit';
import Wrapper from '../Wrapper';

function ChapterList({ listChapter }) {
  return (
    <div className="flex flex-col gap-10">
      {listChapter.map((chapter) => {
        return (
          // Wrapper component
          <Wrapper key={chapter.id} status={chapter.status}>
            {/* Header */}
            <div className=" flex items-center justify-between bg-bg_light_gray px-5 py-2 shadow-[0_0_10px_0_rgba(0,0,0,0.3)]">
              <h4 className="font-medium">{chapter.name}</h4>
              <p>
                <b>
                  {chapter.userCompleted}/{chapter.totalUnit}
                </b>
                &nbsp;bài học
              </p>
            </div>

            {/* List Unit */}
            <div className="flex flex-col gap-4 px-5 py-2 mb-5">
              {chapter.listUnit.map((unit) => {
                // percent complete Unit
                let percent = ~~((unit.userCompleted / unit.totalLesson) * 100);
                // Unit component
                return <Unit key={unit.id} progress={percent} unit={unit} />;
              })}
            </div>
          </Wrapper>
        );
      })}
    </div>
  );
}

export default ChapterList;
