import { useEffect, useState } from 'react';
import { getCurrentUser, getUser } from '../api/AccountApi';
import { User, UserContext } from '../types/User.type';

type Results = UserContext;

export default function useGetCurrentAccount(): Results {
  const [user, setUser] = useState<User | null>(null);
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);

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

  return { user, isLoading, error, fetchUser, setUser };
}
