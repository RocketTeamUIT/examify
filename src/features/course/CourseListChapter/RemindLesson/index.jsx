import ListUnitParaph from './UnitList';
import Wrapper from '../Wrapper';

function RemindLesson({ listUnit, chapterList }) {
  return (
    <Wrapper status={1}>
      <div className="flex flex-col gap-6 p-5">
        <p className="text-body-sm md:text-body-md">Bạn chưa hoàn thành các bài học này!</p>
        {/* Unit component */}
        <ListUnitParaph listUnit={listUnit} />
      </div>
    </Wrapper>
  );
}

export default RemindLesson;
