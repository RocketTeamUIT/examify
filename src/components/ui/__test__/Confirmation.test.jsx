import { render, screen } from '@testing-library/react';
import Confirmation from '../Confirmation';
import user from '@testing-library/user-event';

describe('Confirmation', () => {
  test('Render correctly', () => {
    render(<Confirmation showing={true} />);
    expect(screen.getByTestId('test-wrapper')).toBeVisible();
  });

  test('Should trigger hide when click outside', () => {
    const hide = jest.fn();
    render(<Confirmation showing={true} hide={hide} />);
    const event = new Event('click');
    document.dispatchEvent(event);
    expect(hide).toBeCalled();
  });

  test('Should trigger onCancel and hide when cancel', async () => {
    user.setup();
    const onCancel = jest.fn();
    const hide = jest.fn();
    render(<Confirmation showing={true} hide={hide} onCancel={onCancel} />);
    await user.click(screen.getByTestId('test-cancel'));
    expect(onCancel).toBeCalled();
    expect(hide).toBeCalled();
  });

  test('Should trigger onConfirm and hide when cancel', async () => {
    user.setup();
    const onConfirm = jest.fn();
    const hide = jest.fn();
    render(<Confirmation showing={true} hide={hide} onConfirm={onConfirm} />);
    await user.click(screen.getByTestId('test-ok'));
    expect(onConfirm).toBeCalled();
    expect(hide).toBeCalled();
  });
});
