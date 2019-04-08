import React from 'react';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';
import './LetterItem.css';

const LetterItem = ({letter, color, index, onLetterSelect}) => {
        return (
            //console.log(key, letter)
            <div className="letter-item item">
                <div className="content">
                    <ColorPicker
                        onChange={(selectedColor) => onLetterSelect(index, `${letter}`, selectedColor)}
                        animation="slide-up"
                    >
                        <span>
                            <h1 style={{color: `${color}`, textTransform: "uppercase", fontWeight: "bolder"}}>
                                {letter}
                            </h1>
                        </span>
                    </ColorPicker>
                </div>
            </div>
        );
};

export default LetterItem;