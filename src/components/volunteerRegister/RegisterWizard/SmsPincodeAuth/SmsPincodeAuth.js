import { RegisterFormContext } from '../../../../contexts/RegisterFormContext';
import React, { useEffect, useContext } from 'react'

function SmsPincodeAuth(props) {

    const {
        setFormView: setWizardStage,
        authSmsPincode,
        setAuthSmsPincode,
        smsAuthed,
        setSmsAuthed
    } = useContext(RegisterFormContext)

    const handleChange = (e) => setAuthSmsPincode(e.target.value);
    const handleSubmit = (e) => {
        e.preventDefault();
        setSmsAuthed(true); //send api req here
    }

    useEffect(() => {
        if (smsAuthed) {
            setWizardStage(1)
        }
    }, [smsAuthed, setWizardStage])

    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    id="pincode"
                    name="pincode"
                    type="number"
                    className="form-control big-text"
                    onChange={handleChange}
                    value={authSmsPincode}
                    placeholder="קוד ב-sms"
                />
                <button type="submit" className="btn btn-lg mt-2 btn-success">אישור</button>
            </form>
        </React.Fragment>
    )
};
export default SmsPincodeAuth;

