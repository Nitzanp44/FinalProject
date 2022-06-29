import { useSelector, shallowEqual } from 'react-redux';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";
import { CDBContainer } from "cdbreact";
ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, BarElement);

const PreviousPracticeHandsData = () =>  {
    const statePracticeList = useSelector((state) => state.practiceList, shallowEqual);
    const statePracticeDate = useSelector((state) => state.practiceDate);
    var Plot = createPlotlyComponent(Plotly);
    
    let barData = {
        labels: [],
        datasets: [
            {
                type: 'scatter',
                mode: 'lines+points',
                visible: true,
                name: "שמאל",
                marker: { color: 'blue' },
                //x:Array(600).fill("-"),
                y: Array(600).fill(0),
              },
              {
                type: 'scatter',
                mode: 'lines+points',
                visible: true,
                name: "ימין",
                marker: { color: 'green' },
                //x:Array(600).fill("-"),
                y:Array(600).fill(0),
              }
    ]}

    let { labels, datasets } = barData;
    const checkDate = (practice) => {
        return practice.created_at == statePracticeDate;
    };
    
    if(statePracticeList.length > 0){       
        let practiceDate = statePracticeList.find(checkDate);
        if (practiceDate){
            let cycleIndex = 1;
            practiceDate.CycleList.forEach(cycle => {
                labels.push(cycleIndex++);
                datasets[0].y = cycle.dataLeft;
                datasets[1].y = cycle.dataRight;
            }); 
        } 
    }

    return (
        <CDBContainer>
            <Plot data={barData.datasets} layout={ {width: 600, height: 400, title: 'מהלך האימון' } }/>
        </CDBContainer>
    )
};
export default PreviousPracticeHandsData;