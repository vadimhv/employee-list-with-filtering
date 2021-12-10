import React from 'react';
import Search from "./Search/Search";
import EmployeesList from "./EmployeesList/EmployeesList";
import Paginator from "./Paginator/Paginator";
import {EmployeesDataType} from "../../App";

interface Props {
    employees: Array<EmployeesDataType>,
    employeeFilter: (searchValue: string) => void
}

const Employees: React.FC<Props> = (props) => {

    const {employees, employeeFilter} = props;

    return (
        <div>
            <Search employeeFilter={employeeFilter}/>
            <EmployeesList employees={employees}/>
            {employees.length > 10 ? <Paginator/> : null}
        </div>
    );
};

export default Employees;
