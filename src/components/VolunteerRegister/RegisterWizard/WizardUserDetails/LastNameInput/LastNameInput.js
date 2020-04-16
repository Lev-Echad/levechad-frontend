import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import React, { useContext } from 'react';

const LastNameInput = (props) => {

    const { userDetails } = useContext(RegisterFormContext);
    const { lastName } = userDetails;

    return (
        <input
            // id="ln"
            name='lastName'
            type="text"
            className="form-control mt-2"
            onChange={props.change}
            value={lastName}
            placeholder="שם משפחה"
            required
        />
    );

}

export default LastNameInput;