import { useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import { useDispatch, useSelector } from 'react-redux';
import { changeModalShow, changePatient, changeCanvasShow, restartPractice, setPatientList } from '../actions/index';
import { axiosPost } from '../actions/serverHelper';

const UserSelection =  () =>  {

    const userState = useSelector((state) => state.user)
    const patientState = useSelector((state) => state.patient);
    const patientListState = useSelector((state) => state.patientList);
    const dispatch = useDispatch();
    const therapist = {ID: userState.ID};
    let IDOther = "";
    const[ showSearch, setShowSearch] = useState(false);

    const getPatientList = async () => {
        let res = await axiosPost(therapist, 'patientsList');
        dispatch(setPatientList(res.data));
    };

    if (patientListState.length == 0){
        getPatientList();
    }

    const updateUserDetails = (e) => {
        IDOther = e.target.value;
    }

    const handlechangeID = () => {
        getPatient({ID: IDOther});
    }

    const getPatient = async (patientID) => {
        let patient = {ID: "", Name: ""};
        if(patientID.ID != patientState.ID){
            let res = await axiosPost(patientID, 'choosePatient');
            if(res.data){
                patient.ID = res.data.ID;
                patient.Name = res.data.Name;      
                dispatch(changePatient(patient)); 
                dispatch(restartPractice(patient.ID)); 
            } 
        }
        dispatch(changeCanvasShow())
    };

    return (
        <div>
           <Offcanvas.Header closeButton></Offcanvas.Header>
            <Offcanvas.Body>
                {patientListState.map((patient) => 
                <button key={patient.ID} className="list-group-item list-group-item-action text-center d-flex justify-content-between userSelectionBtn" onClick={() => getPatient({ID:patient.ID})} id={patient.ID}>
                    <h5 className='m-0'>{patient.ID}</h5> 
                    <h5 className='m-0'>{patient.Name}</h5> 
                </button>)}
                <div className='d-flex justify-content-center'>
                    <button className="btn btn-outline-secondary mt-4" onClick={() => dispatch(changeModalShow())}>+ הוסף מטופל</button>
                </div>
                <div className='mt-5'>
                    <div className='mb-5 d-flex justify-content-center'>
                        <button className='btn btn-outline-secondary' onClick={() => setShowSearch(!showSearch)}>
                            {(showSearch) ? 'הסתר' : 'מציאת מטופל הנמצא באחריות מטפל אחר'}
                        </button>
                    </div>
                    <div className={(showSearch) ? '' : 'd-none'}>
                        <input type="text" className="form-control" placeholder='אנא הכנס תעודת זהות' onChange={updateUserDetails}/>
                        <div className='d-flex justify-content-center'>
                            <button className="btn btn-outline-secondary mt-4" onClick={handlechangeID}>
                                <i className='fas fa-lg me-3 fa-fw fa-search'></i>
                            </button>
                        </div>
                    </div>
                </div>
            </Offcanvas.Body>
        </div>
    )
};

export default UserSelection;