import React, { useState } from "react";
import { Button, TextField, Switch, FormControlLabel } from "@material-ui/core";

function DadosPessoais({ submit, validateCpf }) {
  const [name, setName] = useState("");
  const [surname, setSurname] = useState("");
  const [cpf, setCpf] = useState("");
  const [promotion, setPromotion] = useState(true);
  const [news, setNews] = useState(true);
  const [error, setError] = useState({ cpf: { valid: true, text: "" } });

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submit({ name, surname, cpf, promotion, news });
      }}
    >
      <TextField
        value={name}
        onChange={(event) => setName(event.target.value)}
        id="name"
        label="Nome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={surname}
        onChange={(event) => setSurname(event.target.value)}
        id="surname"
        label="Sobrenome"
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={cpf}
        onChange={(event) => setCpf(event.target.value)}
        onBlur={(event) => {
          const validCpf = validateCpf(cpf);
          setError({
            cpf: validCpf,
          });
        }}
        error={!error.cpf.valid}
        helperText={error.cpf.text}
        id="cpf"
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
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosPessoais;
