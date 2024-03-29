import { useSelector, shallowEqual } from 'react-redux';
import React from 'react';
import { CDBTable, CDBTableHeader, CDBTableBody, CDBContainer } from 'cdbreact';
import { axiosPost } from '../actions/serverHelper';
import { convertDate } from '../actions/utils';

const PreviosPracticeDetails=()=>
{
    const statePracticeList = useSelector((state) => state.practiceList, shallowEqual);
    const stateUser = useSelector((state) => state.user);
    const statePracticeDate = useSelector((state) => state.practiceDate);

    let date="";
    let thrapist="";
    let max="";

    const checkDate = (practice) => {
        return practice.created_at === statePracticeDate;
    };
    
    const getThrapist = async(IDTherapist)=>
    {
      if(IDTherapist != stateUser.ID){
        let res = await axiosPost({ID:IDTherapist}, 'getThrapist');
        if(res.data){
          thrapist = res.data.Name;
        }
      }else{
        thrapist = stateUser.Name;
      }
    };
    
    if(statePracticeList.length > 0){ 
        let practiceDate = statePracticeList.find(checkDate);
        if (practiceDate){
            date= convertDate(new Date(practiceDate.created_at));
            max=practiceDate.MuscleLoad;
           getThrapist(practiceDate.IDTherapist).then( (thrapistVal) =>  console.log(thrapistVal));
           
      }}

    return (
        <CDBContainer>
        <CDBTable>
        <CDBTableHeader>
          <tr>
            <th>עומס שריר מירבי שהוגדר</th>
            <th>מטפל</th>
            <th>תאריך הטיפול</th>
          </tr>
        </CDBTableHeader>
        <CDBTableBody>
          <tr>
            <td>{max}</td>
            <td>{thrapist}</td>
            <td>{date}</td>
          </tr>
          </CDBTableBody>
      </CDBTable>
    </CDBContainer>
    )
}
export default PreviosPracticeDetails;