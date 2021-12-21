import React, {useState} from 'react';
import {EmployeesDataType} from "../../../../App";
import {StyledTableCell} from "../EmployeesList";
import DeleteIcon from '@mui/icons-material/Delete';
import '../EmployeesList.css';

/* IMG */
import edit from '../../../../assets/img/edit.png';
import accept from '../../../../assets/img/checked.png';

export interface Props {
    employee: EmployeesDataType,
    onEmployeeDataChange: (id: number, newName: string, newLastName: string, newPositionName: string) => void
    onDeleteEmployee: (id?: number) => void
}

const EmployeesItem: React.FC<Props> = (props) => {

    const {id, name, lastName, position} = props.employee;
    const {onEmployeeDataChange, onDeleteEmployee} = props;

    const [isEditMode, setEditMode] = useState(false);
    const [newNameInputValue, setNewNameInputValue] = useState(name);
    const [newLastNameInputValue, setNewLastNameInputValue] = useState(lastName);
    const [newPositionInputValue, setNewPositionInputValue] = useState(position);

    const onChangeNameInputValue = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;
        setNewNameInputValue(target.value)
    }
    const onChangeLastNameInputValue = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;
        setNewLastNameInputValue(target.value)
    }
    const onChangePositionInputValue = (e: React.FormEvent<EventTarget>) => {
        const target = e.target as HTMLInputElement;
        setNewPositionInputValue(target.value)
    }

    return (
        <>
            <StyledTableCell data-testid={"name"} component="th" scope="row">
                {isEditMode ?
                    <input type="text" value={newNameInputValue as string}
                           onChange={(e) => onChangeNameInputValue(e)}
                    /> :
                    name}
            </StyledTableCell>
            <StyledTableCell data-testid={"lastName"} component="th" scope="row">
                {isEditMode ?
                    <input type="text" value={newLastNameInputValue as string}
                           onChange={(e) => onChangeLastNameInputValue(e)}
                    /> :
                    lastName}
            </StyledTableCell>
            <StyledTableCell data-testid={"position"} component="th" scope="row"
                             onDoubleClick={() => setEditMode(true)}>
                {isEditMode ?
                    <input type="text" value={newPositionInputValue as string}
                           onChange={(e) => onChangePositionInputValue(e)}
                    /> :
                    position}
            </StyledTableCell>
            {/* EDIT AND DELETE BUTTONS */}
            <StyledTableCell className={"button-wrapper"}>
                {
                    isEditMode ? <span onClick={() => {
                        setEditMode(false);
                        onEmployeeDataChange(id as number, newNameInputValue as string, newLastNameInputValue as string, newPositionInputValue as string)
                    }} className={"edit-button"}>
                    <img src={accept} alt=""/>
                </span> : <span onClick={() => setEditMode(true)} className={"edit-button"}>
                    <img src={edit} alt=""/>
                </span>
                }
                <span onClick={() => onDeleteEmployee(id)} className={"delete-button"}>
                    <DeleteIcon
                        style={{fill: "#FC3D14"}}/>
                </span>
            </StyledTableCell>
        </>
    );
};

export default EmployeesItem;
