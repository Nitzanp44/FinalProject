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
                y: Array(),
              },
              {
                type: 'scatter',
                mode: 'lines+points',
                visible: true,
                name: "ימין",
                marker: { color: 'green' },
                y:Array(),
              },
    ]};

    let layout={
        shapes:[],
         width: 600,
         height: 400, 
         title: 'מהלך האימון'  };

    let { labels, datasets } = barData;
    const checkDate = (practice) => {
        return practice.created_at === statePracticeDate;
    };
    
    if(statePracticeList.length > 0){  
        let len=0;     
        let practiceDate = statePracticeList.find(checkDate);
        if (practiceDate){
            let cycleIndex = 1;
            let cycleList=practiceDate.CycleList;
            for (let i=cycleList.length-1; i>=0;i--)
             {
                let cycle= cycleList[i];
                len+=cycle.dataLeft.length;
                labels.push(cycleIndex++);
                cycle.dataLeft.forEach(dL=>{
                    datasets[0].y.unshift(dL);
                });
                cycle.dataRight.forEach(dR=>{
                    datasets[1].y.unshift(dR);
                });
            
                layout.shapes.push( {
                    type: 'line',
                    xref: 'x',
                    yref: 'paper',
                    x0: len,
                    y0: 0,
                    x1: len,
                    y1: 1,
                    fillcolor: 'orenge',
                    // opacity: 0.2,
                    line: {
                        color: 'red',
                        width: 4,
                        dash: 'dot'
                    }})
        }; 
        layout.shapes.push( {
            type: 'line',
            x0: 0,
            y0: practiceDate.MuscleLoad,
            x1: len,
            y1: practiceDate.MuscleLoad,
            fillcolor: 'yellow',
            // opacity: 0.2,
            line: {
                color: 'yellow',
                width: 4,
                dash: 'dashdot'
            }})
        }
        } 
    

    return (
        <CDBContainer>
            <Plot data={barData.datasets} layout={layout}/>
        </CDBContainer>
    )
};
export default PreviousPracticeHandsData;