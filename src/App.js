import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validateCpf, validatePassword, validateName } from "./models/register";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <FormularioCadastro
        submit={onSubmitForm}
        validations={{
          cpf: validateCpf,
          password: validatePassword,
          name: validateName,
        }}
      />
    </Container>
  );
}

const onSubmitForm = (data) => console.log(data);

export default App;
