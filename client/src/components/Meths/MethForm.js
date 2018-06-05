import React, {Component} from 'react';
import {Form, FormGroup, FormControl,ControlLabel, Button} from 'react-bootstrap';

class MethForm extends Component {
    iidChange=(e)=>{
        this.props.iidChange(e.target.value);
    }
    nameChange=(e)=>{
        this.props.nameChange(e.target.value);
    };
    modelChange=(e)=>{
        this.props.modelChange(e.target.value);
    };
    weightChange=(e)=>{
        this.props.weightChange(e.target.value);
    };
    cclassChange=(e)=>{
        this.props.cclassChange(e.target.value);
    };
    addMeth = () => {
        let methInfo = {id: this.props.meth.iid, name: this.props.meth.name, model: this.props.meth.model, weight: this.props.meth.weight, cclass: this.props.meth.cclass,};
        this.props.addMeth(methInfo);
    };
    updateMeth = () => {
        let methInfo = {id: this.props.meth.iid, name: this.props.meth.name, model: this.props.meth.model, weight: this.props.meth.weight, cclass: this.props.meth.cclass,};
        console.log("meth;;;;;;;;;;;;;;;"+this.props.meth.cclass)
        this.props.updateMeth(methInfo);
    }
    render() {
        console.log("meth form meth:")
        console.log(this.props.meth)

        return (
            <div className="div-container">
                <Form horizontal className="forms">
                    <FormGroup>
                        <ControlLabel> ID:</ControlLabel>
                        <FormControl type="text" value = {this.props.meth.iid} onChange={this.iidChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Name:</ControlLabel>
                        <FormControl type="text" value = {this.props.meth.name} onChange={this.nameChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Model:</ControlLabel>
                        <FormControl type="text" value = {this.props.meth.model} onChange={this.modelChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Weight:</ControlLabel>
                        <FormControl type="text" value = {this.props.meth.weight} onChange={this.weightChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel> Class:</ControlLabel>
                        <FormControl type="text" value = {this.props.meth.cclass} onChange={this.cclassChange}/>
                    </FormGroup>
                    <Button  onClick={this.updateMeth}>save meth</Button>
                    <Button  onClick={this.addMeth}>add meth</Button>
                    <Button  onClick={this.props.deleteMeth}>delete meth</Button>
                </Form> 
            </div>
        );
    }
}

export default MethForm;