const useUuid = () => {
  const blobUrl = URL.createObjectURL(new Blob());
  const uuid = blobUrl.toString();
  URL.revokeObjectURL(blobUrl);
  return uuid.slice(uuid.lastIndexOf('/') + 1);
};

export default useUuid;
