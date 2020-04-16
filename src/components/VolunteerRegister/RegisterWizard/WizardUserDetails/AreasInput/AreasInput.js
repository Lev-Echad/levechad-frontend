import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import classes from './AreasInput.module.scss';
import React, { useContext } from 'react';
import Select from 'react-select';

const option = [
    {value: "חלוקת מזון", label: "חלוקת מזון"},
    {value: "משלוח תרופות", label: "משלוח תרופות"},
    {value: "הסעות", label: "הסעות"},
    {value: "סיוע לעובדים חיוניים", label: "סיוע לעובדים חיוניים"},
    {value: "תמיכה טלפונית", label: "תמיכה טלפונית"},
    {value: "עזרה במשפחתונים", label: "עזרה במשפחתונים"}
];


const AreasInput = (props) => {

    const { areas } = useContext(RegisterFormContext);

    return (
        <Select
            value={areas}
            onChange={(option) => props.changeOption(option, "AREAS")}
            options={option}
            placeholder="תחומי התנדבות"
            isSearchable
            isMulti
            className={["mt-2 !important", classes.Select].join(' ')}
        />
    );

}

export default AreasInput;