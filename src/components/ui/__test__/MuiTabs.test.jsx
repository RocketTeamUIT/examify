import MuiTabs from '../MuiTabs';
import user from '@testing-library/user-event';
const { render, screen } = require('@testing-library/react');

const COMPONENT_LIST = [
  {
    label: 'Cài đặt tài khoản',
    data: <div>Label0</div>,
  },
  {
    label: 'Đổi mật khẩu',
    data: <div>Label1</div>,
  },
];

describe('MuiTabs', () => {
  test('Render correctly', () => {
    render(<MuiTabs componentList={COMPONENT_LIST} />);
    expect(screen.getByText('Cài đặt tài khoản')).toBeInTheDocument();
    expect(screen.getByText('Đổi mật khẩu')).toBeInTheDocument();
  });

  test('Should change tab', async () => {
    user.setup();
    render(<MuiTabs componentList={COMPONENT_LIST} />);
    const nav = screen.getByTestId('test-nav-1');
    await user.click(nav);
    expect(screen.queryByText('Label0')).not.toBeInTheDocument();
  });
});
