import { render, screen } from '@testing-library/react';
import Tip from '../Tip';
import { convertHexToRGBA } from '../../../utils/formatCurrency';

const textTip = 'Chú ý: Tích lũy cho mình thật nhiều điểm số để mở khóa các khóa học .';

const COLORS = {
  magenta: '#c41d7f',
  red: '#cf1322',
  volcano: '#d4380d',
  orange: '#d46b08',
  gold: '#d48806',
  lime: '#7cb305',
  green: '#389e0d',
  cyan: '#08979c',
  blue: '#096dd9',
  geek: '1d39c4',
  purple: '#531dab',
};

describe('Tip', () => {
  test('Tip render correctly', () => {
    render(<Tip children={textTip} />);
    const tipElement = screen.getByRole('note');
    const textTipElement = screen.getByText(textTip);
    expect(tipElement).toBeInTheDocument();
    expect(textTipElement).toHaveTextContent(textTip);
  });

  test('Tip render without color props, default color props is green', () => {
    render(<Tip children={textTip} />);
    const textTipElement = screen.getByText(textTip);
    const iconElement = screen.getByTitle('icon');
    expect(textTipElement).toHaveStyle(`background-color: ${convertHexToRGBA(COLORS['green'])}`);
    expect(iconElement).toHaveStyle(`color: ${convertHexToRGBA(COLORS['green'])}`);
  });

  test('Tip render with specific color props, which already on list', () => {
    render(<Tip children={textTip} color="magenta" />);
    const textTipElement = screen.getByText(textTip);
    const iconElement = screen.getByTitle('icon');
    expect(textTipElement).toHaveStyle(`background-color: ${convertHexToRGBA(COLORS['magenta'])}`);
    expect(iconElement).toHaveStyle(`color: ${convertHexToRGBA(COLORS['magenta'])}`);
  });

  test('Tip render with specific color props, which not already on list', () => {
    render(<Tip children={textTip} color="fff" />);
    const textTipElement = screen.getByText(textTip);
    const iconElement = screen.getByTitle('icon');
    expect(textTipElement).toHaveStyle(`background-color: ${convertHexToRGBA('#fff')}`);
    expect(iconElement).toHaveStyle(`color: ${convertHexToRGBA('#fff')}`);
  });
});
