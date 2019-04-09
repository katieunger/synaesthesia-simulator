import React from 'react';

const TextChar = ({char, color}) => {
    return <span style={{color: `${color}`}}>{char}</span>;
}

export default TextChar;