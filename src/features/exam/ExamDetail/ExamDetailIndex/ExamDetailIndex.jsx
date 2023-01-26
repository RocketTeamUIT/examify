import Info from './Info';
import PrevResult from './PrevResult';
import TipGroup from './TipGroup';
import ChoosePart from './ChoosePart';
import ChooseDuration from './ChooseDuration';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { durationList } from 'features/exam/data';

const initialState = Array(7).fill(false);

const ExamDetailIndex = ({ exam }) => {
  const [parts, setParts] = useState(initialState);
  const [duration, setDuration] = useState(0);
  const [inputDuration, setInputDuration] = useState(0);
  const { examId } = useParams();
  const formattedParts = parts.reduce((prev, curr, index) => {
    if (curr) {
      return [...prev, index + 1 + 'p'];
    }
    return prev;
  }, []);

  const config = {
    id: examId,
    parts: formattedParts,
    duration: inputDuration * 60 || duration,
    isFullTest: false,
  };

  const formattedDurationList = {
    ...durationList,
    actionsList: durationList.actionsList.map((item) => ({
      ...item,
      action: () => chooseDuration(item.title),
    })),
  };

  function chooseDuration(title) {
    if (title.slice(0, 1) === 'K') {
      setDuration(0);
      return;
    }
    const value = Number(title.substring(0, 2)) * 60;
    setDuration(value);
  }

  function handleChange(e) {
    setInputDuration(e.target.value);
  }

  function choosePart(index) {
    const result = [...parts];
    result[index] = !result[index];
    setParts(result);
  }

  return (
    <>
      {/* Exam information */}
      <Info />

      {/* Prev Result */}
      <PrevResult />

      {/* Tip Group */}
      <TipGroup />

      {/* Choose part */}
      <ChoosePart choosePart={choosePart} />

      {/* Choose duration */}
      <ChooseDuration config={config} durationList={formattedDurationList} onChange={handleChange} />
    </>
  );
};

export default ExamDetailIndex;
