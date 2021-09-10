import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const eventsReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_EVENTS:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_EVENTS_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.DELETE_EVENTS:
        {
            let temp = state.data;
            for (let i = 0; i < temp.length; i++) {
                let obj = temp[i];
            
                if (action.payload.indexOf(obj.id) !== -1) {
                    temp.splice(i, 1);
                }
            }
            
            return {
                ...state,
                data: [...temp]
            };
        }
        default:
        {
            return state;
        }
    }
};

export default eventsReducer;
