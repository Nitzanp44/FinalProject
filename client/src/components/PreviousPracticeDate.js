import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../actions';
import { convertDate } from '../actions/utils';

const PreviousPracticeDate = () =>  {
    
    const statePracticeList = useSelector((state) => state.practiceList);
    const dispatch = useDispatch();

    const handleDateSelected = (event) => {
        let evDate = new Date(event.target.name);
        let date = evDate.toISOString();
        dispatch(setDate(date));
    }

    // const statePracticeListreverse = (event) => {

    return (
        <div>
            <div className="list-group">
                {statePracticeList.map((practice) =>
                    <button type="button" key={practice.created_at} className="list-group-item list-group-item-action btnDate" onClick={handleDateSelected} name={practice.created_at}>{convertDate(new Date(practice.created_at))}</button>
                ).reverse()}
            </div>
        </div>
    )
}

export default PreviousPracticeDate;