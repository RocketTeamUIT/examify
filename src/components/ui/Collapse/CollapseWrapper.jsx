import classNames from 'classnames';

function CollapseWrapper({ visible, content, children, className }) {
  return (
    <div className={classNames(className)}>
      {children}
      {visible && <div>{content}</div>}
    </div>
  );
}

export default CollapseWrapper;
