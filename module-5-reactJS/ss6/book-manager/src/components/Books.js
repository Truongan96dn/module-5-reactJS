import React, {useEffect, useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import * as bookService from '../services/BookService';
import {Link} from "react-router-dom";
import {useNavigate} from "react-router";


export function Books() {
    const navigate = useNavigate()
    const [book, setBook] = useState([])
    const [isDelete,setIdDel] = useState(0)
    const fetchApi = async () => {
        const result = await bookService.findAll()
        setBook(result)
    }
    useEffect(() => {
        fetchApi()
    },[])
    const deleteBook = async (id) => {
        await bookService.deleteById(id)
        fetchApi()
    }


    return (
        <>
            <h1> Library</h1>
            <button className="btn btn-success btn-add"><Link style={{textDecoration : 'none' , color : 'white'}} to={'/create'} classNameName='nav-link'>Add new book !</Link></button>
            <table className="table table-striped">
                <thead>
                <tr>
                    <th scope="col">Title</th>
                    <th scope="col">Quantity</th>
                    <th scope="col">Actions</th>
                </tr>
                </thead>
                <tbody>
                {book.map((book) => (
                    <tr key={book.id}>
                        <td>{book.title}</td>
                        <td>{book.quantity}</td>
                        <td>
                            <button type="button" className="btn btn-info" ><Link style={{textDecoration : 'none' , color : 'white'}} to={`/update/${book.id}`}>Edit</Link> </button>
                            <button type="button" className="btn btn-danger" data-bs-toggle="modal"
                                    data-bs-target="#exampleModal" onClick={()=>deleteBook(book.id)} >
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}
                </tbody>
            </table>
        </>
    )

}