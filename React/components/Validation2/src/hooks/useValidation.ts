import { useState, useEffect } from "react";

function useValidation() {
  const [value, setValue] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    const year = parseInt(value);
    if (year >= 1900 && year <= 2024) {
      setIsValid(true);
    } else {
      setIsValid(false);
    }
  }, [value]);

  return { value, setValue, isValid };
}

export default useValidation;
