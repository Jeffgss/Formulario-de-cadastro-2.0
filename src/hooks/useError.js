import React, { useState } from "react";

function useError(validations) {
  const initialState = createInitialState(validations);
  const [error, setError] = useState(initialState);

  function validateFields(event) {
    const { name, value } = event.target;
    const newState = { ...error };
    newState[name] = validations[name](value);
    setError(newState);
  }

  function canSend() {
    for (let field in error) {
      if (!error[field].valid) {
        return false;
      }
    }
    return true;
  }

  return [error, validateFields, canSend];
}

function createInitialState(validations) {
  const initialState = {};
  for (let field in validations) {
    initialState[field] = { valid: true, text: "" };
  }
  return initialState;
}

export default useError;
