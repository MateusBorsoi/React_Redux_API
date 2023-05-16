import styles from "./Register.module.css";
import { Alert, Button, Container, TextField } from "@mui/material";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { registerUser } from "../Redux/user/actions";
import { selectRegister } from "../Redux/user/selectors";
import { useNavigate } from "react-router-dom";

const Register = () => {
  const dispatch = useDispatch();
  const userRegister = useSelector(selectRegister);
  const navigate = useNavigate();

  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senhaConfirma, setSenhaConfirma] = useState("");
  const [senha, setSenha] = useState("");
  const [mensagem, setMensagem] = useState("");
  const [tipoAlert, setTipoAlert] = useState(null);

  let validaUser;
  if (userRegister) {
    validaUser = parseInt(userRegister.status);
  }
  const user = {
    nome: nome,
    email: email,
    senha: senha,
  };

  const isVazio = (field) => {
    return field === null || field === "" || field === undefined;
  };

  const isNomeValido = (nome) => {
    return nome.length > 2;
  };

  const isEmailValido = (email) => {
    return email.length > 8;
  };

  const isSenhaValida = (senha) => {
    return senha.length > 5;
  };

  const isSenhaConfere = (senha, senhaConfirma) => {
    return senha === senhaConfirma;
  };

  const validaRegistro = () => {
    if (isVazio(nome)) {
      return "É necessário preencher o nome";
    }

    if (isVazio(email)) {
      return "É necessário preencher o e-mail";
    }

    if (isVazio(senha) || isVazio(senhaConfirma)) {
      return "É necessário preencher a senha";
    }

    if (!isNomeValido(nome)) {
      return "O nome deve ser maior que 2 caracteres!";
    }

    if (!isEmailValido(email)) {
      return "O email deve ser maior que 8 caractéres!";
    }

    if (!isSenhaValida(senha)) {
      return "A senha deve conter mais de 5 caractéres!";
    }

    if (!isSenhaConfere(senha, senhaConfirma)) {
      return "A senha não confere";
    }
  };

  useEffect(() => {
    if (validaUser === 409) {
      setTipoAlert("error");
      setMensagem("Email já cadastrado");
    } else if (validaUser === 200) {
      setTipoAlert("success");
      setMensagem("Cadastro efetuado com sucesso");
      setTimeout(() => {
        navigate("/login");
      }, 200);
    }
  }, [validaUser]);

  const handleRegister = () => {
    const msgErro = validaRegistro();

    if (msgErro) {
      setTipoAlert("error");
      setMensagem(msgErro);
    } else {
      dispatch(registerUser(user));
    }
  };

  return (
    <Container maxWidth="sm">
      <div className={styles.register_content}>
        <div className={styles.div_register}>
          <form className={styles.form_register}>
            <h2>Registro</h2>
            <TextField
              id="outlined-basic"
              label="Nome"
              variant="outlined"
              className={styles.register_input}
              onChange={(event) => setNome(event.target.value)}
              value={nome}
              required
            />
            <TextField
              id="outlined-basic"
              label="Email"
              variant="outlined"
              className={styles.register_input}
              onChange={(event) => setEmail(event.target.value)}
              value={email}
              required
            />
            <TextField
              id="outlined-basic-password"
              label="Senha"
              variant="outlined"
              type="password"
              className={styles.register_input}
              onChange={(event) => setSenha(event.target.value)}
              value={senha}
              required
            />
            <TextField
              id="outlined-basic-confirm-password"
              label="Confirmar Senha"
              variant="outlined"
              type="password"
              className={styles.register_input}
              onChange={(event) => setSenhaConfirma(event.target.value)}
              value={senhaConfirma}
              required
            />
            <Button
              variant="outlined"
              onClick={handleRegister}
              className={styles.register_btn}
            >
              Registrar
            </Button>
          </form>
        </div>
      </div>
      <div className={styles.register_alert}>
        {tipoAlert && mensagem && (
          <Alert severity={tipoAlert}> {mensagem} </Alert>
        )}
      </div>
    </Container>
  );
};

export default Register;
