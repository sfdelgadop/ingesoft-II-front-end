import * as ActionTypes from './ActionTypes';
// the recipes tracking
export const Ingredients = (state = { isLoading: true, errMess: null, dishes:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_INGREDIENT:
            return {...state, isLoading: false, errMess: null, dishes: action.payload};

        case ActionTypes.INGREDIENT_LOADING:
            return {...state, isLoading: true, errMess: null, dishes: []}

        case ActionTypes.INGREDIENT_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};