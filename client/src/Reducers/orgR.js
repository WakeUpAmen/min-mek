//1 create state
// 1. create state, action, reducer
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState ={
    orgUnit:[],
    orgPilots: [],
    orgMeths: [],
    dataLoading: false,
    hasError: false,
  };
//reducer

export const orgR =(state = initialState, action)=>{
    switch(action.type){
        case 'GET_METH_INFO':
            return {...state, orgMeths: action.data};
        case 'GET_PILOT_INFO':
            return {...state, orgPilots: action.data};
        case 'GET_UNIT_INFO':
            return {...state, orgUnit: action.data};  
        case 'DATA_LOADING':
            return {...state, dataLoading: action.val};
        case 'HAS_ERROR':
            return {...state, hasError: action.val};
        default:
            return state;
    }
}

export default orgR;
