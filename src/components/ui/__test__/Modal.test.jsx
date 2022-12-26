import { screen } from '@testing-library/react';
import Modal from '../Modal';
import user from '@testing-library/user-event';
import { customRender } from '../../../utils/customRender';

describe('Modal', () => {
  test('Render correctly', () => {
    const modalRoot = global.document.createElement('div');
    modalRoot.setAttribute('id', 'modal-portal');
    global.document.body.appendChild(modalRoot);

    customRender(<Modal isShowing={true} children="This is my text" />);
    expect(screen.getByText('This is my text')).toBeInTheDocument();
  });

  test('Should transparent when hide', () => {
    const modalRoot = global.document.createElement('div');
    modalRoot.setAttribute('id', 'modal-portal');
    global.document.body.appendChild(modalRoot);

    customRender(<Modal isShowing={false} children="This is my text" />);
    expect(screen.getByText('This is my text')).not.toBeVisible();
  });

  test('Should transition duration be 500ms when type="right"', () => {
    const modalRoot = global.document.createElement('div');
    modalRoot.setAttribute('id', 'modal-portal');
    global.document.body.appendChild(modalRoot);

    customRender(<Modal isShowing={true} type="right" />);
    expect(screen.getByTestId('test-wrapper')).toHaveStyle({
      transitionDuration: '500ms',
    });
  });

  test('Should not trigger function when click inside modal', async () => {
    user.setup();
    const cb = jest.fn();
    const modalRoot = global.document.createElement('div');
    modalRoot.setAttribute('id', 'modal-portal');
    global.document.body.appendChild(modalRoot);

    customRender(<Modal hide={cb} isShowing={true} type="right" />);
    const modal = screen.getByTestId('test-modal');
    await user.click(modal);
    expect(cb).not.toBeCalled();
  });
});
