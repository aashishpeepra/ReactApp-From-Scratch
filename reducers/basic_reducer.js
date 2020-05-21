import {
    ADD,
    START
} from './types';

export default function(state={},action)
{
    switch(action.type){
        case START:
            return {...state,getData:action.payload}
        case ADD:
            return {...state,status:action.payload}
        default:
            return state;
    }
}