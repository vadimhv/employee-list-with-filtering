import React, {useEffect, useState} from 'react';
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import {Route, Routes} from "react-router-dom";
import Employees from "./components/Employees/Employees";
import AddEmployee from "./components/AddEmployee/AddEmployee";

export interface EmployeesDataType {
    id?: number,
    name: string,
    lastName: string,
    position: string | null
}

const App = () => {
    const [employees, setEmployees] = useState<Array<EmployeesDataType>>([
        {id: 0, name: 'John', lastName: 'Doe', position: 'manager'},
        {id: 1, name: 'Peter', lastName: 'Foe', position: 'manager'},
        {id: 2, name: 'Andrew', lastName: 'Moe', position: 'manager'},
        {id: 3, name: 'Roman', lastName: 'Goe', position: 'manager'},
    ]);
    const [employeesToShow, setEmployeesToShow] = useState<Array<EmployeesDataType>>([]);

    useEffect(() => {
        setEmployeesToShow(employees);
    }, [employees])

    const filterValidation = (text: string | null, searchText: string): boolean | undefined => {
        return text?.toLowerCase().includes(searchText.toLowerCase());
    }
    const onFilterEmployee = (searchValue: string): void => {
        setEmployeesToShow(employees.filter(e => filterValidation(e.name, searchValue) || filterValidation(e.lastName, searchValue) || filterValidation(e.position, searchValue)));
    }
    const onAddEmployee = (name: string, lastName: string, position: string): void => {
        const employeeData = {
            id: employees.length,
            name: name,
            lastName: lastName,
            position: position
        }
        setEmployees([...employees, employeeData]);
        setEmployeesToShow(employees);
    }
    const onDeleteEmployee = (id?: number) => {
        setEmployees(employeesToShow.filter(emp => id !== emp.id));
    }
    const onEmployeeDataChange = (id: number, newName: string, newLastName: string, newPositionName: string) => {
        setEmployees(employees.filter(emp => {
            if (id === emp.id) {
                emp.name = newName;
                emp.lastName = newLastName;
                emp.position = newPositionName;
            }
            return emp
        }))
    }
    const onSortEmployeeData = (sortByElement: string) => {
        switch (sortByElement) {
            case 'name':
                setEmployeesToShow(employeesToShow.slice().sort((a, b) => a.name > b.name ? 1 : -1));
                break;
            case 'lastName':
                setEmployeesToShow(employeesToShow.slice().sort((a, b) => a.lastName > b.lastName ? 1 : -1));
                break;
            case 'position':
                setEmployeesToShow(employeesToShow.slice().sort((a, b) => {
                    if (a.position && b.position && (a.position > b.position)) {
                        return 1;
                    } else {
                        return -1;
                    }
                }));
                break;
            default:
                setEmployeesToShow(employees);
        }
    }

    return (
        <div className={'app-wrapper d-flex'}>
            <Navbar/>
            <div className={"content-wrapper"}>
                <Routes>
                    <Route path={'/'}
                           element={<Employees onFilterEmployee={onFilterEmployee} employees={employeesToShow}
                                               onDeleteEmployee={onDeleteEmployee} onEmployeeDataChange={onEmployeeDataChange}
                                               onSortEmployeeData={onSortEmployeeData}/>}/>
                    <Route path={'/add-employees'}
                           element={<AddEmployee onAddEmployee={onAddEmployee}/>}/>

                </Routes></div>
        </div>
    );
};

export default App;
