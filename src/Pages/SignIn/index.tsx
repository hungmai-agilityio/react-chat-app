import {
  useState,
  ChangeEvent,
  Dispatch,
  SetStateAction,
  FormEvent,
  useCallback
} from 'react';
import { useNavigate } from 'react-router-dom';

// Utils
import { validateForm } from '@/utils';

// Constants
import { MESSAGE_API } from '@/constants/message';

// Services
import { signIn } from '@/services';

// Components
import { SignIn } from '@/components';

const SignInPage = () => {
  const [authMessage, setAuthMessage] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>(
    {}
  );
  const navigate = useNavigate();

  // Handle user sign in to app
  const handleSignIn = useCallback(
    async (e: FormEvent<HTMLButtonElement>) => {
      e.preventDefault();

      const errors = validateForm({ email, password });
      if (Object.keys(errors).length > 0) {
        setErrorMessage(errors);
        return;
      }

      setErrorMessage({});

      const response = await signIn(email, password);

      if (!response.data) {
        setAuthMessage(MESSAGE_API.SIGN_IN_ERROR);
        return;
      }

      setAuthMessage('');
      navigate('/');
    },
    [email, navigate, password]
  );

  // Handle change input value
  const handleInputChange =
    (setter: Dispatch<SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  return (
    <SignIn
      mailValue={email}
      passwordValue={password}
      onMailChange={handleInputChange(setEmail)}
      onPasswordChange={handleInputChange(setPassword)}
      onClick={handleSignIn}
      message={errorMessage}
      authMessage={authMessage}
    />
  );
};

export default SignInPage;
