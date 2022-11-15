import Lessons from './Lessons';

// Fake data:
const data = [
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
];

function Units({ listUnit }) {
  // Fake function get list lesson from Unit ID:
  const getListLesson = ({ UnitID }) => data;

  return (
    <>
      {listUnit.map((unit) => {
        const listLesson = getListLesson(unit.id);

        return (
          <div key={unit.id}>
            <p>
              <b>Tiếp tục học bài: </b>
              <a href="#/" className="text-primary">
                [Grammar] Tenses - Present tenses: present simple; present continuous; state verbs;
              </a>
            </p>
            <ul className="ml-8 mt-2 flex flex-col gap-2">
              <Lessons listLesson={listLesson} />
            </ul>
          </div>
        );
      })}
    </>
  );
}

export default Units;
