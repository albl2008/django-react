import axios from 'axios';

import { GET_PLACES, DELETE_PLACE, ADD_PLACE } from './types';

//GET PLACES
export const getPlaces = () => dispatch => {
    axios.get('/api/places/')
        .then(res=>{
            dispatch({
                type: GET_PLACES,
                payload: res.data
            })
        }).catch(err => console.log(err));
};

//DELETE PLACE
export const deletePlace = id => dispatch => {
    axios.delete(`/api/places/${id}/`)
        .then(res=>{
            dispatch({
                type: DELETE_PLACE,
                payload: id
            })
        }).catch(err => console.log(err));
};

//ADD PLACE
export const addPlace = place => dispatch => {
    axios.post('/api/places/', place)
        .then(res=>{
            dispatch({
                type: ADD_PLACE,
                payload: res.data
            })
        }).catch(err => console.log(err));
};
