import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import classes from './LanguagesInput.module.scss';
import React, { useContext } from 'react';
import Select from 'react-select';

const option = [
    {value: "עברית", label: "עברית"},
    {value: "ערבית", label: "ערבית"},
    {value: "אנגלית", label: "אנגלית"},
    {value: "רוסית", label: "רוסית"},
    {value: "אמהרית", label: "אמהרית"},
    {value: "צרפתית", label: "צרפתית"},
    {value: "איטלקית", label: "איטלקית"},
    {value: "ספרדית", label: "ספרדית"},
    {value: "פורטוגזית", label: "פורטוגזית"},
    {value: "גרמנית", label: "גרמנית"},
    {value: "אחר", label: "אחר"}
];

const LanguagesInput = (props) => {

    const { lenOptions } = useContext(RegisterFormContext);

    return (
        <Select
            value={lenOptions}
            onChange={(option) => props.changeOption(option, "LANGUAGE")}
            options={option}
            placeholder="בחר שפה"
            isSearchable
            isMulti
            className={["mt-2 !important", classes.Select].join(' ')}
        />
    );
}

export default LanguagesInput;