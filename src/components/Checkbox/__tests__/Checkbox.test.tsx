import { fireEvent, render, screen } from '@testing-library/react';

// Components
import Checkbox from '@/components/Checkbox';

describe('Checkbox', () => {
  const propsDefault = {
    id: '701796f0-0253-11ef-804b-d90ac4375227',
    children: 'John',
    isChecked: false,
    onChange: jest.fn()
  };

  beforeEach(() => {
    jest.fn().mockClear();
  });

  it('render Checkbox when unchecked', () => {
    render(<Checkbox {...propsDefault} />);

    const element = screen.getByText(/John/);

    expect(element).toBeInTheDocument();
  });

  it('should call onChange event when checkbox is clicked', () => {
    render(<Checkbox {...propsDefault} />);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);

    expect(propsDefault.onChange).toHaveBeenCalledTimes(1);
    expect(propsDefault.onChange).toHaveBeenCalledWith(
      '701796f0-0253-11ef-804b-d90ac4375227'
    );
  });

  it('should be render match to snapshot when unchecked', () => {
    const { container } = render(<Checkbox {...propsDefault} />);

    expect(container).toMatchSnapshot();
  });

  it('should be render match to snapshot when checked', () => {
    const { container } = render(
      <Checkbox {...propsDefault} isChecked={true} />
    );

    expect(container).toMatchSnapshot();
  });
});
