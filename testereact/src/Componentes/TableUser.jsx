import { TableCell, TableRow} from "@mui/material"

export const TableUser = ({nome, email}) => {



    return (
        <TableRow
            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
        >
            <TableCell align="left">{nome}</TableCell>
            <TableCell align="middle">{email}</TableCell>
        </TableRow>
    )
}