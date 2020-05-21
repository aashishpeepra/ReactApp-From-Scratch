import Axios from 'axios';
const URL="http://localhost:3004/artists";
import {
    ADD,
    START
} from '../reducers/types';

export function starter(){
    const data=Axios.get(`${URL}`).then(res=>{
        console.log("=>",res.data)
        return res.data}).catch(err=>alert(err))
    return{
        type:START,
        payload:data
    }
}
export function add(values,cb){
    Axios.post(`${URL}`,values).then(()=>{
        cb()
    })
    return {
        type:ADD,
        payload:"Okay"
    }
}