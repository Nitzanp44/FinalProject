import axios from 'axios';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import createPlotlyComponent from 'react-plotly.js/factory';
import Plotly from "plotly.js-basic-dist";
import { CDBContainer } from "cdbreact";
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setPracticeList } from '../actions';
import PreviousPracticeDate from './PreviousPracticeDate'
import PreviousPracticeData from './PreviousPracticeData'


ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, BarElement);

const PreviousPractice = () =>  {
    
    var Plot = createPlotlyComponent(Plotly);
    const patientState = useSelector((state) => state.patient);
    const [recordList, setRecordList] = useState([]);
    const patient = {ID: patientState.ID};
    const dispatch = useDispatch();
    
   
    
   

    const getAnswer = async () => {
        try{
            let res = await axios.post(
                'http://localhost:5000/practiceList', 
                patient, 
                {headers: {"Content-Type": "application/json",}},
            );
            if(res.data){
                dispatch(setPracticeList(res.data));
                console.log("hey")
                // setRecordList(res.data); 
                 
            };
            
        } catch(err){
            console.log('err --->', err);
        }
    };

    getAnswer();
    
    return (
        <div className='d-flex'>
            <PreviousPracticeDate/>
            <PreviousPracticeData/>
        </div>
    )
};
export default PreviousPractice;