import Question from './Question';

// Layout này chỉ dành riêng cho Part 1
function LayoutOne({ data: part1 }) {
  // data la 1 setQuestionList
  return (
    <div className="flex flex-col gap-20">
      {part1.map((questionItem, index) => (
        <Question key={index} data={questionItem} />
      ))}
    </div>
  );
}

export default LayoutOne;
