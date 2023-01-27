import SetQuestion from './SetQuestion';

function LayoutFour({ data }) {
  return (
    <div className="flex flex-col gap-y-20">
      {/* Set Question */}
      {data.map((setQuestion, index) => (
        <SetQuestion key={index} data={setQuestion} />
      ))}
    </div>
  );
}

export default LayoutFour;
