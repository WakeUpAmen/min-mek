import React, {Component} from 'react';
import {Button} from 'react-bootstrap';
class PilotRow extends Component {
    render() {
        return (
            <tr onDoubleClick={()=>this.props.showRowInfo(this.props.id)}>
                <td>{this.props.iid}</td>
                <td>{this.props.name}</td>
                <td>{this.props.rank}</td>
                <td>{this.props.age}</td>
                <td>{this.props.skills}</td>
                <td>{this.props.methName}</td>
                <td><Button  onClick ={()=>this.props.deletePilot(this.props.id)} >Delete</Button></td>
            </tr>
        );
    }
}

export default PilotRow;