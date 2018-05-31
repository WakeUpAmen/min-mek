//1 create state
// 1. create state, action, reducer
import thunk from 'redux-thunk';
import {createStore, applyMiddleware} from 'redux';

const initialState ={
    pilots:[],
    pilot:{_id:"", name:"", rank:"", age:"", skills:"", meth: ""},
    editUnitCompleted: false,
    dataLoading: false,
    hasError: false,
    isShow: false,
    id: "",
  };
//reducer

export const pilotR =(state = initialState, action)=>{
    switch(action.type){
        case 'GET_PILOT_INFO':
            return {...state, pilots: action.data};
        case 'EDIT_COMPLETED':
            return {...state, editUnitCompleted: action.val};
        case 'DATA_LOADING':
            return {...state, dataLoading: action.val};
        case 'HAS_ERROR':
            return {...state, hasError: action.val};
        case 'SET_SHOW':
            return {...state, isShow: action.val};
        case 'SET_ID':
            console.log("reducer id:"+ action.id)
            return {...state, id: action.id, pilot: state.pilots.filter(p=>p._id == action.id)[0]};
        case 'NAME_CHANGE':
            return {...state, pilot: {...state.pilot, name: action.name}}
        case 'RANK_CHANGE':
            return {...state, pilot: {...state.pilot, rank: action.rank}}
        case 'AGE_CHANGE':
            return {...state, pilot: {...state.pilot, age: action.age}}
        case 'SKILLS_CHANGE':
            return {...state, pilot: {...state.pilot, skills: action.skills}}
        case 'METH_CHANGE':
            return {...state, pilot: {...state.pilot, meth: action.meth}}
        default:
            return state;
    }
}

export default pilotR;
