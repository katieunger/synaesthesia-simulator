import React from 'react';
import AlphabetForm from './AlphabetForm';
import TextDisplay from './TextDisplay';


class App extends React.Component {

    render() {
        return (
            <div className="ui container">
                <AlphabetForm />
                <TextDisplay />
            </div>
        );
    }
};

export default App;