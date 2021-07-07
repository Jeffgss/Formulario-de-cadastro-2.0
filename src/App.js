import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro submit={onSubmitForm} validateCpf={validateCpf} />
    </Container>
  );
}

const onSubmitForm = (data) => console.log(data);

const validateCpf = (cpf) => {
  if (cpf.length !== 11) {
    return { valid: false, text: "O CPF precisa ter 11 digitos." };
  } else if (
    cpf === "00000000000" ||
    cpf === "11111111111" ||
    cpf === "22222222222" ||
    cpf === "33333333333" ||
    cpf === "44444444444" ||
    cpf === "55555555555" ||
    cpf === "66666666666" ||
    cpf === "77777777777" ||
    cpf === "88888888888" ||
    cpf === "99999999999"
  ) {
    return { valid: false, text: "CPF inválido." };
  } else {
    return { valid: true, text: "" };
  }
};

export default App;
