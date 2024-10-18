import React from 'react';
import PropTypes from 'prop-types'

const Flex = (props) => {
    const {children, flDr, jsCn, alIt}=props
    const styles ={
        display: 'flex',
        flexDirection: flDr,
        justifyContent: jsCn,
        alignItems: alIt
    }
    return (
        <div style={styles}>
            {children}
        </div>
    );
}

Flex.propTypes={
    children:PropTypes.object,
    flDr:PropTypes.string,
    jsCn:PropTypes.string,
    alIt:PropTypes.string
}
Flex.defaultProps ={
    flDr:'row',
    jsCn:'flex-start',
    alIt:'stretch'
}

export default Flex;
