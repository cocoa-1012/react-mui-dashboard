import {combineReducers} from 'redux';
import packages from './packages.reducer';
import packag from './package.reducer';

const reducer = combineReducers({
    packages,
    packag,
});

export default reducer;
