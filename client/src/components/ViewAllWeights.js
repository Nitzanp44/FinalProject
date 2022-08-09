import { axiosGet } from '../actions/serverHelper';
import { useSelector, useDispatch } from 'react-redux';
import Modal from 'react-bootstrap/Modal';
import { changeAddModalShow, setAllTherapistList, weigthsListChange } from '../actions/index';
import { editLine } from '../actions/tableService';
import AddWeight from './AddWeight';

const ViewAllWeights = (props) => {
    const dispatch = useDispatch();
    const weightsListState = useSelector((state) => state.weightsList);
    const showAddModalState = useSelector((state) => state.showAddModal);
    let showList = [];

    const getData = async (data) => {
        let res = await axiosGet(data);
        if(res.data){
            dispatch(weigthsListChange(res.data));
        }
    };

    
    if(weightsListState.length == 0){
        console.log(weightsListState);
        getData('weightsList');
    }
    showList = weightsListState;

    return(  
        <div>
            <div className='theadContainer'>
                <table className="table">
                    <thead>
                        <tr>
                            <th className='col-2'>כתובת MAC</th>
                            <th className='col-2'>מספר עמדה</th>
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
                            <tr key={val.ID} id={val.ID} data-type={"Weights"} data-index={index} data-name={val.ID} data-email={val.macAdress}>
                                <td className='col-2'>{val.macAdress}</td>
                                <td className='col-2'>{val.ID}</td>
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
                <button className="btn btn-outline-secondary mt-4" onClick={() => dispatch(changeAddModalShow())}>+ הוסף</button>
            </div>
            <Modal show={showAddModalState} fullscreen={true} size={'l'} onHide={() => dispatch(changeAddModalShow())}>
                <AddWeight/>
            </Modal>
        </div>
    )
}

export default ViewAllWeights;