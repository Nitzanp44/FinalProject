import { axiosPost } from '../actions/serverHelper';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import AddPatient from './AddPatient';
import AddTherapist from './AddTherapist';
import { changeModalShow, changePatient, changeCanvasShow, setAllTherapistList, setAllPatientList } from '../actions/index';


const ViewAll = (props) => {
    const dispatch = useDispatch();
    const patientListState = useSelector((state) => state.allPatientList);
    const therapistListState = useSelector((state) => state.allTherapistList);
    let showModal = false;
    let showList = [];

    const changeShowModal = () => {
        showModal = !showModal;
    };

    const getData = async (data) => {
        let res = await axiosPost({}, data);
        if(res.data){
           if(data == 'allPatientsList'){
            dispatch(setAllPatientList(res.data));
           }
           if(data == 'therapistList'){
            dispatch(setAllTherapistList(res.data));
           }
        };
    };

    if (props.viewAt == "patient"){
        if(patientListState.length == 0){
            getData('allPatientsList');
        }
        showList = patientListState;
    }

    if (props.viewAt == "therapist"){
        if(therapistListState.length == 0){
            getData('therapistList');
        }
        showList = therapistListState;
    }

    return(  
        <div>
            <div class="tableContainer">
                <table class="table">
                        <thead>
                            <tr>
                                <th scope="col" disebeld="true">עריכה</th><th scope="col">מייל</th><th scope="col">טלפון</th><th scope="col">שם</th><th scope="col">#</th>
                            </tr>
                        </thead>
                        <tbody>
                            {showList.map((val, index) => 
                            <tr id={val.Email} data-index={index} data-username={val.Email}>
                                <td><button data-line-id={val.Email} class="btn btn-outline-success" onclick="editLine()">עריכה</button></td>
                                <td>{val.Email}</td>
                                <td>{val.Phone}</td>
                                <td>{val.Name}</td>
                                <td>{index+1}</td>
                            </tr>)}
                        </tbody>               
                </table>
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn btn-outline-secondary mt-4" onClick={changeShowModal()}>+ הוסף</button>
            </div>
            {/* <Modal show={showModal} fullscreen={true} size={'l'} >
                {(props.viewAt == "patient")? <AddPatient/> : <AddTherapist/>}
            </Modal> */}
        </div>
    )
}

export default ViewAll;