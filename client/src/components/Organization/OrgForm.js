import React, {Component} from 'react';
import {Button, ControlLabel, FormControl} from 'react-bootstrap';

class OrgForm extends Component {
    // introChange=(e)=>{
    //     this.props.introChange(e.target.value);
    // };
    updatePilot = () => {
        // let pilotInfo = {name: this.props.pilot.name, rank: this.props.pilot.rank, age: this.props.pilot.age, skills: this.props.pilot.skills, meth: this.props.pilot.meth, };
        // this.props.updatePilot(pilotInfo);
    }
    render() {
        console.log("pilot form meth:"+this.props.meth)
        return (
            <div className="div-container">
                <ControlLabel className="labels">{this.props.introMeth}</ControlLabel>
                <FormControl className="input-textboxes" type="text" value = {this.props.introPilot} /*onChange={this.introChange}*//><br/>
                <Button className="buttons" onClick ={this.updatePilot} >Save pilot</Button>
            </div>
        );
    }
}

export default OrgForm;