import { useRouter } from 'next/router';

export const useSignOut = () => {
  const router = useRouter();

  const signOut = () => {
    localStorage.removeItem('authenticated');
    router.push('/');
  };

  return { signOut };
};
