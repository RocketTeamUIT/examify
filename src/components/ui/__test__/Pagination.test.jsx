import { render, screen } from '@testing-library/react';
import Pagination from '../Pagination';
import { convertHexToRGBA } from '../../../utils/formatCurrency';
import user from '@testing-library/user-event';

const LENGTH = 10;

describe('Pagination', () => {
  test('Showing page correctly', () => {
    render(<Pagination selected={1} length={LENGTH} />);
    expect(screen.getByTestId('button-1')).toHaveStyle({
      backgroundColor: convertHexToRGBA('#0E46C7'),
    });
    expect(screen.queryByTestId('button-9')).not.toHaveStyle({
      display: 'none',
    });
  });

  test('Moving next page correctly', async () => {
    user.setup();
    let selected = 1;
    const setSelected = (value) => {
      selected = value;
    };

    render(<Pagination selected={selected} setSelected={setSelected} length={LENGTH} />);
    const moveNextBtn = screen.getByTestId('move-next');
    await user.click(moveNextBtn);
    expect(screen.getByTestId('button-2')).toHaveStyle({
      backgroundColor: convertHexToRGBA('#0E46C7'),
    });
  });

  test('Moving prev page correctly', async () => {
    user.setup();
    let selected = 9;
    const setSelected = (value) => {
      selected = value;
    };

    render(<Pagination selected={selected} setSelected={setSelected} length={LENGTH} />);
    const movePrevBtn = screen.getByTestId('move-prev');
    await user.click(movePrevBtn);
    expect(screen.getByTestId('button-8')).toHaveStyle({
      backgroundColor: convertHexToRGBA('#0E46C7'),
    });
  });

  test('Moving to very first page correctly', async () => {
    user.setup();
    let selected = 9;
    const setSelected = (value) => {
      selected = value;
    };

    render(<Pagination selected={selected} setSelected={setSelected} length={LENGTH} />);
    const veryFirstBtn = screen.getByTestId('very-first');
    await user.click(veryFirstBtn);
    expect(screen.getByTestId('button-1')).toHaveStyle({
      backgroundColor: convertHexToRGBA('#0E46C7'),
    });
  });

  test('Moving to very end page correctly', async () => {
    user.setup();
    let selected = 1;
    const setSelected = (value) => {
      selected = value;
    };

    render(<Pagination selected={selected} setSelected={setSelected} length={LENGTH} />);
    const veryEndBtn = screen.getByTestId('very-end');
    await user.click(veryEndBtn);
    expect(screen.getByTestId('button-10')).toHaveStyle({
      backgroundColor: convertHexToRGBA('#0E46C7'),
    });
  });

  test('Moving to page correctly', async () => {
    user.setup();
    let selected = 1;
    const setSelected = (value) => {
      selected = value;
    };

    render(<Pagination selected={selected} setSelected={setSelected} length={LENGTH} />);
    const button4 = screen.getByTestId('button-4');
    await user.click(button4);
    expect(screen.getByTestId('button-4')).toHaveStyle({
      backgroundColor: convertHexToRGBA('#0E46C7'),
    });
  });

  test('When length <= 5', () => {
    render(<Pagination length={5} />);
    expect(screen.getByTestId('button-1')).toBeVisible();
    expect(screen.getByTestId('button-2')).toBeVisible();
    expect(screen.getByTestId('button-3')).toBeVisible();
    expect(screen.getByTestId('button-4')).toBeVisible();
    expect(screen.getByTestId('button-5')).toBeVisible();
  });

  test('Render nothing if length = 0', () => {
    render(<Pagination length={0} />);
    expect(screen.queryByTestId('button-1')).not.toBeInTheDocument();
  });
});
