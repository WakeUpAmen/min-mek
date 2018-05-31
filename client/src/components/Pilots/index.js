import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PilotTable from './PilotTable';
import PilotForm from './PilotForm';
import * as actions from '../../Actions/pilot-action';

class Pilots extends Component{
    componentDidMount=()=>{
        console.log("pilot did mount")
        this.props.getPilotsInfo();
        this.props.setShow(false);
    }
    showRowInfo=(id)=>{
        this.props.setShow(true);
        this.props.setId(id);
    }
    deletePilot =()=>{
       this.props.deleteOneFromServer(this.props.id);
       this.props.setShow(false);
    }

    updatePilot = (pilotinfor)=>{
        this.props.updatePilotInfoToServer(this.props.id, pilotinfor);
        this.props.setShow(false);
    }
    addPilot = (pilotinfor) =>{
        this.props.addPilotToServer(pilotinfor);
        this.props.setShow(false);
    }
    nameChange =(name)=>{
        this.props.nameChange(name);
    }

    rankChange =(rank)=>{
        this.props.rankChange(rank);
    }

    ageChange =(age)=>{
        this.props.ageChange(age);
    }

    skillsChange =(skills)=>{
        this.props.skillsChange(skills);
    }

    methChange =(meth)=>{
        this.props.methChange(meth);
    }
    render (){
        console.log("pilot render")
        console.log(" props id:"+this.props.id)
        return(
            <div className="div-container">
                <PilotTable
                    pilots={this.props.pilots}
                    showRowInfo={this.showRowInfo}
                />
                {this.props.isShow ?
                <PilotForm 
                    pilot = {this.props.pilot}
                    addPilot = {this.addPilot}
                    deletePilot = {this.deletePilot}
                    updatePilot = {this. updatePilot}
                    nameChange = {this.nameChange}
                    rankChange = {this.rankChange}
                    ageChange = {this.ageChange}
                    skillsChange = {this.skillsChange}
                    methChange = {this.methChange} 
                    />:null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("pilot map")
    console.log(state.pilotR.pilots)
    return {
        pilots : state.pilotR.pilots,
        pilot: state.pilotR.pilot,
        isShow: state.pilotR.isShow,
        hasError: state.pilotR.hasError,
        id: state.pilotR.id,
    }
};

function mapDispatchToProps(dispatch) {
    return({
        getPilotsInfo:() =>{ dispatch(actions.getPilotsInfo())},
        setShow:(val) => {dispatch(actions.setShow(val))},
        setId: (id) => {dispatch(actions.setId(id))},
        updatePilotInfoToServer: (id, pilotinfor) =>{dispatch(actions.updatePilotInfoToServer(id, pilotinfor))},
        deleteOneFromServer: (id)=> {dispatch(actions.deleteOneFromServer(id))},
        addPilotToServer: (pilotinfo) => {dispatch(actions.addPilotToServer(pilotinfo))},
        nameChange: (name) => {dispatch(actions.nameChange(name))},
        rankChange: (rank) => {dispatch(actions.rankChange(rank))},
        ageChange: (age) => {dispatch(actions.ageChange(age))},
        skillsChange: (skills) => {dispatch(actions.skillsChange(skills))},
        methChange: (meth) => {dispatch(actions.methChange(meth))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Pilots);

