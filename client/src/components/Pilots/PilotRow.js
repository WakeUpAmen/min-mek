import React, {Component} from 'react';
class PilotRow extends Component {
    render() {
        return (
            <tr onClick={()=>this.props.showRowInfo(this.props.id)}>
                <td>{this.props.name}</td>
                <td>{this.props.rank}</td>
                <td>{this.props.age}</td>
                <td>{this.props.skills}</td>
                <td>{this.props.meth}</td>
            </tr>
        );
    }
}

export default PilotRow;