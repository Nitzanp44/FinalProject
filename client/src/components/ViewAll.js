import { axiosPost } from '../actions/serverHelper';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import AddPatient from './AddPatient';
import AddTherapist from './AddTherapist';
import { changeAddModalShow, setAllTherapistList, setAllPatientList } from '../actions/index';
import { editLine } from '../actions/tableService';

const ViewAll = (props) => {
    const dispatch = useDispatch();
    const patientListState = useSelector((state) => state.allPatientList);
    const therapistListState = useSelector((state) => state.allTherapistList);
    const showAddModalState = useSelector((state) => state.showAddModal);
    let showList = [];

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
            <div className='theadContainer'>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='col-2'>מייל</th>
                            <th className='col-2'>טלפון</th>
                            <th className='col-2'>שם</th>
                            <th className='col-2'>#</th>
                            <th className='col-2'>עריכה</th>
                        </tr>
                    </thead>
                </table>
            </div>
            <div className="tableContainer">
                <table className="table table-hover">
                        <tbody>
                            {showList.map((val, index) => 
                            <tr key={val.Email} id={val.Email} data-index={index} data-name={val.Name} data-phone={val.Phone} data-email={val.Email}>
                                <td className='col-2'>{val.Email}</td>
                                <td className='col-2'>{val.Phone}</td>
                                <td className='col-2'>{val.Name}</td>
                                <td className='col-2'>{index}</td>
                                <td className='col-2'>
                                    <button data-line-id={val.Email} className="btn btn-outline-success" onClick={editLine}>
                                        <i class='fas fa-sm me-3 fa-fw fa-edit' data-line-id="${lineId}"></i>
                                    </button>
                                </td>
                            </tr>)}
                        </tbody>               
                </table>
            </div>
            <div className='d-flex justify-content-center'>
                <button className="btn btn-outline-secondary mt-4" onClick={dispatch(changeAddModalShow())}>+ הוסף</button>
            </div>
            <Modal show={showAddModalState} fullscreen={true} size={'l'} onHide={() => dispatch(changeAddModalShow())}>
                {(props.viewAt == "patient")? <AddPatient/> : <AddTherapist/>}
            </Modal>
        </div>
    )
}

export default ViewAll;