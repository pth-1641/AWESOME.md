const objectToUrl = (
  obj: Record<string, any>,
  options?: { omit: string[] }
) => {
  const omitObj = Object.entries(obj).filter(([key, _]) =>
    options ? ![...options.omit, 'id'].includes(key) : false
  );
  return new URLSearchParams(Object.fromEntries(omitObj)).toString();
};

export default objectToUrl;
