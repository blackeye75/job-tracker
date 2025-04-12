import { account } from '../appwrite';

export const createUser = async (email, password, name) => {
  try {
    return await account.create('unique()', email, password, name);
  } catch (err) {
    throw err;
  }
};

export const loginUser = async (email, password) => {
  try {
    return await account.createEmailSession(email, password);
  } catch (err) {
    throw err;
  }
};

export const getCurrentUser = async () => {
  try {
    return await account.get();
  } catch {
    return null;
  }
};

export const logoutUser = async () => {
  try {
    return await account.deleteSession('current');
  } catch (err) {
    throw err;
  }
};
