import { useDispatch } from 'react-redux';
import { storeExamTaking, storeUserChoice, storePartList } from '../tackleSlice';
import { useEffect } from 'react';
import { getImgFromInnerHtml } from 'utils';

function useFormatData(examTakingData = {}) {
  const dispatch = useDispatch();
  const userChoice = (() => {}, []);

  const partList = examTakingData?.data?.map((partItem) => ({
    id: partItem.id,
    data: [],
  }));

  // Format data
  const newData = examTakingData?.data?.map((dataItem, index) => {
    // Create userchoice
    dataItem.setQuestionList.map((setQuestionListItem) =>
      setQuestionListItem.setQuestion.forEach((question) => {
        userChoice[question.id] = {
          partId: dataItem.id,
          id: question.id,
          choiceId: null,
          seq: question.seq,
          flag: false,
          value: '',
        };

        partList[index].data.push(question.id);
      }),
    );

    partList[index].title = dataItem.part;

    if (dataItem.part === 'Part 1')
      return {
        id: dataItem.id,
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          ...item.setQuestion[0],
          img: getImgFromInnerHtml(item.side[1].content),
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
          img: getImgFromInnerHtml(item?.side[1]?.content),
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

  // Save to redux
  useEffect(() => {
    dispatch(storeExamTaking(newData));
    dispatch(storeUserChoice(userChoice));
    dispatch(storePartList(partList));
  }, [dispatch, newData, partList, userChoice]);

  return [{ ...examTakingData, data: newData }, partList];
}

export default useFormatData;
