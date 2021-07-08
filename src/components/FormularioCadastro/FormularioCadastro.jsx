import React, { useEffect, useState } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntrega from "./DadosEntrega";

function FormularioCadastro({ submit, validateCpf }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [collectedData, setCollectedData] = useState({});
  useEffect(() => {
    console.log(collectedData);
  });

  const form = [
    <DadosUsuario submit={collectData} />,
    <DadosPessoais submit={collectData} validateCpf={validateCpf} />,
    <DadosEntrega submit={collectData} />,
  ];

  function collectData(data) {
    setCollectedData({ ...collectedData, ...data });
    next();
  }

  function next() {
    setCurrentStage(currentStage + 1);
  }

  return <>{form[currentStage]}</>;
}

export default FormularioCadastro;
