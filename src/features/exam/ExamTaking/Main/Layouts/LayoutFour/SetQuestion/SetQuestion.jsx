import MCQ from '../../MCQ';
import Side from './Side';

function Divider() {
  return <div className="mt-4 w-full h-[1px] bg-br_light_gray"></div>;
}

function SetQuestion({ data }) {
  return (
    <div>
      <div className="flex flex-col xl:flex-row items-start xl:justify-between gap-x-5 gap-y-3">
        {/* Side */}
        <Side data={data} />

        {/* Mutiple MCQ */}
        <div className="w-full flex flex-col xl:basis-2/5 gap-y-10">
          {data.setQuestion.map(({ id, seq, name, choiceList }, index) => (
            <MCQ key={index} id={id} seq={seq} name={name} choiceList={choiceList} />
          ))}
        </div>
      </div>

      <Divider />
    </div>
  );
}

export default SetQuestion;
