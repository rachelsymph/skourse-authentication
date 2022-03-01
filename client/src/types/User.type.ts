import { Dispatch, SetStateAction } from 'react';

export type User = {
  fullName: string;
  email: string;
  password: string;
  googleId: string;
  picture: string;
};

export type GetUserResponse = {
  success: boolean;
  data: User;
};

export type GetCurrentUserResponse = {
  success: boolean;
  data: string;
};

export type UserContext = {
  user: User | null;
  isLoading: boolean;
  error: string | null;
  fetchUser: () => void;
  setUser: Dispatch<SetStateAction<User | null>>;
};
