import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../actions';

const PreviousPracticeDate = () =>  {
    
    const statePracticeList = useSelector((state) => state.practiceList);
    const dispatch = useDispatch();

    const handleDateSelected = (event) => {
        let evDate = new Date(event.target.name);
        let date = evDate.toISOString();
        dispatch(setDate(date));
    }

    return (
        <div>
            <div className="list-group">
                {statePracticeList.map((practice) =>
                    <button type="button" className="list-group-item list-group-item-action" onClick={handleDateSelected} name={practice.created_at}>{(new Date(practice.created_at)).toISOString().split('T')[0]}</button>
                )}
            </div>
        </div>
    )
}

export default PreviousPracticeDate;