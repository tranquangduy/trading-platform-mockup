import { User } from '@/types';
import { useEffect, useState } from 'react';

export const useFetchUser = () => {
  const [user, setUser] = useState<User>({
    name: '',
    availableAmount: 0,
    stocks: [],
  });
  const fetchUser = async () => {
    const res = await fetch('/api/user');
    const data = await res.json();
    setUser(data);
  };
  useEffect(() => {
    fetchUser();
  }, []);
  return { user, fetchUser };
};
