import {GET_ALL_USER,DELETE_BY_ID} from "./types";
import {userService} from "../../service/UserService";

export const getAllUser = () => async (dispatch) =>{
    try{
        const res = await userService.findAll();
        dispatch({
            type : GET_ALL_USER,
            payload : res.data
        })
    }catch (e) {
        console.log(e)
    }
}
export const deleteUser = (id) => async (dispatch) =>{
    try {
        await userService.deleteUserById(id);
        dispatch({
            type: DELETE_BY_ID
        })
    }catch (e) {
        console.log(e)
    }
}