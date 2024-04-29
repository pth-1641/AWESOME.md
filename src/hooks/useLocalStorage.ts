const useLocalStorage = {
  set: (key: string, value: any) =>
    localStorage.setItem(key, JSON.stringify(value)),
  remove: (key: string) => localStorage.removeItem(key),
  getKeysLike: (key: string) => {
    const initSections: any[] = [];
    Object.keys(localStorage).forEach((k) => {
      if (k.includes(key)) initSections.push(JSON.parse(localStorage[k]));
    });
    return initSections.sort((a, b) => a.index - b.index);
  },
};

export default useLocalStorage;
