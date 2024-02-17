const getEnumKey = (dict: Record<string, any>, value: any) => {
  return Object.keys(dict).find((key) => dict[key] === value);
};

export default getEnumKey;
