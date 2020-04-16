import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import classes from './GenderInput.module.scss';
import React, { useContext } from 'react';
import Select from 'react-select';

const option = [
    {value: "זכר", label: "זכר"},
    {value: "נקבה", label: "נקבה"}
];

const GenderInput = (props) => {
    
    const { genOptions } = useContext(RegisterFormContext);

    return (
        <Select
            value={genOptions}
            onChange={(option) => props.changeOption(option, "GENDER")}
            options={option}
            placeholder="מין"
            isSearchable
            className={["mt-2 !important", classes.Select].join(' ')}
        />
    );

}

export default GenderInput;