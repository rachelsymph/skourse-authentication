import { useEffect, useState } from 'react';
import { getCurrentUser, getUser } from '../api/AccountApi';
import { User } from '../types/User.type';

const GET_CURRENT_ACCOUNT_KEY = 'GET_CURRENT_ACCOUNT_KEY';

type Results = { user: User | undefined; error: string; isLoading: boolean };

export default function useGetCurrentAccount(): Results {
  const [user, setUser] = useState<User>();
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    async function fetchUser() {
      try {
        const { data: userId } = await getCurrentUser();
        const { data: currentUser } = await getUser(userId);
        setUser(currentUser);
        setIsLoading(false);
      } catch (err) {
        setError('Something went wrong');
        throw err;
      }
    }
    fetchUser();
  }, []);

  return { user, isLoading, error };
}
