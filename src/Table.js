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
            </tr>
        );
    });

    return <tbody>{rows}</tbody>

}


class Table extends Component {
    render() {
        const { characterData } = this.props;

        return (
            <table>
                <Tableheader />
                <TableBody characterData1={characterData} />
            </table>
        );
    }
}


export default Table;