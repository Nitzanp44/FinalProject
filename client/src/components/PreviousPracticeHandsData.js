import { useSelector, useDispatch } from 'react-redux';

const PreviousPracticeHandsData = () =>  {
    const statePracticeList = useSelector((state) => state.practiceList);
    const statePracticeDate = useSelector((state) => state.practiceDate);
    


    return (
        <h1>סיכום אימון</h1>
        
    )
}
export default PreviousPracticeHandsData;