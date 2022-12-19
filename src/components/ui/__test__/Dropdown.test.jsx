import { screen, render } from '@testing-library/react';
import Dropdown from '../Dropdown';

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
});
