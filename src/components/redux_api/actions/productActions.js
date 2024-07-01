import axios from 'axios'
import * as actionType from '../constants/productConstants'
const URL = 'https://rickandmortyapi.com/api/character'

export const getProducts = ()=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`${URL}`);
        dispatch({type:actionType.GET_PRODUCTS_SUCCESS, payload:data})
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCTS_FAIL, payload:error.message})
    }
};

export const getProductDetails = (id)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`${URL}/${id}`);
        dispatch({type:actionType.GET_PRODUCT_DETAILS_SUCCESS, payload:data});
    } catch (error) {
        dispatch({type:actionType.GET_PRODUCT_DETAILS_FAIL,payload:error.message})
    }
}