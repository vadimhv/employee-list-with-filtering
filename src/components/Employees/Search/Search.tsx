import React, {useState} from 'react';

interface Props {
    employeeFilter: (searchValue: string) =>  void
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
        <div className={'search-wrapper'}>
            <input type="text" placeholder={'Search...'} value={searchValue} onChange={(e) => handleSearchInputChange(e)}/>
        </div>
    );
};

export default Search;
