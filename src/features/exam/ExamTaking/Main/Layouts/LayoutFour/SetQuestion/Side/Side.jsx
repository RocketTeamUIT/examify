import SideItem from './SideItem';

function Side({ data }) {
  function headerTitleRender(setQuestion) {
    const firstSeqQn = setQuestion[0].seq;
    const lastSeqQn = setQuestion[setQuestion.length - 1].seq;

    return `${firstSeqQn}-${lastSeqQn}`;
  }

  return (
    <div className="w-full flex flex-col xl:basis-3/5 rounded border-br_light_gray border p-3 xl:p-5">
      <p className="text-h5">
        <span className="font-medium">Questions {headerTitleRender(data.setQuestion)}</span> {data.title}
      </p>

      {/* Side group */}
      <div className="mt-3 xl:mt-5 flex flex-col gap-y-3 xl:gap-y-5">
        {/* Side item */}
        {data.side.map((sideItem, index) => (
          <SideItem key={index} content={sideItem.content} />
        ))}
      </div>
    </div>
  );
}

export default Side;
