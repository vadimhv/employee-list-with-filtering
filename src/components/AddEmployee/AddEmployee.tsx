import React, {useState} from 'react';
import TextField from '@mui/material/TextField';
import './AddEmployee.css';
import {useFormik} from 'formik';
import {EmployeesDataType} from "../../App";
import {Button} from "@mui/material";
import Box from "@mui/material/Box";
import InfoMessage from '../common/InfoMessage'

export interface Props {
    addEmployee: (name: string, lastName: string, position: string) => void
}

const AddEmployee: React.FC<Props> = (props) => {

    const {addEmployee} = props;

    const [addedMessage, setAddedMessage] = useState(false);

    const initialValues: EmployeesDataType = {name: '', lastName: '', position: ''};

    const formik = useFormik({
        initialValues: initialValues,
        validate: values => {
            const errors = {} as {name: string, lastName: string};
            if (!values.name) {
                errors.name = 'The field is required';
            }
            if (!values.lastName) {
                errors.lastName = 'The field is required'
            }
            return errors;
        },
        onSubmit: (values, {setSubmitting}) => {
            addEmployee(values.name, values.lastName, values.position as string);
            values.name = "";
            values.lastName = "";
            values.position = "";
            setAddedMessage(true);
            setTimeout(() => setAddedMessage(false), 2000);
            setSubmitting(false)
        },
    });
    return (
        <div>
            <Box
                data-testid="login-form"
                component="form"
                className="add-employee-form"
                sx={{
                    '& .MuiTextField-root': {m: 1, width: '25ch'},
                }}
                noValidate
                autoComplete="off"
                onSubmit={formik.handleSubmit}
            >
                <div className={"inputs-wrapper"}>
                    <TextField inputProps={{"data-testid": "name"}} name="name" id="outlined-search" required
                               label="Name"
                               type="search"
                               value={formik.values.name}
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}/>
                </div>
                {formik.errors.name && formik.touched.name && <InfoMessage text={formik.errors.name} type={"error"} />}
                <div className={"inputs-wrapper"}>
                    <TextField inputProps={{"data-testid": "lastName"}} name="lastName" id="outlined-search" required
                               fullWidth
                               label="Last name"
                               type="search" value={formik.values.lastName}
                               onBlur={formik.handleBlur}
                               onChange={formik.handleChange}/>
                </div>
                {formik.errors.lastName && formik.touched.lastName && <InfoMessage text={formik.errors.lastName} type={"error"} />}
                <div className={"inputs-wrapper"}>
                    <TextField inputProps={{"data-testid": "position"}} name="position" id="outlined-search" fullWidth
                               label="Position"
                               type="search"
                               value={formik.values.position}
                               onChange={formik.handleChange}/>
                </div>
                <div>
                    <Button data-testid="submit" name="submit" type={"submit"} variant="contained" fullWidth={true} disabled={formik.isSubmitting}
                    >ADD</Button>
                </div>
                {addedMessage && Object.keys(formik.errors).length === 0 ?  <InfoMessage text={"Employee was added"} type={"success"} /> : null}
            </Box>
        </div>
    );
};

export default AddEmployee;
