import Button from './Button';
import ActionsList from './ActionsList';

import { HiChevronDown } from 'react-icons/hi';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import TippyHeadless from '@tippyjs/react/headless';
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

const Dropdown = ({ dark, type, context, children, actionsList }) => {
  const [title, setTitle] = useState(children);
  const [visible, setVisible] = useState(false);
  const show = () => setVisible(true);
  const hide = () => setVisible(false);

  const handleChangeType = (newType) => {
    setTitle(newType);
  };

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves
    // this by creating a new parentNode context.
    <div>
      {/* Khi nhấn vào dropdown component thì hiện popup => Bọc dropdown component làm children của Tippy */}
      <TippyHeadless
        interactive // Tương tác được với popover, ví dụ: cho click vào
        visible={visible}
        onClickOutside={hide}
        placement="bottom-start" // Vị trí đối với Children của TippyHeadless
        offset={[0, 4]} // Độ dời tính từ placement
        render={(attrs) => (
          <ActionsList
            onChangeItem={handleChangeType}
            onSelectItem={hide}
            actionsList={actionsList}
            tabIndex="-1"
            {...attrs}
          />
        )} // Khi click vào thì hiện cái gì
      >
        {/* Tái sử dụng Button component */}
        <Button
          onClick={visible ? hide : show}
          unbold={true}
          dark={dark}
          type={type}
          rounded={[]}
          height={32}
          rightIcon={<HiChevronDown />}
          width="100%"
        >
          <span className="font-medium">
            <span>{context ? `${context}:  ` : ''}</span>
            <span
              className={classNames({ 'text-bg_black': context, 'text-bg_light_gray': context && dark })}
              data-testid="test-title"
            >
              {title}
            </span>
          </span>
        </Button>
      </TippyHeadless>
    </div>
  );
};

Dropdown.defaultProps = {
  dark: false,
  type: 'default',
  context: '',
};

Dropdown.propTypes = {
  type: PropTypes.string,
  dark: PropTypes.bool,
  context: PropTypes.string,
  children: PropTypes.string.isRequired,
  actionsList: PropTypes.array,
};

export default Dropdown;
