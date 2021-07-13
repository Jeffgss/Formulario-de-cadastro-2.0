import "./App.css";
import FormularioCadastro from "./components/FormularioCadastro/FormularioCadastro";
import { Container, Typography } from "@material-ui/core";
import { validateCpf, validatePassword, validateName } from "./models/register";
import RegisterValidation from "./context/RegistrationValidation";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de cadastro
      </Typography>
      <RegisterValidation.Provider
        value={{
          cpf: validateCpf,
          password: validatePassword,
          name: validateName,
        }}
      >
        <FormularioCadastro submit={onSubmitForm} />
      </RegisterValidation.Provider>
    </Container>
  );
}

const onSubmitForm = (data) => console.log(data);

export default App;
