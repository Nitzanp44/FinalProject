import { combineReducers } from "redux";
import sideBarReducer from "./sideBarReducer";
import isLoginReducer from "./isLoginReducer";
import userReducer from "./userReducer";
import showCanvasRrducer from "./showCanvasReducer";
import showModalRrducer from "./showModalReducer";
import patientRrducer from "./patientReducer";
import cycleArrayReducer from "./cyclesArrayReducer";
import practiceReducer from "./practiceReducer";
import practiceArrayReducer from "./practiceArrayReducer";
import practiceDateReducer from "./practiceDateReducer";
import practiceStartReducer from "./practiceStartReducer";
import isPatientListChangeReducer from "./isPatientListChangeReducer";
import isTimerPlayingReducer from "./isTimerPlayingReducer";

const reducers = combineReducers({
    sideBar: sideBarReducer,
    isLogin: isLoginReducer,
    user: userReducer,
    showCanvas: showCanvasRrducer,
    showModal: showModalRrducer,
    patient: patientRrducer,
    cycle: cycleArrayReducer,
    practice: practiceReducer,
    practiceList: practiceArrayReducer,
    practiceDate: practiceDateReducer,
    practiceStart:practiceStartReducer,
    isPatientListChange: isPatientListChangeReducer,
    isTimerPlaying: isTimerPlayingReducer
});

export default reducers;