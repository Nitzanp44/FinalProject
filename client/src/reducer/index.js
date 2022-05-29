import { combineReducers } from "redux";
import sideBarReducer from "./sideBarReducer";
import isLoginReducer from "./isLoginReducer";
import userReducer from "./userReducer";
import showCanvasRrducer from "./showCanvasReducer";
import showModalRrducer from "./showModalReducer";
import patientReducer from "./patientReducer";

const reducers = combineReducers({
    sideBar: sideBarReducer,
    isLogin: isLoginReducer,
    user: userReducer,
    showCanvas: showCanvasRrducer,
    showModal: showModalRrducer,
    patient: patientReducer
});

export default reducers;