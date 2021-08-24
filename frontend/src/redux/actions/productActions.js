import axios from 'axios';
import * as action from '../constants/productConstant'; // we use * when we want to import everything for that file

const url = 'http://localhost:8000';

export const getProducts = () => async (dispatch) => { // we are using thunk here 

    try{
      const {data} =  await axios.get(`${url}/products`)
        dispatch({type: action.GET_PRODUCT_SUCCESS, payload : data});

    }catch(error){
        dispatch({type: action.GET_PRODUCT_FAIL, payload : error.response});
        }
}