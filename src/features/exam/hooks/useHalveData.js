import { useMemo } from 'react';

// Split array into 2 sub-arrays
function useHalveData(data) {
  const [leftData, rightData] = useMemo(() => {
    const pointBreak = Math.round(data.length / 2);
    return [data.slice(0, pointBreak), data.slice(pointBreak)];
  }, [data]);

  return [leftData, rightData];
}

export default useHalveData;
