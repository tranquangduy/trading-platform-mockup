import React from 'react';

type InputProps = React.ComponentPropsWithoutRef<'input'> & {
  label: string;
};

const Input: React.FC<InputProps> = ({ label, ...inputProps }) => {
  return (
    <>
      <label
        htmlFor="email"
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {label}
      </label>
      <div className="mt-2">
        <input
          className="block w-full rounded-md border-0 p-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
          {...inputProps}
        />
      </div>
    </>
  );
};

export default Input;
