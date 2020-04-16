import { sendUserAuthSms, authUserPincodeSms } from '../api/registerApi';
import React, { useState, createContext } from 'react';

const initialUser = {
    firstName: '',
    lastName: '',
    id: '',
    birthday: '',
    tel: '',
    gender: '',
    address: '',
    city: '',
    daysInWeek: '5',
    areas: [],
    transportation: [],
    languages: []
};

export const RegisterFormContext = createContext();

const RegisterFormProvider = (props) => {

    const [formView, setFormView] = useState(0);
    const [userDetails, setUserDetails] = useState(initialUser);
    const [smsSent, setSmsSent] = useState(false);
    const [authSmsPincode, setAuthSmsPincode] = useState('');
    const [transportation, setTransportation] = useState(null);
    const [smsAuthed, setSmsAuthed] = useState(false);
    const [genOptions, setGenOptions] = useState(null);
    const [lenOptions, setLenOptions] = useState(null);
    const [err, setErr] = useState(false);
    const [areas, setAreas] = useState(null);
    const [range, setRange] = useState(5);

    return (
        <RegisterFormContext.Provider value={{
            formView,
            setFormView,
            userDetails,
            setUserDetails,
            smsSent,
            setSmsSent,
            sendUserAuthSms,
            authUserPincodeSms,
            authSmsPincode,
            setAuthSmsPincode,
            smsAuthed,
            setSmsAuthed,
            genOptions,
            setGenOptions,
            lenOptions,
            setTransportation,
            transportation,
            setLenOptions,
            areas,
            setAreas,
            range,
            setRange,
            err,
            setErr
        }}>
            {props.children}
        </RegisterFormContext.Provider>
    )
};

export default RegisterFormProvider;