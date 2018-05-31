import React, {Component} from 'react';

class PilotForm extends Component {
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
    methChange=(e)=>{
        this.props.methChange(e.target.value);
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
        console.log("pilot form meth:"+this.props.meth)
        return (
            <div className="div-container">
                <label className="labels">Name:</label>
                <input className="input-textboxes" type="text" value = {this.props.pilot.name} onChange={this.nameChange}/><br/>
                <label className="labels">Rank:</label>
                <input className="input-textboxes" type="text" value = {this.props.pilot.rank} onChange={this.rankChange} /><br/>
                <label className="labels">Age:</label>
                <input className="input-textboxes" type="text" value = {this.props.pilot.age} onChange={this.ageChange} /><br/>
                <label className="labels">Skills:</label>
                <input className="input-textboxes" type="text" value = {this.props.pilot.skills} onChange={this.skillsChange}/><br/>
                <label className="labels">Mech:</label>
                <input className="input-textboxes" type="text" value = {this.props.pilot.meth} onChange={this.methChange}/><br/>
                <button className="buttons" onClick ={this.updatePilot} >Save pilot</button>
                <button className="buttons" onClick ={this.addPilot} >Add pilot</button>  
                <button className="buttons" onClick ={this.props.deletePilot} >Delete pilot</button>  
            </div>
        );
    }
}

export default PilotForm;