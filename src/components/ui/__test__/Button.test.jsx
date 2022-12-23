import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import Button from '../Button';
import { convertHexToRGBA } from '../../../utils/formatCurrency';

const textButton = 'Đăng ký';

describe('Button', () => {
  test('Button render correctly', () => {
    render(<Button>{textButton}</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement).toHaveTextContent(textButton);
  });

  test('Handlers are called', async () => {
    user.setup();
    const handleOnClick = jest.fn();
    render(<Button onClick={handleOnClick}>{textButton}</Button>);
    const buttonElement = screen.getByRole('button');
    await user.click(buttonElement);
    expect(handleOnClick).toBeCalledTimes(1);
  });

  test('User hover', async () => {
    user.setup();
    const handleOnClick = jest.fn();
    render(<Button onClick={handleOnClick}>{textButton}</Button>); // Type: primary
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle({
      backgroundColor: convertHexToRGBA('#2860e1'),
    });
    await user.hover(buttonElement);
    expect(buttonElement).toHaveStyle({
      backgroundColor: convertHexToRGBA('#2860e1e6'),
    });
  });

  describe('Button with default props', () => {
    test('Default bold props', () => {
      render(<Button>{textButton}</Button>);
      const textButtonElement = screen.getByText(textButton);
      expect(textButtonElement).not.toHaveClass('font-normal');
    });

    test('Default type props', () => {
      render(<Button>{textButton}</Button>);
      const buttonElement = screen.getByRole('button');
      const textButtonElement = screen.getByText(textButton);
      expect(buttonElement).toHaveStyle({
        backgroundColor: convertHexToRGBA('#2860E1'),
      });
      expect(textButtonElement).toHaveStyle({
        color: convertHexToRGBA('#FFFFFF'),
      });
    });

    test('Default size props', () => {
      render(<Button>{textButton}</Button>);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('h-11', 'text-md');
    });

    test('Default shape props', () => {
      render(<Button>{textButton}</Button>);
      const buttonElement = screen.getByRole('button');
      expect(buttonElement).toHaveClass('rounded-md', 'px-4');
    });
  });

  test('Button with type = default props', () => {
    render(<Button type="default">{textButton}</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('border-[1px]', 'border-br_light_gray');
  });

  test('Button with bold = true props', () => {
    render(<Button unbold={true}>{textButton}</Button>);
    const textButtonElement = screen.getByText(textButton);
    expect(textButtonElement).toHaveClass('font-normal');
  });

  test('Button with size = large props', () => {
    render(<Button size="large">{textButton}</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveClass('text-lg', 'h-12');
  });

  test('Button with rounded', () => {
    render(<Button rounded={['4px', '4px', '4px', '4px']}>{textButton}</Button>);
    const buttonElement = screen.getByRole('button');
    expect(buttonElement).toHaveStyle({
      borderTopLeftRadius: '4px',
      borderTopRightRadius: '4px',
      borderBottomRightRadius: '4px',
      borderBottomLeftRadius: '4px',
    });
  });

  test('Button with text specific color', () => {
    render(<Button color={'#000000'}>{textButton}</Button>);
    const textButtonElement = screen.getByText(textButton);
    expect(textButtonElement).toHaveStyle({
      color: convertHexToRGBA('#000000'),
    });
  });
});
