import { GET_PLACES, DELETE_PLACE, ADD_PLACE } from '../actions/types';


const initialState = {
    places:[]

}

export default function(state=initialState, action){
    switch(action.type) {
        case GET_PLACES:
            return {
                ...state,
                places: action.payload
            }
        case DELETE_PLACE:
            return {
                ...state,
                places: state.places.filter(place => place.id !== action.payload)
            };
        case ADD_PLACE:
            return {
                ...state,
                places: [...state.places,action.payload]
            }
            default:
                return state;
    }
}