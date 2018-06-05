import React, {Component} from 'react';
import MethRow from './MethRow';
import {Table} from 'react-bootstrap'; 

class MethTable extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const rows = [];
        this.props.meths.forEach((meth) => {
            rows.push( <MethRow 
                            id = {meth._id}
                            iid = {meth.iid}
                            name={meth.name} 
                            model ={meth.model} 
                            weight ={meth.weight} 
                            cclass ={meth.cclass}
                            showRowInfo= {this.props.showRowInfo}
                            deleteMeth={this.props.deleteMeth}
                            />
            );
        });

        return (
            <div className="div-container">
            <Table className="table-table">
                <thead>
                    <tr>
                    <td>ID</td>
                    <td>Name</td>
                    <td>Model</td>
                    <td>Weight</td>
                    <td>Class</td>
                    <td>Delete</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
            </div>
        );
    }
}

export default MethTable;