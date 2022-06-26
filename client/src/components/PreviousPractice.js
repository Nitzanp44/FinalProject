import { axiosPost } from '../actions/serverHelper';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import { useSelector, useDispatch } from 'react-redux';
import { setPracticeList } from '../actions';
import PreviousPracticeDate from './PreviousPracticeDate';
import PreviousPracticeData from './PreviousPracticeData';

ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, BarElement);

const PreviousPractice = () =>  {
    
    const patientState = useSelector((state) => state.patient);
    const patient = {ID: patientState.ID};
    const dispatch = useDispatch();

    const getAnswer = async () => {
        let res = await axiosPost(patient, 'practiceList');
        if(res.data){
            dispatch(setPracticeList(res.data));
        };
    };

    if(patient){
        getAnswer();
    }
    
    return (
        <div className='d-flex'>
            <PreviousPracticeData/>
            <PreviousPracticeDate/>
        </div>
    )
};
export default PreviousPractice;