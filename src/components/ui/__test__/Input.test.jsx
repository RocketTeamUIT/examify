import Input from '../Input';
import user from '@testing-library/user-event';
import { customRender } from '../../../utils/customRender';
import { convertHexToRGBA } from '../../../utils/formatCurrency';
import { AiOutlineUserAdd } from 'react-icons/ai';
const { render, screen } = require('@testing-library/react');

const CONTENT = 'mytext';

describe('Input', () => {
  test('Render correctly', () => {
    render(<Input value={CONTENT} />);
    const textbox = screen.getByRole('textbox');
    expect(textbox.value).toBe(CONTENT);
  });

  test('Should call onchange prop', async () => {
    user.setup();
    const onChange = jest.fn();
    render(<Input onChange={onChange} value="abc" />);
    const textbox = screen.getByRole('textbox');
    await user.type(textbox, 'xyz');
    expect(onChange).toBeCalledTimes(3);
  });

  test('Should label show correctly', async () => {
    const LABEL = 'MyComplexLabel';
    render(<Input fancyOutlined label={LABEL} />);
    expect(screen.getByText(LABEL)).toBeInTheDocument();
  });

  test('Should label sticky show correctly', async () => {
    user.setup();
    const LABEL = 'MyComplexLabel';
    render(<Input fancyOutlined label={LABEL} />);
    const textbox = screen.getByRole('textbox');
    await user.type(textbox, 'xyz');
    expect(screen.getByText(LABEL)).toHaveStyle({
      top: 0,
    });
  });

  test('Should label sticky hide correctly', async () => {
    user.setup();
    const LABEL = 'MyComplexLabel';
    render(<Input fancyOutlined label={LABEL} />);
    const textbox = screen.getByRole('textbox');
    await user.type(textbox, 'xyz');

    await user.clear(textbox);
    expect(screen.getByText(LABEL)).not.toHaveStyle({
      top: 0,
    });
  });

  test('Should input is large when size = "large"', () => {
    customRender(<Input size="large" />);
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveStyle({
      height: '3rem',
      fontSize: '16px',
    });
  });

  test('Should is disabled large when disabled is specified', () => {
    customRender(<Input disabled />);
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveStyle({
      borderWidth: '1px',
      backgroundColor: convertHexToRGBA('#F2F1F3'),
      borderColor: convertHexToRGBA('#D2D0D5'),
    });
  });

  test('Should left icon shows correctly', () => {
    const leftIcon = <AiOutlineUserAdd data-testid="myicon" />;
    render(<Input leftIcon={leftIcon} />);
    expect(screen.getByTestId('myicon')).toBeInTheDocument();
  });

  test('Should right icon shows correctly', () => {
    const rightIcon = <AiOutlineUserAdd data-testid="myicon" />;
    render(<Input rightIcon={rightIcon} />);
    expect(screen.getByTestId('myicon')).toBeInTheDocument();
  });

  test('Should input show password', async () => {
    user.setup();
    render(<Input type="password" visibilityToggle />);
    const button = screen.getByRole('button');
    const textbox = screen.getByTestId('test-input');
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(textbox.type).toBe('text');
  });
  test('Should input hide password', async () => {
    user.setup();
    render(<Input type="password" visibilityToggle />);
    const button = screen.getByRole('button');
    const textbox = screen.getByTestId('test-input');
    expect(button).toBeInTheDocument();
    await user.click(button);
    expect(textbox.type).toBe('text');
    await user.click(button);
    expect(textbox.type).toBe('password');
  });
});
