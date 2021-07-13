import React, { useEffect, useState } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntrega from "./DadosEntrega";
import { Typography, Stepper, Step, StepLabel } from "@material-ui/core";

function FormularioCadastro({ submit }) {
  const [currentStage, setCurrentStage] = useState(0);
  const [collectedData, setCollectedData] = useState({});
  useEffect(() => {
    if (currentStage === form.length - 1) submit(collectedData);
  });

  const form = [
    <DadosUsuario submit={collectData} />,
    <DadosPessoais submit={collectData} />,
    <DadosEntrega submit={collectData} />,
    <Typography variant="h5" align="center">
      Cadastro Finalizado
    </Typography>,
  ];

  function collectData(data) {
    setCollectedData({ ...collectedData, ...data });
    next();
  }

  function next() {
    setCurrentStage(currentStage + 1);
  }

  return (
    <>
      <Stepper activeStep={currentStage}>
        <Step>
          <StepLabel>Login</StepLabel>
        </Step>
        <Step>
          <StepLabel>Pessoal</StepLabel>
        </Step>
        <Step>
          <StepLabel>Entrega</StepLabel>
        </Step>
        <Step>
          <StepLabel>Finalização</StepLabel>
        </Step>
      </Stepper>
      {form[currentStage]}
    </>
  );
}

export default FormularioCadastro;
