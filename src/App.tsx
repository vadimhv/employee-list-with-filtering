import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Employees from "./components/Employees/Employees";
import AddEmployee from "./components/AddEmployee/AddEmployee";

export interface EmployeesDataType {
    id: number,
    name: string,
    lastName: string,
    position: string | null
}

function App() {

    const [employees, setEmployees] = useState<Array<EmployeesDataType>>([
        {id: 0, name: 'John', lastName: 'Doe', position: 'manager'},
        {id: 1, name: 'Peter', lastName: 'Doe', position: 'manager'},
        {id: 2, name: 'Andrew', lastName: 'Doe', position: 'manager'},
        {id: 3, name: 'Roman', lastName: 'Goe', position: 'manager'},
    ]);
    const [name, onNameChange] = useState('');
    const [lastName, onLastNameChange] = useState('');
    const [position, onPositionChange] = useState('');

    useEffect(() => {
        setEmployeesToShow(employees);
    }, [employees])

    const [employeesToShow, setEmployeesToShow] = useState<Array<EmployeesDataType>>([]);

    const filterValidation = (text: string | null, searchText: string): boolean | undefined => {
        return text?.toLowerCase().includes(searchText.toLowerCase());
    }

    const employeeFilter = (searchValue: string): void => {
        setEmployeesToShow(employees.filter(e => filterValidation(e.name, searchValue) || filterValidation(e.lastName, searchValue) || filterValidation(e.position, searchValue)));
    }


    const onAddEmployee = (): void => {
        const employeeData = {
            id: employees.length,
            name: name,
            lastName: lastName,
            position: position
        }
        setEmployees([...employees, employeeData]);
        setEmployeesToShow(employees);
    }

    return (
        <div className={'app-wrapper d-flex'}>
            <Navbar/>
            <div className={"content-wrapper"}>
                <Routes>
                    <Route path={'/'}
                           element={<Employees employeeFilter={employeeFilter} employees={employeesToShow}/>}/>
                    <Route path={'/add-employees'}
                           element={<AddEmployee addEmployee={onAddEmployee} onNameChange={onNameChange}
                                                 onLastNameChange={onLastNameChange}
                                                 onPositionChange={onPositionChange}/>}/>

                </Routes></div>
        </div>
    );
}

export default App;
