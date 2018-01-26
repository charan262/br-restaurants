import {put} from 'redux-saga/effects'
import axios from 'axios'
import * as actions from '../redux/actions/actions';

export function* restaurantSaga(action){
    try{
        const response = yield axios.get('https://s3.amazonaws.com/br-codingexams/restaurants.json');
        yield put(actions.getRestaurants(response.data))
    }
    catch(error){
        //...
    }
 

}