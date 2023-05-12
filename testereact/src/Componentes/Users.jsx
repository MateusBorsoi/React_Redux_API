import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { TableUser } from './TableUser';

export const Users = ({lista}) => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 200 }} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="left">Nome</TableCell>
            <TableCell align="middle">E-mail</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {lista.map((usuario, index) => (
            <TableUser nome={usuario.nome} email={usuario.email} key={index} /> 
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
