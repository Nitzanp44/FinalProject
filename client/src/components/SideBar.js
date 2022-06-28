import { useSelector, useDispatch } from 'react-redux';
import {changeSideBarRight, changeSideBarLeft, changeView, dataCycels} from '../actions/index'

const SideBar = () =>  {

    const state = useSelector((state) => state.sideBar);
    const practiceState = useSelector((state) => state.practice);
    const stateCycles = useSelector((state) => state.cycle);
    const dispatch = useDispatch();

    let defaultRangeVal = 600;
    const changeRange = () => {
        let rangeVal = document.getElementById('graphRange').value;
        dispatch(changeView(rangeVal));
        defaultRangeVal = rangeVal;
    }

    const finishPractice = () => {
        let dataRigth=state.dataRigth;
        let dataLeft=state.dataLeft;
        let time=state.labels;
        state.dataLeft=[];
        state.dataRigth=[];
        state.label=[];
        let cycels=dispatch(dataCycels(dataRigth,dataLeft,time));
        // axiosPost(practice, 'addPractice');
    }

    return (
        <div>
            <div className='sideBar'>
                <ul className="list-group-flush">
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" defaultChecked={true} onChange={() => dispatch(changeSideBarLeft())}/>שמאל
                    </li>
                    <li className="list-group-item">
                        <input className="form-check-input me-1" type="checkbox" defaultChecked={true} onChange={() => dispatch(changeSideBarRight())}/>ימין
                    </li>
                    <li className="list-group-item">
                        <label className="form-label">קנה מידה</label>
                        <input type="range" className="form-range" min="5" max="600" step="1" id="graphRange" defaultValue={defaultRangeVal} onChange={changeRange}/>
                        <div className="d-flex justify-content-between">
                            <span>5 שניות</span>
                            <span>10 דקות</span>
                        </div>
                    </li>
                    <li className="list-group-item">
                        <button type="button" className="btn btn-primary" variant="link" onClick={finishPractice}>סיום אימון</button>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar;