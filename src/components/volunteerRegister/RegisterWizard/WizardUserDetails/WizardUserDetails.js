import { RegisterFormContext } from '../../../../contexts/registerForm.context';
import React, { useContext } from 'react';

function RegisterWizardUserDetails(props) {

    const { 
        setFormView: setWizardStage,
        userDetails,
        setUserDetails
    } = useContext(RegisterFormContext);

    const handleSubmit = () => {
        console.log(userDetails);
        setWizardStage(2);
    };

    const handleChange = (e) => {
        const tmpUser = { ...userDetails };
        const releventKey = e.target.name;
        const inputValue = e.target.value;
        tmpUser[releventKey] = inputValue;
        setUserDetails(tmpUser);
    };

    let dateDiff = Math.abs(new Date() - new Date(userDetails.birthday)) < 31536000000 * 16;

    const { firstName, lastName, id, birthday } = userDetails;
    return (
        <React.Fragment>
            <form onSubmit={handleSubmit}>
                <input
                    id="fn"
                    name='firstName'
                    type="text"
                    className="form-control w-100px"
                    onChange={handleChange}
                    value={firstName}
                    placeholder="שם פרטי"
                />
                <input
                    id="ln"
                    name='lastName'
                    type="text"
                    className="form-control w-100px mt-2"
                    onChange={handleChange}
                    value={lastName}
                    placeholder="שם משפחה"
                />
                <input
                    id="id"
                    name='id'
                    type="text"
                    className="form-control w-100px mt-2"
                    onChange={handleChange}
                    value={id}
                    placeholder="תעודת זהות"
                />
                <input
                    id="bday"
                    name='birthday'
                    type="date"
                    className="form-control w-100px mt-2"
                    onChange={handleChange}
                    value={birthday}
                    placeholder="תאריך לידה"
                />

                {dateDiff && (
                    <input
                        id="ads"
                        name='id'
                        type="text"
                        className="form-control w-100px mt-2"
                        onChange={handleChange}
                        value={id}
                        placeholder="תעודת זהות"
                    />
                )}

                <button type="submit" className="btn btn-lg mt-2 btn-success">קבלת קוד ב-SMS</button>
            </form>
        </React.Fragment>
    )
}
export default RegisterWizardUserDetails;

