import React from 'react';

import './no-results.styles.scss';
import Logo from '../../assets/logo.png';

const NoResult = () => {
    return (
        <div className="no-results">
            <img src={Logo} alt=""/>
        </div>
    )
}

export default NoResult;