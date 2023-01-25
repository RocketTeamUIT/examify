import classnames from 'classnames';

function GroupButtonTabsItem({ id, children, active, first, last, onClick }) {
  return (
    <button
      id={id}
      onClick={onClick}
      className={classnames(
        'flex-shrink-0 px-4 py-2 text-sm bg-white ring-inset ring-1 ring-br_light_gray',

        // active props
        { 'hover:bg-t_light_gray': !Array.prototype.includes(null, false), '!bg-bg_light_gray': active === true },

        // first props
        { 'rounded-l': first === true },

        // last props
        { 'rounded-r': last === true },
      )}
    >
      {children}
    </button>
  );
}
export default GroupButtonTabsItem;
