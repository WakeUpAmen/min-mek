import axios from 'axios';
//async functions unitR

export function getUnitInfo() {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.get("/api-unit/unit/")
        .then(response => {
            console.log(response.data)
            dispatch(getUnitInfoR(response.data.units[0]));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(hasErroe(true));
            dispatch(dataLoading(false));
        });
    }
}

export function updateUnitInfoToServer(id, unitdata) {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.put("/api-unit/unit/"+id, {
            name : unitdata.name,
            affi: unitdata.affi,
            icon: unitdata.icon,
            color: unitdata.color
        })
        .then((response) => {
            console.log(response.data);
            dispatch(editUnitCompleted(true));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(hasErroe(true));
            dispatch(dataLoading(false));
        });
    }
}
// actions
export const getUnitInfoR =data=>({
    type: 'GET_UNIT_INFO', 
    data
});

export const editUnitCompleted = val =>({
    type: 'EDIT_COMPLETED',
    val
})

export const dataLoading = val =>({
    type: 'DATA_LOADING',
    val
})

export const hasErroe = val =>({
    type: 'HAS_ERROR',
    val
})

export const nameChange = name =>({
    type: 'NAME_CHANGE',
    name
})

export const affiChange = affi => ({
    type: 'AFFI_CHANGE',
    affi
})

export const iconChange = icon => ({
    type: 'ICON_CHANGE',
    icon
})

export const colorChange = color => ({
    type: 'COLOR_CHANGE',
    color
})

