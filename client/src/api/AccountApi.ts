import axios from 'axios';
import { GetCurrentUserResponse, GetUserResponse } from '../types/User.type';

const baseUrl =
  process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1/users';

async function getCurrentUser(): Promise<GetCurrentUserResponse> {
  const authURL = '/auth/user';

  try {
    const result = await axios.get(`${baseUrl}${authURL}`, {
      withCredentials: true,
    });
    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function getUser(userId: string): Promise<GetUserResponse> {
  try {
    const result = await axios.get(`${baseUrl}/${userId}`);
    return result.data;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

async function logout() {
  const logoutUrl = '/logout';
  try {
    await axios.get(`${baseUrl}${logoutUrl}`);
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export { getCurrentUser, getUser, logout };
