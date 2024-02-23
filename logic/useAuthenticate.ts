import { useEffect, useState } from 'react';

export const useAuthenticate = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem('authenticated');
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  return { isAuthenticated };
};
