import React from 'react';
import './style.css';

function ProgressBar({ score, type }) {
  return (
    // Skill bar
    <div className="h-[6px] w-full rounded-md bg-[rgba(0,0,0,0.1)]">
      {/* Skill per */}
      {type === 'listening' && (
        <span className="skill-per listening" style={{ width: `${(score * 100) / 450}%` }}>
          <span className="tooltip">{score}</span>
        </span>
      )}
      {type === 'reading' && (
        <span className="skill-per reading" style={{ width: `${(score * 100) / 450}%` }}>
          <span className="tooltip">{score}</span>
        </span>
      )}
    </div>
  );
}

export default ProgressBar;
