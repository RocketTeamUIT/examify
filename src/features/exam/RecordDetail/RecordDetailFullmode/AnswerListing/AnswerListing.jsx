import useHalveData from '../../../hooks/useHalveData';
import AnswerItem from './AnswerItem';

function AnswerListing({ data = [] }) {
  // Split array into 2 sub-arrays
  const [leftData, rightData] = useHalveData(data);

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4">
        {leftData.map((answerItem, index) => (
          <AnswerItem answerUser={answerItem.userChoice} key={index} type={answerItem.status}>
            {answerItem.orderQn}
          </AnswerItem>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {rightData.map((answerItem, index) => (
          <AnswerItem answerUser={answerItem.userChoice} key={index} type={answerItem.status}>
            {answerItem.orderQn}
          </AnswerItem>
        ))}
      </div>
    </div>
  );
}

export default AnswerListing;
