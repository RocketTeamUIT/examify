import { render, screen, waitFor } from '@testing-library/react';
import user from '@testing-library/user-event';
import AutoComplete from '../AutoComplete';

const list = (
  <ul>
    <li>Option 1</li>
    <li>Option 2</li>
    <li>Option 3</li>
  </ul>
);

describe('AutoComplete', () => {
  test('Autocomplete renders correctly', () => {
    const onChange = jest.fn();
    render(
      <AutoComplete value="1" onChange={onChange}>
        {list}
      </AutoComplete>,
    );
    const element = screen.getByRole('list');
    expect(element).toBeInTheDocument();
  });

  test('Popup element', async () => {
    user.setup();
    const onChange = jest.fn();
    render(
      <AutoComplete value="1" onChange={onChange}>
        {list}
      </AutoComplete>,
    );
    const element = screen.getByRole('textbox');

    element.focus();
    await user.click(element);
    expect(screen.queryByText('Option 1')).toBeVisible();
    expect(screen.queryByText('Option 2')).toBeVisible();
    expect(screen.queryByText('Option 3')).toBeVisible();
  });

  test('Hide popup element', async () => {
    user.setup();
    const onChange = jest.fn();
    render(
      <AutoComplete value="1" onChange={onChange}>
        {list}
      </AutoComplete>,
    );
    const element = screen.getByRole('textbox');
    const animatedDiv = screen.getByTestId('list');

    expect(animatedDiv).toHaveStyle({ opacity: 0 });

    element.focus();
    await user.click(element);

    const event = new Event('mousedown');
    document.dispatchEvent(event);
    await waitFor(() => expect(screen.queryByText('Option 1')).not.toBeVisible());
    await waitFor(() => expect(screen.queryByText('Option 2')).not.toBeVisible());
    await waitFor(() => expect(screen.queryByText('Option 3')).not.toBeVisible());
  });
});
