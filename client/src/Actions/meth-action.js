import axios from 'axios';

export function getMethsInfo() {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.get("/api-meth/meths/")
        .then(response => {
            console.log("meth action get all");
            console.log(response.data)
            dispatch(getMethInfoR(response.data.meths));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(dataLoading(false));
        });
    }
}

export function addMethToServer(methdata) {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.post("/api-meth/meths/", {
            iid: methdata.iid,
            name : methdata.name,
            model: methdata.model,
            weight: methdata.weight,
            cclass: methdata.cclass
        })
        .then((response) => {
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(dataLoading(false));
        });
    }
}

export function updateMethInfoToServer(id, methdata) {
    console.log("methdata info :")
    console.log(methdata)
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.put("/api-meth/meths/"+id, {
            iid: methdata.iid,
            name : methdata.name,
            model: methdata.model,
            weight: methdata.weight,
            cclass: methdata.cclass
        })
        .then((response) => {
            console.log(response.data);
            dispatch(editMethCompleted(true));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(dataLoading(false));
        });
    }
}

export function deleteMethFromServer(id) {
    console.log(id);
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.delete("/api-meth/meths/"+id, {
            id:id,
        })
        .then((response) => {
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(dataLoading(false));
        });
    }
}
// actions
export const getMethInfoR =data=>({
    type: 'GET_METH_INFO', 
    data
});

export const editMethCompleted = val =>({
    type: 'EDIT_COMPLETED',
    val
})

export const setShow = val => ({
    type: 'SET_SHOW',
    val
})

export const setId = id =>({
    type: 'SET_ID',
    id
})
export const dataLoading = val =>({
    type: 'DATA_LOADING',
    val
})

export const setError = val =>({
    type: 'HAS_ERROR',
    val
})
export const iidChange = iid =>({
    type: 'IID_CHANGE',
    iid
})
export const nameChange = name =>({
    type: 'NAME_CHANGE',
    name
})

export const modelChange = model => ({
    type: 'MODEL_CHANGE',
    model
})

export const weightChange = weight => ({
    type: 'WEIGHT_CHANGE',
    weight
})

export const cclassChange = classs => ({
    type: 'CLASS_CHANGE',
    classs
})


