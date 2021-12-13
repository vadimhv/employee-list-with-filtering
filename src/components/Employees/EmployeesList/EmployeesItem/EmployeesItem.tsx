import React from 'react';
import {EmployeesDataType} from "../../../../App";
import {styled} from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import {StyledTableCell} from "../EmployeesList";

export interface Props {
    employee: EmployeesDataType
}

const EmployeesItem: React.FC<Props> = (props) => {

    const {id, name, lastName, position} = props.employee;

    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    return (
        <StyledTableRow key={id}>
            <StyledTableCell component="th" scope="row">
                {name}
            </StyledTableCell>
            <StyledTableCell>{lastName}</StyledTableCell>
            <StyledTableCell>{position}</StyledTableCell>
        </StyledTableRow>
    );
};

export default EmployeesItem;
