import React from 'react';
import SearchFilter from "./SearchFilter/SearchFilter";
import SortingFilter from "./SortingFilter/SortingFilter";

interface Props {
    onFilterEmployee: (searchValue: string) => void,
    onSortEmployeeData: (sortByElement: string) => void
}

const Filters: React.FC<Props> = (props) => {

    const {onFilterEmployee, onSortEmployeeData} = props;

    return (
        <div>
            <SearchFilter onFilterEmployee={onFilterEmployee} />
            <SortingFilter onSortEmployeeData={onSortEmployeeData} />
        </div>
    );
};

export default Filters;
