import cloneDeep from 'lodash/cloneDeep';

    let cycleIntianal = [];

    const cycleArr = (state = cycleIntianal, action) =>{
        switch (action.type) {
            
            case "UPDATE_CYCLE":{
                let arr = cloneDeep(state);
                arr[action.payload[0]][action.payload[1]] = parseFloat(action.payload[2]);
                return arr;
            } 
            case "INTIANAL_CYCLE_LIST":{
                let arr = cloneDeep(state);
                if(action.payload > arr.length){
                    for(let i = arr.length; i < action.payload; i++){
                        let cycle = {
                            KG: 0,
                            Time: 0,
                            dataLeft: [],
                            dataRight: []
                        }
                        arr.push(cycle)
                    }
                } else {
                    arr = arr.slice(0 , action.payload);
                }
                return arr;
            }
            default:
                return state;
        }
    };
    
    export default cycleArr;
    