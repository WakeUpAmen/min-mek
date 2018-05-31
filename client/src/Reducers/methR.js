//1 create state
// 1. create state, action, reducer
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState ={
    meths:[],
    meth:{_id:"", name:"", model:"", weight:"", cclass:""},
    editUnitCompleted: false,
    dataLoading: false,
    hasError: false,
    isShow: false,
    id: "",
  };
//reducer

export const pilotR =(state = initialState, action)=>{
    switch(action.type){
        case 'GET_METH_INFO':
            return {...state, meths: action.data};
        case 'EDIT_COMPLETED':
            return {...state, editUnitCompleted: action.val};
        case 'DATA_LOADING':
            return {...state, dataLoading: action.val};
        case 'HAS_ERROR':
            return {...state, hasError: action.val};
        case 'SET_SHOW':
            return {...state, isShow: action.val};
        case 'SET_ID':
            return {...state, id: action.id, meth: state.meths.filter(m=>m._id == action.id)[0]};
        case 'NAME_CHANGE':
            return {...state, meth: {...state.meth, name: action.name}}
        case 'MODEL_CHANGE':
            return {...state, meth: {...state.meth, model: action.model}}
        case 'WEIGHT_CHANGE':
            return {...state, meth: {...state.meth, weight: action.weight}}
        case 'CLASS_CHANGE':
            return {...state, meth: {...state.meth, cclass: action.classs}}
        default:
            return state;
    }
}

export default pilotR;
