import { combineReducers } from "redux";
import places from './places';
import errors from './errors';
import messages from './messages';


export default combineReducers({
    places,
    errors,
    messages
});