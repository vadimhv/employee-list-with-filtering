import React, {useState} from 'react';
import {EmployeesDataType} from "../../App";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import {Button} from "@mui/material";

export interface Props {
    onNameChange: (name: string) => void,
    onLastNameChange: (lastName: string) => void,
    onPositionChange: (position: string) => void,
    addEmployee: (name: string, lastName: string, position: string) => void
}

const AddEmployee: React.FC<Props> = (props) => {

    const {onNameChange, onLastNameChange, onPositionChange, addEmployee} = props;

    const [name, setName] = useState<string>('');
    const [lastName, setLastName] = useState<string>('');
    const [position, setPosition] = useState<string>('');

    const handleSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        addEmployee(name, lastName, position);
        setName('');
        setLastName('');
        setPosition('');
    };
    const handleSetName = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;
        onNameChange(target.value);
        setName(target.value);
    }
    const handleSetLastName = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;
        onLastNameChange(target.value);
        setLastName(target.value);
    }
    const handleSetPosition = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;
        onPositionChange(target.value);
        setPosition(target.value);
    }

    return (
        <Box
            data-testid="login-form"
            component="form"
            sx={{
                '& .MuiTextField-root': {m: 1, width: '25ch'},
            }}
            noValidate
            autoComplete="off"
        >
            <div>
                <TextField inputProps={{"data-testid": "name"}} name="name" id="outlined-search" required label="Name"
                           type="search"
                           value={name}
                           onChange={handleSetName}/>
            </div>
            <div>
                <TextField inputProps={{"data-testid": "lastName"}} name="lastName" id="outlined-search" required fullWidth
                           label="Last name"
                           type="search" value={lastName}
                           onChange={handleSetLastName}/>
            </div>
            <div>
                <TextField inputProps={{"data-testid": "position"}} name="position" id="outlined-search" fullWidth label="Position"
                           type="search"
                           value={position}
                           onChange={handleSetPosition}/>
            </div>
            <Button data-testid="submit" name="submit" variant="contained" fullWidth={true} onClick={handleSubmit}>ADD</Button>
        </Box>
    );
};

export default AddEmployee;
