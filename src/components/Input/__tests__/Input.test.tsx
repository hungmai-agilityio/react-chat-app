import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';

// FontAwesome
import { faPen } from '@fortawesome/free-solid-svg-icons';

// Constants
import { TYPE } from '@/constants';

// Components
import Input from '@/components/Input';

// Test Data
const propsDefault = {
  label: 'Label',
  value: 'test value',
  htmlFor: 'input-id',
  placeholder: 'Enter text',
  name: 'input-name',
  onChange: jest.fn(),
  onClick: jest.fn(),
  message: '',
  icon: faPen,
  styles: '',
  isDisabled: false
};

// Test Cases
describe('Input', () => {
  it('renders PRIMARY type input', () => {
    render(<Input {...propsDefault} variant={TYPE.PRIMARY} />);

    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('h-11 border border-gray-400 rounded-md');
  });

  it('renders SECOND type textarea', () => {
    render(<Input {...propsDefault} variant={TYPE.SECOND} />);
    const textareaElement = screen.getByDisplayValue(
      'test value'
    ) as HTMLTextAreaElement;

    expect(textareaElement).toBeInTheDocument();
    expect(textareaElement).toHaveClass(
      'h-10 border border-gray-400 focus:h-20 resize-none'
    );
  });

  it('renders TERTIARY type input', () => {
    render(<Input {...propsDefault} variant={TYPE.TERTIARY} />);

    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass(
      'h-10 border-b border-gray-400 text-center'
    );
  });

  it('renders with default type when no type is provided', () => {
    render(<Input {...propsDefault} variant={undefined} />);

    const inputElement = screen.getByDisplayValue('test value');
    expect(inputElement).toBeInTheDocument();
    expect(inputElement).toHaveClass('h-11 border border-gray-400 rounded-md');
  });

  it('shows message when provided', () => {
    render(<Input {...propsDefault} message="This is an error message" />);

    const messageElement = screen.getByText('This is an error message');
    expect(messageElement).toBeInTheDocument();
  });

  it('should render match to snapshot', () => {
    const { container } = render(<Input {...propsDefault} />);
    expect(container).toMatchSnapshot();
  });
});
