import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as actions from '../../Actions/org-action';
import {BrowserRouter, Route, Link, Switch, Redirect} from 'react-router-dom';
import TreeView from 'react-treeview';


class Organization extends Component {
    componentDidMount=()=>{
        console.log("did mount")
        this.props.getAllInfo();
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
                                    if(pilot.meth == methelement.model)
                                        return<div className="info">{pilot.name}-{pilot.meth}</div>
                                })}
                            </TreeView>
                            );
                        })}
                        </TreeView>
                    );
                    })}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("org map")
    return {
        orgUnit: state.orgR.orgUnit,
        orgPilots: state.orgR.orgPilots,
        orgMeths: state.orgR.orgMeths,
    }
};

function mapDispatchToProps(dispatch) {
    return({
        getAllInfo:() =>{dispatch(actions.getAllInfo())},
      })
};

export default connect(mapStateToProps, mapDispatchToProps)(Organization);
