const objectToUrl = (
  obj: Record<string, any>,
  options?: { omit: string[] }
) => {
  const omitObj = Object.entries(obj).filter(
    ([key, _]) => !options?.omit.includes(key)
  );
  return new URLSearchParams(Object.fromEntries(omitObj)).toString();
};

export default objectToUrl;
