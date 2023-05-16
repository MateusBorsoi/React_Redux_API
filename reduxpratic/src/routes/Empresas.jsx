import { Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function Empresas() {
  const navigate = useNavigate();

  const redirectRegister = () => {
    navigate("/registrarEmpresa");
  };

  return (
    <div>
      <h1>Empresas</h1>
      <p>
        Cadastrar nova empresa:
         <Button variant="outlined" onClick={redirectRegister}>
          Cadastrar
        </Button>
      </p>
    </div>
  );
}
