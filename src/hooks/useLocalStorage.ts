import useHash from "./useHash";

const useLocalStorage = {
  set: (key: string, value: any) => {
    const hashed = useHash.encrypt(value);
    localStorage.setItem(key, hashed);
  },
  get: (key: string) => {
    const value = localStorage.getItem(key);
    return JSON.parse(useHash.decrypt(value || "") || "[]");
  },
};

export default useLocalStorage;
