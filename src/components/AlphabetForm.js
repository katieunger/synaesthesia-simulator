import React from 'react';
import LetterList from './LetterList';

class AlphabetForm extends React.Component {
    state = {
        letters: ['a','b','c','d','e', 'f']
    }

    render() {
        return (
            <div className="ui segment">
                <LetterList letters={this.state.letters} />
            </div>
        );
    }    
};

export default AlphabetForm;