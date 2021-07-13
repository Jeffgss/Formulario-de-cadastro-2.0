import React from "react";

const RegisterValidation = React.createContext({
  cpf: noValidation,
  password: noValidation,
  name: noValidation,
});

function noValidation(data) {
  return { valid: true, text: "" };
}

export default RegisterValidation;
