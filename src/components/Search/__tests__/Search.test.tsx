import { fireEvent, render, screen } from '@testing-library/react';

// FontAwesome
import { faSearch } from '@fortawesome/free-solid-svg-icons';

// Components
import Search from '@/components/Search';

describe('Search', () => {
  const propsDefault = {
    value: 'value',
    onChange: jest.fn()
  };

  it('render with props default', () => {
    render(<Search {...propsDefault} />);

    const element = screen.getByPlaceholderText('Search');

    expect(element).toBeInTheDocument();
  });

  it('renders with faSearch icon', () => {
    const { container } = render(<Search {...propsDefault} icon={faSearch} />);

    const iconElement = container.querySelector('svg');
    expect(iconElement).toBeInTheDocument();
    expect(iconElement).toHaveClass('fa-magnifying-glass');
  });

  it('calls onSearch when input value changes', () => {
    render(<Search {...propsDefault} />);

    const inputElement = screen.getByPlaceholderText('Search');

    fireEvent.change(inputElement, { target: { value: 'new Value' } });

    expect(propsDefault.onChange).toBeCalledTimes(1);
  });

  it('should render match to snapshot default', () => {
    const { container } = render(<Search {...propsDefault} />);
    expect(container).toMatchSnapshot();
  });

  it('should render match to snapshot with icon', () => {
    const { container } = render(<Search {...propsDefault} icon={faSearch} />);
    expect(container).toMatchSnapshot();
  });
});
