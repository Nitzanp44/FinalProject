import { useSelector, useDispatch } from 'react-redux';
import {changeSideBarRight, changeSideBarLeft, changeView, dataCycels} from '../actions/index';
import { useState } from 'react';

const SideBar = () =>  {

    const state = useSelector((state) => state.sideBar);
    const practiceState = useSelector((state) => state.practice);
    const stateCycles = useSelector((state) => state.cycle);
    const dispatch = useDispatch();

    const [defaultRangeVal, setDefaultRangeVal] = useState(600);

    const changeRange = () => {
        setDefaultRangeVal(document.getElementById('graphRange').value);
        dispatch(changeView(defaultRangeVal));
    }

    const formatRemainingTime = (time) => {
        const minutes = Math.floor((time % 3600) / 60);
        const seconds = time % 60;
        return `${minutes}:${seconds}`;
      }

    return (
        <div className='cmpBg p-5'>
            <div className='spaceAround h-100'>
                <div className='spaceAround'>
                    <h4 className="form-label">קנה מידה</h4>
                    <div>
                        <div className="d-flex justify-content-between">
                            <h5>00:05</h5>
                            <input type="range" className="form-range mx-4" min="5" max="600" step="1" id="graphRange" defaultValue={defaultRangeVal} onChange={changeRange}/>
                            <h5>10:00</h5>
                        </div>
                        <div className='timeContainer d-flex justify-content-center align-items-center'>
                            <i className='fa-clock mr-3'></i>
                            <h5>{formatRemainingTime(defaultRangeVal)}</h5>
                        </div>
                    </div>
                </div>
                <div className='d-flex w-100 justify-content-around'>
                    <div className='d-flex'>
                        <label className="form-label">שמאל</label>
                        <input className="form-check-input me-1" type="checkbox" defaultChecked={true} onChange={() => dispatch(changeSideBarLeft())}/>
                    </div>
                    <div className='d-flex'>
                        <label className="form-label">ימין</label>
                        <input className="form-check-input me-1" type="checkbox" defaultChecked={true} onChange={() => dispatch(changeSideBarRight())}/>
                    </div>
                </div>    
            </div>
        </div>
    )
}

export default SideBar;