import React, {Component} from 'react';
class MethRow extends Component {
    render() {
        return (
            <tr onClick={()=>this.props.showRowInfo(this.props.id)}>
                <td>{this.props.iid}</td>
                <td>{this.props.name}</td>
                <td>{this.props.model}</td>
                <td>{this.props.weight}</td>
                <td>{this.props.cclass}</td>
            </tr>
        );
    }
}

export default MethRow;