import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import SubNav from '../SubNav';
import React from 'react';
import { RouterProvider, MemoryRouter, createMemoryRouter, Outlet } from 'react-router-dom';
import { customRender } from '../../../utils/customRender';
import resizeWindow from '../../../utils/resizeWindow';

const NAV_LIST = [
  { name: 'Nav1', path: '/navfirst' },
  { name: 'Nav2', path: '/navsecond' },
];

const NAV_LIST_SCROLL = [
  { name: 'Nav1', path: '#navfirst' },
  { name: 'Nav2', path: '#navsecond' },
];

const ROUTES = [
  {
    path: '/',
    element: (
      <>
        <SubNav navList={NAV_LIST} />
        <Outlet />
      </>
    ),
    children: [
      {
        path: '/navfirst',
        element: <></>,
      },
      {
        path: '/navsecond',
        element: <></>,
      },
    ],
  },
];

describe('SubNav', () => {
  test('Renders correctly', () => {
    render(<SubNav navList={NAV_LIST} />, { wrapper: MemoryRouter });
    expect(screen.getByTestId('test-nav-0').textContent).toEqual(NAV_LIST[0].name);
    expect(screen.getByTestId('test-mobile-nav-0').textContent).toEqual(NAV_LIST[0].name);
    expect(screen.getByTestId('test-nav-1').textContent).toEqual(NAV_LIST[1].name);
    expect(screen.getByTestId('test-mobile-nav-1').textContent).toEqual(NAV_LIST[1].name);
  });

  test('Check user navigate correctly', async () => {
    const router = createMemoryRouter(ROUTES, {
      initialEntries: ['/'],
    });
    user.setup();
    render(<RouterProvider router={router} />);
    const nav = screen.getByTestId('test-nav-1');
    await user.click(nav);
    expect(router.state.location.pathname).toContain(NAV_LIST[1].path);
  });

  test('Check user navigate on mobile correctly', async () => {
    user.setup();
    const router = createMemoryRouter(ROUTES, {
      initialEntries: ['/'],
    });
    render(<RouterProvider router={router} />);

    resizeWindow(500, 600);
    const button = screen.getByTestId('test-toggle-button');
    await user.click(button);
    const nav = screen.getByTestId('test-mobile-nav-0');
    await user.click(nav);
    expect(router.state.location.pathname).toContain(NAV_LIST[0].path);
  });

  test('Should onclick is called correctly', async () => {
    user.setup();
    const onClick = jest.fn();
    const NAV_LIST_WITH_ONCLICK = NAV_LIST.map((nav) => ({
      ...nav,
      onClick,
    }));
    render(<SubNav navList={NAV_LIST_WITH_ONCLICK} />, { wrapper: MemoryRouter });
    const nav = screen.getByTestId('test-nav-0');
    await user.click(nav);
    expect(onClick).toBeCalled();
  });

  test('Should scroll when click', async () => {
    user.setup();
    window.scrollTo = jest.fn();

    render(
      <MemoryRouter>
        <div id="navfirst"></div>
        <div id="navsecond"></div>

        <SubNav navList={NAV_LIST_SCROLL} scroll />
      </MemoryRouter>,
    );
    const nav = screen.getByTestId('test-scroll-nav-0');
    await user.click(nav);
    expect(window.scrollTo).toBeCalled();
  });

  test('Mobile button work correctly', async () => {
    user.setup();
    customRender(<SubNav navList={NAV_LIST} />, { wrapper: MemoryRouter });
    resizeWindow(500, 600);
    const button = screen.getByTestId('test-toggle-button');
    await user.click(button);
    expect(screen.getByTestId('test-menu')).toHaveStyle({
      display: 'flex',
    });
  });
});
