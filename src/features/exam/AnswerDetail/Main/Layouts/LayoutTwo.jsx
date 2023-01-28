import useHalveData from 'features/exam/hooks/useHalveData';
import Answer from '../Layouts/Answer';

// Layout này dành riêng cho Part 2, Part 5
function LayoutTwo({ data }) {
  // Split array into 2 sub-arrays
  const [leftData, rightData] = useHalveData(data);

  // console.log('leftData', leftData);
  return (
    <div className="flex flex-col lg:flex-row lg:justify-between gap-x-[140px] gap-y-10">
      {/* Left column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {leftData.map(({ id, seq, choiceList, name, explain, userChoiceId }, index) => (
          <Answer
            id={id}
            key={index}
            seq={seq}
            choiceList={choiceList}
            name={name}
            explain={explain}
            choicedId={userChoiceId}
          />
        ))}
      </div>

      {/* Right column */}
      <div className="flex-1 flex flex-col gap-y-10">
        {rightData.map(({ id, seq, choiceList, name, explain, userChoiceId }, index) => (
          <Answer
            id={id}
            key={index}
            seq={seq}
            choiceList={choiceList}
            name={name}
            explain={explain}
            choicedId={userChoiceId}
          />
        ))}
      </div>
    </div>
  );
}

export default LayoutTwo;
