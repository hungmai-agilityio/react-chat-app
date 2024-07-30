import { fireEvent, render, screen } from '@testing-library/react';
import SignUp from '@/components/Form/SignUp';
import { AuthProps } from '@/interfaces';
import { MemoryRouter } from 'react-router-dom';

describe('SignUp Component', () => {
  const onClickMock = jest.fn((e) => e.preventDefault());
  const defaultProps: AuthProps = {
    nameValue: '',
    mailValue: '',
    passwordValue: '',
    confirmValue: '',
    onNameChange: onClickMock,
    onMailChange: onClickMock,
    onPasswordChange: onClickMock,
    onConfirmChange: onClickMock,
    onClick: onClickMock,
    message: {
      name: '',
      email: '',
      password: '',
      confirm: ''
    },
    authMessage: ''
  };

  const renderWithRouter = (ui: React.ReactElement) => {
    return render(ui, { wrapper: MemoryRouter });
  };

  it('renders SignUp component with default empty props and displays message on button click', () => {
    renderWithRouter(<SignUp {...defaultProps} />);

    expect(screen.getByText('Registration')).toBeInTheDocument();
    expect(screen.getByLabelText('Name')).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
    expect(screen.getByLabelText('Confirm Password')).toBeInTheDocument();

    const registerButton = screen.getByText('Register');
    fireEvent.click(registerButton!);

    expect(defaultProps.onClick).toHaveBeenCalled();

    defaultProps.message = {
      name: 'Name is required',
      email: 'Email is required',
      password: 'Password is required',
      confirm: 'Confirm is required'
    };

    renderWithRouter(<SignUp {...defaultProps} />);
    expect(screen.getByText('Name is required')).toBeInTheDocument();
    expect(screen.getByText('Email is required')).toBeInTheDocument();
    expect(screen.getByText('Password is required')).toBeInTheDocument();
    expect(screen.getByText('Confirm is required')).toBeInTheDocument();
  });

  it('renders SignUp component with provided values and toggles password visibility on icon click', () => {
    const { container } = renderWithRouter(
      <SignUp
        {...defaultProps}
        nameValue="John Doe"
        mailValue="test@mail.com"
        passwordValue="password123"
        confirmValue="password123"
      />
    );

    expect(screen.getByLabelText('Name')).toHaveValue('John Doe');
    expect(screen.getByLabelText('Email')).toHaveValue('test@mail.com');
    expect(screen.getByLabelText('Password')).toHaveValue('password123');
    expect(screen.getByLabelText('Confirm Password')).toHaveValue(
      'password123'
    );

    const passwordInput = screen.getByLabelText('Password');
    expect(passwordInput).toHaveAttribute('type', 'password');

    const confirmInput = screen.getByLabelText('Confirm Password');
    expect(confirmInput).toHaveAttribute('type', 'password');

    const passwordElement = container.querySelector('#password');
    const passwordIcon = passwordElement?.nextElementSibling;
    expect(passwordIcon).toBeInTheDocument();

    fireEvent.click(passwordIcon!);

    expect(passwordInput).toHaveAttribute('type', 'text');
    expect(confirmInput).toHaveAttribute('type', 'password');

    const confirmElement = container.querySelector('#confirm');
    const confirmIcon = confirmElement?.nextElementSibling;
    expect(passwordIcon).toBeInTheDocument();

    fireEvent.click(confirmIcon!);

    expect(passwordInput).toHaveAttribute('type', 'text');
    expect(confirmInput).toHaveAttribute('type', 'text');
  });

  it('should render match to snapshot', () => {
    const { container } = renderWithRouter(<SignUp {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
