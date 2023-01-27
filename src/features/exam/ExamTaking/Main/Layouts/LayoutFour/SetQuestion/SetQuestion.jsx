import MCQ from '../../MCQ';
import Side from './Side';
import Answer from '../../../../../AnswerDetail/Main/Layouts/Answer';

function Divider() {
  return <div className="mt-4 w-full h-[1px] bg-br_light_gray"></div>;
}

function SetQuestion({ data, answerMode }) {
  return (
    <div>
      <div className="flex flex-col xl:flex-row items-start xl:justify-between gap-x-5 gap-y-3">
        {/* Side */}
        <Side data={data} />

        {/* Mutiple MCQ */}
        <div className="w-full flex flex-col xl:basis-2/5 gap-y-10">
          {data.setQuestion.map(({ id, seq, name, choiceList }, index) =>
            !answerMode ? (
              <MCQ id={id} key={index} seq={seq} choiceList={choiceList} name={name} />
            ) : (
              <Answer id={id} key={index} seq={seq} choiceList={choiceList} name={name} />
            ),
          )}
        </div>
      </div>

      <Divider />
    </div>
  );
}

export default SetQuestion;
