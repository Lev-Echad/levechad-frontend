import { RegisterFormContext } from '../../../../contexts/registerForm.context';
import React, { useContext } from 'react'

function SendSmsStart(props) {

    const {
        sendUserAuthSms: sendUserPhoneAuth,
        userDetails,
        setUserDetails,
        setSmsSent
    } = useContext(RegisterFormContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        sendUserPhoneAuth(userDetails.tel); // API req here
        setSmsSent(true);
    }

    const handleChange = (e) => {
        const tmpUser = { ...userDetails };
        const releventKey = e.target.name;
        const inputValue = e.target.value;
        tmpUser[releventKey] = inputValue;
        setUserDetails(tmpUser);
    };

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    id="tel"
                    name="tel"
                    type="tel"
                    className="form-control big-text"
                    onChange={handleChange}
                    value={userDetails.tel}
                    placeholder="הזינו מספר טלפון"
                    required
                />
                <button type="submit" className="btn btn-lg mt-2 btn-success">קבלת קוד ב-SMS</button>
            </form>
        </React.Fragment>
    )
};
export default SendSmsStart;

