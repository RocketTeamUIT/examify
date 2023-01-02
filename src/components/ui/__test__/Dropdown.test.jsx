import { screen, render } from '@testing-library/react';
import Dropdown from '../Dropdown';
import user from '@testing-library/user-event';

const textElement = 'Loại khóa học';
const THREE_ITEM = [
  {
    name: 'Tăng dần',
    func: () => {
      console.log('Tăng dần');
    },
  },
  {
    name: 'Giảm dần',
    func: () => {
      console.log('Giảm dần');
    },
  },
  {
    name: 'Theo chữ cái A - Z',
    func: () => {
      console.log('Theo chữ cái A - Z');
    },
  },
];

describe('Dropdown', () => {
  test('Dropdown render correctly', () => {
    render(<Dropdown actionsList={THREE_ITEM}>{textElement}</Dropdown>);
    const dropdownElement = screen.getByRole('button');
    expect(dropdownElement).toBeInTheDocument();
  });

  test('Dropdown with context', () => {
    render(
      <Dropdown context="Xếp theo" actionsList={THREE_ITEM}>
        {textElement}
      </Dropdown>,
    );
    const textDropdown = screen.getByText('Xếp theo:');
    expect(textDropdown).toHaveTextContent('Xếp theo:');
  });

  test('Dropdown show correctly', async () => {
    user.setup();
    render(
      <Dropdown context="Xếp theo" actionsList={THREE_ITEM}>
        {textElement}
      </Dropdown>,
    );

    const button = screen.getByRole('button');
    await user.click(button);
    expect(screen.getByRole('list')).toBeInTheDocument();
  });

  test('Dropdown hide correctly', async () => {
    user.setup();
    render(
      <Dropdown context="Xếp theo" actionsList={THREE_ITEM}>
        {textElement}
      </Dropdown>,
    );

    const button = screen.getByRole('button');
    await user.click(button);
    await user.click(button);

    expect(screen.queryByRole('list')).not.toBeInTheDocument();
  });

  test('Dropdown change type correctly', async () => {
    user.setup();
    render(
      <Dropdown context="Xếp theo" actionsList={THREE_ITEM}>
        {textElement}
      </Dropdown>,
    );

    const button = screen.getByRole('button');
    await user.click(button);
    const item = screen.queryAllByRole('listitem')[0];
    user.click(item);
    expect(screen.getByTestId('test-title').textContent).toEqual(THREE_ITEM[0].name);
  });
});
