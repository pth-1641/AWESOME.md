const objectToUrl = (
  entity: Record<string, any>,
  options?: { omit: string[] }
) => {
  const omitEntity = Object.entries(entity).filter(
    ([key, _]) => ![...(options?.omit || []), 'id'].includes(key)
  );
  return new URLSearchParams(Object.fromEntries(omitEntity)).toString();
};

export default objectToUrl;
