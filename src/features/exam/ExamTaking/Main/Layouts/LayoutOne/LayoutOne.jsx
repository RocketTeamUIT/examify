import Question from './Question';
import { part1 } from 'features/exam/data';

// Layout này chỉ dành riêng cho Part 1
function LayoutOne() {
  return (
    <div className="flex flex-col gap-20">
      {part1.map((questionItem, index) => (
        <Question seq={questionItem.seq} key={index} img={questionItem.img} choiceList={questionItem.choiceList} />
      ))}
    </div>
  );
}

export default LayoutOne;
