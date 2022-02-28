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
