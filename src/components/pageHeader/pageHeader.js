import React from 'react'
import PropTypes from 'prop-types'
import './pageHeader.scss'
import { Container } from 'reactstrap'

function PageHeader(props) {
    return (
        <div className="pageHeader">
            <h1 className="gradientText">{props.Title}</h1>
            <p className="lead text-muted">{props.Text}</p>
        </div>
    )
}

PageHeader.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string
}

export default PageHeader

