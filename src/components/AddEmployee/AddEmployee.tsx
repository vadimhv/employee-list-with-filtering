import React, {useState} from 'react';
import {EmployeesDataType} from "../../App";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

export interface Props {
    addEmployee: (employeeData: EmployeesDataType) => void;
    employees: Array<EmployeesDataType>
}

const AddEmployee: React.FC<Props> = (props) => {

    const {addEmployee, employees} = props;

    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [position, setPosition] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault()
        const employeeData = {
            id: employees.length,
            name: name,
            lastName: lastName,
            position: position
        }
        if(name.length > 0 && lastName.length > 0) {
            addEmployee(employeeData);
        }
        setName('');
        setLastName('');
        setPosition('');
    };

    return (
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
            data-testid="login-form"
            name="login-form"
        >
            <div>
                <TextField id="outlined-search" required label="Name" type="search" value={name}
                           data-testid="name"
                           name="name"
                           onChange={(e) => setName(e.target.value)}/>
            </div>
            <div>
                <TextField id="outlined-search" required fullWidth label="Last name" type="search" value={lastName} data-testid="lastName"
                           onChange={(e) => setLastName(e.target.value)}/>
            </div>
            <div>
                <TextField id="outlined-search" fullWidth label="Position" type="search" value={position} data-testid="position"
                           onChange={(e) => setPosition(e.target.value)}/>
            </div>
            <Button variant="contained" fullWidth={true} onClick={handleSubmit}>ADD</Button>
        </Box>
    );
};

export default AddEmployee;
