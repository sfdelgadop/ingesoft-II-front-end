import * as ActionTypes from './ActionTypes';
// the recipes tracking
export const Filters = (state = { isLoading: true, errMess: null, filters:[]}, action) => {
    switch (action.type) {
        case ActionTypes.ADD_FILTER:
            return {...state, isLoading: false, errMess: null, filters: action.payload};

        case ActionTypes.FILTER_LOADING:
            return {...state, isLoading: true, errMess: null, filters: []}

        case ActionTypes.FILTER_FAILED:
            return {...state, isLoading: false, errMess: action.payload};

        default:
            return state;
    }
};