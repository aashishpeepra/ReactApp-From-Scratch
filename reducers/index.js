import {combineReducers} from 'redux';
import data from './basic_reducer';
import {reducer as formReducer} from 'redux-form';

const reducer=combineReducers({
    form:formReducer,
    data
});

export default reducer;