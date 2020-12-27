import React from 'react';
import PropTypes from 'prop-types';
import Headers from '../Headers';

Layouts.propTypes = {

};

function Layouts(props) {
    return (
        <>
            <Headers />
            {props.children}

        </>
    );
}

export default Layouts;