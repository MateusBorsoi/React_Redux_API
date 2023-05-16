import { Button, TextField } from "@mui/material";
import { useState } from "react";
import styles from "./CadastraEmpresa.module.css";

export default function CadastraEmpresa() {
  const [empresa, setEmpresa] = useState(null);
  const [email, setEmail] = useState(null);
  const [cnpj, setCnpj] = useState(null);

  return (
    <div className={styles.register_content}>
      <div className={styles.div_register}>
        <form className={styles.form_register}>
          <h2>Registrar Empresa</h2>
          <TextField
            id="outlined-basic"
            label="Empresa"
            variant="outlined"
            className={styles.register_input}
            onChange={(event) => setEmpresa(event.target.value)}
            required
          />
          <TextField
            id="outlined-basic"
            label="E-mail"
            variant="outlined"
            className={styles.register_input}
            onChange={(event) => setEmail(event.target.value)}
            required
          />
          <TextField
            id="outlined-basic"
            label="CNPJ"
            variant="outlined"
            className={styles.register_input}
            onChange={(event) => setCnpj(event.target.value)}
            required
          />
          <Button variant="outlined" className={styles.register_btn}>
            Registrar
          </Button>
        </form>
      </div>
    </div>
  );
}
