import React from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";

function FormularioCadastro({ submit, validateCpf }) {
  return (
    <>
      <DadosPessoais submit={submit} validateCpf={validateCpf} />
      <DadosUsuario />
    </>
  );
}

export default FormularioCadastro;
