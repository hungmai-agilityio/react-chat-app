// Constants
import { MESSAGE_VALID } from '@/constants';

// Utils
import { validateForm } from '@/utils';

describe('validateForm', () => {
  // Mocks
  const validEmail = 'test@example.com';
  const invalidEmail = 'test@error';
  const validPassword = 'Password1';
  const invalidPassword = 'password';
  const confirmPassword = 'Password1';

  it('should return an empty object for valid form data', () => {
    const data = {
      email: validEmail,
      password: validPassword,
      confirm: confirmPassword
    };
    const result = validateForm(data);
    expect(result).toEqual({});
  });

  it('should return error for empty fields', () => {
    const data = {
      email: '',
      password: '',
      confirm: ''
    };
    const result = validateForm(data);
    expect(result).toEqual({
      email: MESSAGE_VALID.INPUT_REQUIRED.replace('{field}', 'Email'),
      password: MESSAGE_VALID.INPUT_REQUIRED.replace('{field}', 'Password'),
      confirm: MESSAGE_VALID.INPUT_REQUIRED.replace('{field}', 'Confirm')
    });
  });

  it('should return error for invalid email', () => {
    const data = {
      email: invalidEmail,
      password: validPassword,
      confirm: confirmPassword
    };
    const result = validateForm(data);
    expect(result).toEqual({
      email: MESSAGE_VALID.EMAIL_ERROR
    });
  });

  it('should return error for invalid password', () => {
    const data = {
      email: validEmail,
      password: invalidPassword
    };
    const result = validateForm(data);
    expect(result).toEqual({
      password: MESSAGE_VALID.PASSWORD_ERROR
    });
  });

  it('should return error for password confirmation mismatch', () => {
    const data = {
      email: validEmail,
      password: validPassword,
      confirm: 'DiffPassword'
    };
    const result = validateForm(data);
    expect(result).toEqual({
      confirm: MESSAGE_VALID.CONFIRM_ERROR
    });
  });

  it('should return errors for both email and password issues', () => {
    const data = {
      email: invalidEmail,
      password: invalidPassword
    };
    const result = validateForm(data);
    expect(result).toEqual({
      email: MESSAGE_VALID.EMAIL_ERROR,
      password: MESSAGE_VALID.PASSWORD_ERROR
    });
  });

  it('should return error for missing password confirmation when password is valid', () => {
    const data = {
      email: validEmail,
      password: validPassword,
      confirm: ''
    };
    const result = validateForm(data);
    expect(result).toEqual({
      confirm: MESSAGE_VALID.INPUT_REQUIRED.replace('{field}', 'Confirm')
    });
  });
});
