//1 create state

const initialState ={
    unit:{_id:"", name:"", affi:"", icon:"", color:""},
    editUnitCompleted: false,
    dataLoading: false,
    hasError: false,
  };
//reducer

export const unitR =(state = initialState, action)=>{
    switch(action.type){
        case 'GET_UNIT_INFO':
        console.log("reducer")
            console.log(action.data)
            return {...state, unit: action.data};
        case 'EDIT_COMPLETED':
            return {...state, editUnitCompleted: action.val};
        case 'DATA_LOADING':
            return {...state, dataLoading: action.val};
        case 'HAS_ERROR':
            return {...state, hasError: action.val};
        case 'NAME_CHANGE':
            return {...state, unit: {...state.unit, name: action.name}}
        case 'AFFI_CHANGE':
            return {...state, unit: {...state.unit, affi: action.affi}}
        case 'ICON_CHANGE':
            return {...state, unit: {...state.unit, icon: action.icon}}
        case 'COLOR_CHANGE':
            return {...state, unit: {...state.unit, color: action.color}}
        default:
            return state;
    }
}

export default unitR;
