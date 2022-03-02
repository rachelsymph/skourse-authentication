import { useState } from 'react';
import { getCurrentUser, getUser, logout } from '../api/AccountApi';
import { authProvider } from '../api/AuthApi';
import { AuthContext } from '../context/AuthContext';

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<any>(null);

  const signin = (callback: VoidFunction) => {
    return authProvider.signin(async () => {
      const { data: userId } = await getCurrentUser();
      const { data: currentUser } = await getUser(userId);
      setUser(currentUser);
      callback();
    });
  };

  const signout = (callback: VoidFunction) => {
    return authProvider.signout(async () => {
      await logout();
      setUser(null);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
