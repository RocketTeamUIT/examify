import Answer from '../Answer';

function Divider() {
  return <div className="mt-4 xl:mt-12 w-full h-[1px] bg-br_light_gray"></div>;
}

function SetQuestion({ img, setQuestion }) {
  return (
    <div>
      {img && (
        <div className="w-full max-w-[320px] h-auto">
          <img src={img} alt="img_toeic" />
        </div>
      )}
      <div className="mt-4 flex flex-col gap-y-5 xl:gap-y-14">
        {setQuestion.map(({ id, seq, name, choiceList, explain, userChoiceId }, index) => (
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
      <Divider />
    </div>
  );
}

export default SetQuestion;
