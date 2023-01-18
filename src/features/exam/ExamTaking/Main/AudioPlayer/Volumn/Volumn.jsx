import Mute from './Mute';
import Unmute from './Unmute';
import { Bar } from '../../../../components';
import classNames from 'classnames';

function Volumn({ muting, curVolume, setMuting, setClickedVolume, className }) {
  return (
    <div className={classNames('flex-1 flex items-center', className)}>
      {muting ? <Mute handleClick={() => setMuting(false)} /> : <Unmute handleClick={() => setMuting(true)} />}
      <Bar
        className="mx-3"
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
