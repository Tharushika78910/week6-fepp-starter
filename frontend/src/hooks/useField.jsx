import { useState } from "react";

export const useField = (type) => {
  const [value, setValue] = useState("");

  const onChange = (event) => {
    setValue(event.target.value);
  };

  const reset = () => {
    setValue("");
  };

  // ONLY return props meant for <input />
  return {
    type,
    value,
    onChange,
    reset,
  };
};

export default useField;
