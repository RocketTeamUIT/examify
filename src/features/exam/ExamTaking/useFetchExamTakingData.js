import { dataExamTaking } from '../data';
import { useDispatch } from 'react-redux';
import { storeExamTaking, storeUserChoice, storePartList } from '../examSlice';

function useFetchExamTakingData(config) {
  const dispatch = useDispatch();
  const userChoice = {};
  const partList = config.partTakeList.map((part) => ({
    id: part.id,
    title: part.name,
    data: [],
  }));

  // Call api get data depend on `config`

  // Format data
  const newData = dataExamTaking.map((dataItem, index) => {
    // Create userchoice
    dataItem.setQuestionList.map((setQuestionListItem) =>
      setQuestionListItem.setQuestion.forEach((question) => {
        userChoice[question.id] = {
          partId: config.partTakeList[index].id,
          id: question.id,
          seq: question.seq,
          flag: false,
          value: '',
        };

        partList[index].data.push(question.id);
      }),
    );

    if (dataItem.part === 'Part 1')
      return {
        id: config.partTakeList[index].id,
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          ...item.setQuestion[0],
          img: item.side[0].content,
          audio: item?.audio,
        })),
      };
    else if (dataItem.part === 'Part 2' || dataItem.part === 'Part 5') {
      return {
        id: config.partTakeList[index].id,
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          ...item.setQuestion[0],
          audio: item.audio,
        })),
      };
    } else if (dataItem.part === 'Part 3' || dataItem.part === 'Part 4') {
      return {
        id: config.partTakeList[index].id,
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          img: item?.side[0]?.content || '',
          audio: item.audio,
          setQuestion: item.setQuestion,
        })),
      };
    } else if (dataItem.part === 'Part 6' || dataItem.part === 'Part 7') {
      return {
        id: config.partTakeList[index].id,
        name: dataItem.part,
        data: dataItem.setQuestionList,
      };
    } else return dataItem;
  });

  // Save to redux
  dispatch(storeExamTaking(newData));
  dispatch(storeUserChoice(userChoice));
  dispatch(storePartList(partList));

  return [newData, partList];
}

export default useFetchExamTakingData;
