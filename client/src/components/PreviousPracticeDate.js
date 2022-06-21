import { useSelector, useDispatch } from 'react-redux';
import { setDate } from '../actions';


const PreviousPracticeDate = () =>  {
    const statePracticeList = useSelector((state) => state.practiceList);
    const dispatch = useDispatch();

    console.log('statePracticeList ---> ',statePracticeList);

    const handleDateSelected = (event) => {
        let date = new Date(event.target.name);
        console.log("date", date);
        console.log(typeof date);
        dispatch(setDate(date));
    }


    // CSS 
    // .list-group-item-action:focus {
    //     background-color: blue;
    // }

    return (
        <div>
            <div className="list-group">
                {statePracticeList.map((practice) =>
                    <button type="button" className="list-group-item list-group-item-action" onClick={handleDateSelected} name={practice.created_at}>{practice.created_at}</button>
                )}
                {/* <button type="button" className="list-group-item list-group-item-action" onClick={handleDateSelected} name='22/06'>22/06</button>
                <button type="button" className="list-group-item list-group-item-action" onClick={handleDateSelected} name='23/06'>23/06</button>
                <button type="button" className="list-group-item list-group-item-action" onClick={handleDateSelected} name='24/06'>24/06</button>
                <button type="button" className="list-group-item list-group-item-action" onClick={handleDateSelected} name='25/06'>25/06</button> */}
            </div>
        </div>
    )
}
export default PreviousPracticeDate;