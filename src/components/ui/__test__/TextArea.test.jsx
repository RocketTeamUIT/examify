import TextArea from '../TextArea';
import user from '@testing-library/user-event';
import { customRender } from '../../../utils/customRender';
import { convertHexToRGBA } from '../../../utils/formatCurrency';
const { render, screen } = require('@testing-library/react');

const CONTENT = 'mytext';

describe('TextArea', () => {
  test('Render correctly', () => {
    render(<TextArea value={CONTENT} />);
    const textbox = screen.getByRole('textbox');
    expect(textbox.value).toBe(CONTENT);
  });

  test('Should call onchange prop', async () => {
    user.setup();
    const onChange = jest.fn();
    render(<TextArea onChange={onChange} value="abc" />);
    const textbox = screen.getByRole('textbox');
    await user.type(textbox, 'xyz');
    expect(onChange).toBeCalledTimes(3);
  });

  test('Should label show correctly', async () => {
    const LABEL = 'MyComplexLabel';
    render(<TextArea fancyOutlined label={LABEL} />);
    expect(screen.getByText(LABEL)).toBeInTheDocument();
  });

  test('Should label sticky show correctly', async () => {
    user.setup();
    const LABEL = 'MyComplexLabel';
    render(<TextArea fancyOutlined label={LABEL} />);
    const textbox = screen.getByRole('textbox');
    await user.type(textbox, 'xyz');
    expect(screen.getByText(LABEL)).toHaveStyle({
      top: 0,
    });
  });

  test('Should label sticky hide correctly', async () => {
    user.setup();
    const LABEL = 'MyComplexLabel';
    render(<TextArea fancyOutlined label={LABEL} />);
    const textbox = screen.getByRole('textbox');
    await user.type(textbox, 'xyz');

    await user.clear(textbox);
    expect(screen.getByText(LABEL)).not.toHaveStyle({
      top: 0,
    });
  });

  test('Should is disabled large when disabled is specified', () => {
    customRender(<TextArea disabled />);
    const wrapper = screen.getByTestId('wrapper');
    expect(wrapper).toHaveStyle({
      borderWidth: '1px',
      backgroundColor: convertHexToRGBA('#F2F1F3'),
      borderColor: convertHexToRGBA('#D2D0D5'),
    });
  });
});
