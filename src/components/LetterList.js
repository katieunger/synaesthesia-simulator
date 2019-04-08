import React from 'react';
import LetterItem from './LetterItem';

const LetterList = ({alphabet, onLetterSelect}) => {
    //const renderedList = Object.keys(obj).map((key) => {
    const renderedList = alphabet.map((obj, index) => {
        return ( 
            <LetterItem 
                key={obj.letter}
                letter={obj.letter}
                color={obj.color}
                index={index}
                onLetterSelect={onLetterSelect}
            />)
    })
        
    //     );
    // //Object.keys(obj).forEach(key => {
        
    // });

    return (
        <div className="ui segment">
            <div className="ui relaxed massive horizontal list">
                {renderedList}
            </div>
        </div>
    );
};

export default LetterList;