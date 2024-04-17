import { GET_USER_PENDING, GET_USER_SUCCESS, GET_USER_ERROR, POST_USER_PENDING, POST_USER_SUCCESS, POST_USER_ERROR, DELETE_USER_ERROR, DELETE_USER_SUCCESS, DELETE_USER_PENDING, VIEW_USER_PENDING, VIEW_USER_SUCCESS, UPDATE_USER_PENDING, UPDATE_USER_SUCCESS, UPDATE_USER_ERROR } from "../action";

let initialState = {
    user : [],
    isLoading : false,
    isError : null,
}

let userReducer = (state = initialState, action) =>{
    console.log(action);
        switch(action.type){

            //get-user
            case GET_USER_PENDING :{
                return{
                    ...state,
                    isLoading : true,
                }
            }

            case GET_USER_SUCCESS :{
                return{
                    ...state,
                    isLoading : false,
                    user : action.data
                }
            }

            case GET_USER_ERROR :{
                return{
                    
                    isLoading : false,
                    user : action.data
                }
            }

            //post-user

            case POST_USER_PENDING:{
                return{
                    ...state,
                    isLoading : true
                }
            }
                
            
                case POST_USER_SUCCESS:{
                    return{
                        ...state,
                        user : state.user.concat(action.data),
                        isLoading:false   
                    }
                }
                    
                
                case POST_USER_ERROR:{
                    return{
                        isError : action.data,
                        ...state,
                    }  
                }

            //delete-user
            
            case DELETE_USER_PENDING:{
                return{
                    ...state,
                    isLoading:true
                }
            }

            case DELETE_USER_SUCCESS:{
                return{
                    isLoading:false,
                    user : state.user.filter((val)=>val.id !== action.data.id)
                }
            }

            case DELETE_USER_ERROR:{
                return{
                    isLoading:false,
                    isError : action.data
                }
            }

            //update-user
            
            case UPDATE_USER_PENDING:{
                return{
                    ...state,
                    isLoading:true
                }
            }

            case UPDATE_USER_SUCCESS:{
                return{
                    isLoading:false,
                    user : state.user.map((val)=>{
                        if(val.id == action.data.id){
                            return{
                                ...val,
                                ...action.data
                            }
                        }
                        else{
                            return{
                                ...val,
                            }
                        }
                    })
                }
            }

            case UPDATE_USER_ERROR:{
                return{
                    isLoading:false,
                    isError : action.data
                }
            }    
            
                      

            default : {
                return {
                    ...state,
                }
            }
            
        }
}

export default userReducer;