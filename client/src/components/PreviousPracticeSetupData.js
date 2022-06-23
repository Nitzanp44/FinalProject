import { useSelector, useDispatch, shallowEqual } from 'react-redux';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";
import { CDBContainer } from "cdbreact";
ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, BarElement);

const PreviousPracticeSetupData = () =>  {
    const statePracticeList = useSelector((state) => state.practiceList, shallowEqual);
    const statePracticeDate = useSelector((state) => state.practiceDate);
    var Plot = createPlotlyComponent(Plotly);

    const checkDate = (practice) => {
        console.log("state--", statePracticeDate);
        return practice.created_at == statePracticeDate;
      };

    let barData = {
        labels: [],
        datasets: [
            {
                label: 'זמן אימון',
                data: [],
                backgroundColor: "red",
                direction: "rtl",
            },
            {
                label: '(ק"ג) משקל',
                data: [],
                backgroundColor: "blue",
                direction: "rtl",
            }, 
        ]}
    
        let { labels, datasets } = barData;

        if(statePracticeList.length > 0){
            
            let practiceDate = statePracticeList.find(checkDate);
            if (practiceDate){
                let cycleIndex = 1;
                practiceDate.CycleList.forEach(cycle => {
                    labels.push(cycleIndex++);
                    datasets[0].data.push(cycle.Time);
                    datasets[1].data.push(cycle.KG);
                    
                }); } 
            }
        console.log("barData--", barData);
    return (
        <CDBContainer>
            <Plot data={[
                {type: 'bar', x: barData.labels,  y: barData.datasets[0].data, name: 'זמן אימון'},
                {type: 'bar', x: barData.labels,  y: barData.datasets[1].data, name: '(ק"ג) משקל'},
            ]}
            layout={ {width: 600, height: 400, title: 'פרטי האימון'} }/>
        </CDBContainer>
        
    )
};
export default PreviousPracticeSetupData;