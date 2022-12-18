import { render, screen } from '@testing-library/react';
import ActionsList, { ActionItem } from '../ActionsList';

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
const TWO_ITEM = [
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
];
const ONE_ITEM = [
  {
    name: 'Tăng dần',
    func: () => {
      console.log('Tăng dần');
    },
  },
];
const ZERO_ITEM = [];

describe('ActionList', () => {
  test('ActionsList render correctly', () => {
    render(<ActionsList actionsList={THREE_ITEM} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('ActionsList render a list item', () => {
    render(<ActionsList actionsList={THREE_ITEM} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(THREE_ITEM.length);
  });

  test('ActionsList render with zero item', () => {
    render(<ActionsList actionsList={ZERO_ITEM} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toContainHTML('');
  });

  test('ActionsList render with one item', () => {
    render(<ActionsList actionsList={ONE_ITEM} />);
    const listElement = screen.getByRole('list');
    const listItemElements = screen.getAllByRole('listitem');
    expect(listElement).toContainElement(listItemElements[0]);
    expect(listItemElements).toHaveLength(ONE_ITEM.length);
  });

  test('ActionsList render with two item', () => {
    render(<ActionsList actionsList={TWO_ITEM} />);
    const listElement = screen.getByRole('list');
    const listItemElements = screen.getAllByRole('listitem');
    expect(listElement).toContainElement(listItemElements[0]);
    expect(listItemElements).toHaveLength(TWO_ITEM.length);
  });
});

describe('ActionItem', () => {
  test('ActionItem render correctly', () => {
    render(<ActionItem index={0} children={ONE_ITEM[0].name} onAction={ONE_ITEM[0].func} onClick={() => {}} />);
    const actionItem = screen.getByRole('listitem');
    expect(actionItem).toBeInTheDocument();
    expect(actionItem).toHaveTextContent(ONE_ITEM[0].name);
  });

  test('ActionItem render with check icon', () => {
    render(
      <ActionItem index={0} check={false} children={ONE_ITEM[0].name} onAction={ONE_ITEM[0].func} onClick={() => {}} />,
    );
    const checkIcon = screen.queryByTitle('icon');
    expect(checkIcon).not.toBeInTheDocument();
  });

  test('ActionItem render without check icon', () => {
    render(
      <ActionItem index={0} check={true} children={ONE_ITEM[0].name} onAction={ONE_ITEM[0].func} onClick={() => {}} />,
    );
    const checkIcon = screen.queryByTitle('icon');
    expect(checkIcon).toBeInTheDocument();
  });
});
