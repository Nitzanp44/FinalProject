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
import isPatientListChangeReducer from "./isPatientListChangeReducer";
import isTimerPlayingReducer from "./isTimerPlayingReducer";
import showSpinnerReducer from "./showSpinnerReducer";
import patientListReducer from "./patientListReducer";
import allPatientListReducer from "./allPatientListReducer";
import allTherapistListReducer from "./allTherapistListReducer";
import showAddModalReducer from "./showAddModalReducer";

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
    isPatientListChange: isPatientListChangeReducer,
    isTimerPlaying: isTimerPlayingReducer,
    showSpinner: showSpinnerReducer,
    patientList: patientListReducer,
    allPatientList: allPatientListReducer,
    allTherapistList: allTherapistListReducer,
    showAddModal: showAddModalReducer
});

export default reducers;