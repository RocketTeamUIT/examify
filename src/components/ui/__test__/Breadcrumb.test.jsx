import { render, screen } from '@testing-library/react';
import Breadcrumb, { BreadcrumbItem } from '../Breadcrumb';

const THREE_ITEM = ['IELTS Fundamentals', 'Past tenses 1...', 'Hiện tại'];
const TWO_ITEM = ['IELTS Fundamentals', 'Past tenses 1...'];
const ONE_ITEM = ['IELTS Fundamentals'];
const ZERO_ITEM = [];

describe('Breadcrumb', () => {
  test('Breadcrumb render correctly', () => {
    render(<Breadcrumb hierarchy={THREE_ITEM} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toBeInTheDocument();
  });

  test('Breadcrumb renders a list item', () => {
    render(<Breadcrumb hierarchy={THREE_ITEM} />);
    const listItemElements = screen.getAllByRole('listitem');
    expect(listItemElements).toHaveLength(THREE_ITEM.length);
  });

  test('Breadcrumb renders with zero item', () => {
    render(<Breadcrumb hierarchy={ZERO_ITEM} />);
    const listElement = screen.getByRole('list');
    expect(listElement).toContainHTML('');
  });

  test('Breadcrumb renders with one item', () => {
    render(<Breadcrumb hierarchy={ONE_ITEM} />);
    const listElement = screen.getByRole('list');
    const listItemElements = screen.getAllByRole('listitem');
    expect(listElement).toContainElement(listItemElements[0]);
    expect(listItemElements).toHaveLength(ONE_ITEM.length);
  });

  test('Breadcrumb renders with two item', () => {
    render(<Breadcrumb hierarchy={TWO_ITEM} />);
    const listElement = screen.getByRole('list');
    const listItemElements = screen.getAllByRole('listitem');
    expect(listElement).toContainElement(listItemElements[0]);
    expect(listItemElements).toHaveLength(TWO_ITEM.length);
  });
});

describe('BreadcrumbItem', () => {
  test('BreadcrumbItem render correctly', () => {
    render(<BreadcrumbItem children="IELTS Fundamentals" />);
    const breadcrumbItem = screen.getByRole('listitem');
    const textItem = screen.getByText('IELTS Fundamentals');
    expect(breadcrumbItem).toBeInTheDocument();
    expect(textItem).toHaveTextContent('IELTS Fundamentals');
  });

  test('BreadcrumbItem check style last item', () => {
    render(<BreadcrumbItem children="IELTS Fundamentals" isCurrent={true} />);
    const breadcrumbItem = screen.getByRole('listitem');
    const textItem = screen.getByText('IELTS Fundamentals');
    expect(breadcrumbItem).toHaveClass('bg-br_gray');
    expect(breadcrumbItem).toHaveStyle({ backgroundColor: 'bg-br_gray' });
    expect(textItem).toHaveClass('text-t_gray');
    expect(textItem).toHaveStyle({ color: 'text-t_gray' });
  });

  test('BreadcrumbItem check style not last item', () => {
    render(<BreadcrumbItem children="IELTS Fundamentals" isCurrent={false} />);
    const breadcrumbItem = screen.getByRole('listitem');
    const textItem = screen.getByText('IELTS Fundamentals');
    expect(breadcrumbItem).toHaveClass('bg-transparent');
    expect(breadcrumbItem).toHaveStyle({ backgroundColor: 'bg-transparent' });
    expect(textItem).toHaveClass('text-t_dark');
    expect(textItem).toHaveStyle({ color: 'text-t_dark' });
  });
});
