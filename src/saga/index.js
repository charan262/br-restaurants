import {takeEvery} from 'redux-saga/effects';
import * as constants from '../redux/actions/types';
import { restaurantSaga } from './restaurantsSaga';
export function* watchSaga(){
   yield takeEvery(constants.GET_RESTAURANTS_INIT, restaurantSaga);
}
