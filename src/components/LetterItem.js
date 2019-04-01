import React from 'react';
import 'rc-color-picker/assets/index.css';
import ColorPicker from 'rc-color-picker';
import './LetterItem.css';

class LetterItem extends React.Component {
    state = {
        color: '#cccccc'
    }

    changeHandler = (object) => {
        this.setState({ color: object.color });
        console.log(this.state.color);
        // console.log(colors);
    }

    // closeHandler= (colors) => {
    //     console.log(colors);
    // }

    render() {
        return (
            <div className="letter-item item">
                <div class="content">
                    <ColorPicker
                        onChange={this.changeHandler} 
                        animation="slide-up"
                    >
                        <span>
                            <h1 style={{color: `${this.state.color}`, textTransform: "uppercase", fontWeight: "bolder"}}>
                                {this.props.letter}
                            </h1>
                        </span>
                    </ColorPicker>
                </div>
            </div>
        );
    }
};

export default LetterItem;