import axios from 'axios';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import { useSelector, useDispatch } from 'react-redux';
import { setPracticeList } from '../actions';
import PreviousPracticeDate from './PreviousPracticeDate'
import PreviousPracticeData from './PreviousPracticeData'

ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, BarElement);

const PreviousPractice = () =>  {
    
    const patientState = useSelector((state) => state.patient);
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
            };
        } catch(err){
            console.log('err --->', err);
        }
    };

    getAnswer();
    
    return (
        <div className='d-flex'>
            <PreviousPracticeData/>
            <PreviousPracticeDate/>
        </div>
    )
};
export default PreviousPractice;