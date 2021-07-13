import React, { useState } from "react";
import { TextField, Button } from "@material-ui/core";

function DadosEntrega({ submit }) {
  const [cep, setCep] = useState("");
  const [adress, setAdress] = useState("");
  const [number, setNumber] = useState("");
  const [state, setState] = useState("");
  const [city, setCity] = useState("");
  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        submit({ cep, adress, number, state, city });
      }}
    >
      <TextField
        value={cep}
        onChange={(event) => {
          setCep(event.target.value);
        }}
        id="cep"
        label="CEP"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={adress}
        onChange={(event) => {
          setAdress(event.target.value);
        }}
        id="adress"
        label="Endereço"
        type="text"
        required
        variant="outlined"
        margin="normal"
        fullWidth
      />
      <TextField
        value={number}
        onChange={(event) => {
          setNumber(event.target.value);
        }}
        id="number"
        label="Número"
        type="number"
        required
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={state}
        onChange={(event) => {
          setState(event.target.value);
        }}
        id="state"
        label="Estado"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />
      <TextField
        value={city}
        onChange={(event) => {
          setCity(event.target.value);
        }}
        id="city"
        label="Cidade"
        type="text"
        required
        variant="outlined"
        margin="normal"
      />
      <Button type="submit" variant="contained" color="primary" fullWidth>
        Finalizar cadastro
      </Button>
    </form>
  );
}

export default DadosEntrega;
