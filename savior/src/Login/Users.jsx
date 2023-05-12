import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableUsers } from './TableUsers';


export const Users = ({ lista }) => {
 
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead>
          <TableRow>
            <TableCell align='left'>Nome</TableCell>
            <TableCell align="middle">Email</TableCell>
            <TableCell align="right">Senha</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>

          {lista.map((usuario, index) => (
            <TableUsers
              nome={usuario.nome}
              email={usuario.email}
              senha={usuario.senha}
              key={index} />
          ))}

        </TableBody>
      </Table>
    </TableContainer>
  )
}
