import RatingStar from '../RatingStar';
import { convertHexToRGBA } from '../../../utils/formatCurrency';
const { render, screen } = require('@testing-library/react');

describe('Rating', () => {
  test('Render correctly', () => {
    render(<RatingStar avg={3.5} />);
    expect(screen.getByTestId('test-star-1')).toHaveStyle({
      color: convertHexToRGBA('#F9E492'),
    });
    expect(screen.getByTestId('test-star-2')).toHaveStyle({
      color: convertHexToRGBA('#F9E492'),
    });
    expect(screen.getByTestId('test-star-3')).toHaveStyle({
      color: convertHexToRGBA('#F9E492'),
    });
    expect(screen.getByTestId('test-star-4')).toHaveStyle({
      color: convertHexToRGBA('#F9E492'),
    });
    expect(screen.getByTestId('test-star-5')).toHaveStyle({
      color: convertHexToRGBA('#D2D0D5'),
    });
  });
});
