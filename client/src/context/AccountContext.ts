import React from 'react';

import { User } from '../types/User.type';

export const AccountContext = React.createContext<User | null>(null);
