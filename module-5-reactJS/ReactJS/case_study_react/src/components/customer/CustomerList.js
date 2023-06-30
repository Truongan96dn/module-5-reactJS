import {Link} from "react-router-dom";
import React, {useEffect, useState} from "react";
import * as customerService from "../../component-service/CustomerService";
import {toast} from "react-toastify";
import ReactPaginate from "react-paginate";

export function CustomerList() {
    const [customers,setCustomer] =  useState([]);
    const [idDelete,setIdDelete] = useState();
    const [nameDelete,setNameDelete] =useState();

    const [pageCount, setPageCount] = useState(0);
    let limit = 5;
    const getComments = async () => {
        const res = await fetch(
            `http://localhost:8080/customers?_page=1&_limit=${limit}`
            // `https://jsonplaceholder.typicode.com/comments?_page=1&_limit=${limit}`
        );
        const data = await res.json();
        const total = res.headers.get("x-total-count");
        setPageCount(Math.ceil(total / limit));
        // console.log(Math.ceil(total/12));
        setCustomer(data);
    };
    useEffect(() => {
        fetchApi()
        getComments();
    }, [limit]);
    const fetchComments = async (currentPage) => {
        const res = await fetch(
            `http://localhost:8080/customers?_page=${currentPage}&_limit=${limit}`
            // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
        );
        const data = await res.json();
        return data;
    };
    const handlePageClick = async (data) => {

        let currentPage = data.selected + 1;

        const commentsFormServer = await fetchComments(currentPage);

        setCustomer(commentsFormServer);
        // scroll to the top
        //window.scrollTo(0, 0)
    };




    const fetchApi = async ()=>{
        const res = await customerService.findAllCustomer();
        setCustomer(res)
    }
    function handleDelete(id, nameService) {
        setIdDelete(id);
        setNameDelete(nameService);
    }
    const deleteCus = async (id) => {
         await customerService.deleteCustomer(id);
         fetchApi();
        toast.success(<h2>Delete Success</h2>)
    }

    useEffect(()=>{


    },[])
    return(
        <>
            <div className="text-right">
                <button className="button-35">
                    <Link to="/createCustomer" style={{textDecoration:"none"}}
                    >
                        Add New Customer
                    </Link>
                </button>
            </div>
            <div align="center">
                <h1> Customer List</h1>
                <table className="table table-striped">
                    <thead>
                    <tr>
                        <th scope="col">ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Birthday</th>
                        <th scope="col">Gender</th>
                        <th scope="col">Personal ID</th>
                        <th scope="col">Phone number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Type of customer</th>
                        <th scope="col">Address</th>
                        <th>Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {customers.map((customer) =>(
                        <tr key={customer.id}>
                            <td>{customer.id}</td>
                            <td>{customer.name}</td>
                            <td>{customer.birthday}</td>
                            <td>{customer.gender}</td>
                            <td>{customer.personalId}</td>
                            <td>{customer.phone}</td>
                            <td>{customer.email}</td>
                            <td>{customer.typeOfCustomer}</td>
                            <td>{customer.address}</td>
                            <td className="d-flex">
                                <button className=" button-45 mx-2" style={{textDecoration:"none",backgroundColor:"aliceblue"}}>
                                    <Link to={`/updateCustomer/${customer.id}`} style={{textDecoration:"none"}} >Edit</Link> </button>
                                <button
                                    type="button" className=" button-45"
                                    data-bs-toggle="modal" data-bs-target="#exampleModal" onClick={() => handleDelete(customer.id,customer.name)}
                                >
                                    Delete
                                </button>
                            </td>
                        </tr>
                    ) )}

                    </tbody>
                </table>
            </div>

            <ReactPaginate
                previousLabel={"previous"}
                nextLabel={"next"}
                breakLabel={"..."}
                pageCount={pageCount}
                marginPagesDisplayed={2}
                pageRangeDisplayed={3}
                onPageChange={handlePageClick}
                containerClassName={"pagination justify-content-center"}
                pageClassName={"page-item"}
                pageLinkClassName={"page-link"}
                previousClassName={"page-item"}
                previousLinkClassName={"page-link"}
                nextClassName={"page-item"}
                nextLinkClassName={"page-link"}
                breakClassName={"page-item"}
                breakLinkClassName={"page-link"}
                activeClassName={"active"}
            />
            <div
                className="modal fade"
                id="exampleModal"
                tabIndex={-1}
                aria-labelledby="exampleModalLabel"
                aria-hidden="true"
            >
                <div className="modal-dialog">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">
                                Delete
                            </h5>
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                                aria-label="Close"
                            />
                        </div>
                        <div className="modal-body">bạn có muốn xoá khách hàng  <span style={{color:"red"}}>{nameDelete}</span></div>
                        <div className="modal-footer">
                            <button
                                type="button"
                                className="btn btn-secondary"
                                data-bs-dismiss="modal"
                            >
                                Close
                            </button>
                            <button type="submit" className="btn btn-danger" onClick={()=>deleteCus(idDelete)}  data-bs-dismiss="modal">
                                Delete
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </>
    )

}