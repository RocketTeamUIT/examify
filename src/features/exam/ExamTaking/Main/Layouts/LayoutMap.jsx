import { LayoutOne, LayoutTwo, LayoutThree, LayoutFour } from './';

function LayoutMap({ part = '', data, answerMode = false }) {
  return (
    <>
      {part === 'Part 1' && <LayoutOne data={data} answerMode={answerMode} />}
      {(part === 'Part 2' || part === 'Part 5') && <LayoutTwo data={data} answerMode={answerMode} />}
      {(part === 'Part 3' || part === 'Part 4') && <LayoutThree data={data} answerMode={answerMode} />}
      {(part === 'Part 6' || part === 'Part 7') && <LayoutFour data={data} answerMode={answerMode} />}
    </>
  );
}

export default LayoutMap;
