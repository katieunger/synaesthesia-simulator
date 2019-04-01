import React from 'react';
import LetterList from './LetterList';

class AlphabetForm extends React.Component {
    state = {
        letters: ['a','b','c','d','e', 'f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
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