import Question from './Question';

function GroupQuestion({ title, groupId, partId }) {
  return (
    <div>
      <p className="text-h5 font-medium">{title}</p>
      <div className="mt-2 flex flex-row flex-wrap gap-2">
        {groupId.map((id, index) => (
          <Question key={index} id={id} partId={partId} />
        ))}
      </div>
    </div>
  );
}

export default GroupQuestion;
