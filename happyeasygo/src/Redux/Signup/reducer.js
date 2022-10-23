import { GET_REGISTER } from "./action";

const initState = {
    res:{}
}
const registerReducer = (state=initState, {type, payload})=>{
    switch(type){
        case GET_REGISTER:{
            return {
                res:payload
            };
        }
        default: {
            return state
        }
    }
}
export default registerReducer;