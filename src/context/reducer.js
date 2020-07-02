import { act } from "react-test-renderer";

export function reducer(state,action){
    switch (action.type) {
        case "SET_USER":
            state.user=action.userObj
            return {...state}
    
        case "SEND_POST":
            state.post=action.postArr
            return {...state}
        default:
            return state
    }
}