import React from 'react';
import {EmployeesDataType} from "../../../../App";

interface Props {
    employee: EmployeesDataType
}

const EmployeesItem: React.FC<Props> = (props) => {

    const {name, lastName, position} = props.employee;

    return (
        <div>
            <span>{name} </span>
            <span>{lastName} </span>
            <span>{position}</span>
        </div>
    );
};

export default EmployeesItem;
