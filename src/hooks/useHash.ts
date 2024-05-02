import CryptoJS from 'crypto-js';
import { PRIVATE_KEY } from '../constants';

const useHash = () => {
  return {
    encrypt: (data: any) => {
      return CryptoJS.AES.encrypt(JSON.stringify(data), PRIVATE_KEY).toString();
    },
    decrypt: (hashed: string) => {
      const bytes = CryptoJS.AES.decrypt(hashed, PRIVATE_KEY);
      return bytes.toString(CryptoJS.enc.Utf8);
    },
  };
};

export default useHash();
