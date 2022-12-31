import Info from './Info';
import PrevResult from './PrevResult';
import TipGroup from './TipGroup';
import ChoosePart from './ChoosePart';
import ChooseDuration from './ChooseDuration';

const ExamDetailIndex = ({ exam }) => {
  return (
    <>
      {/* Exam information */}
      <Info exam={exam} />

      {/* Prev Result */}
      <PrevResult />

      {/* Tip Group */}
      <TipGroup />

      {/* Choose part */}
      <ChoosePart />

      {/* Choose duration */}
      <ChooseDuration />
    </>
  );
};

export default ExamDetailIndex;
