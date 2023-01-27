import MCQ from '../MCQ';
import Answer from '../../../../AnswerDetail/Main/Layouts/Answer';

function Question({ data, answerMode }) {
  const { id, seq, img, name, choiceList = [] } = data;

  return (
    <div className="flex flex-col lg:flex-row gap-y-4 lg:justify-between">
      <div className="w-full lg:w-[40%] xl:w-[48%]">
        <img src={img} alt="img_toeic" />
      </div>
      <div className="w-full lg:w-[55%] xl:w-[48%] bg-white">
        {!answerMode ? (
          <MCQ id={id} seq={seq} choiceList={choiceList} name={name} />
        ) : (
          <Answer id={id} seq={seq} choiceList={choiceList} name={name} />
        )}
      </div>
    </div>
  );
}

export default Question;
