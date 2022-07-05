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
            <Plot data={barData.datasets} layout={
    {shapes: [
        // 1st highlight during Feb 4 - Feb 6
        {
            type: 'line',
            // x-reference is assigned to the x-values
            xref: 'x',
            // y-reference is assigned to the plot paper [0,1]
            yref: 'paper',
            x0: '300',
            y0: 0,
            x1: '300',
            y1: 1,
            fillcolor: '#000000',
            opacity: 0.2,
            line: {
                color: 'rgb(0, 0, 0)',
                width: 4,
                dash: 'dot'
            }
        }], width: 600, height: 450, title: 'מהלך האימון'  }}/>
        </CDBContainer>
    )
};
export default PreviousPracticeHandsData;