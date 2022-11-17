import Lessons from './Lessons';

function Units({ listUnit }) {
  return (
    <>
      {listUnit.map((unit) => {
        return (
          <div key={unit.id}>
            <p>
              <b>Tiếp tục học bài: </b>
              <a href="#/" className="text-primary">
                [Grammar] Tenses - Present tenses: present simple; present continuous; state verbs;
              </a>
            </p>
            <ul className="ml-8 mt-2 flex flex-col gap-2">
              <Lessons listLesson={unit.listLesson} />
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Units;
