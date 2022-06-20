import axios from 'axios';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";
import { CDBContainer } from "cdbreact";
import { useState } from 'react';
import { useSelector } from 'react-redux';

ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, BarElement);

const PreviousPractice = () =>  {
    
    var Plot = createPlotlyComponent(Plotly);
    const patientState = useSelector((state) => state.patient);
    const [recordList, setRecordList] = useState([]);
    const patient = {ID: patientState.ID};
    
    let obj = {
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

    let { labels, datasets } = obj;
    recordList.forEach(element => {
        labels.push(element.title);
        datasets[0].data.push(element.time);
        datasets[1].data.push(element.kg);
    });

    const getAnswer = async () => {
        try{
            let res = await axios.post(
                'http://localhost:5000/practiceList', 
                patient, 
                {headers: {"Content-Type": "application/json",}},
            );
            if(res.data){
                setRecordList(res.data); 
            }
        } catch(err){
            console.log('err --->', err);
        }
    };

    getAnswer();
    
    return (
        <div>
            <CDBContainer>
                <Plot data={[
                    {type: 'bar', x: obj.labels, y: obj.datasets[0].data, name: 'זמן אימון'},
                    {type: 'bar', x: obj.labels, y: obj.datasets[1].data, name: '(ק"ג) משקל'},
                ]}
                layout={ {width: 900, height: 500, title: 'אימונים קודמים'} }/>
            </CDBContainer>
        </div>
    )
}
export default PreviousPractice;