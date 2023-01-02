import { AiFillStar } from 'react-icons/ai';

function RatingStar({ avg }) {
  // Fill color for Star rating icon:
  const fillStar = (avgRate, num) => {
    return Math.round(avgRate) < num ? (
      <AiFillStar data-testid={`test-star-${num}`} className="text-t_light_gray_3" />
    ) : (
      <AiFillStar data-testid={`test-star-${num}`} className="text-ac_yellow" />
    );
  };

  return (
    <div className="flex">
      {fillStar(avg, 1)}
      {fillStar(avg, 2)}
      {fillStar(avg, 3)}
      {fillStar(avg, 4)}
      {fillStar(avg, 5)}
    </div>
  );
}

export default RatingStar;
