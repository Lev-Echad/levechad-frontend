import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import React, { useContext } from 'react';


const AddressInput = (props) => {

    const { userDetails } = useContext(RegisterFormContext);
    const { address } = userDetails;

    return (
        <input
            // id="address"
            name='address'
            type="text"
            className="form-control mt-2"
            onChange={props.change}
            value={address}
            placeholder="כתובת"
            required
        />
    );

}

export default AddressInput;