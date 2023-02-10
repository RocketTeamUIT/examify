import SkillBracketAbilities from './SkillBracketAbilities';
import SkillMeasure from './SkillMeasure';

function ReviewItem({ data }) {
  return (
    <div>
      <SkillBracketAbilities data={data} />
      <SkillMeasure data={data} />
    </div>
  );
}

export default ReviewItem;
