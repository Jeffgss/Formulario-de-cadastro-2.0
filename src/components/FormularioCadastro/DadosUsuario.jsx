import React, { useContext, useState } from "react";
import { TextField, Button } from "@material-ui/core";
import RegisterValidation from "../../context/RegistrationValidation";
import useError from "../../hooks/useError";

function DadosUsuario({ submit }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const validations = useContext(RegisterValidation);

  const [error, validateFields, canSend] = useError(validations);

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        if (canSend()) {
          submit({ email, password });
        }
      }}
    >
      <TextField
        value={email}
        onChange={(event) => {
          setEmail(event.target.value);
        }}
        id="email"
        name="email"
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
        onBlur={validateFields}
        error={!error.password.valid}
        helperText={error.password.text}
        id="password"
        name="password"
        label="Senha"
        type="password"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <Button type="submit" variant="contained" color="primary">
        Próximo
      </Button>
    </form>
  );
}

export default DadosUsuario;
