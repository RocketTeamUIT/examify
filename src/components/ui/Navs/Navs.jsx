import { useRef, useState, memo } from 'react';
import useClickOutside from '../../../hooks/useClickOutside';
import useCurrentPage from './useCurrentPage';
import { Link } from 'react-router-dom';
import { BiMenu } from 'react-icons/bi';
import classNames from 'classnames';

/* HOW TO USE
  - scroll: specify if this scrolls instead of navigating
  - navList: path specify the scroll element id, or the path to navigate to
  eg1: scroll
    scroll = true
    navList = [
      {name: 'abc', path='#scroll-id'}
    ]
  eg2: navigate
    scroll = false
    navList = [
      {name: 'abc', path='/course'}
    ]
*/
function Navs({ navList, scroll, noShadow }) {
  const [isShowNav, setShowNav] = useState(false);
  const [currentPage, updateCurrentPage] = useCurrentPage(navList);
  const ref = useRef();
  const triggerRef = useRef();

  useClickOutside(ref, triggerRef, () => {
    setShowNav(false);
  });

  const handleClick = (_, nav, index) => {
    nav.onClick && nav.onClick();
    updateCurrentPage(index);
    if (scroll) {
      window.scrollTo({
        top: document.querySelector(nav.path).offsetTop - 130,
      });
    }
  };

  return (
    <div className={classNames('relative', !noShadow && 'shadow-sd_primary')} overflowvisible="true">
      <div className="h-[40px] md:h-[60px]">
        {/* Mobile */}
        <div className="relative md:hidden flex items-center h-full">
          <div ref={triggerRef} className="cursor-pointer">
            <BiMenu className="text-[20px]" onClick={() => setShowNav(!isShowNav)} data-testid="test-toggle-button" />
          </div>
          <div
            ref={ref}
            className={classNames(
              'flex-col absolute bg-white text-body-sm px-4 py-2 z-10 left-0 top-8 rounded-md min-w-[200px]',
              isShowNav ? 'flex' : 'hidden',
              !noShadow ? 'shadow-sd_primary' : 'lg:shadow-none shadow-sd_primary',
            )}
            data-testid="test-menu"
          >
            {(navList || []).map((nav, index) => (
              <Link
                className={classNames(currentPage === index && 'text-primary', '-mx-2 px-2 py-2')}
                to={nav.path ?? '#'}
                onClick={(e) => handleClick(e, nav, index)}
                key={index}
                data-testid={`test-mobile-nav-${index}`}
              >
                {nav.name}
              </Link>
            ))}
          </div>
        </div>

        {/* > Mobile */}
        <div className="hidden md:flex h-full gap-5 items-center sticky top-0 left-0 right-0">
          {(navList || []).map((nav, index) =>
            scroll ? (
              <button
                className={classNames(
                  currentPage === index &&
                    'h-full flex items-center relative before:absolute before:bottom-0 before:w-full before:h-[6px] before:rounded-sm before:bg-primary',
                )}
                onClick={(e) => handleClick(e, nav, index)}
                key={index}
                data-testid={`test-scroll-nav-${index}`}
              >
                {nav.name}
              </button>
            ) : (
              <Link
                className={classNames(
                  currentPage === index &&
                    'h-full flex items-center relative before:absolute before:bottom-0 before:w-full before:h-[6px] before:rounded-sm before:bg-primary',
                )}
                to={nav.path ?? '#'}
                onClick={() => updateCurrentPage(index)}
                key={index}
                data-testid={`test-nav-${index}`}
              >
                {nav.name}
              </Link>
            ),
          )}
        </div>
      </div>
    </div>
  );
}

export default memo(Navs);
