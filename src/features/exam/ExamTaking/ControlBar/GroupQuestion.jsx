import Question from './Question';

function GroupQuestion({ name, questionList }) {
  return (
    <div>
      <p className="text-h5 font-medium">{name}</p>
      <div className="mt-2 flex flex-row flex-wrap gap-2">
        {questionList.map((question, index) => (
          <Question key={index} seq={question.seq} type={question.type} flag={question.flag} />
        ))}
      </div>
    </div>
  );
}

export default GroupQuestion;
