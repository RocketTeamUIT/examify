import useHalveData from '../../../hooks/useHalveData';
import AnswerItem from './AnswerItem';

function AnswerListing({ data = [] }) {
  // Split array into 2 sub-arrays
  const [leftData, rightData] = useHalveData(data);

  return (
    <div className="flex justify-between">
      <div className="flex flex-col gap-4">
        {leftData.map(({ id, userChoice, order, userAnswer }, index) => (
          <AnswerItem id={id} answerUser={userChoice} key={index} type={userAnswer === 1 ? 'correct' : 'wrong'}>
            {order}
          </AnswerItem>
        ))}
      </div>
      <div className="flex flex-col gap-4">
        {rightData.map(({ id, userChoice, order, userAnswer }, index) => (
          <AnswerItem id={id} answerUser={userChoice} key={index} type={userAnswer === 1 ? 'correct' : 'wrong'}>
            {order}
          </AnswerItem>
        ))}
      </div>
    </div>
  );
}

export default AnswerListing;
