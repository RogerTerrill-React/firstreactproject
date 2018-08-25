import React, {Component} from 'react';
import Table from './Table';

class App extends Component {
    state = {
        characters1: [
            {
                'name': 'Charlie',
                'job': 'Janitor'
            },
            {
                'name': 'Mac',
                'job': 'Bouncer'
            },
            {
                'name': 'Dee',
                'job': 'Aspring actress'
            },
            {
                'name': 'Dennis',
                'job': 'Bartender'
            }
        ]
    };

    removeCharacter = index => {
        // const { characters1 } = this.state; //This creates const characters1 = this.state.characters1, where this is the App class
        
        console.log(this);

        this.setState({
            characters1: characters1.filter((character, i) => { //This changes the state.characters above, the key is the name of the state.character1
                return i !== index; //This boolean is the condition of what is returned, This is saying return anything that is not the index
            })
        });
    }

    render() {
        const { characters1 } = this.state;
        return (
            <div className="container">
                <Table
                    characterData={characters1}
                    removeCharacter={this.removeCharacter}
                />
            </div>
        );
    }
}

export default App;