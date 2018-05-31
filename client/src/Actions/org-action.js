import axios from 'axios';

export function getAllInfo() {
    return (dispatch) => {
        dispatch(dataLoading(true));
        axios.get("http://localhost:8888/api-unit/unit/")
        .then(response => {
            console.log("org action unit:")
            console.log(response.data.units)
            dispatch(getUnitInfoR(response.data.units));
        })
        .then(response => {
            axios.get("http://localhost:8888/api-meth/meths/")
            .then(response => {
                console.log("org action meth:")
                console.log(response.data.meths)
                dispatch(getMethInfoR(response.data.meths));
            })
            .catch(err => {
                dispatch(setError(true));
                dispatch(dataLoading(false));
            });
        })
        .then(response =>{
            axios.get("http://localhost:8888/api-pilot/pilots/")
            .then(response => {
                console.log("org action pilot:")
                console.log(response.data.pilots)
                dispatch(getPilotInfoR(response.data.pilots));
                dispatch(dataLoading(false));
            })
            .catch(err => {
                dispatch(setError(true));
                dispatch(dataLoading(false));
            });
        })
        .catch(err => {
            dispatch(setError(true));
            dispatch(dataLoading(false));
        });
    }
}
// actions
export const getUnitInfoR =data=>({
    type: 'GET_UNIT_INFO', 
    data
});
export const getMethInfoR =data=>({
    type: 'GET_METH_INFO', 
    data
});

export const getPilotInfoR =data=>({
    type: 'GET_PILOT_INFO', 
    data
});

export const dataLoading = val =>({
    type: 'DATA_LOADING',
    val
})

export const setError = val =>({
    type: 'HAS_ERROR',
    val
})



