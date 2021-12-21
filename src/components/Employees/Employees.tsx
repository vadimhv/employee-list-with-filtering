import React from 'react';
import Search from "./Search/Search";
import EmployeesList from "./EmployeesList/EmployeesList";
import Paginator from "./Paginator/Paginator";
import {EmployeesDataType} from "../../App";

interface Props {
    employees: Array<EmployeesDataType>,
    employeeFilter: (searchValue: string) => void,
    onDeleteEmployee: (id?: number ) => void,
    onDataChange: (id: number, newName: string, newLastName: string, newPositionName: string) => void
    sortEmployeeData: (sortByElement: string) => void
}

const Employees: React.FC<Props> = (props) => {

    const {employees, employeeFilter, onDeleteEmployee, onDataChange, sortEmployeeData} = props;

    return (
        <div>
            <Search employeeFilter={employeeFilter} sortEmployeeData={sortEmployeeData}/>
            <EmployeesList employees={employees} onDeleteEmployee={onDeleteEmployee} onDataChange={onDataChange}/>
            {employees.length > 10 ? <Paginator/> : null}
        </div>
    );
};

export default Employees;
