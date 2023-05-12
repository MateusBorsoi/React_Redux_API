import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';

export const TableUsers = ({nome, email, senha}) => {
    return (
        <TableRow>
            <TableCell align="middle">{nome}</TableCell>
            <TableCell align="left">{email}</TableCell>
            <TableCell align="right">{senha}</TableCell>
        </TableRow>
    )
}