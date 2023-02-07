import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';
import { HiCog8Tooth, HiOutlineCog8Tooth } from 'react-icons/hi2';
import useHoverCondition from 'hooks/useHoverCondition';
import classNames from 'classnames';
import { useRef, useState } from 'react';
import { PopperActionsList } from 'components/ui/ActionsList';

function Setting({ className, onChangeSpeed = () => {}, src }) {
  const { isHovering, handleHover } = useHoverCondition();
  const [visible, setVisible] = useState(false);
  const downloadRef = useRef();
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <PopperActionsList
      placement="bottom-end"
      offset={[0, 4]}
      initialState={0}
      onHide={hide}
      visible={visible}
      data={{
        type: 'menu',
        actionsList: [
          {
            title: 'Tốc độ',
            action: () => {},
            type: 'active',
            actionsList: [
              {
                title: '1x',
                action: () => {
                  onChangeSpeed(1);
                },
              },
              {
                title: '1.25x',
                action: () => {
                  onChangeSpeed(1.25);
                },
              },
              {
                title: '1.5x',
                action: () => {
                  onChangeSpeed(1.5);
                },
              },
              {
                title: '1.75x',
                action: () => {
                  onChangeSpeed(1.75);
                },
              },
              {
                title: '2x',
                action: () => {
                  onChangeSpeed(2);
                },
              },
              {
                title: '0.75x',
                action: () => {
                  onChangeSpeed(0.75);
                },
              },
            ],
          },
          {
            title: (
              <>
                <a
                  ref={downloadRef}
                  href={src}
                  download
                  rel="noopener noreferrer"
                  target="_blank"
                  style={{ display: 'none' }}
                >
                  Download
                </a>
                Download
              </>
            ),
            action: () => {
              downloadRef.current.click();
            },
          },
        ],
      }}
    >
      <Tippy content="Tùy chọn">
        <button
          onMouseOver={handleHover.handleMouseOver}
          onMouseOut={handleHover.handleMouseOut}
          onClick={visible ? hide : show}
          className={classNames(
            'flex-shrink-0 w-8 h-8 flex items-center justify-center hover:bg-ac_yellow rounded',
            className,
          )}
        >
          {isHovering ? <HiCog8Tooth size={24} enableBackground="true" /> : <HiOutlineCog8Tooth size={24} />}
        </button>
      </Tippy>
    </PopperActionsList>
  );
}

export default Setting;
