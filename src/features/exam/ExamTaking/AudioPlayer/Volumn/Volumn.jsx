import Mute from './Mute';
import Unmute from './Unmute';
import Bar from '../../../components/Bar';

function Volumn({ muting, curVolume, setMuting, setClickedVolume }) {
  return (
    <div className="ml-1 flex-1 flex items-center">
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
