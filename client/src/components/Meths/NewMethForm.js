import React, {Component} from 'react';
import {Form, FormGroup, FormControl,ControlLabel, Button} from 'react-bootstrap';

class NewMethForm extends Component {
    constructor(props){
        super(props);
        this.state={iid: "", name:"", model:"", weight:"", cclass:""};
    }
    iidChange=(e)=>{
        this.setState({iid: e.target.value});
    };
    nameChange=(e)=>{
        this.setState({name: e.target.value});
    };
    modelChange=(e)=>{
        this.setState({model: e.target.value});
    };
    weightChange=(e)=>{
        this.setState({weight: e.target.value});
    };
    cclassChange=(e)=>{
        this.setState({cclass: e.target.value});
    };
    addMeth = () => {
        let methInfo = {iid: this.state.iid, name: this.state.name, model: this.state.model, weight: this.state.weight, cclass: this.state.cclass,};
        this.props.addMeth(methInfo);
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
                        <ControlLabel> Model:</ControlLabel>
                        <FormControl type="text" value = {this.state.model} onChange={this.modelChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Weight:</ControlLabel>
                        <FormControl type="text" value = {this.state.weight} onChange={this.weightChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Class:</ControlLabel>
                        <FormControl type="text" value = {this.state.cclass} onChange={this.cclassChange}/>
                    </FormGroup>
                    <Button  onClick={this.addMeth}>add meth</Button>
                    <Button  onClick={this.props.cancelOperation}>cancel</Button>
                </Form> 
            </div>
        );
    }
}

export default NewMethForm;