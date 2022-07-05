
import { useSelector } from 'react-redux';

const Spinner = () => {

  const showSpinnerState = useSelector((state) => state.showSpinner);

    return (
        <div className={(showSpinnerState) ? 'loaderContainer' : 'd-none'}>
          <div className='loader'></div>
        </div>
    );
}

export default Spinner;