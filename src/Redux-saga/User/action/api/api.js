import axios from "axios"
import { DELETE_USER, GET_USER, POST_USER, UPDATE_USER, VIEW_USER, base_url } from "../../../Constant";

//GET-DATA
const get_user = (action) =>{

    return axios.get(base_url + GET_USER).then((res)=>{
            let data = res.data;
            let status = res.status
            return {data, status}
    })

}

//POST-DATA
const post_user = (action) =>{

    return axios.post(base_url + POST_USER, action.payload).then((res)=>{
            let data = res.data;
            let status = res.status
        return {data, status}
    })

}

//DELETE-DATA
const delete_user = (action) =>{

    return axios.delete(base_url + DELETE_USER + action.payload).then((res)=>{
            let data = res.data;
            let status = res.status
        return {data, status}
    })

}

//UPDATE-DATA
const update_user = (action)=>{
    return axios.put(base_url+UPDATE_USER+action.payload.id, action.payload).then((res)=>{
        let data = res.data;
        let status = res.status
        return {data, status}
        // console.log(res, "from apiii");
    })
}




export {get_user, post_user, delete_user, update_user}