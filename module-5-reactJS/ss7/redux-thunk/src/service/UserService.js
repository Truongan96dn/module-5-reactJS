import request from '../http-common';
const findAll = () =>{
    return request.get('/user')
}
const deleteUserById = (id) =>{
    return request.delete('/user/'+id)
}
export const userService = {
    findAll,
    deleteUserById
}
