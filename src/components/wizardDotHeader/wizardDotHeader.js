import React from 'react'
import PropTypes from 'prop-types'
import './wizardDotHeader.scss'
import { useStoreState } from 'easy-peasy'


function WizardDotHeader(props) {
    const stage = useStoreState(state => state.registerForm.currentFormView)

    return (
        <React.Fragment>
            <ul class="wizrdLine">
                {props.Stages.map((value, index) => (
                    <li key={value} className={stage === index && "active"}>{value}</li>
                ))}
            </ul>
        </React.Fragment>
    )
}

WizardDotHeader.propTypes = {

}

export default WizardDotHeader

