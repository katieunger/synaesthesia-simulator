import React from 'react';
import TextChar from './TextChar';

const TextDisplay = ({alphabet}) => {
    let text = "One morning, when Gregor Samsa woke from troubled dreams, he found himself transformed in his bed into a horrible vermin."
    let textArr = text.split("");
    const renderedText = textArr.map((char) => {
        const colorArr = alphabet.map((item) => {
            if (item.letter === char.toLowerCase()) {
                return <TextChar char={char} color={item.color}/>
            }
            return null;
        });
        return colorArr;
    })

    return (
        <div className="ui segment" id="textDisplay" style={{fontSize: "30px"}}>
            {renderedText}
        </div>
    );
}

export default TextDisplay;