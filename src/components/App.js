import React from 'react';
import LetterList from './LetterList';
import TextDisplay from './TextDisplay';


class App extends React.Component {
    state = {
        alphabet: [
            {letter:'a', color:'#cccccc'},
            {letter:'b', color:'#cccccc'},
            {letter:'c', color:'#cccccc'},
            {letter:'d', color:'#cccccc'},
            {letter:'e', color:'#cccccc'},
            {letter:'f', color:'#cccccc'},
            {letter:'g', color:'#cccccc'},
            {letter:'h', color:'#cccccc'},
            {letter:'i', color:'#cccccc'},
            {letter:'j', color:'#cccccc'},
            {letter:'k', color:'#cccccc'},
            {letter:'l', color:'#cccccc'},
            {letter:'m', color:'#cccccc'},
            {letter:'n', color:'#cccccc'},
            {letter:'o', color:'#cccccc'},
            {letter:'p', color:'#cccccc'}
        ]
    }

    componentDidMount() {
        console.log(this.state);
    }

    onLetterSelect = (index, selectedLetter, selectedColor) => {
        this.setState(state => {
            const alphabet = state.alphabet.map((item, i) => {
                if (i === index) {
                  return {letter:selectedLetter, color:selectedColor.color};
                } else {
                  return item;
                }
            });
        
            return {
            alphabet,
            };
        });
        console.log(this.state);
    };

    render() {
        return (
            <div className="ui container">
                <LetterList onLetterSelect={this.onLetterSelect} alphabet={this.state.alphabet} />
                <TextDisplay />
            </div>
        );
    }
};

export default App;