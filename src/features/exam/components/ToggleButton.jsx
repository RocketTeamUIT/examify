import classNames from 'classnames';
import { useState } from 'react';

function ToggleButton({ active: activeProps = true }) {
  const [active, setActive] = useState(activeProps);

  return (
    <button
      className={classNames('h-6 w-11 bg-br_light_gray rounded-full relative', {
        '!bg-primary': active,
      })}
      onClick={() => setActive(!active)}
    >
      <div
        className={classNames(
          'h-4 w-4 rounded-full bg-white absolute transition top-1 left-1',
          active && 'translate-x-5',
        )}
      />
    </button>
  );
}

export default ToggleButton;
