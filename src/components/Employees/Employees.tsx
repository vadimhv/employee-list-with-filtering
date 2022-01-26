import React from 'react';
import EmployeesList from "./EmployeesList/EmployeesList";
import Paginator from "./Paginator/Paginator";
import {EmployeesDataType} from "../../App";
import Filters from "./Filters/Filters";

interface Props {
    employees: Array<EmployeesDataType>,
    onFilterEmployee: (searchValue: string) => void,
    onDeleteEmployee: (id?: number ) => void,
    onEmployeeDataChange: (id: number, newName: string, newLastName: string, newPositionName: string) => void
    onSortEmployeeData: (sortByElement: string) => void
}

const Employees: React.FC<Props> = (props) => {

    const {employees, onFilterEmployee, onDeleteEmployee, onEmployeeDataChange, onSortEmployeeData} = props;

    return (
        <div>
            <Filters onFilterEmployee={onFilterEmployee} onSortEmployeeData={onSortEmployeeData}/>
            <EmployeesList employees={employees} onDeleteEmployee={onDeleteEmployee} onEmployeeDataChange={onEmployeeDataChange}/>
            {employees.length > 10 ? <Paginator/> : null}
        </div>
    );
};

export default Employees;
