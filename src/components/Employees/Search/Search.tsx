import React, {useState} from 'react';
import TextField from "@mui/material/TextField";
import Box from "@mui/material/Box";
import './Search.css';

export interface Props {
    employeeFilter: (searchValue: string) => void
}

const Search: React.FC<Props> = (props) => {

    const {employeeFilter} = props;

    const [searchValue, setSearchValue] = useState<string>('');

    const handleSearchInputChange = (e: React.FormEvent<EventTarget>) => {
        let target = e.target as HTMLInputElement;
        setSearchValue(target.value);
        employeeFilter(target.value);
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
            </div>
    );
};

export default Search;
