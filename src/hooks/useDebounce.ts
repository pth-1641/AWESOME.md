import { useEffect, useState } from "preact/hooks";

const useDebounce = (q: string, delay: number = 500) => {
  const [value, setValue] = useState<string>("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      setValue(q);
    }, delay);

    return () => clearTimeout(timeout);
  }, [q]);

  return value;
};

export default useDebounce;
