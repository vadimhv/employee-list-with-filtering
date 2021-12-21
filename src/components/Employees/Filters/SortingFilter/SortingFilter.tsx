import React, {useState} from 'react';

interface Props {
    onSortEmployeeData: (sortByElement: string) => void
}

const SortingFilter:React.FC<Props> = (props) => {

    const {onSortEmployeeData} = props;

    const [selectValue, changeSelectValue] = useState<string>('default');

    const handleFilterSubmit = (e: React.FormEvent<EventTarget>) => {
        e.preventDefault();
        onSortEmployeeData(selectValue);
    }

    return (
        <form onSubmit={handleFilterSubmit} className={'select-form'}>
            <select value={selectValue} onChange={(e) => changeSelectValue(e.target.value)} name="employee" className={'select'}>
                <option value="default">Can sort here...</option>
                <option value="name">Sort by name</option>
                <option value="lastName">Sort by last name</option>
                <option value="position">Sort by position</option>
            </select>
            <input type="submit" value={'filter'} className={'select-button'}/>
        </form>
    );
};

export default SortingFilter;
