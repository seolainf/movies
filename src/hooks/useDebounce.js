import { useEffect, useState } from "react";

export const useDebounce = (value, timer) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    const hanlder = setTimeout(() => {
      setDebounceValue(value);
    }, timer);

    return () => {
      clearTimeout(hanlder);
    };
  }, [value, timer]);

  return debounceValue;
};
