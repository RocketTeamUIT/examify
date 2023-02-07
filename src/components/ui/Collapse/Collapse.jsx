import { Button } from '../';
import { useState, useEffect } from 'react';
import { HiChevronRight, HiChevronDown } from 'react-icons/hi2';
import CollapseWrapper from './CollapseWrapper';

function Collapse({ open = false, title = '', content, className, onControl }) {
  const [visible, setVisible] = useState(open);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  useEffect(() => {
    if (!onControl) return;

    // result returned Boolean
    const result = onControl();
    setVisible(result);
  }, [onControl]);

  return (
    <CollapseWrapper visible={visible} content={content} className={className}>
      <Button
        unpdx
        color="#2860E1"
        type="text"
        height={32}
        onClick={visible ? hide : show}
        rightIcon={visible ? <HiChevronDown size={16} /> : <HiChevronRight size={16} />}
      >
        {title}
      </Button>
    </CollapseWrapper>
  );
}

export default Collapse;
