import LessonList from './LessonList';

function Unitlist({ listUnit }) {
  return (
    <>
      {listUnit.map((unit) => {
        return (
          <div key={unit.id}>
            <p className="text-body-sm md:text-body-md">
              <b>Tiếp tục học chủ đề: {unit.name}</b>
            </p>
            <ul className="mt-2 flex flex-col">
              <LessonList listLesson={(unit.lessonList || []).slice(0, 6)} />
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Unitlist;
