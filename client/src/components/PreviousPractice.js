import { axiosPost } from '../actions/serverHelper';
import { convertDate } from '../actions/utils';
import {Chart as ChartJS,CategoryScale,LinearScale,PointElement,LineElement,Title,Tooltip,Legend, BarElement} from 'chart.js';
import { useSelector, useDispatch } from 'react-redux';
import { setPracticeList } from '../actions';
import PreviousPracticeDate from './PreviousPracticeDate';
import PreviousPracticeData from './PreviousPracticeData';
import PreviosPracticeDetails from './PreviosPracticeDetails';

ChartJS.register(CategoryScale, LinearScale, PointElement,LineElement, Title, Tooltip, Legend, BarElement);

const PreviousPractice = () =>  {
    const statePracticeList = useSelector((state) => state.practiceList);
    const patientState = useSelector((state) => state.patient);
    const dateState = useSelector((state) => state.practiceDate);
    const patient = {ID: patientState.ID};
    const dispatch = useDispatch();

    const getAnswer = async () => {
        let res = await axiosPost(patient, 'practiceList');
        if(res.data){
            dispatch(setPracticeList(res.data));
        };
    };

    if(statePracticeList.length === 0 && patient){
        getAnswer();
    }
    
    return (
        <div>
        <div className='d-flex align-items-start'>
            <PreviosPracticeDetails/>
        </div>
        <div className='d-flex'>
            <PreviousPracticeData/>
            <PreviousPracticeDate/>
        </div>
        </div>
    )
};
export default PreviousPractice;