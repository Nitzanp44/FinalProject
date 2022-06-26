import { CDBContainer } from "cdbreact";
import cloneDeep from 'lodash/cloneDeep';
import { useSelector, useDispatch } from 'react-redux';
import SideBar from './SideBar';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";

const PracticePage = () =>  {
  var Plot = createPlotlyComponent(Plotly);
  const state = useSelector((state) => state.sideBar);
  let lineDate = cloneDeep(state);

  return (
    <div className='d-flex'>
      <SideBar/>
      <CDBContainer> 
        <Plot data={lineDate.datasets} layout={ { width: 900, height: 600, title: 'גרף האימון', xaxis: {title:"זמן"}}}/>  
      </CDBContainer>              
    </div>
  )
}

export default PracticePage;