import React, { useState } from 'react';
import Input from '../atoms/Input';
import Button from '../atoms/Button';
import { useSignIn } from '@/logic/useSignIn';
import { useRouter } from 'next/router';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { signIn } = useSignIn();
  const router = useRouter();
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleOnSignIn = async () => {
    const res = await signIn(email, password);
    if (res) router.push('/overview');
  };

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
            onChange={handleEmailChange}
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
            onChange={handlePasswordChange}
          />
        </div>

        <Button onClick={handleOnSignIn}>Sign in</Button>
      </div>
    </div>
  );
};

export default LoginForm;
