import { User } from '@/types';
import { useEffect, useState } from 'react';

export const useFetchUser = () => {
  const [user, setUser] = useState<User>({
    name: '',
    availableAmount: 0,
    stocks: [],
  });
  useEffect(() => {
    fetch('/api/user')
      .then((res) => res.json())
      .then((data) => {
        setUser(data);
      });
  }, []);
  return { user };
};
