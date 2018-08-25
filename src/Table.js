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
    const rows = props.characterData1.map((row, index) => {
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
        const { characterData2, removeCharacter } = this.props;
        console.log(this.__proto__); //Table is the object of this and in table there is a property of props

        return (
            <table>
                <Tableheader />
                <TableBody 
                    characterData1={characterData2}
                    removeCharacter={removeCharacter}
                 />
            </table>
        );
    }
}


export default Table;