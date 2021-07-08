import React, { useState } from "react";
import DadosUsuario from "./DadosUsuario";
import DadosPessoais from "./DadosPessoais";
import DadosEntrega from "./DadosEntrega";
import { Typography } from "@material-ui/core";

function FormularioCadastro({ submit, validateCpf }) {
  const [currentStage, setCurrentStage] = useState(0);

  function currentForm(stage) {
    switch (stage) {
      case 0:
        return <DadosUsuario />;
      case 1:
        return <DadosPessoais submit={submit} validateCpf={validateCpf} />;
      case 2:
        return <DadosEntrega />;
      default:
        return <Typography>Página não encontrada</Typography>;
    }
  }

  return <>{currentForm(currentStage)}</>;
}

export default FormularioCadastro;
