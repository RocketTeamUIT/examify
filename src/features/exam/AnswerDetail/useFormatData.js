import { useDispatch } from 'react-redux';
import { storeExamTaking, storeUserChoice, storePartList } from '../tackleSlice';
import { useEffect } from 'react';

function useFormatData(config) {
  const dispatch = useDispatch();
  const userChoice = (() => {}, []);
  const partList = config?.data.map((dataItem) => ({
    id: dataItem.id,
    data: [],
  }));

  const questionStatus = (choiceList = [], userChoiceId) => {
    const answer = choiceList.filter((choice) => choice.key === true);
    if (userChoiceId === '') return 'unfill';
    else if (userChoiceId === answer[0].id) return 'correct';
    else return 'wrong';
  };

  const newData = config.data.map((dataItem, index) => {
    dataItem.setQuestionList.map((setQuestionListItem) =>
      setQuestionListItem.setQuestion.forEach((question) => {
        userChoice[question.id] = {
          partId: dataItem.id,
          id: question.id,
          name: question.name,
          explain: question.explain,
          userChoiceId: question.userChoiceId,
          seq: question.order,
          flag: false,
          value: '',
        };

        partList[index].data.push({
          id: question.id,
          status: questionStatus(question.choiceList, question.userChoiceId),
        });
      }),
    );

    partList[index].title = dataItem.part;

    if (dataItem.part === 'Part 1')
      return {
        id: dataItem.id,
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          ...item.setQuestion[0],
          img: item.side[0].content,
          audio: item?.audio,
        })),
      };
    else if (dataItem.part === 'Part 2' || dataItem.part === 'Part 5') {
      return {
        id: dataItem.id,
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          ...item.setQuestion[0],
          audio: item.audio,
        })),
      };
    } else if (dataItem.part === 'Part 3' || dataItem.part === 'Part 4') {
      return {
        id: dataItem.id,
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          img: item?.side[0]?.content || '',
          audio: item.audio,
          setQuestion: item.setQuestion,
        })),
      };
    } else if (dataItem.part === 'Part 6' || dataItem.part === 'Part 7') {
      return {
        id: dataItem.id,
        name: dataItem.part,
        data: dataItem.setQuestionList,
      };
    } else return dataItem;
  });

  useEffect(() => {
    // dispatch(storeExamTaking(newData));
    dispatch(storeUserChoice(userChoice));
    // dispatch(storePartList(partList));
  }, [dispatch, newData, partList, userChoice]);

  return [{ ...config, data: newData }, partList];
}

export default useFormatData;
