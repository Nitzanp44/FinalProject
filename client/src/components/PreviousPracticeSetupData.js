import { useSelector, useDispatch } from 'react-redux';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";
import { CDBContainer } from "cdbreact";
ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, BarElement);

const PreviousPracticeSetupData = () =>  {
    const statePracticeList = useSelector((state) => state.practiceList);
    const statePracticeDate = useSelector((state) => state.practiceDate);
    var Plot = createPlotlyComponent(Plotly);

    const checkDate = (date) => {
        console.log("date--", date);
        console.log("state--", statePracticeDate);
        return date == statePracticeDate;
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


        statePracticeList.find(checkDate).CycleList.forEach(cycle => {
                        labels.push(cycle.created_at);
                        datasets[0].data.push(cycle.Time);
                        datasets[1].data.push(cycle.KG);
        });  
    return (
        <CDBContainer>
            <Plot data={[
                {type: 'bar', x: barData.labels,  y: barData.datasets[0].data, name: 'זמן אימון'},
                {type: 'bar', x: barData.labels,  y: barData.datasets[1].data, name: '(ק"ג) משקל'},
            ]}
            layout={ {width: 900, height: 500, title: 'אימונים קודמים'} }/>
        </CDBContainer>
        
    )
};
export default PreviousPracticeSetupData;