import { useState } from 'react';

export const useSignIn = () => {
  const signIn = async (email: string, password: string) => {
    const response = await fetch('/api/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });

    if (response.ok) {
      localStorage.setItem('authenticated', 'true');
      return true;
    }

    localStorage.removeItem('authenticated');
    return false;
  };

  return {
    signIn,
  };
};
