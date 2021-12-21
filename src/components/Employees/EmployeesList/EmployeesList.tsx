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
    employees: Array<EmployeesDataType>,
    onDeleteEmployee: (id?: number) => void
    onDataChange: (id: number, newName: string, newLastName: string, newPositionName: string) => void
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

const StyledTableRow = styled(TableRow)(({theme}) => ({
    '&:nth-of-type(odd)': {
        backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    '&:last-child td, &:last-child th': {
        border: 0,
    },
}));

const EmployeesList: React.FC<Props> = (props) => {
    const {employees, onDeleteEmployee, onDataChange} = props;

    return (
        <TableContainer component={Paper}>
            <Table sx={{minWidth: 700}} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>First name</StyledTableCell>
                        <StyledTableCell>Last name</StyledTableCell>
                        <StyledTableCell>Position</StyledTableCell>
                        <StyledTableCell></StyledTableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {employees.map(employee => {
                        return (

                            <StyledTableRow key={employee.id}>
                                <EmployeesItem employee={employee} onDataChange={onDataChange}
                                               onDeleteEmployee={onDeleteEmployee}/>
                            </StyledTableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default EmployeesList;
