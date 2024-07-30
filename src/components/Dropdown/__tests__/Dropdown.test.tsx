import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Dropdown, { DropdownItem } from '@/components/Dropdown';
import { faEdit } from '@fortawesome/free-solid-svg-icons';

describe('Dropdown', () => {
  const propsDefault = {
    children: 'Item',
    items: [
      { label: 'Item 1', value: 'value1' },
      { label: 'Item 2', value: 'value2' },
      { label: 'Item 3', value: 'value3' }
    ],
    onSelect: (item: DropdownItem) => console.log(item.label)
  };

  beforeEach(() => {
    jest.fn().mockClear();
  });

  it('render Dropdown default', () => {
    render(<Dropdown {...propsDefault} />);
    const element = screen.getByText(/Item/i);

    fireEvent.click(element);

    const listItemElement1 = screen.getByText(/Item 1/i);
    const listItemElement2 = screen.getByText(/Item 2/i);

    fireEvent.click(listItemElement1);
    fireEvent.click(listItemElement2);

    expect(screen.queryByText(/Item 1/i)).toBeFalsy();
    expect(screen.queryByText(/Item 2/i)).toBeFalsy();
  });

  it('close Dropdown when click outside', () => {
    render(<Dropdown {...propsDefault} />);
    const element = screen.getByText(/Item/i);

    fireEvent.click(element);

    const listItemElement1 = screen.getByText(/Item 1/i);
    const listItemElement2 = screen.getByText(/Item 2/i);

    expect(listItemElement1).toBeInTheDocument();
    expect(listItemElement2).toBeInTheDocument();

    fireEvent.mouseDown(document);

    expect(screen.queryByText(/Item 1/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/Item 2/i)).not.toBeInTheDocument();
  });

  it('render Dropdown with icon', () => {
    const { container } = render(<Dropdown {...propsDefault} icon={faEdit} />);

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
  });

  it('should render match to snapshot', () => {
    const { container } = render(<Dropdown {...propsDefault} />);
    expect(container).toMatchSnapshot();
  });

  it('should render match to snapshot with icon', () => {
    const { container } = render(<Dropdown {...propsDefault} icon={faEdit} />);
    expect(container).toMatchSnapshot();
  });
});
