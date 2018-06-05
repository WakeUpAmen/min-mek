import React, {Component} from 'react';
import {Form, FormGroup, FormControl,ControlLabel, Button, DropdownButton, MenuItem} from 'react-bootstrap';


class PilotForm extends Component {
    iidChange=(e)=>{
        this.props.iidChange(e.target.value);
    }
    nameChange=(e)=>{
        this.props.nameChange(e.target.value);
    };
    rankChange=(e)=>{
        this.props.rankChange(e.target.value);
    };
    ageChange=(e)=>{
        this.props.ageChange(e.target.value);
    };
    skillsChange=(e)=>{
        this.props.skillsChange(e.target.value);
    };
    methChange=(eventKey, event)=>{
        this.props.methChange(eventKey);
        this.props.methNameChange(event.target.innerHTML);
    };
    updatePilot = () => {
        let pilotInfo = {iid:this.props.pilot.iid,name: this.props.pilot.name, rank: this.props.pilot.rank, age: this.props.pilot.age, skills: this.props.pilot.skills, meth: this.props.pilot.meth, methName: this.props.pilot.methName};
        this.props.updatePilot(pilotInfo);
    }
    cancelOperation=()=>{
        this.props.cancelOperation();
    }
    render() {
        return (
            <div className="div-container">
                <Form horizontal className="forms">
                    <FormGroup>
                        <ControlLabel> ID:</ControlLabel>
                        <FormControl type="text" value = {this.props.pilot.iid} onChange={this.iidChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Name:</ControlLabel>
                        <FormControl type="text" value = {this.props.pilot.name} onChange={this.nameChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Rank:</ControlLabel>
                        <FormControl type="text" value = {this.props.pilot.rank} onChange={this.rankChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Age:</ControlLabel>
                        <FormControl type="text" value = {this.props.pilot.age} onChange={this.ageChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Skills:</ControlLabel>
                        <FormControl type="text" value = {this.props.pilot.skills} onChange={this.skillsChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Meth:</ControlLabel>
                            <DropdownButton title={this.props.pilot.methName}>
                                {this.props.dropDownMeches.map(mech=>{
                                    return <MenuItem eventKey={mech[0]} onSelect={this.methChange}>{mech[1]}</MenuItem>
                                })}
                            </DropdownButton>
                        {/* <FormControl type="text" value = {this.props.pilot.meth} onChange={this.methChange}/> */}
                    </FormGroup>
                    <Button  onClick={this.updatePilot}>save pilot</Button>
                    <Button  onClick={this.props.cancelOperation}>cancel</Button>
                </Form>
            </div>
        );
    }
}

export default PilotForm;