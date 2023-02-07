import Question from './Question';

function GroupQuestion({ title, groupId, partId }) {
  // console.log('data', groupId);
  return (
    <div>
      <p className="text-h5 font-medium">{title}</p>
      <div className="mt-2 flex flex-row flex-wrap gap-2">
        {groupId.map(({ id, status }, index) => (
          <Question key={index} id={id} partId={partId} status={status} />
        ))}
      </div>
    </div>
  );
}

export default GroupQuestion;
