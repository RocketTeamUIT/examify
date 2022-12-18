import { render, screen } from '@testing-library/react';
import Tag from '../Tag';
import { convertHexToRGBA } from '../../../utils/formatCurrency';

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

describe('Tag', () => {
  test('Tag render correctly', () => {
    render(<Tag children="Bình luận" />);
    const tagElement = screen.getByRole('presentation');
    const textTag = screen.getByText('Bình luận');
    expect(tagElement).toBeInTheDocument();
    expect(textTag).toHaveTextContent('Bình luận');
  });

  test('Tag render without color props, default color props is volcano', () => {
    render(<Tag children={'Bình luận'} />);
    const tagElement = screen.getByRole('presentation');
    expect(tagElement).toHaveStyle(`background-color: ${convertHexToRGBA(COLORS['volcano'])}`);
    expect(tagElement).toHaveStyle(`color: ${convertHexToRGBA(COLORS['volcano'])}`);
  });

  test('Tag render with specific color props, which already on list', () => {
    render(<Tag children={'Bình luận'} color="green" />);
    const tagElement = screen.getByRole('presentation');
    expect(tagElement).toHaveStyle(`background-color: ${convertHexToRGBA(COLORS['green'])}`);
    expect(tagElement).toHaveStyle(`color: ${convertHexToRGBA(COLORS['green'])}`);
  });

  test('Tag render with specific color props, which not already on list', () => {
    render(<Tag children={'Bình luận'} color="#000" />);
    const tagElement = screen.getByRole('presentation');
    expect(tagElement).toHaveStyle(`background-color: ${convertHexToRGBA('#000')}`);
    expect(tagElement).toHaveStyle(`color: ${convertHexToRGBA('#000')}`);
  });
});
