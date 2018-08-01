import React, {Component} from 'react';
import {Form, FormGroup, FormControl,ControlLabel, Button, DropdownButton, MenuItem} from 'react-bootstrap';


class NewPilotForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            iid:"", name:"", rank:"", age:"", skills:"", meth: "", methName:""
        }
    }
    iidChange=(e)=>{
        this.setState({iid: e.target.value});
    }
    nameChange=(e)=>{
        this.setState({name: e.target.value});
    };
    rankChange=(e)=>{
        this.setState({rank: e.target.value});
    };
    ageChange=(e)=>{
        this.setState({age: e.target.value});
    };
    skillsChange=(e)=>{
        this.setState({skills: e.target.value});
    };
    methChange=(eventKey, event)=>{
        this.setState({meth: eventKey});
        this.setState({methName: event.target.innerHTML});
    };
    addPilot = () => {
        let pilotInfo = {iid:this.state.iid,name: this.state.name, rank: this.state.rank, age: this.state.age, skills: this.state.skills, meth: this.state.meth, methName: this.state.methName};
        this.props.addPilot(pilotInfo);
    };
    cancelOperation=()=>{
        this.props.cancelOperation();
    }
    render() {
        return (
            <div className="div-container">
                <Form horizontal className="forms">
                    <FormGroup>
                        <ControlLabel> ID:</ControlLabel>
                        <FormControl type="text" value = {this.state.iid} onChange={this.iidChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Name:</ControlLabel>
                        <FormControl type="text" value = {this.state.name} onChange={this.nameChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Rank:</ControlLabel>
                        <FormControl type="text" value = {this.state.rank} onChange={this.rankChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Age:</ControlLabel>
                        <FormControl type="text" value = {this.state.age} onChange={this.ageChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Skills:</ControlLabel>
                        <FormControl type="text" value = {this.state.kills} onChange={this.skillsChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Meth:</ControlLabel>
                            <DropdownButton title={this.state.methName}>
                                {this.props.dropDownMeches.map(mech=>{
                                    return <MenuItem eventKey={mech[0]} onSelect={this.methChange}>{mech[1]}</MenuItem>
                                })}
                            </DropdownButton>
                    </FormGroup>
                    <Button  onClick={this.addPilot}>add pilot</Button>
                    <Button  onClick={this.props.cancelOperation}>cancel</Button>
                </Form>
            </div>
        );
    }
}

export default NewPilotForm;