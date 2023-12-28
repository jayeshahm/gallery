import { storeState } from "./storeState";

const imageSearchReducer = (state = storeState, action) => {

    switch(action.type){

        case "SET_IMAGE_DATA":
            return{
                ...state,
                data:action.data
            }
        default:
            return state
    }

}

export default imageSearchReducer;