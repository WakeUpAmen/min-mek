import React, {Component} from 'react';
import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import MethTable from './MethTable';
import MethForm from './MethForm';
import * as actions from '../../Actions/meth-action';

class Meths extends Component{
    componentDidMount=()=>{
        console.log("meth did mount")
        this.props.getMethsInfo();
        this.props.setShow(false);
    }
    showRowInfo=(id)=>{
        this.props.setShow(true);
        this.props.setId(id);
    }
    deleteMeth =()=>{
       this.props.deleteMethFromServer(this.props.id);
       this.props.setShow(false);
    }

    updateMeth = (methinfo)=>{
        console.log("meth index methdata:")
        console.log(methinfo)
        this.props.updateMethInfoToServer(this.props.id, methinfo);
        this.props.setShow(false);
    }
    addMeth = (methinfo) =>{
        this.props.addMethToServer(methinfo);
        this.props.setShow(false);
    }
    nameChange =(name)=>{
        this.props.nameChange(name);
    }

    modelChange =(model)=>{
        this.props.modelChange(model);
    }

    weightChange =(weight)=>{
        this.props.weightChange(weight);
    }

    cclassChange =(classss)=>{
        this.props.cclassChange(classss);
    }
    render (){
        console.log("meth render")
        console.log(" meth: "+this.props.meth)
        return(
            <div className="div-container">
                <MethTable
                    meths={this.props.meths}
                    showRowInfo={this.showRowInfo}
                />
                {this.props.isShow ?
                <MethForm 
                    meth = {this.props.meth}
                    addMeth = {this.addMeth}
                    deleteMeth = {this.deleteMeth}
                    updateMeth = {this. updateMeth}
                    nameChange = {this.nameChange}
                    modelChange = {this.modelChange}
                    weightChange = {this.weightChange}
                    cclassChange = {this.cclassChange}
                    />:null}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("meth map")
    console.log(state.methR.meth)
    return {
        meths : state.methR.meths,
        meth: state.methR.meth,
        isShow: state.methR.isShow,
        hasError: state.methR.hasError,
        id: state.methR.id,
    }
};

function mapDispatchToProps(dispatch) {
    return({
        getMethsInfo:() =>{ dispatch(actions.getMethsInfo())},
        setShow:(val) => {dispatch(actions.setShow(val))},
        setId: (id) => {dispatch(actions.setId(id))},
        updateMethInfoToServer: (id, pilotinfor) =>{dispatch(actions.updateMethInfoToServer(id, pilotinfor))},
        deleteMethFromServer: (id)=> {dispatch(actions.deleteMethFromServer(id))},
        addMethToServer: (pilotinfo) => {dispatch(actions.addMethToServer(pilotinfo))},
        nameChange: (name) => {dispatch(actions.nameChange(name))},
        modelChange: (model) => {dispatch(actions.modelChange(model))},
        weightChange: (weight) => {dispatch(actions.weightChange(weight))},
        cclassChange: (classss) => {dispatch(actions.cclassChange(classss))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Meths);

