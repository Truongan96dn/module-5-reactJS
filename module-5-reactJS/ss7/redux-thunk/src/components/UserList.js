import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {deleteUser, getAllUser} from "../redux/actions/users";
export function UserList() {
    const userList = useSelector(state => state.users)
    const dispatch = useDispatch()
    const deleteUserById = async (id) =>{
        await dispatch(deleteUser(id));
        fetchApi()
    }
    const fetchApi = () => {
        dispatch(getAllUser())
    }

    return(
        <>
            <div>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Website</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {userList.map(user => (
                        <tr key={user.id}>
                            <td>{user.id}</td>
                            <td>{user.name}</td>
                            <td>{user.email}</td>
                            <td>{user.website}</td>
                            <td>
                                <button className="btn btn-danger" onClick={() => deleteUserById(user.id)} >Delete</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>
    )

}