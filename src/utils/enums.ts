export const getEnumKey = (dict: Record<string, any>, value: any) => {
  return Object.keys(dict).find((key) => dict[key] === value);
};

export const getEnumValue = (dict: Record<string, any>, key: string) => {
  return dict[key];
};

export const isInEnum = (dict: Record<string, any>, value: any) => {
  return Object.values(dict).includes(value);
};
