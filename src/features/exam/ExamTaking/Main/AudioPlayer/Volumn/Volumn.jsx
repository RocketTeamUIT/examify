import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import Mute from './Mute';
import Unmute from './Unmute';
import { Bar } from '../../../../components';
import classNames from 'classnames';

function Volumn({ muting, curVolume, setMuting, setClickedVolume, className }) {
  return (
    <div className={classNames('flex-1 flex items-center', className)}>
      {muting ? (
        <Tippy content="Mở âm thanh">
          <Mute handleClick={() => setMuting(false)} />
        </Tippy>
      ) : (
        <Tippy content="Tắt âm thanh">
          <Unmute handleClick={() => setMuting(true)} />
        </Tippy>
      )}
      <Bar
        className="mx-3 min-w-[80px]"
        curValue={curVolume}
        min={0}
        max={1}
        onValueUpdate={(volumn) => {
          setClickedVolume(volumn);
        }}
      />
    </div>
  );
}

export default Volumn;
