import React from 'react';

/* Props
- color: tag color. By default, background-opacity is set to 0.2
- icon: specify tag icon
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
  geek: '#1d39c4',
  purple: '#531dab',
};

const Tag = ({ children, color, icon }) => {
  // Check validity of color
  const checkColor = COLORS[color] === undefined ? color : COLORS[color];

  return (
    <div
      className="px-2 py-0.5 rounded-full flex items-center justify-center relative overflow-hidden tag-overlay"
      style={{
        '--bg': checkColor,
        '--opacity': '0.2',
      }}
    >
      <span
        className="text-sm font-bold flex items-center justify-center gap-1"
        style={{
          color: checkColor,
        }}
      >
        {icon}
        {children}
      </span>
    </div>
  );
};

export default Tag;
