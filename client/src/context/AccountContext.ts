import React from 'react';
import { UserContext } from '../types/User.type';

const defaultValue = {
  user: null,
  isLoading: true,
  error: null,
  fetchUser: () => {
    return null;
  },
  setUser: () => {
    return null;
  },
};

export const AccountContext = React.createContext<UserContext>(defaultValue);
