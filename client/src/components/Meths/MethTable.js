import React, {Component} from 'react';
import MethRow from './MethRow';

class MethTable extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const rows = [];
        console.log("meth table render")
        console.log(this.props.meths)
        this.props.meths.forEach((meth) => {
            rows.push( <MethRow 
                            id = {meth._id}
                            name={meth.name} 
                            model ={meth.model} 
                            weight ={meth.weight} 
                            cclass ={meth.cclass}
                            showRowInfo= {this.props.showRowInfo}
                            />
            );
        });

        return (
            <div className="div-container">
            <table className="table-table">
                <thead>
                    <tr>
                    <td>Name</td>
                    <td>Model</td>
                    <td>Weight</td>
                    <td>Class</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            </div>
        );
    }
}

export default MethTable;