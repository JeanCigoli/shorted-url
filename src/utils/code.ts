import crypto from 'crypto';

export const generateCode = (length: number) => {
  return crypto.randomBytes(length).toString('hex');
};
