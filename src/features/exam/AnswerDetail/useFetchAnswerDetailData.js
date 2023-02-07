function useFetchAnswerDetailData(config) {
  const questionList = {};
  const partList = config.data.map((id) => ({
    id: id,
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
        questionList[question.id] = {
          partId: dataItem.id,
          id: question.id,
          name: question.name,
          explain: question.explain,
          userChoiceId: question.userChoiceId,
          seq: question.seq,
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
        id: config.partIdList[index],
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          ...item.setQuestion[0],
          img: item.side[0].content,
          audio: item?.audio,
        })),
      };
    else if (dataItem.part === 'Part 2' || dataItem.part === 'Part 5') {
      return {
        id: config.partIdList[index],
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          ...item.setQuestion[0],
          audio: item.audio,
        })),
      };
    } else if (dataItem.part === 'Part 3' || dataItem.part === 'Part 4') {
      return {
        id: config.partIdList[index],
        name: dataItem.part,
        data: dataItem.setQuestionList.map((item) => ({
          img: item?.side[0]?.content || '',
          audio: item.audio,
          setQuestion: item.setQuestion,
        })),
      };
    } else if (dataItem.part === 'Part 6' || dataItem.part === 'Part 7') {
      return {
        id: config.partIdList[index],
        name: dataItem.part,
        data: dataItem.setQuestionList,
      };
    } else return dataItem;
  });

  return [{ ...config, data: newData }, partList];
}

export default useFetchAnswerDetailData;
