import React, { useState } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@material-ui/core";

function FormularioCadastro({ submit, validateCpf }) {
  const [currentStage, setCurrentStage] = useState(0);

  function next() {
    setCurrentStage(currentStage + 1);
  }

  function currentForm(stage) {
    switch (stage) {
      case 0:
        return <DadosUsuario submit={next} />;
      case 1:
        return <DadosPessoais submit={next} validateCpf={validateCpf} />;
      case 2:
        return <DadosEntrega submit={submit} />;
      default:
        return <Typography>Página não encontrada</Typography>;
    }
  }

  return <>{currentForm(currentStage)}</>;
}

export default FormularioCadastro;
