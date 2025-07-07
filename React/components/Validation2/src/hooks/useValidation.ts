import { useEffect, useState } from "react";

function useValidation(initialValue: string) {
  const [value, setValue] = useState(initialValue);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const year = Number(value);
    setIsValid(year >= 1900 && year <= 2024);
  }, [value]);

  return { value, setValue, isValid };
}

export default useValidation;
