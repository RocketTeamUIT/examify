import { dataRecord } from '../data';
import moment from 'moment';
import 'moment-duration-format';
import { useDispatch } from 'react-redux';
import { useEffect, useMemo } from 'react';
import { storeHeaderData, storeQuestionList } from '../recordSlice';

const groupBy = (xs = [], key) => {
  return xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, {});
};

const objectMap = (obj, fn) => Object.fromEntries(Object.entries(obj).map(([k, v], i) => [k, fn(v, k, i)]));

const findUserChoice = (choiceList = [], userChoiceId) => {
  const choiceMapping = {
    1: 'A',
    2: 'B',
    3: 'C',
    4: 'D',
  };

  let result;
  choiceList.forEach((choiceItem) => {
    if (choiceItem.id === userChoiceId) {
      result = choiceMapping[choiceItem.seq];
    }
  });
  return result;
};

const formatDate = (data) => {
  const date = new Date(data);
  const year = date.getFullYear();
  const month = date.getMonth();
  const day = date.getDate();

  return `${day}/${month + 1}/${year}`;
};

const formatDuration = (duration) => {
  return moment.duration(duration, 'seconds').format('HH:mm:ss', { trim: false });
};

function useFetchData() {
  const dispatch = useDispatch();

  const headerData = useMemo(
    () => ({
      partList: dataRecord.data.reduce((acc, partItem) => [...acc, partItem.part], []),
      ...dataRecord,
      date: formatDate(dataRecord.date),
      duration: formatDuration(dataRecord.duration),
    }),
    [],
  );

  // Call API

  // Format data
  const questionListData = dataRecord.data.reduce((acc0, partItem) => {
    const temp = partItem.setQuestionList.reduce((acc1, setQuestionListItem) => {
      const temp1 = setQuestionListItem.setQuestion.reduce((acc2, questionItem) => {
        let temp2 = { ...questionItem, hashtag: questionItem.hashtag.name };

        if (['Part 1', 'Part 3', 'Part 4'].includes(partItem.part)) {
          temp2 = { ...temp2, img: setQuestionListItem?.side[0]?.content };
        }
        if (['Part 1', 'Part 2', 'Part 3', 'Part 4'].includes(partItem.part)) {
          temp2 = { ...temp2, audio: setQuestionListItem.audio };
        }

        return { ...acc2, [questionItem.id]: { ...temp2 } };
      }, {});

      return { ...acc1, ...temp1 };
    }, {});

    return { ...acc0, ...temp };
  }, {});

  const partIdList = dataRecord.data.map((partItem) => ({
    id: partItem.id,
    name: partItem.part,
    questionIdList: partItem.setQuestionList.reduce((accPar, setQuestionListItem) => {
      const questionList = setQuestionListItem.setQuestion.reduce((acc, questionItem) => {
        const temp = {
          ...questionItem,
          userChoice: findUserChoice(questionItem.choiceList, questionItem.userChoiceId),
        };
        return [...acc, temp];
      }, []);

      return accPar.concat(questionList);
    }, []),
  }));

  const partIdListGrByHashtag = dataRecord.data.map((partItem) => ({
    id: partItem.id,
    name: partItem.part,
    partAnswerGrByList: (() => {
      const temp = partItem.setQuestionList.reduce((acc1, setQuestionListItem) => {
        const temp1 = setQuestionListItem.setQuestion.reduce((acc2, questionItem) => {
          let temp2 = { ...questionItem, hashtag: questionItem.hashtag.name };
          if (['Part 1', 'Part 3', 'Part 4'].includes(partItem.part)) {
            temp2 = { ...temp2, img: setQuestionListItem?.side[0]?.content };
          }
          if (['Part 1', 'Part 2', 'Part 3', 'Part 4'].includes(partItem.part)) {
            temp2 = { ...temp2, audio: setQuestionListItem.audio };
          }
          return [...acc2, temp2];
        }, []);
        return [...acc1, ...temp1];
      }, []);

      const newObj = groupBy(temp, 'hashtag');

      const newObj1 = objectMap(newObj, (v, k) => ({
        name: k,
        questionIdList: v,
        correct: v.reduce((acc, curValue) => (curValue.userAnswer === 1 ? acc + 1 : acc), 0),
        wrong: v.reduce((acc, curValue) => (curValue.userAnswer === 0 ? acc + 1 : acc), 0),
        skip: v.reduce((acc, curValue) => (curValue.userAnswer === 2 ? acc + 1 : acc), 0),
      }));

      // Convert object to array
      const result = Object.keys(newObj1).map((key) => newObj1[key]);
      return result;
    })(),
  }));

  delete headerData['data'];

  // Save to redux
  useEffect(() => {
    dispatch(storeHeaderData(headerData));
    dispatch(storeQuestionList(questionListData));
  }, [dispatch, questionListData, headerData]);

  return [headerData, partIdList, partIdListGrByHashtag, questionListData];
}

export default useFetchData;
