import cloneDeep from 'lodash/cloneDeep';

    let cycleIntianal = [];

    const cycleArr = (state = cycleIntianal, action) =>{
        switch (action.type) {
            case "UPDATE_CYCLE":{
                let arr = cloneDeep(state);
                arr[action.payload[0]][action.payload[1]] = parseFloat(action.payload[2]);
                console.log(arr);
                return arr;
            }
            
            case "INTIANAL_CYCLE_LIST":{
                console.log("INTIANAL_CYCLE_LIST from cycle");
                let arr = cloneDeep(state);
                arr = [];
                // arr[action.payload[0]] = action.payload[1];
                for(let i = 0; i< action.payload; i++){
                    let cycle = {
                        KG: 0,
                        Time: 0,
                        dataLeft: [],
                        dataRight: []
                    }
                    arr.push(cycle);

                }
                console.log(arr);
                return arr;
            }

            case "DATA_CYCLES":{
                let start=action.payload[2][0];
                let finish=parseInt(start[3,4])


            }

    
            default:
                return state;
        }
    };
    
    export default cycleArr;
    