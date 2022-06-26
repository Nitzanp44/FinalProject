import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../actions';
import PreviousPracticeData from './PreviousPracticeData';


const PracticeSummary = () =>  {
    const statePracticeList = useSelector((state) => state.practiceList);
    const dispatch = useDispatch();
    if(statePracticeList.length > 0){
        let date = statePracticeList[statePracticeList.length-1].created_at;
        dispatch(setDate(date));
    }

    return (
        <div>
            <h4 className='mb-5 text-center'> סיכום אימון אחרון</h4>
            <PreviousPracticeData/>
        </div>
    )
}

export default PracticeSummary;