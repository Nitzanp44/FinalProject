import cloneDeep from 'lodash/cloneDeep';
import { useSelector, useDispatch } from 'react-redux';
import { dataCycels} from '../actions/index';
import SideBar from './SideBar';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";
import Timer from './Timer';

const PracticePage = () =>  {
  var Plot = createPlotlyComponent(Plotly);
  const state = useSelector((state) => state.sideBar);
  let lineDate = cloneDeep(state);
  const dispatch = useDispatch();

  const finishPractice = () => {
    let dataRigth=state.dataRigth;
    let dataLeft=state.dataLeft;
    let time=state.labels;
    state.dataLeft=[];
    state.dataRigth=[];
    state.label=[];
    dispatch(dataCycels(dataRigth,dataLeft,time));
}

  return (
    <div>
      <div className='d-flex'>
        <Timer/>         
        <Plot className='mx-5' data={lineDate.datasets} layout={ { width: 600, height: 600, title: 'גרף האימון', xaxis: {title:"זמן"}}}/>  
        <SideBar/>
      </div>
      <div className='d-flex align-items-center justify-content-center mt-3'>
        <button type="button" className="btn btn-outline-secondary" onClick={finishPractice}>סיום אימון</button>
      </div>
    </div>
  )
}

export default PracticePage;