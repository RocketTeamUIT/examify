import LessonList from './LessonList';

function Unitlist({ listUnit }) {
  return (
    <>
      {listUnit.map((unit) => {
        return (
          <div key={unit.id}>
            <p className="text-body-sm md:text-body-md">
              <b>Tiếp tục học bài: </b>
              <a href="#/" className="text-primary">
                [Grammar] Tenses - Present tenses: present simple; present continuous; state verbs;
              </a>
            </p>
            <ul className="ml-4 md:ml-8 mt-2 flex flex-col gap-2 md:gap-4">
              <LessonList listLesson={unit.listLesson} />
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Unitlist;
