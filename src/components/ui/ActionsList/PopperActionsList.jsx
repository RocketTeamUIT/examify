import TippyHeadless from '@tippyjs/react/headless';
import ActionsList from './ActionsList';

function PopperActionsList({
  placement,
  offset = [0, 0],
  children,
  data,
  handleChangeType,
  visible,
  onHide,
  initialState = -1,
}) {
  const renderActionsList = (attrs) => (
    <ActionsList
      initialState={initialState}
      onChangeItem={handleChangeType}
      onSelectItem={onHide}
      data={data}
      tabIndex="-1"
      {...attrs}
    />
  );

  return (
    // Using a wrapper <div> or <span> tag around the reference element solves
    // this by creating a new parentNode context.
    <div>
      {/* Khi nhấn vào dropdown component thì hiện popup => Bọc dropdown component làm children của Tippy */}
      <TippyHeadless
        interactive // Tương tác được với popover, ví dụ: cho click vào
        visible={visible}
        onClickOutside={onHide}
        placement={placement} // Vị trí đối với Children của TippyHeadless
        offset={offset} // Độ dời tính từ placement
        render={renderActionsList} // Khi click vào thì hiện cái gì
      >
        {children}
      </TippyHeadless>
    </div>
  );
}

export default PopperActionsList;
