//1 create state

const initialState ={
    pilots:[],
    pilot:{_id:"", iid:"", name:"", rank:"", age:"", skills:"", meth: "", methName:""},
    editUnitCompleted: false,
    dataLoading: false,
    hasError: false,
    isShow: false,
    id: "",
    dropDownMeches:[],
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
            return {...state, id: action.id, pilot: state.pilots.filter(p=>p._id === action.id)[0]};
        case 'IID_CHANGE':
            return {...state, pilot:{...state.pilot, iid: action.iid}}
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
        case 'SET_DROPDOWNMECHES':
            return {...state, dropDownMeches: action.meches.map(mech=>[mech._id, mech.name])}
        case 'METHNAME_CHANGE':
            return {...state, pilot: {...state.pilot, methName: action.name}}
        default:
            return state;
    }
}

export default pilotR;
