import React from 'react';
import LetterItem from './LetterItem';

const LetterList = (props) => {
    const renderedList = props.letters.map((letter) => {
        return ( 
            <LetterItem letter={letter} />
        );
    });

    return (
        <div className="ui horizontal list">
            {renderedList}
        </div>
    );
};

export default LetterList;