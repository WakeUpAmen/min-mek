import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../Actions/org-action';
// import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import TreeView from 'react-treeview';
import OrgForm from './OrgForm';



class Organization extends Component {
    componentDidMount=()=>{
        console.log("did mount")
        this.props.getAllInfo();
        this.props.setShow(false);
    }
    introChange =(intro)=>{
        // this.props.introChange(intro);
    }
    getValueToShow =()=>{
        
    }
    setIntro =(methInfo, pilotInfo)=>{
        this.props.setIntro(methInfo, pilotInfo);
        this.props.setShow(true);
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
            // <div className="div-container">
             <div> 
                <div style={{width: "40%", float: "left", margin:"0 0 0 70px"}}>
                    {this.props.orgUnit.map((node, i) => {
                        const name = node.name;
                        const label = <span className="node">{name}</span>;
                        return (
                            <TreeView key={name + '|' + i} nodeLabel={label} defaultCollapsed={false}>
                            {this.props.orgMeths.map(methelement => {
                                const label2 = <span className="node">{methelement.name}</span>;
                                return (
                                <TreeView nodeLabel={label2} key={methelement.name} defaultCollapsed={false}>
                                    {this.props.orgPilots.map(pilot => {
                                        if(pilot.meth === methelement.model)
                                            return<div className="info" onClick = {()=>this.setIntro(label2, pilot.name)}>{pilot.name}-{pilot.meth}</div>
                                    })}
                                </TreeView>
                                );
                            })}
                            </TreeView>
                        );
                    })}
                </div>
                <div style={{width: "50%", float: "right", margin:"50px 30px0 0 0"}}>
                    {this.props.isShow ?
                        <OrgForm 
                            introMeth = {this.props.introMeth}
                            introPilot = {this.props.introPilot}
                            updateMeth = {this. updateMeth}
                            // introChange = {this.introChange}
                    />:null}
                </div>
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("org map")
    console.log(state.orgR.introMeth +"..."+ state.orgR.introPilot)
    return {
        orgUnit: state.orgR.orgUnit,
        orgPilots: state.orgR.orgPilots,
        orgMeths: state.orgR.orgMeths,
        isShow: state.orgR.isShow,
        introMeth: state.orgR.introMeth,
        introPilot: state.orgR.introPilot,   
    }
};

function mapDispatchToProps(dispatch) {
    return({
        getAllInfo:() =>{dispatch(actions.getAllInfo())},
        setShow:(val) => {dispatch(actions.setShow(val))},
        setIntro:(methVal, pilotVal)=>{dispatch(actions.setIntro(methVal, pilotVal))},
        // introChange:(intro) => {dispatch(actions.introChange(intro))},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
