import React,{ useState } from "react";

export const useForm = (initialState = {}) => {
  const [values, setValues] = useState(initialState);

  const handleInputChange = ({ target }) => {
    setValues({
      ...values,
      [target.name]: target.value,
    });
  };

  const reset = (newValues = initialState) => {
    setValues(newValues);
  };

  return [values, handleInputChange, reset];

};