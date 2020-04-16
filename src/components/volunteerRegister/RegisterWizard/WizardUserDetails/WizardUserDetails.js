import { RegisterFormContext } from '../../../../contexts/RegisterFormContext';
import TransportationInput from './TransportationInput/TransportationInput';
import LanguagesInput from './LanguagesInput/LanguagesInput';
import FirstNameInput from './FirstNameInput/FirstNameInput';
import LastNameInput from './LastNameInput/LastNameInput';
import AddressInput from './AddressInput/AddressInput';
import classes from './WizardUserDetails.module.scss';
import GenderInput from './GenderInput/GenderInput';
import AreasInput from './AreasInput/AreasInput';
import RangeInput from './RangeInput/RangeInput';
import DateInput from './DateInput/DateInput';
import CityInput from './CityInput/CityInput';
import React, { useContext } from 'react';
import IdInput from './IdInput/IdInput';
import Msg from '../../../UI/Msg/Msg';

function RegisterWizardUserDetails() {
    
    const { setFormView: setWizardStage,
        userDetails,
        setUserDetails,
        setGenOptions,
        setTransportation,
        setLenOptions,
        setAreas,
        setRange,
        setErr,
        err
    } = useContext(RegisterFormContext);
    
    const handleSubmit = (e) => {
        e.preventDefault();
        for (const item in userDetails) {
            if(typeof userDetails[item] == typeof {}) {
                const keys = Object.keys(userDetails[item]);
                if(keys.length === 0){
                    setErr(true);
                    return
                }                
            }
            else if(userDetails[item].length === 0) {
                setErr(true);
                return
            }
            else if(userDetails.id.length !== 9) {            
                setErr(true);
                return
            }            
        }
        setWizardStage(2);
    };
    
    const handleChange = (e) => {        
        const tmpUser = { ...userDetails };
        const releventKey = e.target.name;
        const inputValue = e.target.value;
        tmpUser[releventKey] = inputValue;        
        setUserDetails(tmpUser);
    };
    
    const handleUserFeilds = (option, arr) => {
        if(option) {
            for (let item of option) {
                arr.push(item.value);
            }
        }
    }

    const handleChangeOption = (option, type) => {
        const tmpUser = { ...userDetails };
        if(type === "GENDER") {
            setGenOptions(option);
            tmpUser.gender = option.value;
        }
        else if (type === "LANGUAGE") {
            setLenOptions(option);
            const languages = [];
            handleUserFeilds (option, languages);
            tmpUser.languages = languages;
        }
        else if (type === "TRANSPORTATION") {
            setTransportation(option);
            const transportation = [];
            handleUserFeilds (option, transportation);
            tmpUser.transportation = transportation;
        }
        else if (type === "AREAS") {
            setAreas(option);
            const areas = [];
            handleUserFeilds (option, areas);
            tmpUser.areas = areas;
        }
        setUserDetails(tmpUser);
    };

    const changeSliderHandler = (e) => {
        const tmpUser = { ...userDetails };
        setRange(e.target.value);
        tmpUser.daysInWeek = e.target.value;
        setUserDetails(tmpUser);
    };

    // let dateDiff = Math.abs(new Date() - new Date(userDetails.birthday)) < 31536000000 * 16;
    
    // const { id } = userDetails;

    return (
        <React.Fragment>
            {console.log(userDetails)
            }
            <form onSubmit={handleSubmit} className={classes.Form}>
                <div className={classes.Container}>
 
                    <FirstNameInput change={handleChange} />
                    <LastNameInput change={handleChange} />
                    <IdInput change={handleChange} />
                    <DateInput change={handleChange} />

                    {/* {dateDiff && (
                        <input
                            // id="ads"
                            name='id'
                            type="number"
                            className="form-control mt-2"
                            onChange={handleChange}
                            value={id}
                            placeholder="תעודת זהות"
                        />
                    )} */}

                    <GenderInput changeOption={handleChangeOption} />
                    <LanguagesInput changeOption={handleChangeOption} />
                    <CityInput change={handleChange} />
                    <AddressInput change={handleChange} />
                    <TransportationInput changeOption={handleChangeOption} />
                    <AreasInput changeOption={handleChangeOption} />
                    <RangeInput changeSlider={changeSliderHandler} />
        
                    <div className={classes.checkbox}>   
                        <span>מאשר שקראתי את התקנון</span>
                        <input type="checkbox" />
                    </div>

                    {err ? <Msg>אנא מלא/י את כל השדות, ת.ז חייב להיות 9 ספרות</Msg> : null }
                    <button type="submit" className="btn btn-lg mt-3 mb-3 btn-success">
                        המשך
                    </button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default RegisterWizardUserDetails;