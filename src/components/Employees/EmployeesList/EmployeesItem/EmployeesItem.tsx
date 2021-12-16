import React from 'react';
import {EmployeesDataType} from "../../../../App";
import {styled} from "@mui/material/styles";
import TableRow from "@mui/material/TableRow";
import {StyledTableCell} from "../EmployeesList";
import DeleteIcon from '@mui/icons-material/Delete';
import '../EmployeesList.css';

export interface Props {
    employee: EmployeesDataType,
    onDeleteEmployee: (id?: number) => void
}

const EmployeesItem: React.FC<Props> = (props) => {

    const{id, name, lastName, position} = props.employee;
    const {onDeleteEmployee} = props;

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
            <StyledTableCell data-testid={"name"} component="th" scope="row">
                {name}
            </StyledTableCell>
            <StyledTableCell data-testid={"lastName"} component="th" scope="row">
                {lastName}
            </StyledTableCell>
            <StyledTableCell data-testid={"position"} component="th" scope="row">
                {position}
            </StyledTableCell>
            <StyledTableCell onClick={() => onDeleteEmployee(id)} className={"delete-button"}><DeleteIcon style={{fill: "#FC3D14"}} /></StyledTableCell>
        </StyledTableRow>
    );
};

export default EmployeesItem;
