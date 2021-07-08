import React, { useState } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ submit, validateCpf }) {
  const [currentStage, setCurrentStage] = useState(0);

  const form = [
    <DadosUsuario submit={next} />,
    <DadosPessoais submit={next} validateCpf={validateCpf} />,
    <DadosEntrega submit={submit} />,
  ];

  function next() {
    setCurrentStage(currentStage + 1);
  }

  return <>{form[currentStage]}</>;
}

export default FormularioCadastro;
