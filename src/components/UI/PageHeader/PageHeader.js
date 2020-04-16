import PropTypes from 'prop-types';
import './PageHeader.scss';
import React from 'react';

function PageHeader(props) {
    return (
        <header className="PageHeader">
            <h1 className="gradientText">{props.Title}</h1>
            <p className="lead text-muted">{props.Text}</p>
        </header>
    )
}

PageHeader.propTypes = {
    header: PropTypes.string,
    text: PropTypes.string
}

export default PageHeader

