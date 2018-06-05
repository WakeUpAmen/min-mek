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
    methChange=(eventKey)=>{
        this.props.methChange(eventKey);
    };
    addPilot = () => {
        let pilotInfo = {name: this.props.pilot.name, rank: this.props.pilot.rank, age: this.props.pilot.age, skills: this.props.pilot.skills, meth: this.props.pilot.meth, };
        this.props.addPilot(pilotInfo);
    };
    updatePilot = () => {
        let pilotInfo = {name: this.props.pilot.name, rank: this.props.pilot.rank, age: this.props.pilot.age, skills: this.props.pilot.skills, meth: this.props.pilot.meth, };
        this.props.updatePilot(pilotInfo);
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
                            <DropdownButton title={this.props.pilot.meth}>
                                {this.props.dropDownMeches.map(mech=>{
                                    return <MenuItem eventKey={mech} onSelect={this.methChange}>{mech}</MenuItem>
                                })}
                            </DropdownButton>
                        {/* <FormControl type="text" value = {this.props.pilot.meth} onChange={this.methChange}/> */}
                    </FormGroup>
                    <Button  onClick={this.updatePilot}>save pilot</Button>
                    <Button  onClick={this.addPilot}>add pilot</Button>
                    <Button  onClick={this.props.deletePilot}>delete pilot</Button>
                </Form>
            </div>
        );
    }
}

export default PilotForm;