import React, {Component} from 'react';

class MethForm extends Component {
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
        let methInfo = {name: this.props.meth.name, model: this.props.meth.model, weight: this.props.meth.weight, cclass: this.props.meth.cclass,};
        this.props.addMeth(methInfo);
    };
    updateMeth = () => {
        let methInfo = {name: this.props.meth.name, model: this.props.meth.model, weight: this.props.meth.weight, cclass: this.props.meth.cclass,};
        console.log("meth;;;;;;;;;;;;;;;"+this.props.meth.cclass)
        this.props.updateMeth(methInfo);
    }
    render() {
        console.log("meth form meth:")
        console.log(this.props.meth)

        return (
            <div className="div-container">
                <label className="labels">Name:</label>
                <input className="input-textboxes" type="text" value = {this.props.meth.name} onChange={this.nameChange}/><br/>
                <label className="labels">Model:</label>
                <input className="input-textboxes" type="text" value = {this.props.meth.model} onChange={this.modelChange} /><br/>
                <label className="labels">Weight:</label>
                <input className="input-textboxes" type="text" value = {this.props.meth.weight} onChange={this.weightChange} /><br/>
                <label className="labels">Class:</label>
                <input className="input-textboxes" type="text" value = {this.props.meth.cclass} onChange={this.cclassChange}/><br/>
                <button className="buttons" onClick ={this.updateMeth} >Save meth</button>
                <button className="buttons" onClick ={this.addMeth} >Add meth</button>  
                <button className="buttons" onClick ={this.props.deleteMeth} >Delete meth</button>  
            </div>
        );
    }
}

export default MethForm;