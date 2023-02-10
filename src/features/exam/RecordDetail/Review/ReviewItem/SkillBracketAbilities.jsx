import classNames from 'classnames';

function SkillBracketAbilities({ data }) {
  return (
    <div
      className={classNames('border', {
        'border-ac_blue': data.type === 'Listening',
        'border-ac_orange': data.type === 'Reading',
      })}
    >
      <div
        className={classNames({
          'bg-ac_blue': data.type === 'Listening',
          'bg-ac_orange': data.type === 'Reading',
        })}
      >
        <h3 className="text-white text-center py-2 text-h5 font-medium">{data.type}</h3>
      </div>
      <div className="p-4 text-h6">
        <p className="font-medium mb-3">{data.skillBracketAbilities.title}</p>
        <ul className="list-disc pl-6 flex flex-col gap-2">
          {data.skillBracketAbilities.abilitiesList.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default SkillBracketAbilities;
