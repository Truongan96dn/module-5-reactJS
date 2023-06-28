import {GET_ALL_USER,DELETE_BY_ID} from "../actions/types"

const initialState = []
export const usersReducer = (users = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case GET_ALL_USER:
            return payload;
        case DELETE_BY_ID :
            return users;
        default:
            return users

    }
}
