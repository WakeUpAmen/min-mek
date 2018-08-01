import React, {Component} from 'react';
// import {Link, Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import MethTable from './MethTable';
import MethForm from './MethForm';
import NewMethForm from './NewMethForm';
import * as actions from '../../Actions/meth-action';
import {Alert, Button} from 'react-bootstrap';

class Meths extends Component{
    constructor(props){
        super(props);
        this.state={showErrorOf3Most: false, create: false};
    }
    
    componentDidMount=()=>{
        console.log("meth did mount")
        this.props.getMethsInfo();
        this.props.setShow(false);
    }
    componentWillUpdate=()=>{
        // this.props.getMethsInfo();
    }
    showRowInfo=(id)=>{
        this.props.setShow(true);
        this.props.setId(id);
    }
    deleteMeth =(id)=>{
       this.props.deleteMethFromServer(id);
       this.props.setShow(false);
    }

    updateMeth = (methinfo)=>{
        console.log("meth index methdata:")
        console.log(methinfo)
        this.props.updateMethInfoToServer(this.props.id, methinfo);
        this.props.setShow(false);
    }
    addMeth = (methinfo) =>{
        if(this.props.meths.length === 3){
            this.setState({showErrorOf3Most: true});
            return;
        }else{
            this.setState({showErrorOf3Most: false});
        }
        this.props.addMethToServer(methinfo);
        this.props.setShow(false);
    }
    iidChange =(iid)=>{
        this.props.iidChange(iid);
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
    handleDismiss=()=>{
        this.setState({showErrorOf3Most: false});
    }
    cancelOperation=()=>{
        this.props.setShow(false);
        this.setState({create: false});
    }
    createMeth=()=>{
        this.props.setShow(true);
        this.setState({create: true});
    }
    render (){
        console.log("meth render")
        console.log(" meth: "+this.props.meth)
        if(this.state.showErrorOf3Most === true){
            return (
                <Alert bsStyle="danger" >
                <h4>Oh snap! You can have 3 meches at most!</h4>
                </Alert>
            )
        }
        return(
            <div className="div-container">
                <div style={{width: "50%", float: "left"}}>
                <MethTable
                    meths={this.props.meths}
                    showRowInfo={this.showRowInfo}
                    deleteMeth={this.deleteMeth}
                />
                <Button  onClick={this.createMeth}>Create Meth</Button>

                </div>
                <div style={{width: "50%", float: "right"}}>
                    {this.props.isShow ? this.state.create?
                    <NewMethForm 
                        addMeth = {this.addMeth}
                        cancelOperation = {this.cancelOperation}
                    />
                    :<MethForm 
                        meth = {this.props.meth}
                        updateMeth = {this. updateMeth}
                        iidChange = {this.iidChange}
                        nameChange = {this.nameChange}
                        modelChange = {this.modelChange}
                        weightChange = {this.weightChange}
                        cclassChange = {this.cclassChange}
                        cancelOperation = {this.cancelOperation}
                    />
                    :null}
                </div>
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
        toggle: state.methR.toggle,
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
        iidChange:(iid) => {dispatch(actions.iidChange(iid))},
        nameChange: (name) => {dispatch(actions.nameChange(name))},
        modelChange: (model) => {dispatch(actions.modelChange(model))},
        weightChange: (weight) => {dispatch(actions.weightChange(weight))},
        cclassChange: (classss) => {dispatch(actions.cclassChange(classss))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Meths);

