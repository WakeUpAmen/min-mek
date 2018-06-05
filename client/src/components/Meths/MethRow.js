import React, {Component} from 'react';
import {Button} from 'react-bootstrap';

class MethRow extends Component {
    render() {
        return (
            <tr onDoubleClick={()=>this.props.showRowInfo(this.props.id)}>
                <td>{this.props.iid}</td>
                <td>{this.props.name}</td>
                <td>{this.props.model}</td>
                <td>{this.props.weight}</td>
                <td>{this.props.cclass}</td>
                <td><Button  onClick ={()=>this.props.deleteMeth(this.props.id)} >Delete</Button></td>
                {/* <td><button onClick ={()=>this.props.deleteMeth(this.props.id)} >Delete</button></td> */}
            </tr>
        );
    }
}

export default MethRow;