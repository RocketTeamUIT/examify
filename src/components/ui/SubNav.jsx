// This Navbar is placehoder component:

import { useRef, useState } from 'react';
import { BiMenu } from 'react-icons/bi';
import { memo } from 'react';
import Container from '../../layouts/components/Container';
import { Link } from 'react-router-dom';
import useClickOutside from '../../hooks/useClickOutside';
import classNames from 'classnames';
import { useEffect } from 'react';

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
function SubNav({ navList, scroll, noShadow, initialValue }) {
  const [isShowNav, setShowNav] = useState(false);
  const [curr, setCurr] = useState(0);
  const ref = useRef();
  const triggerRef = useRef();

  useEffect(() => {
    setCurr(initialValue || 0);
  }, [initialValue]);

  useClickOutside(ref, triggerRef, () => {
    setShowNav(false);
  });

  useEffect(() => {});

  const handleClick = (_, nav, index) => {
    nav.onClick && nav.onClick();
    setCurr(index);
    if (scroll) {
      window.scrollTo({
        top: document.querySelector(nav.path).offsetTop - 130,
      });
    }
  };

  return (
    <Container className={classNames('relative', !noShadow && 'shadow-sd_primary')} overflowVisible>
      <div className="h-[40px] md:h-[60px]">
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
                className={classNames(curr === index && 'text-primary', '-mx-2 px-2 py-2')}
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

        <div className="hidden md:flex h-full gap-5 items-center sticky top-0 left-0 right-0">
          {(navList || []).map((nav, index) =>
            scroll ? (
              <button
                className={classNames(
                  curr === index &&
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
                  curr === index &&
                    'h-full flex items-center relative before:absolute before:bottom-0 before:w-full before:h-[6px] before:rounded-sm before:bg-primary',
                )}
                to={nav.path ?? '#'}
                onClick={(e) => handleClick(e, nav, index)}
                key={index}
                data-testid={`test-nav-${index}`}
              >
                {nav.name}
              </Link>
            ),
          )}
        </div>
      </div>
    </Container>
  );
}

export default memo(SubNav);
