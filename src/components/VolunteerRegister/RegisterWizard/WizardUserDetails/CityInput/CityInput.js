import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import React, { useContext } from 'react';

const CityInput = (props) => {

    const { userDetails } = useContext(RegisterFormContext);
    const { city } = userDetails;

    return (
        <input
            // id="city"
            name='city'
            type="text"
            className="form-control mt-2"
            onChange={props.change}
            value={city}
            placeholder="עיר"
            required
        />
    );

}

export default CityInput;