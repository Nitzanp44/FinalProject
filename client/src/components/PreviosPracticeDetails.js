import { useSelector, shallowEqual } from 'react-redux';
import React from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import { axiosPost } from '../actions/serverHelper';
import { convertDate } from '../actions/utils';


const PreviosPracticeDetails=()=>
{
    const statePracticeList = useSelector((state) => state.practiceList);
    const statePracticeDate = useSelector((state) => state.practiceDate);

    let date="";
    let thrapist="";
    let max="";

    const checkDate = (practice) => {
        return practice.created_at === statePracticeDate;
    };
    
    const getThrapist = async(IDTherapist)=>
    {
        let res = await axiosPost({ID:IDTherapist}, 'getThrapist');
        return res.data.Name;
    };
    
    if(statePracticeList.length > 0){ 
        let practiceDate = statePracticeList.find(checkDate);
        if (practiceDate){
            date=convertDate(new Date(practiceDate.created_at));
            max=practiceDate.MuscleLoad;
            thrapist=getThrapist(practiceDate.IDTherapist);
        }}

    return (
        <CDBContainer>
        <CDBTable>
        <CDBTableHeader>
          <tr>
            <th>עומס שריר מירבי שהוגדר</th>
            {/* <th>מטפל</th> */}
            <th>תאריך הטיפול</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          <tr>
            <td>{max}</td>
            {/* <td>{thrapist}</td> */}
            <td>{date}</td>
          </tr>
          </CDBTableBody>
      </CDBTable>
    </CDBContainer>
    )
}
export default PreviosPracticeDetails;