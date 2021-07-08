const validateCpf = (cpf) => {
  if (cpf.length !== 11) {
    return { valid: false, text: "O CPF precisa ter 11 dígitos." };
  } else if (
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return { valid: false, text: "CPF inválido." };
  } else {
    return { valid: true, text: "" };
  }
};

const validatePassword = (password) => {
  if (password.length < 4 || password.length > 12) {
    return { valid: false, text: "A senha deve ter entre 4 e 12 dígitos." };
  } else {
    return { valid: true, text: "" };
  }
};

export { validateCpf, validatePassword };
