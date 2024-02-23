import React from 'react';

type ButtonProps = React.ComponentPropsWithoutRef<'button'>;

const Button: React.FC<ButtonProps> = ({ children, ...btnProps }) => {
  return (
    <button
      type="submit"
      className={
        'flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
      }
      {...btnProps}
    >
      {children}
    </button>
  );
};

export default Button;
