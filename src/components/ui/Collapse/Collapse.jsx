import { Button } from '../';
import { useState } from 'react';
import { HiChevronRight, HiChevronDown } from 'react-icons/hi2';
import CollapseWrapper from './CollapseWrapper';

function Collapse({ open = false, content, className }) {
  const [visible, setVisible] = useState(open);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  return (
    <CollapseWrapper
      visible={visible}
      content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum vitae consectetur numquam ullam odio. Aliquid, facilis inventore ut soluta iusto quo ipsam nostrum? Totam rerum recusandae aperiam atque ad porro."
      className={className}
    >
      <Button
        unpdx
        color="#2860E1"
        type="text"
        height={32}
        onClick={visible ? hide : show}
        rightIcon={visible ? <HiChevronDown size={16} /> : <HiChevronRight size={16} />}
      >
        Collapse block
      </Button>
    </CollapseWrapper>
  );
}

export default Collapse;
