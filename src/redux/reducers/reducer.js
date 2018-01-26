import * as constants from '../actions/types';
const initialState={
    data:[]
}
export const restaurants=(state=initialState, action)=>{
  switch(action.type){
      case constants.GET_RESTAURANTS:
      return Object.assign({},state,{data:action.payload})
      default:
      return state;
  }
}