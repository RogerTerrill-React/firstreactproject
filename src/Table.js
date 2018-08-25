import React, {Component} from 'react';
import Name from './Name';


const Tableheader = () => {
    return (
        <thead>
        <tr>
            <Name />
            <th>Job</th>
        </tr>
        </thead>
    );
}

const TableBody = props => {
    const rows = props.characterData.map((row, index) => {
        return (
            <tr key={index}>
                <td>{row.name}</td>
                <td>{row.job}</td>
                <td><button onClick={() => props.removeCharacter(index)}>Delete</button></td>
            </tr>
        );
    });

    return <tbody>{rows}</tbody>

}


class Table extends Component {
    render() {
        const { characterData, removeCharacter } = this.props;
        console.log(this.__proto__); //Table is the object of this and in table there is a property of props

        return (
            <table>
                <Tableheader />
                <TableBody 
                    characterData={characterData}
                    removeCharacter={removeCharacter}
                 />
            </table>
        );
    }
}


export default Table;