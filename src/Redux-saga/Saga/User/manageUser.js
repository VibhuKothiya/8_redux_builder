import { DELETE_USER_ERROR, DELETE_USER_SUCCESS, GET_USER_ERROR, GET_USER_SUCCESS, POST_USER_ERROR, POST_USER_SUCCESS, UPDATE_USER_ERROR, UPDATE_USER_SUCCESS, VIEW_USER_ERROR, VIEW_USER_SUCCESS } from "../../User/action/action";
import { delete_user, get_user, post_user, update_user } from "../../User/action/api/api"
import { call, put } from "redux-saga/effects";


function* handle_get_user(action){
    // console.log(action,"manage");

    //get-data
    try {
        let {data, status} = yield call(get_user, action);
        // console.log(data, "Dataaa");
        // console.log(status, "Staus");

        if(status === 200){
            yield put({type : GET_USER_SUCCESS, data})
        }
        else{
            yield put({type : GET_USER_ERROR, data})
        }
    }
    catch(error){
        yield put({type : GET_USER_ERROR, error})
    }
}

    //post-data
    function* handle_post_user(action){
            try{
              let {data, status} = yield call (post_user, action)

              if(status === 201 || status === 200){
                yield put({type : POST_USER_SUCCESS, data})
              }
              else{
                yield put({type : POST_USER_ERROR, data})
              }
            }
            catch(err){
                yield put({type : POST_USER_ERROR, err})
            }
    }

    //delete-data
    function* handle_delete_user(action){
        try{
            let {data, status} = yield call (delete_user, action)
            // console.log(data, "from manage");

            if(status == 200){
                yield put({type:DELETE_USER_SUCCESS, data})
            }
            else{
                yield put({type:DELETE_USER_ERROR, data})
            }
        }
        catch(err){
            yield put({type:DELETE_USER_ERROR, err})
        }
    }

    //update-data
    function* handle_update_user(action){
        try{
            let {data,status} = yield call(update_user, action)

            if(status == 200){
                yield put({type:UPDATE_USER_SUCCESS, data})
            }
            else{
                yield put({type:UPDATE_USER_ERROR, data})
            }
        }
        catch(err){
                yield put({type:UPDATE_USER_ERROR, err})
        }
    }      


export { handle_get_user, handle_post_user, handle_delete_user,handle_update_user };