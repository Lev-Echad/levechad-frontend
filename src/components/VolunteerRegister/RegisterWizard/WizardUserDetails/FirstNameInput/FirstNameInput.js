import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import React, { useContext } from 'react';

const FirstNameInput = (props) => {

    const { userDetails } = useContext(RegisterFormContext);
    const { firstName } = userDetails;

    return (
        <input
            // id="fn"
            name='firstName'
            type="text"
            className="form-control"
            onChange={props.change}
            value={firstName}
            placeholder="שם פרטי"
            required
        />
    );
};

export default FirstNameInput;