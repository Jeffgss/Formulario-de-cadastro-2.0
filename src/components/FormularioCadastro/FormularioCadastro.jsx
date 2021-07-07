import React from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ submit, validateCpf }) {
  return (
    <>
      <DadosPessoais submit={submit} validateCpf={validateCpf} />
      <DadosUsuario />
      <DadosEntrega />
    </>
  );
}

export default FormularioCadastro;
