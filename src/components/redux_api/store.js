import { legacy_createStore as createStore , combineReducers, applyMiddleware} from 'redux'
import {thunk} from 'redux-thunk';
import {composeWithDevTools} from '@redux-devtools/extension'

import { getProductsReducer, getProductDetailsReducer } from './reducers/ProductReducer';
import { cartReducer } from './reducers/CartReducer';

const middleware = [thunk];

const reducer = combineReducers({
    getProducts: getProductsReducer,
    getProductDetails: getProductDetailsReducer,
    cart: cartReducer
    })

export const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(...middleware))
)