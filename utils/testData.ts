import { UserCredentials, userData } from './types';

export const testData = {
  validUser: {
    email: 'kammran.ali@gmail.com',
    password: 'kamran123',
  } as UserCredentials,

  invalidUser: {
    email: 'abc@abc.com',
    password: 'wrongpassword',
  } as UserCredentials,

  user: {
    userName: 'kamran_ali',
    userPwd: 'SecurePass123',
  } as userData
};