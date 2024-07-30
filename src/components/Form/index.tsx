import { ReactNode } from 'react';

interface FormProps {
  /** Render dynamic react node children */
  children: ReactNode;
  
  /** Form Title */
  title?: string;
}

const Form = ({ children, title }: FormProps) => {
  return (
    <div className="h-screen flex bg-auth bg-no-repeat bg-cover overflow-hidden">
      <div className="w-form m-auto bg-tertiary p-8 rounded-2xl">
        <img
          src="assets/images/chat-app-logo.png"
          alt="Logo"
          className="block my-0 mx-auto w-32 "
        />
        <p className="mt-4 text-center text-primary font-semibold text-xl">
          {title}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Form;
