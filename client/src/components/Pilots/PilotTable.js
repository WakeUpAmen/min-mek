import React, {Component} from 'react';
import PilotRow from './PilotRow';

class PilotTable extends Component {
    constructor(props){
        super(props);
    }
    render() {
        const rows = [];
        console.log(this.props.pilots)
        this.props.pilots.forEach((pilot) => {
            rows.push( <PilotRow 
                            id = {pilot._id}
                            name={pilot.name} 
                            rank ={pilot.rank} 
                            age ={pilot.age} 
                            skills ={pilot.skills}
                            meth ={pilot.meth} 
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
                    <td>Rank</td>
                    <td>Age</td>
                    <td>Skills</td>
                    <td>Meth</td>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </table>
            </div>
        );
    }
}

export default PilotTable;