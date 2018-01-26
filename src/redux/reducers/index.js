import { restaurants } from './reducer';
import {combineReducers} from 'redux';
const  rootReducer=combineReducers({
    restaurants: restaurants
})
export default rootReducer;