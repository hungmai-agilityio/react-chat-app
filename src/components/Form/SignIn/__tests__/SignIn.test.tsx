import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import SignIn from '@/components/Form/SignIn';
import { AuthProps } from '@/interfaces';

describe('SignIn Component', () => {
  const onClickMock = jest.fn((e) => e.preventDefault());
  const defaultProps: AuthProps = {
    mailValue: '',
    passwordValue: '',
    onMailChange: onClickMock,
    onPasswordChange: onClickMock,
    onClick: onClickMock,
    message: {
      email: '',
      password: ''
    },
    authMessage: ''
  };

  const renderWithRouter = (ui: React.ReactElement) => {
    return render(ui, { wrapper: MemoryRouter });
  };

  it('renders SignIn component with default empty props and displays message on button click', () => {
    renderWithRouter(<SignIn {...defaultProps} />);

    expect(
      screen.getByText('Sign in to continue to your App')
    ).toBeInTheDocument();
    expect(screen.getByLabelText('Email')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();

    const loginButton = screen.getByText('Login');
    fireEvent.click(loginButton);

    expect(defaultProps.onClick).toHaveBeenCalled();

    defaultProps.message = {
      email: 'Email is required',
      password: 'Password is required'
    };

    renderWithRouter(<SignIn {...defaultProps} />);
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('renders SignIn component with provided values and toggles password visibility on icon click', () => {
    const { container } = renderWithRouter(
      <SignIn
        {...defaultProps}
        mailValue="test@mail.com"
        passwordValue="password123"
      />
    );

    const emailInput = screen.getByDisplayValue('test@mail.com');
    const passwordInput = screen.getByDisplayValue('password123');
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    const svgElement = container.querySelector('svg');
    expect(svgElement).toBeInTheDocument();
    expect(svgElement).toHaveAttribute('data-icon', 'eye-slash');

    fireEvent.click(svgElement!);

    expect(passwordInput).toHaveAttribute('type', 'text');

    fireEvent.click(svgElement!);
    expect(passwordInput).toHaveAttribute('type', 'password');
  });

  it('should render match to snapshot', () => {
    const { container } = renderWithRouter(<SignIn {...defaultProps} />);
    expect(container).toMatchSnapshot();
  });
});
