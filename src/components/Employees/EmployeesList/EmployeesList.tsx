import React from 'react';
import {EmployeesDataType} from "../../../App";
import EmployeesItem from "./EmployeesItem/EmployeesItem";

interface Props {
    employees: Array<EmployeesDataType>
}

const EmployeesList: React.FC<Props> = (props) => {
    const {employees} = props;

    return (
        <div>
            {employees.map(employee => {
                return <EmployeesItem key={employee.id} employee={employee} />
            })}
        </div>
    );
};

export default EmployeesList;
