import Button from './Button';
import { PopperActionsList } from './ActionsList';

import { HiChevronDown } from 'react-icons/hi';
import PropTypes from 'prop-types';
import { useState } from 'react';

/* Props
- type(String): giống button type (option, default value: default)
    - primary
    - default
    - danger
- context(String): một case study đặc biệt của dropdown (option, default value: '')
    - Vd: Xếp theo: A-Z (truyền context="Xếp theo")
    - Xem demo với link localhost:3000/tuan-big-test
- children(String): Chuỗi text trong dropdown (required)
- actionsList(Array): Mảng danh sách các actions (required)
*/

const Dropdown = ({ color, type, context, children, data, initialState = -1 }) => {
  const [title, setTitle] = useState(children);
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const handleChangeType = (newType) => {
    setTitle(newType);
  };

  return (
    <PopperActionsList
      placement="bottom-start"
      offset={[0, 4]}
      visible={visible}
      data={data}
      handleChangeType={handleChangeType}
      onHide={hide}
      initialState={initialState}
    >
      <Button
        justifyBetweenContent
        onClick={visible ? hide : show}
        unbold={true}
        type={type}
        rounded={[]}
        height={32}
        color={color}
        rightIcon={<HiChevronDown />}
        width="100%"
      >
        <span className="font-medium">
          <span>{context ? `${context}:  ` : ''}</span>
          <span className={'text-bg_black dark:text-bg_light_gray'} data-testid="test-title">
            {title}
          </span>
        </span>
      </Button>
    </PopperActionsList>
  );
};

Dropdown.defaultProps = {
  type: 'default',
  context: '',
};

Dropdown.propTypes = {
  type: PropTypes.string,
  context: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionsList: PropTypes.array,
};

export default Dropdown;
