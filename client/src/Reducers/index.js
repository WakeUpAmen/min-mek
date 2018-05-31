import { combineReducers } from "redux";
import methR from "./methR";
import pilotR from "./pilotR";
import unitR from "./unitR";
import orgR from "./orgR";

const reducers = combineReducers({
    methR,
    pilotR,
    unitR,
    orgR,
});

export default reducers;