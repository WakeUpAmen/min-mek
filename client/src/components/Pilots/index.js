import React, {Component} from 'react';
// import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PilotTable from './PilotTable';
import PilotForm from './PilotForm';
import NewPilotForm from'./NewPilotForm';
import * as actions from '../../Actions/pilot-action';
import {Button} from 'react-bootstrap';

class Pilots extends Component{
    constructor(props){
        super(props);
        this.state={create: false};
    }
    componentDidMount=()=>{
        console.log("pilot did mount")
        this.props.getPilotsInfo();
        this.props.getDropDownMeches();
        this.props.setShow(false);
    }
    showRowInfo=(id)=>{
        this.props.setShow(true);
        this.props.setId(id);
        this.setState({create: false});
    }
    deletePilot =()=>{
        this.props.deleteOneFromServer(this.props.id);
    }

    updatePilot = (pilotinfor)=>{
        this.props.updatePilotInfoToServer(this.props.id, pilotinfor);
        this.props.setShow(false);
    }
    addPilot = (pilotinfor) =>{
        this.props.addPilotToServer(pilotinfor);
        this.props.setShow(false);
        this.setState({create: false});
    }
    iidChange = (iid)=>{
        this.props.iidChange(iid);
    }
    nameChange =(name)=>{
        this.props.nameChange(name);
    }
    methNameChange=(methName)=>{
        console.log("methName:"+ methName);
        this.props.methNameChange(methName);
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
    createPilot=()=>{
        this.props.setShow(true);
        this.setState({create: true});
    }
    cancelOperation=()=>{
        this.props.setShow(false);
        this.setState({create: false});
    }
    render (){
        console.log("pilot render")
        console.log(" props id:"+this.props.id)
        return(
            <div className="div-container">
                <div style={{width: "60%", float: "left"}}>
                    <PilotTable 
                        pilots={this.props.pilots}
                        showRowInfo={this.showRowInfo}
                        deletePilot={this.deletePilot}
                    />
                    <Button  onClick={this.createPilot}>Create Pilot</Button>

                </div>
                <div style={{width: "40%", float: "right"}}>
                    {this.props.isShow ? this.state.create?
                    <NewPilotForm 
                        dropDownMeches={this.props.dropDownMeches}
                        addPilot = {this.addPilot}
                        cancelOperation={this.cancelOperation}
                    />
                    :<PilotForm 
                        pilot = {this.props.pilot}
                        iidChange ={this.iidChange}
                        nameChange = {this.nameChange}
                        rankChange = {this.rankChange}
                        ageChange = {this.ageChange}
                        skillsChange = {this.skillsChange}
                        methChange = {this.methChange} 
                        dropDownMeches={this.props.dropDownMeches}
                        methNameChange = {this.methNameChange}
                        updatePilot = {this. updatePilot}
                        cancelOperation={this.cancelOperation}
                        />
                    : null}        
                </div>
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
        dropDownMeches: state.pilotR.dropDownMeches,
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
        iidChange:(iid)=>{dispatch(actions.iidChange(iid))},
        nameChange: (name) => {dispatch(actions.nameChange(name))},
        rankChange: (rank) => {dispatch(actions.rankChange(rank))},
        ageChange: (age) => {dispatch(actions.ageChange(age))},
        skillsChange: (skills) => {dispatch(actions.skillsChange(skills))},
        methChange: (meth) => {dispatch(actions.methChange(meth))},
        getDropDownMeches:()=>{dispatch(actions.getDropDownMeches())},
        methNameChange: (mname)=>{dispatch(actions.methNameChange(mname))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Pilots);

