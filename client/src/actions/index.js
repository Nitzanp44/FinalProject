export const changeSideBarLeft = () => {
    return {
            type: "HIDDEN_LEFT"
    };
};

export const changeSideBarRight = () => {
    return {
            type: "HIDDEN_RIGHT"
    };
};

export const changeLogin = () => {
    return {
            type: "IS_LOGIN"
    };
};


export const changeData = (newData) => {
    return {
            type: "UPDATE_DATA",
            payload: newData
    };
};

export const changeDataRight = (newData) => {
    return {
            type: "DATA_RIGHT",
            payload: newData
    };
};

export const changeDataLeft = (newData) => {
    return {
            type: "DATA_LEFT",
            payload: newData
    };
};

export const changeView = (newData) => {
    return {
            type: "CHANGE_VIEW_SCALE",
            payload: newData
    };
};

export const changeLabel = () => {
    return {
            type: "CHANGE_LABEL"
    };
};

export const changeUser = (newData) => {
    return {
            type: "CHANGE_USER",
            payload: newData
    };
};
export const changePatient = (newData) => {
    return {
            type: "CHANGE_PATIENT",
            payload: newData
    };
};

export const loggOut = () => {
    return {
            type: "LOGOUT",
    };
};

export const changeMaximum = (newData) => {
    return {
            type: "CHANGE_MAXIMUM",
            payload: newData
    };
};

export const changeModalShow = () => {
    return {
            type: "CHANGE_MODAL_SHOW"
    };
};

export const changeCanvasShow = () => {
    return {
            type: "CHANGE_CANVAS_SHOW"
    };
};

export const updateCycle = (newData) => {
    return {
            type: "UPDATE_CYCLE",
            payload: newData
    };
};

export const IntianalCycle = (newData) => {
    return {
            type: "INTIANAL_CYCLE_LIST",
            payload: newData
    };
};

export const startPractice = (newData) => {
    return {
            type: "START_PRACTICE",
            payload: newData
    };
};

export const finishPractice = (newData) => {
    return {
            type: "FINISH_PRACTICE",
            payload: newData
    };
};

export const setPracticeList = (newData) => {
    return {
            type: "INTIANAL_PRACTICE_LIST",
            payload: newData
    };
};

export const setDate = (newData) => {
    return {
            type: "SELECTED_DATE",
            payload: newData
    };
};

export const dataCycels = (newData) => {
    return {
            type: "DATA_CYCLES",
            payload: newData
    };
};
export const changePracticeStart = () => {
    return {
            type: "PRACTICE_START"
    };
};
export const patientListChange = (newData) => {
    return {
            type: "IS_PATIENT_LIST_CHANGE",
            payload: newData
    };
};
