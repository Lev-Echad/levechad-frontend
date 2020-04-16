import { RegisterFormContext } from '../../../../../contexts/RegisterFormContext';
import classes from './RangeInput.module.scss';
import React, { useContext } from 'react';

const RangeInput = (props) => {

    const { range } = useContext(RegisterFormContext);

    return (
        <div className={classes.Main}>
        <span className={classes.Des}>מספר התנדבויות בשבוע</span>
            <input
                type="range"
                min="0"
                max="10"
                value={range}
                className={classes.Slider}
                onChange={props.changeSlider}
                required
            />
            <div className={[classes.Selector, classes.position].join(' ')}
                style={range > 5 ? {left: `${100 - range * 10}%`} : range === 5 ? {left: `${50}%`} : {left: `${100 - range * 10}%`}}
            >
                <div className={classes.SelectBtn} />
                <div className={classes.Value}>{range}</div>
            </div>
        </div>
    );

}

export default RangeInput;