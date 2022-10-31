import { AiOutlineExclamationCircle } from 'react-icons/ai';

/* Props
- color: tip color. By default, background-opacity is set to 0.2
*/
const COLORS = {
  magenta: '#c41d7f',
  red: '#cf1322',
  volcano: '#d4380d',
  orange: '#d46b08',
  gold: '#d48806',
  lime: '#7cb305',
  green: '#389e0d',
  cyan: '#08979c',
  blue: '#096dd9',
  geek: '1d39c4',
  purple: '#531dab',
};

const Tip = ({ children, color }) => {
  // Check validity of color
  const checkColor = COLORS[color] === undefined ? color : COLORS[color];

  return (
    <div
      className={`py-3 px-4 rounded-lg flex items-center relative overflow-hidden tip-overlay`}
      style={{ '--bg': checkColor }}
    >
      <AiOutlineExclamationCircle className="text-[20px] mr-2 flex-shrink-0" style={{ color: checkColor }} />
      <span style={{ color: checkColor }}>{children}</span>
    </div>
  );
};

export default Tip;
