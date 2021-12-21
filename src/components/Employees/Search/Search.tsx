import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import './Search.css';

export interface Props {
    employeeFilter: (searchValue: string) => void,
    sortEmployeeData: (sortByElement: string) => void
}

const Search: React.FC<Props> = (props) => {

    const {employeeFilter, sortEmployeeData} = props;

    const [searchValue, setSearchValue] = useState<string>('');
    const [selectValue, changeSelectValue] = useState<string>('default');

    const handleSearchInputChange = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        setSearchValue(target.value);
        employeeFilter(target.value);
    }

    const filterSubmitHandler = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        sortEmployeeData(selectValue);
    }

    return (
            <div>
                <Box
                    data-testid="filter-input"
                    sx={{
                        '& .MuiTextField-root': {m: 1, width: '25ch'},
                    }}
                >
                    <div>
                        <TextField inputProps={{"data-testid": "filterInput"}} name="filterInput" id="outlined-search" label="Search..."
                                   type="search"
                                   value={searchValue}
                                   fullWidth
                                   onChange={(e) => handleSearchInputChange(e)}/>
                    </div>
                </Box>
                <form onSubmit={filterSubmitHandler} className={'select-form'}>
                    <select value={selectValue} onChange={(e) => changeSelectValue(e.target.value)} name="employee" className={'select'}>
                        <option value="default">Can sort here...</option>
                        <option value="name">Sort by name</option>
                        <option value="lastName">Sort by last name</option>
                        <option value="position">Sort by position</option>
                    </select>
                    <input type="submit" value={'filter'} className={'select-button'}/>
                </form>
            </div>
    );
};

export default Search;
