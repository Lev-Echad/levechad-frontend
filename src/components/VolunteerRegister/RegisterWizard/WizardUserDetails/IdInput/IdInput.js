import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import React, { useContext } from 'react';

const IdInput = (props) => {

    const { userDetails } = useContext(RegisterFormContext);
    const { id } = userDetails;

    return (
        <input
            // id="id"
            name='id'
            type="number"
            className="form-control mt-2"
            onChange={props.change}
            value={id}
            placeholder="תעודת זהות"
            required
        />
    );
}

export default IdInput;