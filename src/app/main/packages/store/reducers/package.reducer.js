import * as Actions from '../actions';

const initialState = {
    data: null
};

const packageReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_PACKAGE:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SAVE_PACKAGE:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        default:
        {
            return state;
        }
    }
};

export default packageReducer;
