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

const SignUp = ({
  nameValue,
  mailValue,
  passwordValue,
  confirmValue,
  onNameChange,
  onMailChange,
  onPasswordChange,
  onConfirmChange,
  onClick,
  message,
  authMessage,
  isDisabled
}: AuthProps) => {
  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const navigate = useNavigate();

  const toggleShowPassword = useCallback(() => {
    setShowPassword(!showPassword);
  }, [showPassword]);

  const toggleShowConfirmPassword = useCallback(() => {
    setShowConfirmPassword(!showConfirmPassword);
  }, [showConfirmPassword]);

  const handleMoveToSignIn = () => {
    navigate(URL.SIGN_IN);
  };

  return (
    <Form title="Registration">
      <form className="mt-11">
        <Input
          label="Name"
          placeholder="Username"
          htmlFor="name"
          value={nameValue}
          onChange={onNameChange!}
          message={message?.name}
        />
        <Input
          label="Email"
          placeholder="username@mail.com"
          htmlFor="email"
          value={mailValue}
          onChange={onMailChange}
          type="email"
          message={message?.email}
        />
        <Input
          label="Password"
          placeholder="•••••••••••••"
          htmlFor="password"
          value={passwordValue}
          onChange={onPasswordChange}
          icon={showPassword ? faEye : faEyeSlash}
          type={showPassword ? 'text' : 'password'}
          onClick={toggleShowPassword}
          message={message?.password}
        />
        <Input
          label="Confirm Password"
          placeholder="•••••••••••••"
          htmlFor="confirm"
          value={confirmValue}
          onChange={onConfirmChange!}
          icon={showConfirmPassword ? faEye : faEyeSlash}
          type={showConfirmPassword ? TYPE.TEXT : TYPE.PASSWORD}
          onClick={toggleShowConfirmPassword}
          message={message?.confirm}
        />
        <div className="mt-8">
          <Button
            name="Register"
            variant={TYPE.PRIMARY}
            onClick={onClick!}
            size={SIZE.LARGE}
            disabled={isDisabled}
          />
          {authMessage && (
            <p className="mt-3 text-center text-red-500">{authMessage}</p>
          )}
          <p className="text-sm mt-10">
            Already a user?{' '}
            <span
              className="text-dark underline cursor-pointer"
              onClick={handleMoveToSignIn}
            >
              Login now
            </span>
          </p>
        </div>
      </form>
    </Form>
  );
};

export default SignUp;
