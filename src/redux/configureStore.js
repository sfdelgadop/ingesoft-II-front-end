import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Ingredients } from './ingredients';
import { Filters } from './filters';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            ingredients: Ingredients,
            filters: Filters
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}