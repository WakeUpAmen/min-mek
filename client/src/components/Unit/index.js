import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../Actions/unit-action';
import {Form, FormGroup, FormControl,ControlLabel, Button} from 'react-bootstrap';

class Unit extends Component {
    componentDidMount=()=>{
        console.log("did mount")
        this.props.getUnitInfo();
    }
    updateUnitInfoToServer = () =>{
        let unitinfo = {name:this.props.unit.name, affi: this.props.unit.affi, icon: this.props.unit.icon, color: this.props.unit.color};
        this.props.updateUnitInfoToServer(this.props.unit._id, unitinfo);
    }
    nameChange=(e)=>{
        this.props.nameChange(e.target.value);
    }
    colorChange=(e)=>{
        this.props.colorChange(e.target.value);
    }
    affiChange=(e)=>{
        this.props.affiChange(e.target.value);
    }
    iconChange=(e)=>{
        this.props.iconChange(e.target.value);
    }
    render() {
        console.log("render")
        if (this.props.hasErrored) {
            return <p>Sorry! There was an error loading the items</p>;
        }

        if (this.props.dataLoading) {
            return <p>Loading…</p>;
        }
        return (
            <div className="div-container">
                <Form horizontal className="forms">
                    <FormGroup>
                        <ControlLabel >Unit Name:</ControlLabel>
                        <FormControl  type="text" value = {this.props.unit.name} onChange={this.nameChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel >Affiliation:</ControlLabel>
                        <FormControl  type="text" value = {this.props.unit.affi} onChange ={this.affiChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel >Icon:</ControlLabel>
                        <FormControl  type="text" value = {this.props.unit.icon} onChange={this.iconChange}/>
                    </FormGroup>
                    <FormGroup>
                        <ControlLabel >Color:</ControlLabel>
                        <FormControl  type="text" value = {this.props.unit.color} onChange={this.colorChange}/>
                    </FormGroup>
                    <Button  onClick={this.updateUnitInfoToServer}>save</Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("map")
    console.log(state.unitR.unit)
    return {
        unit: state.unitR.unit,
        editCompleted: state.unitR.editCompleted,
        dataLoading: state.unitR.dataLoading,
        hasErrored: state.unitR.hasErrored,
    }
};

function mapDispatchToProps(dispatch) {
    return({
        getUnitInfo:() =>{dispatch(actions.getUnitInfo())},
        updateUnitInfoToServer:(id, unitinfo)=>{dispatch(actions.updateUnitInfoToServer(id, unitinfo))},
        nameChange: (name) => {dispatch(actions.nameChange(name))},
        affiChange: (affi) => {dispatch(actions.affiChange(affi))},
        iconChange: (icon) => {dispatch(actions.iconChange(icon))},
        colorChange: (color) => {dispatch.actions.colorChange(color)},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Unit);
