import * as Actions from '../actions';

const initialState = {
    data      : [],
    searchText: ''
};

const packagesReducer = function (state = initialState, action) {
    switch ( action.type )
    {
        case Actions.GET_PACKAGES:
        {
            return {
                ...state,
                data: action.payload
            };
        }
        case Actions.SET_PACKAGES_SEARCH_TEXT:
        {
            return {
                ...state,
                searchText: action.searchText
            };
        }
        case Actions.DELETE_PACKAGES:
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

export default packagesReducer;
