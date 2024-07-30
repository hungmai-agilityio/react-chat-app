import { useCallback, useState } from 'react';
import { useNavigate } from 'react-router-dom';

// Font Awesome
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons';

// Constants
import { SIZE, TYPE, URL } from '@/constants';

// Interface
import { AuthProps } from '@/interfaces';

// Components
import Button from '@/components/Button';
import Form from '@/components/Form';
import Input from '@/components/Input';

const SignIn = ({
  mailValue,
  passwordValue,
  onMailChange,
  onPasswordChange,
  onClick,
  message,
  authMessage
}: AuthProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const navigate = useNavigate();

  // Toggle show or hide password
  const toggleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  // Handle move to sign up page
  const handleMoveToSignUp = () => {
    navigate(URL.SIGN_UP);
  };

  return (
    <Form title="Sign in to continue to yourDigital Library">
      <form className="mt-11">
        <Input
          label="Email"
          placeholder="username@mail.com"
          htmlFor="email"
          value={mailValue}
          onChange={onMailChange}
          message={message?.email}
        />
        <Input
          label="Password"
          placeholder="•••••••••••••"
          htmlFor="password"
          value={passwordValue}
          onChange={onPasswordChange}
          icon={showPassword ? faEye : faEyeSlash}
          type={showPassword ? TYPE.TEXT : TYPE.PASSWORD}
          onClick={toggleShowPassword}
          message={message?.password}
        />
        <Button
          name="Login"
          variant={TYPE.PRIMARY}
          onClick={onClick}
          size={SIZE.LARGE}
        />
        {authMessage && (
          <p className="mt-3 text-center text-red-500">{authMessage}</p>
        )}
        <p className="text-sm mt-16">
          New User ?{' '}
          <span
            className="text-dark underline cursor-pointer"
            onClick={handleMoveToSignUp}
          >
            Register Here
          </span>
        </p>
      </form>
    </Form>
  );
};

export default SignIn;
