import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import classes from './TransportationInput.module.scss';
import React, { useContext } from 'react';
import Select from 'react-select';

const option = [
    {value: "רכב", label: "רכב"},
    {value: "קטנוע/אופנוע", label: "קטנוע/אופנוע"},
    {value: "תחב''צ", label: "תחב''צ"},
    {value: "דו גלגלי", label: "דו גלגלי"},
    {value: "רגלי", label: "רגלי"},
];


const TransportationInput = (props) => {

    const { transportation } = useContext(RegisterFormContext);

    return (
        <Select
            value={transportation}
            onChange={(option) => props.changeOption(option, "TRANSPORTATION")}
            options={option}
            placeholder="התניידות"
            isSearchable
            isMulti
            className={["mt-2 !important", classes.Select].join(' ')}
        />
    );
}

export default TransportationInput;