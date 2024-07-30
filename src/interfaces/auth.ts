import { ChangeEvent, FormEvent } from 'react';

export interface AuthProps {
  nameValue?: string;
  mailValue: string;
  passwordValue: string;
  confirmValue?: string;
  onNameChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onMailChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onPasswordChange: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onConfirmChange?: (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => void;
  onClick: (e: FormEvent<HTMLButtonElement>) => void;
  message?: { [key: string]: string };
  authMessage?: string;
}

export interface ApiResponse<T> {
  data: T | null;
  error: unknown;
}