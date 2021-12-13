import React from 'react';
import {EmployeesDataType} from "../../../App";
import EmployeesItem from "./EmployeesItem/EmployeesItem";
import {styled} from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, {tableCellClasses} from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Props {
    employees: Array<EmployeesDataType>
}

export const StyledTableCell = styled(TableCell)(({theme}) => ({
    [`&.${tableCellClasses.head}`]: {
        backgroundColor: theme.palette.info.main,
        color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
        fontSize: 14,
    },
}));

const EmployeesList: React.FC<Props> = (props) => {
    const {employees} = props;

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>First name</StyledTableCell>
                        <StyledTableCell>Last name</StyledTableCell>
                        <StyledTableCell>Position</StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(employee => {
                        return (
                            <EmployeesItem key={employee.id} employee={employee}/>);
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeesList;
