import { AiOutlineExclamationCircle } from 'react-icons/ai';
import { memo } from 'react';
import PropTypes from 'prop-types';

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

const Tip = ({ children, color = 'green' }) => {
  // Check validity of color
  const checkColor = COLORS[color] === undefined ? color : COLORS[color];

  return (
    // Container
    <div role="note" className="flex flex-col items-start">
      <div
        className={`py-3 px-4 rounded-lg flex items-center relative overflow-hidden tip-overlay`}
        style={{ '--bg': checkColor }}
      >
        <AiOutlineExclamationCircle
          title="icon"
          className="text-[20px] mr-2 flex-shrink-0"
          style={{ color: checkColor }}
        />
        <span style={{ color: checkColor }}>{children}</span>
      </div>
    </div>
  );
};

Tip.propTypes = {
  children: PropTypes.string.isRequired,
  color: PropTypes.string,
};

export default memo(Tip);
