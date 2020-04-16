import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import React, { useContext } from 'react';

const DateInput = (props) => {

    const { userDetails } = useContext(RegisterFormContext);
    const { birthday } = userDetails;

    return (
        <input
            // id="bday"
            name='birthday'
            type="date"
            className="form-control mt-2"
            onChange={props.change}
            value={birthday}
            placeholder="תאריך לידה"
            required
        />
    );
}

export default DateInput;