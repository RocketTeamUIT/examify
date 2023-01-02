import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
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

  test('ActionList trigger onSelectItem', async () => {
    user.setup();
    const onSelectItem = jest.fn();
    render(<ActionsList actionsList={TWO_ITEM} onSelectItem={onSelectItem} />);

    const item = screen.getAllByRole('listitem')[0];
    await user.click(item);
    expect(onSelectItem).toBeCalledTimes(1);
  });

  test("ActionList trigger item's function", async () => {
    user.setup();
    const TWO_ITEM_DES = TWO_ITEM.map((item) => ({
      ...item,
      func: jest.fn(),
    }));
    render(<ActionsList actionsList={TWO_ITEM} />);

    const item = screen.getAllByRole('listitem')[0];
    await user.click(item);
    expect(TWO_ITEM_DES[0].func).toBeCalledTimes(1);
  });

  test('ActionList trigger handleChangeType', async () => {
    user.setup();
    const onChangeItem = jest.fn();
    render(<ActionsList actionsList={TWO_ITEM} onChangeType={onChangeItem} />);

    const item = screen.getAllByRole('listitem')[0];
    await user.click(item);
    expect(onChangeItem).toBeCalledTimes(1);
  });
});

describe('ActionItem', () => {
  test('ActionItem render correctly', () => {
    const mockFunction = jest.fn();

    render(<ActionItem children={ONE_ITEM[0].name} onClick={mockFunction} />);
    const actionItem = screen.getByRole('listitem');
    expect(actionItem).toBeInTheDocument();
    expect(actionItem).toHaveTextContent(ONE_ITEM[0].name);
  });

  test('Handlers are called', async () => {
    user.setup();
    const handleClickItemHandler = jest.fn(); // Mock fn which passed from parent component
    render(<ActionItem children={ONE_ITEM[0].name} onClick={handleClickItemHandler} />);
    const actionItem = screen.getByRole('listitem');
    await user.click(actionItem);
    expect(handleClickItemHandler).toHaveBeenCalledTimes(1);
  });

  test('ActionItem render with check icon', () => {
    const mockFunction = jest.fn();
    render(<ActionItem isActive={true} children={ONE_ITEM[0].name} onClick={mockFunction} />);
    const checkIcon = screen.queryByTitle('icon');
    expect(checkIcon).toBeInTheDocument();
  });

  test('ActionItem render without check icon', () => {
    const mockFunction = jest.fn();
    render(<ActionItem isActive={false} children={ONE_ITEM[0].name} onClick={mockFunction} />);
    const checkIcon = screen.queryByTitle('icon');
    expect(checkIcon).not.toBeInTheDocument();
  });
});
