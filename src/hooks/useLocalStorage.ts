const useLocalStorage = {
  set: (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value)),
  get: (key: string) => JSON.parse(localStorage.getItem(key) || 'null'),
};

export default useLocalStorage;
