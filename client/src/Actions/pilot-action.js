import axios from 'axios';
//async functions unitR

export function getPilotsInfo() {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.get("http://localhost:8888/api-pilot/pilots/")
        .then(response => {
            console.log("pilot action get all");
            console.log(response.data)
            dispatch(getPilotInfoR(response.data.pilots));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(dataLoading(false));
        });
    }
}

export function addPilotToServer(pilotdata) {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.post("http://localhost:8888/api-pilot/pilots/", {
            name : pilotdata.name,
            rank: pilotdata.rank,
            age: pilotdata.age,
            skills: pilotdata.skills,
            meth: pilotdata.meth
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

export function updatePilotInfoToServer(id, pilotdata) {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.put("http://localhost:8888/api-pilot/pilots/"+id, {
            name : pilotdata.name,
            rank: pilotdata.rank,
            age: pilotdata.age,
            skills: pilotdata.skills,
            meth: pilotdata.meth
        })
        .then((response) => {
            console.log(response.data);
            dispatch(editUnitCompleted(true));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(dataLoading(false));
        });
    }
}

export function deleteOneFromServer(id) {
    console.log(id);
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.delete("http://localhost:8888/api-pilot/pilots/"+id, {
            id:id,
        })
        .then((response) => {
            console.log(response.data);
            // dispatch(deleteUserCompleted(true));
            // dispatch((id));
            dispatch(dataLoading(false));
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(dataLoading(false));
        });
    }
}
// actions
export const getPilotInfoR =data=>({
    type: 'GET_PILOT_INFO', 
    data
});

// export const deletePilot = id =>({
//     type: 'DELETE_PILOT',
//     id
// })
export const editUnitCompleted = val =>({
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

export const nameChange = name =>({
    type: 'NAME_CHANGE',
    name
})

export const rankChange = rank => ({
    type: 'RANK_CHANGE',
    rank
})

export const ageChange = age => ({
    type: 'AGE_CHANGE',
    age
})

export const skillsChange = skills => ({
    type: 'SKILLS_CHANGE',
    skills
})

export const methChange = meth => ({
    type: 'METH_CHANGE',
    meth
})

