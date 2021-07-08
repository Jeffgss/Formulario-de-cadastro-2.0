import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosUsuario({ submit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submit({ email, password });
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        label="Email"
        type="email"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={password}
        onChange={(event) => {
          setPassword(event.target.value);
        }}
        id="password"
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Cadastrar
      </Button>
    </form>
  );
}

export default DadosUsuario;
