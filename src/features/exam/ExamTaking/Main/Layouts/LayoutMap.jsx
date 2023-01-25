import { LayoutOne, LayoutTwo, LayoutThree, LayoutFour } from './';

function LayoutMap({ part = '', data }) {
  return (
    <>
      {part === 'Part 1' && <LayoutOne data={data} />}
      {(part === 'Part 2' || part === 'Part 5') && (
        <LayoutTwo data={data} includeAudio={part === 'Part 2' ? true : false} />
      )}
      {(part === 'Part 3' || part === 'Part 4') && <LayoutThree data={data} />}
      {(part === 'Part 6' || part === 'Part 7') && <LayoutFour data={data} />}
    </>
  );
}

export default LayoutMap;
