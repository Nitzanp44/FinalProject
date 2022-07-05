import PreviousPracticeHandsData from './PreviousPracticeHandsData';
import PreviousPracticeSetupData from './PreviousPracticeSetupData';


const PreviousPracticeData = () =>  {

    return (
       
        <div className='d-flex'>
            <PreviousPracticeSetupData/>
            <PreviousPracticeHandsData/>
        </div>
        
    )
}

export default PreviousPracticeData;