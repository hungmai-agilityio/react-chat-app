import React, { useState, ChangeEvent, FormEvent, useCallback } from 'react';
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
import { MESSAGE_API, MESSAGE_VALID } from '@/constants';

// Components
import { SignUp } from '@/components';

const SignUpPage = () => {
  const [authMessage, setAuthMessage] = useState<string>('');
  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirm, setConfirm] = useState<string>('');
  const [isSubmit, setIsSubmit] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<{ [key: string]: string }>(
    {}
  );

  // Handle Sign up new user
  const handleSignUp = useCallback(
    async (e: FormEvent<HTMLButtonElement>) => {
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
      setIsSubmit(true);
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
      setIsSubmit(false);
      if (!account.data || !profile.data) {
        setAuthMessage(MESSAGE_API.SIGN_UP_ERROR);
        return;
      }

      setAuthMessage('');
    },
    [confirm, email, name, password]
  );

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
      isDisabled={isSubmit}
    />
  );
};

export default SignUpPage;
