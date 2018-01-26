import * as constants from './types';

export const getRestaurants=(info)=>{
    return{
        type: constants.GET_RESTAURANTS,
        payload: info
    }
}
export const getRestaurantsInit=()=>{
  return{
      type: constants.GET_RESTAURANTS_INIT
  }
}