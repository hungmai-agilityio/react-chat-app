import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';

// Firebases
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../fireBase/config';
// Interfaces
import { IUser, IProfile } from '@/interfaces';

// Services
import { addUser, addProfileUser, getUserByEmail } from '@/services';

// Utils
import { validateForm } from '@/utils';

// Constants
import { MESSAGE_API, MESSAGE_VALID, URL } from '@/constants';

// Components
import SignUp from '@/components/Form/SignUp';

const SignUpPage = () => {
  const [authMessage, setAuthMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>(
    {}
  );
  const navigate = useNavigate();

  // Handle Sign up new user
  const handleSignUp = useCallback (async (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    const errors = validateForm({ name, email, password, confirm });
    if (Object.keys(errors).length > 0) {
      setErrorMessage(errors);
      return;
    }

    setErrorMessage({});

    const existingUser = await getUserByEmail(email);

    if (existingUser.data) {
      setAuthMessage(MESSAGE_VALID.EMAIL_EXIST);
      return;
    }

    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const user = userCredential.user;

    const newAccount: IUser = {
      id: user.uid,
      userName: name,
      email,
      password,
      created_at: new Date(),
      updated_at: new Date()
    };

    const account = await addUser(newAccount);

    const newProfile: IProfile = {
      id: uuidv4(),
      user_id: newAccount.id,
      avatar: '',
      phone: ''
    };

    const profile = await addProfileUser(newProfile);

    if (!account.data || !profile.data) {
      setAuthMessage(MESSAGE_API.SIGN_UP_ERROR);
      return;
    }

    setAuthMessage('');
    navigate(URL.SIGN_IN);
  }, [confirm, email, name, navigate, password]);

  // Handle change input value
  const handleInputChange =
    (setter: React.Dispatch<React.SetStateAction<string>>) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setter(e.target.value);
    };

  return (
    <SignUp
      nameValue={name}
      mailValue={email}
      passwordValue={password}
      confirmValue={confirm}
      onNameChange={handleInputChange(setName)}
      onMailChange={handleInputChange(setEmail)}
      onPasswordChange={handleInputChange(setPassword)}
      onConfirmChange={handleInputChange(setConfirm)}
      onClick={handleSignUp}
      message={errorMessage}
      authMessage={authMessage}
    />
  );
};

export default SignUpPage;
