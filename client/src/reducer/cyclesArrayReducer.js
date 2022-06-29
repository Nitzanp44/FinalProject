import cloneDeep from 'lodash/cloneDeep';

    let cycleIntianal = [];

    const cycleArr = (state = cycleIntianal, action) =>{
        let arr = cloneDeep(state);

        switch (action.type) {
            
            case "UPDATE_CYCLE":{
                arr[action.payload[0]][action.payload[1]] = parseFloat(action.payload[2]);
                console.log(arr);
                return arr;
            } 
            case "INTIANAL_CYCLE_LIST":{
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
            case "DATA_CYCLES":{
                


            }

    
            default:
                return state;
        }
    };
    
    export default cycleArr;
    