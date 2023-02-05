import Info from './Info';
import PrevResult from './PrevResult';
import TipGroup from './TipGroup';
import ChoosePart from './ChoosePart';
import ChooseDuration from './ChooseDuration';
import { useState } from 'react';
import { useParams, useOutletContext } from 'react-router-dom';
import { durationList } from 'features/exam/data';

const ExamDetailIndex = () => {
  const [historyTaking] = useOutletContext();
  const [parts, setParts] = useState([]);
  const [duration, setDuration] = useState(0);
  const [inputDuration, setInputDuration] = useState(0);
  const { examId } = useParams();
  const formattedParts = (() => {
    // Remove all element which appear twice
    const r1 = parts.filter((item) => parts.filter((e) => e === item).length % 2 === 1);

    // Remove duplicate
    const r2 = [...new Set(r1)];
    return r2;
  })();

  const config = {
    id: examId,
    partIdList: formattedParts,
    duration: inputDuration * 60 || duration,
    isFullmode: false,
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
    let curValue = e.target.value;

    // Control input value
    if (/^0/.test(curValue)) {
      curValue = curValue.replace(/^0/, '');
    }

    if (curValue > 180) {
      setInputDuration(180);
    } else if (curValue < 0) {
      setInputDuration(0);
    } else {
      setInputDuration(curValue);
    }
  }

  function choosePart(partId) {
    const result = [...parts, partId];
    setParts(result);
  }

  return (
    <>
      {/* Exam information */}
      <Info />

      {/* Prev Result */}
      {historyTaking.length > 0 && <PrevResult data={historyTaking} />}

      {/* Tip Group */}
      <TipGroup />

      {/* Choose part */}
      <ChoosePart choosePart={choosePart} />

      {/* Choose duration */}
      <ChooseDuration
        config={config}
        durationList={formattedDurationList}
        durationValue={inputDuration}
        onChange={handleChange}
      />
    </>
  );
};

export default ExamDetailIndex;
