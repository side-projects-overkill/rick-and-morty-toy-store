import axios from 'axios'

import * as actionType from '../constants/cartConstants'

const URL = 'https://rickandmortyapi.com/api/character'

export const addToCart = (id,quantity)=>async(dispatch)=>{
    try {
        const {data} = await axios.get(`${URL}/${id}`);

        dispatch({type:actionType.ADD_To_CART, payload:{...data,quantity}});
    } catch (error) {
        dispatch({type:actionType.ADD_To_CART_ERROR, payload:error.message});
    }
}

export const removeFromCart = (id)=>(dispatch)=>{
    dispatch({type:actionType.REMOVE_FROM_CART, payload:id});
}