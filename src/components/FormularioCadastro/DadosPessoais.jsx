import React, { useState, useContext } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";
import RegisterValidation from "../../context/RegistrationValidation";
import useError from "../../hooks/useError";

function DadosPessoais({ submit }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotion, setPromotion] = useState(true);
  const [news, setNews] = useState(true);
  const validations = useContext(RegisterValidation);

  const [error, validateFields, canSend] = useError(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend()) {
          submit({ name, surname, cpf, promotion, news });
        }
      }}
    >
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        onBlur={validateFields}
        error={!error.name.valid}
        helperText={error.name.text}
        id="name"
        name="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
        id="surname"
        name="surname"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={validateFields}
        error={!error.cpf.valid}
        helperText={error.cpf.text}
        id="cpf"
        name="cpf"
        label="CPF"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <FormControlLabel
        label="Promoções"
        control={
          <Switch
            checked={promotion}
            onChange={(event) => setPromotion(event.target.checked)}
            name="promotion"
            color="primary"
          />
        }
      />
      <FormControlLabel
        label="Novidades"
        control={
          <Switch
            checked={news}
            onChange={(event) => setNews(event.target.checked)}
            name="news"
            color="primary"
          />
        }
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosPessoais;
