import React from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';

const LoginForm = () => {
  return (
    <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
      <div className="sm:mx-auto sm:w-full sm:max-w-sm">
        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-10 flex flex-col gap-y-4">
        <div>
          <Input
            label="Email address"
            name="email"
            type="email"
            autoComplete="email"
            required
          />
        </div>
        <div>
          <Input
            label="Password"
            id="password"
            name="password"
            type="password"
            autoComplete="current-password"
            required
          />
        </div>

        <Button>Sign in</Button>
      </div>
    </div>
  );
};

export default LoginForm;
